import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, FolderTree } from 'lucide-react'

export default function Session2() {
  return (
    <SessionLayout 
      sessionNumber={2} 
      title="Folder Structure Organization & Standards"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Why Folder Structure Matters in Civil 3D Projects</h3>
          <p>
            In the world of Civil 3D, a well-organized folder structure isn't just about tidiness—it's the backbone of 
            your entire workflow. A standardized folder structure provides predictability, reduces file search time, 
            facilitates collaboration, and is essential for Data Shortcuts to function properly.
          </p>

          <h4>The Cost of Poor Organization:</h4>
          <ul>
            <li><strong>Lost Productivity:</strong> Team members waste 30-60 minutes per day searching for files</li>
            <li><strong>Broken References:</strong> Xrefs and Data Shortcuts fail when files move unexpectedly</li>
            <li><strong>Version Confusion:</strong> Multiple versions of the same file lead to costly errors</li>
            <li><strong>Client Frustration:</strong> Submittals are delayed when files can't be located quickly</li>
            <li><strong>Knowledge Silos:</strong> Only one person knows where things are—a single point of failure</li>
          </ul>

          <h3>The Standard Civil 3D Folder Hierarchy</h3>
          <p>
            This folder structure has been refined over thousands of projects by leading civil engineering firms. 
            Each folder has a specific purpose in the Civil 3D workflow:
          </p>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm my-6">
            <pre>
{`ProjectName_ClientName/
├── _Shortcuts/                  [Data Shortcuts Working Folder]
├── 01_Admin/                    [Project documentation & coordination]
│   ├── Correspondence/
│   ├── Meetings/
│   └── Project_Info/
├── 02_Survey/                   [Raw survey data & field files]
│   ├── GPS/
│   ├── Total_Station/
│   └── Survey_Reports/
├── 03_Source/                   [Client-provided files & reference data]
│   ├── Client_CAD/
│   ├── GIS/
│   ├── PDFs/
│   └── Surveys/
├── 04_Design/                   [All Civil 3D design files - THE HEART]
│   ├── Base/                    [BASE-XREF.dwg lives here]
│   ├── Alignments/              [Alignment design files]
│   ├── Surfaces/                [Surface design files]
│   ├── Pipe_Networks/           [Storm, sanitary, water networks]
│   ├── Corridors/               [Corridor design files]
│   ├── Grading/                 [Grading objects & feature lines]
│   ├── Model/                   [MODEL.dwg - brings it all together]
│   └── Standards/               [Templates, styles, label styles]
├── 05_Sheets/                   [Final sheet layouts]
│   ├── Plan_Sheets/
│   ├── Profile_Sheets/
│   └── Detail_Sheets/
├── 06_Submittals/               [PDFs for client review]
│   ├── 30_Percent/
│   ├── 60_Percent/
│   ├── 90_Percent/
│   └── Final/
├── 07_Reference/                [Background info, standards, specs]
│   ├── Design_Standards/
│   ├── Local_Regulations/
│   └── Previous_Projects/
└── 08_Archive/                  [Old versions & superseded files]
    ├── Week_01/
    ├── Week_02/
    └── Superseded/`}
            </pre>
          </div>

          <h3>Detailed Folder Purposes and Best Practices</h3>

          <h4>_Shortcuts Folder: The Data Shortcuts Hub</h4>
          <p><strong>Purpose:</strong> This is where Civil 3D stores XML files that point to your design objects.</p>
          <ul>
            <li><strong>Critical Rule:</strong> NEVER manually place files here—Civil 3D manages this automatically</li>
            <li><strong>Setup:</strong> Set as Data Shortcuts working folder in EVERY drawing</li>
            <li><strong>Contents:</strong> .xml files for surfaces, alignments, pipe networks, corridors</li>
            <li><strong>Warning:</strong> If you move or rename this folder, all Data Shortcuts break</li>
          </ul>

          <h4>01_Admin: Project Command Center</h4>
          <p><strong>Purpose:</strong> Non-CAD project documentation and coordination materials.</p>
          <ul>
            <li>Store project setup information (coordinate system, standards used, team contacts)</li>
            <li>Meeting notes and decisions that affect design</li>
            <li>Correspondence with clients, reviewers, surveyors</li>
            <li>This folder travels with the project—future you will thank present you</li>
          </ul>

          <h4>02_Survey: Raw Survey Data Repository</h4>
          <p><strong>Purpose:</strong> Original, unmodified survey data as received.</p>
          <ul>
            <li><strong>Never modify files here:</strong> This is your archive of original data</li>
            <li>Store .csv point files, GPS files, total station data, survey reports</li>
            <li>Keep survey control point documentation here</li>
            <li>If you need to import survey data, COPY it from here to 04_Design/Surfaces</li>
          </ul>

          <h4>03_Source: Client-Provided Materials</h4>
          <p><strong>Purpose:</strong> All files received from others—clients, agencies, utilities.</p>
          <ul>
            <li>Keep original files untouched—reference only</li>
            <li>Subdivi into Client_CAD, GIS, PDFs, etc.</li>
            <li>If client files need cleanup, copy to 04_Design and work on the copy</li>
            <li>Document what you received and when (filename or readme.txt)</li>
          </ul>

          <h4>04_Design: The Civil 3D Workspace (Most Important!)</h4>
          <p><strong>Purpose:</strong> Where all active Civil 3D design work happens.</p>
          
          <h5>04_Design/Base/</h5>
          <ul>
            <li>Contains <strong>BASE-XREF.dwg</strong>—the foundational drawing</li>
            <li>BASE-XREF contains: property lines, ROW, existing features, title block frameworks</li>
            <li>This file is xref'd into all other design files and MODEL.dwg</li>
            <li>Keep it lightweight—no Civil 3D objects here, just linework</li>
          </ul>

          <h5>04_Design/Surfaces/</h5>
          <ul>
            <li>One surface per file: EG-Surface.dwg, FG-Surface.dwg, etc.</li>
            <li>Import survey points here, build surfaces, create Data Shortcuts</li>
            <li>Common files: EG-Surface.dwg, FG-Surface.dwg, Stripping-Surface.dwg</li>
          </ul>

          <h5>04_Design/Alignments/</h5>
          <ul>
            <li>Horizontal and vertical alignments for roads, trails, utilities</li>
            <li>Typical files: MainStreet-Alignment.dwg, Trail-Alignment.dwg</li>
            <li>Create Data Shortcuts after finalizing alignments</li>
          </ul>

          <h5>04_Design/Corridors/</h5>
          <ul>
            <li>Corridor models for roadway design</li>
            <li>References alignment and surface Data Shortcuts</li>
            <li>Typical files: MainStreet-Corridor.dwg</li>
          </ul>

          <h5>04_Design/Pipe_Networks/</h5>
          <ul>
            <li>Storm drainage, sanitary sewer, water distribution</li>
            <li>Typical files: Storm-Network.dwg, Sanitary-Network.dwg, Water-Network.dwg</li>
          </ul>

          <h5>04_Design/Model/</h5>
          <ul>
            <li>Contains <strong>MODEL.dwg</strong>—where Data Shortcuts come together</li>
            <li>Add annotations, labels, dimensions here</li>
            <li>Set up Named Views for each sheet area</li>
            <li>This is xref'd into all sheet files</li>
          </ul>

          <h5>04_Design/Standards/</h5>
          <ul>
            <li>Company or project-specific templates (.dwt files)</li>
            <li>Custom label styles, object styles</li>
            <li>Linetype files, hatch patterns</li>
          </ul>

          <h4>05_Sheets: Final Deliverables</h4>
          <p><strong>Purpose:</strong> Layout files for printing and PDF generation.</p>
          <ul>
            <li>Each sheet is its own .dwg file (or use Sheet Set Manager)</li>
            <li>Xref MODEL.dwg into each sheet layout</li>
            <li>Add title blocks, border, sheet-specific notes</li>
            <li>Typical files: C-01.dwg, C-02.dwg (or Sheets.dwg with multiple layouts)</li>
          </ul>

          <h4>06_Submittals: Client-Ready PDFs</h4>
          <p><strong>Purpose:</strong> Organized by review milestone—30%, 60%, 90%, Final.</p>
          <ul>
            <li>Each subfolder contains complete PDF set for that submittal</li>
            <li>Include transmittal letter or README file noting what's included</li>
            <li>Never overwrite previous submittals—you'll need them for reference</li>
          </ul>

          <h4>07_Reference: Background Information</h4>
          <p><strong>Purpose:</strong> Design standards, local regulations, example details.</p>
          <ul>
            <li>City/County design standards PDFs</li>
            <li>DOT roadway design manuals</li>
            <li>Standard details library</li>
            <li>Useful for team members who need to reference requirements</li>
          </ul>

          <h4>08_Archive: Version Control and Old Files</h4>
          <p><strong>Purpose:</strong> Keep superseded versions without cluttering active folders.</p>
          <ul>
            <li>Create weekly or milestone archives (Week_01, Week_02, etc.)</li>
            <li>Before major changes, copy current state to archive</li>
            <li>Allows rollback if something goes wrong</li>
            <li>Document what changed in a readme.txt file</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Folder Structure Mistakes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Working outside the structure:</strong> Files saved to desktop or Documents folder get lost</li>
              <li><strong>Too many subfolders:</strong> Over-organization is as bad as under-organization</li>
              <li><strong>Inconsistent naming:</strong> One project uses "Survey", another uses "Topo"—confusing</li>
              <li><strong>No archive strategy:</strong> Old files mixed with current files causes errors</li>
              <li><strong>Missing _Shortcuts folder:</strong> Data Shortcuts won't work properly</li>
            </ul>
          </div>

          <h3>File Naming Conventions</h3>
          <p>Consistent file naming is just as important as folder structure:</p>

          <h4>Design File Naming Pattern:</h4>
          <p className="font-mono bg-gray-100 p-3 rounded">
            [ObjectType]-[Description].dwg
          </p>
          <ul>
            <li>EG-Surface.dwg (Existing Ground Surface)</li>
            <li>FG-Surface.dwg (Finished Grade Surface)</li>
            <li>MainStreet-Alignment.dwg</li>
            <li>Storm-Network.dwg</li>
            <li>MainStreet-Corridor.dwg</li>
          </ul>

          <h4>Sheet File Naming Pattern:</h4>
          <p className="font-mono bg-gray-100 p-3 rounded">
            [SheetNumber]-[SheetTitle].dwg
          </p>
          <ul>
            <li>C-01-Cover_Sheet.dwg</li>
            <li>C-02-Overall_Site_Plan.dwg</li>
            <li>C-101-Plan_and_Profile_Sheet.dwg</li>
          </ul>

          <h4>Naming Best Practices:</h4>
          <ul>
            <li>Use hyphens or underscores, not spaces</li>
            <li>Use descriptive names: "MainStreet-Alignment.dwg" not "Alignment1.dwg"</li>
            <li>Be consistent across all projects</li>
            <li>Avoid special characters: &, %, #, @</li>
            <li>Keep names concise but meaningful</li>
          </ul>

          <h3>Setting Up a New Project: Step-by-Step</h3>
          <ol>
            <li>Create project root folder with naming convention: 
              <code>ProjectNumber_ClientName_ShortDescription</code></li>
            <li>Create all main folders (_Shortcuts through 08_Archive)</li>
            <li>Create subfolders under 04_Design (Base, Alignments, Surfaces, etc.)</li>
            <li>Create subfolders under 05_Sheets if using separate sheet files</li>
            <li>Create milestone folders under 06_Submittals</li>
            <li>Place project documentation text file in 01_Admin</li>
            <li>Open Civil 3D and set Data Shortcuts working folder to _Shortcuts</li>
            <li>Verify setup by creating a test surface and Data Shortcut</li>
          </ol>

          <h3>Team Collaboration Considerations</h3>
          <p>When multiple people work on the same project:</p>
          <ul>
            <li><strong>Central location:</strong> Use network drive or cloud sync (e.g., BIM 360, Dropbox, OneDrive)</li>
            <li><strong>Communicate file locks:</strong> Let team know when you're working in a critical file</li>
            <li><strong>Individual working folders:</strong> Each person can have a local work folder for experimentation</li>
            <li><strong>Regular commits to archive:</strong> End of each week, archive current state</li>
            <li><strong>Naming ownership:</strong> Consider prepending initials for work-in-progress files: JD_TestCorridor.dwg</li>
          </ul>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Reorganizing a Chaotic Project</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Project Name:</strong> Downtown Streetscape Reconstruction</div>
              <div><strong>Location:</strong> Springfield, Oregon</div>
              <div><strong>Scope:</strong> 1.2 miles of roadway reconstruction with utilities</div>
              <div><strong>Problem:</strong> Project started without folder structure—chaos after 6 weeks</div>
              <div><strong>Team:</strong> 3 designers working simultaneously</div>
            </div>
          </div>

          <h3>The Problem</h3>
          <p>
            Six weeks into the Downtown Streetscape project, the team was struggling. Files were scattered across 
            individual desktops, the network drive, and email attachments. The project manager received three different 
            "final" versions of the same surface from three different designers. Data Shortcuts were breaking because 
            files kept moving. The 30% review submittal was due in two weeks, and nobody was confident they had the 
            latest files.
          </p>

          <h4>Symptoms of the Chaos:</h4>
          <ul>
            <li>12 different files named some variation of "Surface.dwg" or "EG_Surface.dwg"</li>
            <li>Design files mixed with sheet files—impossible to tell which was which</li>
            <li>Survey data in five different locations</li>
            <li>Client-provided CAD files modified without keeping originals</li>
            <li>No one could find the latest corridor model</li>
            <li>Xrefs failing with "cannot find" errors daily</li>
          </ul>

          <h3>The Rescue Operation</h3>
          
          <h4>Day 1 Morning: Assessment and Planning (2 hours)</h4>
          <p>The CAD Manager called an emergency meeting:</p>
          <ul>
            <li>Identified all files related to the project (found 147 .dwg files!)</li>
            <li>Determined which files were current vs. obsolete</li>
            <li>Documented what each file contained</li>
            <li>Decided to pause design work for one day to reorganize properly</li>
          </ul>

          <h4>Day 1 Afternoon: Folder Structure Creation (3 hours)</h4>
          <p>Created the standard folder structure on the network drive:</p>
          <pre className="text-xs bg-gray-100 p-4 rounded">
{`2024-031_Springfield_Downtown_Streetscape/
├── _Shortcuts/
├── 01_Admin/
├── 02_Survey/
├── 03_Source/
│   └── Client_CAD/          [Moved original city utility files here]
├── 04_Design/
│   ├── Base/
│   ├── Alignments/
│   ├── Surfaces/
│   ├── Pipe_Networks/
│   ├── Corridors/
│   └── Model/
├── 05_Sheets/
├── 06_Submittals/
│   └── 30_Percent/          [Created for upcoming review]
├── 07_Reference/
│   └── City_Standards/      [Placed Springfield design standards here]
└── 08_Archive/
    └── Pre_Reorganization/  [Moved all old scattered files here]`}
          </pre>

          <h4>Day 2 Morning: File Consolidation and Renaming (4 hours)</h4>
          <p>The team worked together to consolidate files:</p>
          <ul>
            <li><strong>Surfaces:</strong> Identified the most current EG surface, renamed to EG-Surface.dwg, moved to 04_Design/Surfaces/</li>
            <li><strong>Alignments:</strong> Found 3 different alignments, determined latest, renamed to MainStreet-Alignment.dwg</li>
            <li><strong>Base file:</strong> Created clean BASE-XREF.dwg with property lines and ROW in 04_Design/Base/</li>
            <li><strong>Survey data:</strong> Moved all original survey files to 02_Survey/, kept only processed data in design folder</li>
            <li><strong>Everything else:</strong> Moved to 08_Archive/Pre_Reorganization/ with notes</li>
          </ul>

          <h4>Day 2 Afternoon: Data Shortcuts Reset (2 hours)</h4>
          <ul>
            <li>Set Data Shortcuts working folder to the new _Shortcuts folder</li>
            <li>Recreated all Data Shortcuts from the consolidated files</li>
            <li>Tested shortcuts in a new drawing to verify they worked</li>
            <li>All three designers verified they could access shortcuts</li>
          </ul>

          <h4>Day 3: Team Training and Documentation (3 hours)</h4>
          <ul>
            <li>Created "Project_File_Organization_Rules.txt" in 01_Admin/</li>
            <li>Held training session explaining the new structure</li>
            <li>Established file naming rules for new files</li>
            <li>Set up weekly archive protocol (every Friday afternoon)</li>
            <li>Created "Where Things Go" cheat sheet posted at each workstation</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              The Results: 3 Days to Transform the Project
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>File search time eliminated:</strong> Everyone knew exactly where to find files</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Xref errors dropped to zero:</strong> Paths were now consistent and reliable</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Version confusion resolved:</strong> One current version of each file</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>30% submittal delivered on time:</strong> Files were easy to compile</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Team morale improved:</strong> Designers spent time designing, not searching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Quality improved:</strong> Coordination errors decreased significantly</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-800">
              Time Investment: 14 hours over 3 days
            </p>
            <p className="text-lg font-bold text-green-800">
              Time Saved: Estimated 80+ hours over the remaining 6 weeks of the project
            </p>
          </div>

          <h3>Key Lessons Learned</h3>
          <ol>
            <li><strong>Start right or stop and fix:</strong> It's worth pausing to reorganize</li>
            <li><strong>Team buy-in is essential:</strong> Everyone must understand and follow the system</li>
            <li><strong>Document your decisions:</strong> Write down where things go and why</li>
            <li><strong>Archive old files, don't delete:</strong> You might need them for reference</li>
            <li><strong>The _Shortcuts folder is sacred:</strong> Once set, don't move it</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">Project Manager's Quote:</h3>
            <p className="italic">
              "I was skeptical about spending three days on file organization when we had a deadline looming. 
              But within a week, I realized it was the best decision we made on this project. The time we 'lost' 
              reorganizing was recovered within 10 days, and the rest of the project went so much smoother. 
              We're now using this folder structure as our firm standard."
            </p>
            <p className="text-right mt-2"><em>— Mike Rodriguez, PE, Project Manager</em></p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Folder Setup Checklist</h2>
          <p className="text-gray-600 mb-6">Use this checklist for every new Civil 3D project to ensure proper organization from day one.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Project Root Folder Creation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create project root folder with standard naming: [Year-ProjectNumber]_[ClientName]_[ProjectDescription]</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Example: 2024-031_Springfield_Downtown_Streetscape</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create in central location accessible by all team members</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Main Folders (Level 1)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>_Shortcuts/</strong> - Data Shortcuts working folder (create FIRST)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>01_Admin/</strong> - Project documentation and correspondence</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>02_Survey/</strong> - Original survey data (read-only archive)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>03_Source/</strong> - Client-provided files and reference materials</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>04_Design/</strong> - Active Civil 3D design workspace</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>05_Sheets/</strong> - Final layout and sheet files</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>06_Submittals/</strong> - Client deliverables (PDFs by milestone)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>07_Reference/</strong> - Design standards, regulations, specifications</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>08_Archive/</strong> - Old versions and superseded files</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">04_Design Subfolders (Critical!)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Base/</strong> - BASE-XREF.dwg location</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Surfaces/</strong> - EG, FG, and other surface files</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Alignments/</strong> - Horizontal and vertical alignment files</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Corridors/</strong> - Corridor design files</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Pipe_Networks/</strong> - Storm, sanitary, water networks</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Grading/</strong> - Grading objects and feature lines</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Model/</strong> - MODEL.dwg location (Data Shortcuts aggregation)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span><strong>Standards/</strong> - Templates, styles, custom linetypes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">06_Submittals Subfolders</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>30_Percent/ - Concept review submittal</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>60_Percent/ - Preliminary design review</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>90_Percent/ - Final review before construction docs</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Final/ - Construction document set</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>(Adjust milestone names based on project needs)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Initial Setup Tasks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "Project_Setup_Info.txt" in 01_Admin/ documenting coordinate system, standards, team contacts</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open Civil 3D and set Data Shortcuts working folder to _Shortcuts/</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Copy company template file to 04_Design/Standards/</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create Week_00 folder in 08_Archive/ and document empty structure</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Share folder location with all team members</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Ongoing Maintenance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Weekly archive: Copy current design files to 08_Archive/Week_[##]/ every Friday</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Move superseded files to 08_Archive/Superseded/ rather than deleting</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>After each submittal, save PDF set to appropriate 06_Submittals/ subfolder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Keep 01_Admin/ updated with meeting notes and design decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Folder Structure At-A-Glance</h2>
          <p className="text-gray-600 mb-6">Quick reference for folder purposes and file locations. Print and post at your workstation!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <FolderTree className="h-5 w-5 mr-2" />
                Critical Folders (Must Have)
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">_Shortcuts/</td>
                    <td>Data Shortcuts Hub</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">04_Design/Base/</td>
                    <td>BASE-XREF.dwg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">04_Design/Surfaces/</td>
                    <td>EG, FG surfaces</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">04_Design/Model/</td>
                    <td>MODEL.dwg</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">05_Sheets/</td>
                    <td>Final deliverables</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">File Naming Quick Guide</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Surfaces:</td>
                    <td className="font-mono">EG-Surface.dwg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Alignments:</td>
                    <td className="font-mono">Street-Alignment.dwg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Corridors:</td>
                    <td className="font-mono">Street-Corridor.dwg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Networks:</td>
                    <td className="font-mono">Storm-Network.dwg</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Sheets:</td>
                    <td className="font-mono">C-101-Plan.dwg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
              <h3 className="font-bold mb-3 text-primary-light">Where Does This Go?</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Survey .csv files</td>
                    <td className="font-bold">02_Survey/</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Client CAD files</td>
                    <td className="font-bold">03_Source/</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Working surfaces</td>
                    <td className="font-bold">04_Design/Surfaces/</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Review PDFs</td>
                    <td className="font-bold">06_Submittals/</td>
                  </tr>
                  <tr>
                    <td className="py-2">Old file versions</td>
                    <td className="font-bold">08_Archive/</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Never Do This!
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Manually edit files in _Shortcuts/</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Save files to Desktop or Documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Modify original survey files in 02_Survey/</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Delete old files—archive them!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Use spaces in file names</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Move _Shortcuts folder after setup</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">The Golden Rule of File Organization</h3>
            <p className="text-lg italic">
              "If you can't find a file in less than 15 seconds, your folder structure needs work."
            </p>
            <p className="text-sm mt-2">
              A well-organized project means every team member knows exactly where every file lives—no searching, no guessing.
            </p>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Bookmark your project folder in Windows Explorer for quick access</li>
              <li>• Set up Windows Search indexing for your project root folder</li>
              <li>• Create a README.txt in project root with folder structure diagram</li>
              <li>• Use consistent naming across ALL projects—muscle memory improves speed</li>
              <li>• Review folder structure during project kickoff meetings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "The Folder Structure That Changed Everything"</h2>
          <p className="text-gray-600 mb-6">An engaging 6-minute video demonstrating the importance and implementation of proper folder structure.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">COLD OPEN (0:00-0:20)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Desktop with hundreds of files scattered everywhere, frustrated designer searching]</p>
              <p>
                "It's 4:45 PM on a Friday. Your project manager just asked for the latest surface file. You know you saved it... 
                somewhere. Was it on your desktop? In that email? On the network drive? In that folder labeled 'New Folder (3)'?"
              </p>
              <p>[Sound effect: Clock ticking, zoom in on stressed face]</p>
              <p>"We've all been there. And today, I'm going to show you how to never be there again."</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:20-0:50)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Clean title card, instructor appears]</p>
              <p>
                "Welcome to Session 2 of Civil 3D Workflow Mastery. I'm [Your Name], and today we're covering something that 
                might sound boring but is actually one of the most powerful productivity tools you have: folder structure.
              </p>
              <p>
                Now, I can see some of you already reaching for the skip button. 'A whole video about folders? Really?' 
                Yes, really. Because I'm going to show you a case study where proper folder structure saved a project that was 
                six weeks into chaos—and how it saved the team over 80 hours of work. Stay with me."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE PROBLEM (0:50-1:40)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Animations showing file chaos—files scattering, xrefs breaking, multiple versions multiplying]</p>
              <p>
                "Let me paint a picture. You start a project. Day one, you're excited, you create a few files—Surface.dwg, Alignment.dwg. 
                Simple enough. Week two, your colleague creates their own versions: Surface_v2.dwg, Surface_Final.dwg. Week three, 
                someone emails you Survey_Updated.dwg. You save it to your desktop 'just for now.'
              </p>
              <p>
                Fast forward to week six. You have twelve files with 'surface' in the name. Your xrefs are breaking daily. 
                Three people are working on three different versions of the same alignment. Your project manager asks for a status 
                update, and you spend two hours just FINDING the files before you can even open them.
              </p>
              <p>
                Sound familiar? This isn't a made-up scenario—this was a real project in Springfield, Oregon. And we fixed it in three days."
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE SOLUTION (1:40-4:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Animation building the folder structure from the ground up, each folder appearing with its purpose]</p>
              <p>
                "Here's the folder structure that we use on every single Civil 3D project. And I mean EVERY project—subdivision, 
                highway, site development, doesn't matter. The structure is the same.
              </p>
              <p>[Show folder tree appearing level by level]</p>
              <p>
                "At the root, we have nine main folders. Let me walk you through the critical ones:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>
                  <strong>_Shortcuts</strong> [highlight folder]: This is where Civil 3D stores Data Shortcuts. You set this once 
                  and never touch it again. It's like the engine room—critical, but you don't need to open the door.
                </li>
                <li>
                  <strong>01_Admin</strong> [highlight]: Project documentation. When someone asks 'what coordinate system are we using?' 
                  the answer is in a text file here. No more asking around.
                </li>
                <li>
                  <strong>02_Survey</strong> [highlight]: Original survey data—untouched, sacred, archived. If you need survey data, 
                  COPY it from here, never work directly in this folder.
                </li>
                <li>
                  <strong>04_Design</strong> [highlight, expand subfolders]: This is where the magic happens. Inside, we have subfolders—
                  Base, Surfaces, Alignments, Corridors, Model. Each type of Civil 3D object gets its own home.
                </li>
                <li>
                  <strong>05_Sheets</strong> [highlight]: Final layouts only. These files xref MODEL.dwg and add title blocks.
                </li>
                <li>
                  <strong>06_Submittals</strong> [highlight]: Organized by milestone—30%, 60%, 90%, Final. Your PDFs live here.
                </li>
                <li>
                  <strong>08_Archive</strong> [highlight]: Old versions. Never delete—archive. You'll thank me when the client asks 
                  to see 'what the alignment looked like three weeks ago.'
                </li>
              </ul>
              <p className="mt-2">
                "That's it. Nine folders, and specific subfolders under 04_Design. Every project. Every time."
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE TRANSFORMATION (4:00-5:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Before/after split screen—chaos vs organization]</p>
              <p>
                "Let's go back to Springfield. When we reorganized their project, here's what happened:
              </p>
              <p>[Show metrics appearing one by one]</p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>File search time went from 30 minutes per day to near-zero</li>
                <li>Xref errors dropped from multiple daily to zero</li>
                <li>Version confusion eliminated—one current file for each design element</li>
                <li>They delivered their 30% submittal on time after being a week behind</li>
                <li>Estimated time saved: 80+ hours over the remaining project duration</li>
              </ul>
              <p className="mt-2">
                "The project manager's quote was, and I'm reading this directly: 'I was skeptical about spending three days on file 
                organization when we had a deadline looming. But within a week, I realized it was the best decision we made on this project.'
              </p>
              <p>
                "Three days of work saved 80+ hours. That's a 2,600% return on investment."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">YOUR ACTION PLAN (5:00-5:45)</h3>
              <p>
                "So here's what I want you to do. Before you start your next project—or even if you're in the middle of one—
                set up this folder structure. I've included a downloadable checklist with this session. Print it out. Check off 
                each folder as you create it.
              </p>
              <p>
                "If you're mid-project and things are chaotic, have the courage to stop and reorganize. It feels scary to pause 
                design work. But I promise you, three days of reorganization beats six weeks of chaos.
              </p>
              <p>
                "And here's the secret: once you do this for one project, it gets easier. By your third project, you'll create 
                this structure in ten minutes, and it'll be second nature. Your team will know exactly where everything goes. 
                New hires will get up to speed in days instead of weeks.
              </p>
              <p>
                "This isn't just about folders. It's about building a system that supports your best work."
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (5:45-6:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Next session preview]</p>
              <p>
                "In Session 3, we're diving into template setup and creating your BASE-XREF.dwg—the foundational drawing that 
                everything else builds on. You're going to learn how to set up your templates once and never worry about styles 
                and settings again. See you there!"
              </p>
              <p className="italic text-gray-700">[End card: Course website, downloadable checklist link]</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-primary-light mb-2">Production Notes:</h3>
            <ul className="text-sm space-y-1">
              <li>• Total duration: ~6 minutes</li>
              <li>• Use screen recording to show actual folder creation in Windows Explorer</li>
              <li>• Include before/after comparisons from real projects (anonymize client names)</li>
              <li>• Add b-roll of organized vs disorganized physical workspace for visual metaphor</li>
              <li>• Background music: Upbeat but not distracting, fade during key points</li>
              <li>• Include downloadable PDF checklist linked in video description</li>
            </ul>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
