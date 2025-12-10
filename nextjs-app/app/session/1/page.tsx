import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info } from 'lucide-react'

export default function Session1() {
  return (
    <SessionLayout 
      sessionNumber={1} 
      title="Introduction to Civil 3D Workflow & Project Setup"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Overview of Civil 3D Workflow Mastery</h3>
          <p>
            Civil 3D is far more than just a drawing tool—it's a comprehensive design platform that, when used with a standardized workflow, 
            can dramatically improve project efficiency, reduce errors, and enhance team collaboration. The difference between a productive 
            Civil 3D environment and a chaotic one often comes down to following a proven, repeatable process.
          </p>

          <h4>Why Standardized Workflows Matter:</h4>
          <ul>
            <li><strong>Consistency Across Projects:</strong> Team members can easily pick up where others left off</li>
            <li><strong>Reduced Errors:</strong> Following established patterns minimizes mistakes</li>
            <li><strong>Faster Onboarding:</strong> New team members learn one system that applies to all projects</li>
            <li><strong>Improved Quality Control:</strong> Standard workflows make it easier to review and audit work</li>
            <li><strong>Client Confidence:</strong> Consistent deliverables build trust and repeat business</li>
          </ul>

          <h3>Understanding the Civil 3D Workflow Philosophy</h3>
          <p>The core philosophy behind effective Civil 3D workflow is <strong>separation of concerns</strong>:</p>
          
          <ol>
            <li><strong>Design Files</strong> - Where your Civil 3D objects (surfaces, alignments, corridors) live</li>
            <li><strong>Data Shortcuts</strong> - How you share those objects between drawings</li>
            <li><strong>Model File</strong> - Where you bring everything together and add annotations</li>
            <li><strong>Sheet Files</strong> - Where you create final deliverable layouts</li>
          </ol>

          <p>
            This separation ensures that changes made to design elements automatically propagate to all sheets, 
            eliminating the tedious task of manual updates.
          </p>

          <h3>Project Setup Fundamentals</h3>
          
          <h4>Step 1: Understand Your Project Scope</h4>
          <p>Before opening Civil 3D, gather critical information:</p>
          <ul>
            <li>Project location and coordinate system</li>
            <li>Survey data format and source</li>
            <li>Design criteria and standards to follow</li>
            <li>Deliverable requirements (sheet sizes, submission formats)</li>
            <li>Team structure and file sharing method</li>
          </ul>

          <h4>Step 2: Establish Your Coordinate System</h4>
          <p>Nothing derails a project faster than coordinate system problems:</p>
          <ul>
            <li>Verify the State Plane Zone or UTM Zone for your project location</li>
            <li>Confirm vertical datum (NAVD88, NGVD29, local assumed)</li>
            <li>Set drawing units correctly (US Survey Feet vs International Feet matters!)</li>
            <li>Document these settings in your project documentation</li>
          </ul>

          <h4>Step 3: Create Your Project Folder Structure</h4>
          <p>Follow a consistent folder hierarchy (detailed in Session 2):</p>
          <ul>
            <li>Start with the project root folder using clear naming: <code>ProjectNumber_ClientName_ShortDescription</code></li>
            <li>Example: <code>2024-015_ABC_Development_Westside_Subdivision</code></li>
            <li>Create all subfolders before starting any design work</li>
            <li>Set up the _Shortcuts folder as a Data Shortcuts working folder</li>
          </ul>

          <h4>Step 4: Launch from Template</h4>
          <p>Always start new drawings from company templates:</p>
          <ul>
            <li>Use <code>File &gt; New</code> (not <code>File &gt; New &gt; Drawing</code>)</li>
            <li>Select your firm's standard Civil 3D template (.dwt)</li>
            <li>Verify units, coordinate system, and styles loaded correctly</li>
            <li>Save immediately with a proper name to your project structure</li>
          </ul>

          <h4>Step 5: Configure Drawing Settings</h4>
          <p>Before importing any data:</p>
          <ul>
            <li>Set <code>Drawing Settings &gt; Units and Zone</code> correctly</li>
            <li>Configure <code>Drawing Settings &gt; Object Layers</code> to match standards</li>
            <li>Review <code>Drawing Settings &gt; Abbreviations</code> for labeling</li>
            <li>Set ambient settings for your specific project requirements</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Project Setup Mistakes to Avoid
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Starting without templates:</strong> Leads to inconsistent styles and hours of cleanup</li>
              <li><strong>Incorrect coordinate systems:</strong> Can cause survey data to import miles away</li>
              <li><strong>Skipping folder structure:</strong> Results in lost files and confusion</li>
              <li><strong>Not setting up Data Shortcuts properly:</strong> Breaks the entire workflow</li>
              <li><strong>Working in the wrong units:</strong> Causes scaling nightmares</li>
            </ul>
          </div>

          <h3>Best Practices for Project Kickoff</h3>
          <ol>
            <li><strong>Hold a Project Setup Meeting:</strong> Even 15 minutes with the project team prevents hours of rework</li>
            <li><strong>Document Your Decisions:</strong> Create a simple text file in <code>01_Admin</code> folder noting coordinate system, standards used, and any special project requirements</li>
            <li><strong>Set Up Version Control Early:</strong> Decide on file naming for revisions before you need it</li>
            <li><strong>Test Your Workflow:</strong> Create a simple test surface and alignment to verify your setup works</li>
            <li><strong>Communicate Standards:</strong> Ensure all team members know where files go and how they're named</li>
          </ol>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Setting Up a Residential Subdivision Project</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Project Name:</strong> Maple Ridge Estates</div>
              <div><strong>Location:</strong> Davidson County, Tennessee</div>
              <div><strong>Scope:</strong> 45-lot residential subdivision on 32 acres</div>
              <div><strong>Design Team:</strong> 2 designers, 1 CAD technician</div>
              <div><strong>Timeline:</strong> 12 weeks from concept to final construction documents</div>
            </div>
          </div>

          <h3>The Challenge</h3>
          <p>
            Maple Ridge Engineering was hired to design a new residential subdivision. The firm had recently transitioned to Civil 3D 
            but was still using AutoCAD-style workflows—everyone worked in a single master file, which led to frequent crashes, 
            conflicting edits, and difficulty tracking changes. The project manager wanted this project to be the first using a 
            proper Civil 3D workflow.
          </p>

          <h3>The Setup Process</h3>
          
          <h4>Week 1, Day 1: Project Kickoff Meeting</h4>
          <p>The team held a 30-minute meeting to establish:</p>
          <ul>
            <li>Coordinate System: Tennessee State Plane NAD83(2011), US Survey Feet</li>
            <li>Vertical Datum: NAVD88</li>
            <li>Survey Data Source: GPS survey delivered as .csv point file</li>
            <li>Local Standards: City of Davidson requirements for subdivision design</li>
            <li>Deliverables: 30% review set (week 4), 60% review set (week 8), final construction documents (week 12)</li>
          </ul>

          <h4>Day 1 Afternoon: Folder Structure Creation</h4>
          <p>The CAD Manager created the folder structure:</p>
          <pre className="text-xs">
{`2024-023_MapleRidge_Subdivision/
  _Shortcuts/
  01_Admin/
  02_Survey/
  03_Source/
  04_Design/
    Base/
    Alignments/
    Surfaces/
    Pipe Networks/
    Model/
    Standards/
  05_Sheets/
  06_Submittals/
  07_Reference/
  08_Archive/`}
          </pre>
          <p>A text file (<code>Project_Setup_Info.txt</code>) was created in <code>01_Admin</code> documenting all setup decisions.</p>

          <h4>Day 2: Template Configuration and Data Shortcuts Setup</h4>
          <p>The firm's standard template was verified and saved to <code>04_Design/Standards/</code></p>
          <ul>
            <li>Opened Civil 3D</li>
            <li>Created new drawing from template</li>
            <li>Verified Drawing Settings matched project coordinate system</li>
            <li>Saved as <code>BASE-XREF.dwg</code> in <code>04_Design/Base/</code></li>
            <li>Configured Data Shortcuts: Set working folder to project's <code>_Shortcuts</code> folder</li>
          </ul>

          <h4>Day 3: Survey Data Import</h4>
          <ul>
            <li>Imported survey points to <code>EG-Surface.dwg</code> in <code>04_Design/Surfaces/</code></li>
            <li>Created existing ground surface</li>
            <li>Created Data Shortcut for the surface</li>
            <li>Verified surface displayed correctly in multiple test drawings</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              The Results
            </h3>
            <p className="mb-4">By investing 3 days in proper project setup:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Zero coordinate system issues</strong> throughout the entire project</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>File conflicts eliminated:</strong> Team members worked in separate files</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Automatic updates:</strong> When the survey was revised in Week 3, all sheets updated automatically</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Smooth reviews:</strong> Submittal packages were generated in hours, not days</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Client satisfaction:</strong> The city reviewer commented on the consistency and quality of the plan set</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-800">
              Time Saved: The project manager estimated that proper setup saved 40+ hours over the project lifecycle.
            </p>
          </div>

          <h3>Key Takeaways</h3>
          <ol>
            <li>A half-day of setup saves weeks of rework</li>
            <li>Documentation prevents confusion</li>
            <li>Data Shortcuts are the foundation of efficient Civil 3D workflow</li>
            <li>Team buy-in is essential—hold that kickoff meeting!</li>
          </ol>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Workflow Overview Checklist</h2>
          <p className="text-gray-600 mb-6">Print this checklist and use it for every new Civil 3D project setup.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Pre-Project Planning</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Gather project location and coordinate system information</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Identify applicable design standards and local requirements</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Determine deliverable format and submission requirements</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Establish team roles and file sharing method</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Review client's CAD standards (if provided)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Project Folder Setup</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create project root folder with standardized naming</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create all required subfolders (_Shortcuts, 01_Admin through 08_Archive)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create sub-subfolders under 04_Design (Base, Alignments, Surfaces, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Document project setup decisions in text file in 01_Admin</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set up Data Shortcuts working folder pointing to _Shortcuts</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Drawing Settings Configuration</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Launch Civil 3D from company standard template</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify Drawing Units (US Survey Feet vs International Feet)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set coordinate system: Drawing Settings &gt; Units and Zone</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify Object Layers settings match company standards</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure Abbreviations for label styles</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set ambient settings (temperature, etc. if needed)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save as BASE-XREF.dwg in appropriate location</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Data Shortcuts Setup</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open Toolspace &gt; Prospector</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click Data Shortcuts &gt; Set Working Folder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Browse to project's _Shortcuts folder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify working folder is set correctly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test by creating a simple surface and creating a shortcut</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Quality Checks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify all drawings open without errors</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test Data Shortcuts functionality</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Confirm coordinate system displays correctly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Review with team lead before proceeding to design</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create Week 0 archive of empty project structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Civil 3D Interface Shortcuts and Navigation</h2>
          <p className="text-gray-600 mb-6">Essential keyboard shortcuts and command locations for efficient Civil 3D navigation.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-primary-light">Essential Keyboard Shortcuts</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-1 font-mono text-accent">Ctrl + 1</td><td>Toolspace toggle</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Ctrl + 3</td><td>Palettes toggle</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Ctrl + 4</td><td>Sheet Set Manager</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Ctrl + S</td><td>Save (use frequently!)</td></tr>
                  <tr><td className="py-1 font-mono text-accent">F1</td><td>Context-sensitive Help</td></tr>
                  <tr><td className="py-1 font-mono text-accent">F2</td><td>Text window toggle</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Esc</td><td>Cancel command</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Spacebar</td><td>Repeat last command</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-primary-light">View Navigation</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-1 font-mono text-accent">Z + E + Enter</td><td>Zoom Extents</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Z + P + Enter</td><td>Zoom Previous</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Mouse scroll</td><td>Zoom in/out</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Hold mouse wheel</td><td>Pan</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Double-click wheel</td><td>Zoom extents</td></tr>
                  <tr><td className="py-1 font-mono text-accent">Shift + wheel</td><td>Orbit (3D)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-primary-light">Layer Management</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-1 font-mono text-accent">LA</td><td>Layer Properties</td></tr>
                  <tr><td className="py-1 font-mono text-accent">LAYSTATE</td><td>Layer States Manager</td></tr>
                  <tr><td className="py-1 font-mono text-accent">LAYISO</td><td>Layer Isolate</td></tr>
                  <tr><td className="py-1 font-mono text-accent">LAYUNISO</td><td>Layer Unisolate</td></tr>
                  <tr><td className="py-1 font-mono text-accent">LAYFRZ</td><td>Layer Freeze</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-primary-light">Civil 3D Quick Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-1 font-mono text-accent">CREATESURFACE</td><td>Create Surface</td></tr>
                  <tr><td className="py-1 font-mono text-accent">EDITSURFACE</td><td>Edit Surface</td></tr>
                  <tr><td className="py-1 font-mono text-accent">CREATEALIGNMENT</td><td>Create Alignment</td></tr>
                  <tr><td className="py-1 font-mono text-accent">SETTINGS</td><td>Drawing Settings</td></tr>
                  <tr><td className="py-1 font-mono text-accent">PURGE</td><td>Purge unused</td></tr>
                  <tr><td className="py-1 font-mono text-accent">AUDIT</td><td>Fix errors</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Keep Toolspace open on a second monitor if available</li>
              <li>• Use F2 frequently to review command feedback</li>
              <li>• Customize Quick Access Toolbar with frequently used commands</li>
              <li>• Right-click menus are context-sensitive and powerful</li>
              <li>• Type command shortcuts rather than hunting through ribbons (faster once memorized)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Welcome to Civil 3D Workflow Mastery"</h2>
          <p className="text-gray-600 mb-6">A 5-minute engaging video script introducing the course. Duration: Approximately 5 minutes.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Title card with course name and instructor name]</p>
              <p>
                "Welcome to Civil 3D Workflow Mastery! I'm [Your Name], and over the next 12 sessions, I'm going to show you 
                how to transform the way you work in Civil 3D.
              </p>
              <p>
                Now, I know what you might be thinking—'I already know Civil 3D. I can create surfaces, alignments, corridors… 
                why do I need a workflow course?' Great question! And here's the honest answer: knowing the tools is only half the battle."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">HOOK (0:30-1:15)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Split screen showing chaotic project folder vs organized project folder]</p>
              <p>
                "Picture this: You're three weeks into a project. The client calls with changes to the survey data. You update your surface… 
                but now you have to manually update 15 different sheets. You spend the next four hours making sure every plan view, 
                every profile, every cross-section reflects the change. Sound familiar?
              </p>
              <p>
                Now imagine this instead: You update your surface, and every single sheet updates automatically. You spend five minutes 
                doing a quick review, and you're done. That's the power of a proper Civil 3D workflow.
              </p>
              <p>
                This isn't theory—this is how the most efficient civil engineering firms operate. And by the end of this course, 
                it's how you'll operate too."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">MAIN CONTENT (1:15-4:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Graphic showing the four pillars]</p>
              <p>
                "So what makes a Civil 3D workflow 'proper'? It comes down to four core principles:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  First: <strong>Separation of concerns.</strong> Your design files are separate from your sheet files. 
                  Why? Because designs change. And when they do, you want those changes to flow automatically to your deliverables.
                </li>
                <li>
                  Second: <strong>Data Shortcuts.</strong> This is Civil 3D's superpower that many people underutilize. 
                  Data Shortcuts let you share surfaces, alignments, corridors—all your key design elements—across multiple 
                  drawings without duplication.
                </li>
                <li>
                  Third: <strong>The Model approach.</strong> You bring all your Data Shortcuts into one coordinated model file, 
                  where you add annotations and set up your views. This becomes your single source of truth.
                </li>
                <li>
                  And fourth: <strong>Standardization.</strong> Using consistent folder structures, naming conventions, and templates. 
                  This is what lets multiple team members work on the same project without chaos.
                </li>
              </ul>
              <p className="mt-4">
                "Over the next 12 sessions, we're going to build this workflow step by step. Each session includes real case studies, 
                quick reference guides, and cheat sheets you can use on actual projects."
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">CALL TO ACTION (4:00-4:45)</h3>
              <p>
                "In this first session, we're covering project setup—the foundation everything else builds on. We'll walk through gathering 
                the right information before you even open Civil 3D, setting up your project folder structure, configuring your drawing settings 
                and coordinate systems, and establishing Data Shortcuts from day one.
              </p>
              <p>
                I'll also share a complete case study of setting up a 45-lot residential subdivision, showing you exactly how these principles 
                work on a real project. You'll find downloadable quick reference guides and cheat sheets with this session. Print them out, 
                keep them at your desk—use them as you work through your next project.
              </p>
              <p>
                Alright, let's dive in. By the end of this session, you'll have a repeatable project setup process that you can use on 
                every single Civil 3D project. Let's get started!"
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (4:45-5:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Next session preview and course logo]</p>
              <p>
                "Coming up in Session 2, we'll do a deep dive into folder structure organization and standards. You'll learn the exact 
                folder hierarchy that top engineering firms use, and why each folder matters. See you there!"
              </p>
              <p className="italic text-gray-700">[End card: Course website and contact information]</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
