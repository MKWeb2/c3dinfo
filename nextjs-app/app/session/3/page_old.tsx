import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, FileText } from 'lucide-react'

export default function Session3() {
  return (
    <SessionLayout 
      sessionNumber={3} 
      title="Template Setup & Base Drawing Creation"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>The Power of Templates in Civil 3D</h3>
          <p>
            Templates (.dwt files) are the foundation of consistency in Civil 3D. A properly configured template contains 
            all the styles, settings, layers, and standards your project needs—configured once and reused forever. 
            Starting from a template ensures every project begins with the same professional setup.
          </p>

          <h4>What Templates Provide:</h4>
          <ul>
            <li><strong>Object Styles:</strong> Surface styles, alignment styles, profile styles, corridor styles</li>
            <li><strong>Label Styles:</strong> Consistent labeling across all Civil 3D objects</li>
            <li><strong>Drawing Settings:</strong> Units, coordinate system defaults, precision</li>
            <li><strong>Layer Standards:</strong> Pre-configured layer structure matching your standards</li>
            <li><strong>Dimension Styles:</strong> Consistent dimensioning appearance</li>
            <li><strong>Text Styles:</strong> Fonts, heights, and formatting</li>
            <li><strong>Blocks and Title Blocks:</strong> Standard symbols and borders</li>
          </ul>

          <h3>Understanding BASE-XREF.dwg: The Foundation Drawing</h3>
          <p>
            In the Civil 3D workflow, <strong>BASE-XREF.dwg</strong> is your foundational drawing—the canvas upon which 
            everything else is built. It contains non-Civil 3D elements that are common to all views: property boundaries, 
            right-of-way lines, building footprints, and other reference linework.
          </p>

          <h4>What Goes IN BASE-XREF.dwg:</h4>
          <ul>
            <li>Property boundaries and lot lines</li>
            <li>Right-of-way (ROW) and easement lines</li>
            <li>Existing building footprints and structures</li>
            <li>Reference linework (centerlines, construction limits)</li>
            <li>Coordinate system information block</li>
            <li>North arrow and benchmark notations</li>
            <li>Project boundary polygon</li>
          </ul>

          <h4>What Does NOT Go in BASE-XREF.dwg:</h4>
          <ul>
            <li><strong>NO Civil 3D Objects:</strong> No surfaces, alignments, profiles, corridors</li>
            <li><strong>NO Annotations:</strong> Labels, dimensions, and callouts stay out</li>
            <li><strong>NO Design Elements:</strong> Proposed features belong in design files</li>
            <li><strong>NO Heavy Data:</strong> Keep it lightweight for performance</li>
          </ul>

          <h3>Step-by-Step: Creating Your Template from Scratch</h3>

          <h4>Step 1: Start with Autodesk's Civil 3D Template</h4>
          <p>Launch Civil 3D and create a new drawing:</p>
          <ol>
            <li>Go to <code>File &gt; New</code></li>
            <li>Browse to: <code>C:\Program Files\Autodesk\Civil 3D 2024\Template\</code></li>
            <li>Select <code>_AutoCAD Civil 3D (Imperial) NCS.dwt</code> or <code>(Metric) NCS.dwt</code></li>
            <li>This provides a clean starting point with basic Civil 3D styles</li>
          </ol>

          <h4>Step 2: Configure Drawing Settings</h4>
          <p>Set up the foundational settings that every drawing will inherit:</p>
          <ol>
            <li><strong>Units and Zone:</strong>
              <ul>
                <li>Type <code>SETTINGS</code> or go to <code>Settings tab &gt; Drawing Settings</code></li>
                <li>Click <code>Units and Zone</code> tab</li>
                <li>Set <strong>Drawing Units:</strong> US Survey Feet or International Feet (critical distinction!)</li>
                <li>Set <strong>Coordinate System:</strong> Select appropriate State Plane or UTM zone for your region</li>
                <li>Set <strong>Precision:</strong> Typically 0.01 for display</li>
              </ul>
            </li>
            <li><strong>Object Layers:</strong>
              <ul>
                <li>Click <code>Object Layers</code> tab</li>
                <li>Review default layer assignments for surfaces, alignments, etc.</li>
                <li>Modify to match your company layering standards</li>
              </ul>
            </li>
            <li><strong>Abbreviations:</strong>
              <ul>
                <li>Click <code>Abbreviations</code> tab</li>
                <li>Customize abbreviations for alignment labels (STA for Station, etc.)</li>
              </ul>
            </li>
          </ol>

          <h4>Step 3: Set Up Layer Standards</h4>
          <p>Type <code>LA</code> (Layer command) and configure your layer structure:</p>
          <ul>
            <li><strong>Base Layers:</strong>
              <ul>
                <li><code>C-PROP</code> - Property lines (Red, continuous)</li>
                <li><code>C-ROW</code> - Right-of-way (Magenta, PHANTOM2)</li>
                <li><code>C-BLDG-EXST</code> - Existing buildings (White, continuous)</li>
                <li><code>C-NOGO</code> - No-go areas/easements (Yellow, HIDDEN2)</li>
                <li><code>C-ANNO-NOTE</code> - General notes (Green, continuous)</li>
                <li><code>C-ANNO-TTLB</code> - Title block elements (Cyan, continuous)</li>
              </ul>
            </li>
            <li><strong>Civil 3D Layers:</strong> These are created automatically but verify naming:
              <ul>
                <li><code>C-TINN</code> - Surface triangulation (non-plot)</li>
                <li><code>C-TINN-MAJR/MINR</code> - Major/minor contours</li>
                <li><code>C-ROAD-CNTR</code> - Alignment centerlines</li>
              </ul>
            </li>
          </ul>

          <h4>Step 4: Configure Text and Dimension Styles</h4>
          <p><strong>Text Styles:</strong></p>
          <ul>
            <li>Type <code>ST</code> (Style command)</li>
            <li>Create: <code>Standard</code> - Arial, 0.1" height, for general notes</li>
            <li>Create: <code>Title</code> - Arial Bold, 0.25" height, for sheet titles</li>
            <li>Create: <code>Label</code> - Arial, 0.08" height, for dimension text</li>
          </ul>

          <p><strong>Dimension Styles:</strong></p>
          <ul>
            <li>Type <code>D</code> or <code>DIMSTYLE</code></li>
            <li>Modify <code>Standard</code> dimension style:
              <ul>
                <li>Set arrow size: 0.09"</li>
                <li>Text height: 0.08"</li>
                <li>Precision: 0.01</li>
                <li>Text placement: Above dimension line</li>
              </ul>
            </li>
          </ul>

          <h4>Step 5: Configure Civil 3D Object Styles</h4>
          <p>This is where the power of templates really shines:</p>
          
          <p><strong>Surface Styles:</strong></p>
          <ol>
            <li>Open <code>Toolspace &gt; Settings &gt; Surface &gt; Surface Styles</code></li>
            <li>Create styles for different representations:
              <ul>
                <li><code>Contours 1ft and 5ft (Background)</code> - Light gray, for reference</li>
                <li><code>Contours 1ft and 5ft (Design)</code> - Dark, for final plans</li>
                <li><code>Border Only</code> - Just surface boundary</li>
                <li><code>Triangulation</code> - For QC checking</li>
              </ul>
            </li>
          </ol>

          <p><strong>Alignment Styles:</strong></p>
          <ol>
            <li>Open <code>Settings &gt; Alignment &gt; Alignment Styles</code></li>
            <li>Create: <code>Proposed Centerline</code> - Solid red line, 0.05" width</li>
            <li>Create: <code>Existing Centerline</code> - Dashed yellow line</li>
          </ol>

          <p><strong>Label Styles:</strong></p>
          <ol>
            <li>Configure surface contour label styles (major/minor contours)</li>
            <li>Configure alignment station labels (tick marks, text size)</li>
            <li>Profile label styles for elevations</li>
            <li>These are detailed and can be imported from firm standards</li>
          </ol>

          <h4>Step 6: Add Standard Blocks</h4>
          <ul>
            <li>Insert commonly used blocks: north arrow, benchmarks, legend symbols</li>
            <li>Create a title block border (or import from existing standard)</li>
            <li>Store blocks on layer 0 so they inherit layer properties when inserted</li>
          </ul>

          <h4>Step 7: Save as Template</h4>
          <ol>
            <li>Go to <code>File &gt; Save As</code></li>
            <li>Change "Files of type" to <strong>AutoCAD Drawing Template (*.dwt)</strong></li>
            <li>Name it: <code>YourFirm_Civil3D_Imperial_2024.dwt</code></li>
            <li>Save to: <code>04_Design/Standards/</code> folder in a template project</li>
            <li>Also save to: <code>C:\Users\[Username]\AppData\Roaming\Autodesk\C3D 2024\enu\Template\</code> 
              for easy access from New Drawing dialog</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h4 className="text-lg font-bold text-primary mb-2 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Template Maintenance Best Practice
            </h4>
            <p>
              Create dated versions of your template (e.g., <code>Firm_Template_2024-01.dwt</code>, 
              <code>Firm_Template_2024-07.dwt</code>) when making significant updates. This allows existing 
              projects to continue using their original template while new projects benefit from improvements.
            </p>
          </div>

          <h3>Creating BASE-XREF.dwg Step-by-Step</h3>

          <h4>Step 1: Start from Template</h4>
          <ol>
            <li>Launch Civil 3D</li>
            <li>Go to <code>File &gt; New</code></li>
            <li>Select your company template</li>
            <li>Immediately save as: <code>BASE-XREF.dwg</code> in <code>04_Design/Base/</code></li>
          </ol>

          <h4>Step 2: Import or Draw Property Boundary</h4>
          <ul>
            <li>If you have a property legal description, use <code>COGO</code> tools or import from survey</li>
            <li>Draw on layer: <code>C-PROP</code></li>
            <li>Ensure it's a closed polyline for future surface boundary use</li>
            <li>Add property corners with point blocks if needed</li>
          </ul>

          <h4>Step 3: Add Right-of-Way and Easements</h4>
          <ul>
            <li>Draw ROW lines on <code>C-ROW</code> layer (typically magenta, phantom linetype)</li>
            <li>Add utility easements on <code>C-EASE</code> or <code>C-NOGO</code> layer</li>
            <li>Use appropriate linetypes to differentiate (phantom for ROW, hidden for easements)</li>
          </ul>

          <h4>Step 4: Add Existing Features</h4>
          <ul>
            <li>Buildings: Draw on <code>C-BLDG-EXST</code> layer as polylines or hatches</li>
            <li>Structures: Manholes, inlets, poles on appropriate layers</li>
            <li>Reference linework: Existing street centerlines if relevant</li>
          </ul>

          <h4>Step 5: Add Project Information Block</h4>
          <p>Create a block or text in a corner of the drawing with:</p>
          <ul>
            <li>Project name and number</li>
            <li>Coordinate system used (State Plane Zone, datum)</li>
            <li>Drawing units (US Survey Feet, etc.)</li>
            <li>Base file creation date</li>
            <li>Benchmark information if available</li>
          </ul>

          <h4>Step 6: Add North Arrow</h4>
          <ul>
            <li>Insert north arrow block in a logical location</li>
            <li>Rotate to true north or project north as appropriate</li>
            <li>Place on <code>C-ANNO-NOTE</code> or similar layer</li>
          </ul>

          <h4>Step 7: Clean Up and Audit</h4>
          <ol>
            <li>Type <code>AUDIT</code> and fix any errors</li>
            <li>Type <code>PURGE</code> and remove unused layers, blocks, styles</li>
            <li>Type <code>ZOOM E</code> to verify all content is visible</li>
            <li>Check that all objects are on correct layers</li>
            <li>Save the file</li>
          </ol>

          <h4>Step 8: Test the Xref</h4>
          <ul>
            <li>Create a new drawing from template</li>
            <li>Type <code>XREF</code> and attach <code>BASE-XREF.dwg</code></li>
            <li>Verify it displays correctly</li>
            <li>Try freezing/thawing layers to ensure layer structure is correct</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common BASE-XREF Mistakes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Adding Civil 3D objects:</strong> Surfaces, alignments don't belong here—causes performance issues</li>
              <li><strong>Too much detail:</strong> BASE-XREF should be lean—heavy files slow down every drawing that references it</li>
              <li><strong>Annotations in base:</strong> Notes and labels belong in MODEL.dwg, not BASE-XREF</li>
              <li><strong>Wrong coordinate system:</strong> If BASE-XREF has wrong coordinates, every design file will too</li>
              <li><strong>Not purging:</strong> Accumulated junk in BASE-XREF propagates to all child drawings</li>
            </ul>
          </div>

          <h3>Best Practices for Template and Base File Management</h3>

          <h4>Version Control</h4>
          <ul>
            <li>Date your templates: <code>Firm_Template_2024-March.dwt</code></li>
            <li>Keep old versions archived in case projects need to reference them</li>
            <li>Document changes in a readme file or template description</li>
          </ul>

          <h4>Multi-Project Templates</h4>
          <p>Consider creating specialized templates for different project types:</p>
          <ul>
            <li><code>Firm_Subdivision_Template.dwt</code> - Residential subdivision projects</li>
            <li><code>Firm_Roadway_Template.dwt</code> - Highway and street reconstruction</li>
            <li><code>Firm_SiteDesign_Template.dwt</code> - Commercial site development</li>
          </ul>

          <h4>Team Coordination</h4>
          <ul>
            <li>Store master templates in a shared network location</li>
            <li>Document template location in company standards manual</li>
            <li>Train new employees on proper template usage</li>
            <li>Establish who has authority to modify master templates (CAD Manager)</li>
          </ul>

          <h4>BASE-XREF Modifications Mid-Project</h4>
          <p>If you need to modify BASE-XREF.dwg during a project:</p>
          <ol>
            <li>Archive the current version to <code>08_Archive/</code> first</li>
            <li>Make changes carefully—they affect ALL drawings that reference it</li>
            <li>Use <code>RELOADALL</code> in open drawings to see changes</li>
            <li>Notify team members of the change</li>
            <li>Test in a sample drawing before assuming it works everywhere</li>
          </ol>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Template Overhaul Saves Time Across 20 Projects</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Firm Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Firm Name:</strong> Riverside Engineering Group</div>
              <div><strong>Size:</strong> 15-person civil engineering firm</div>
              <div><strong>Challenge:</strong> No standardized template—everyone starts from scratch</div>
              <div><strong>Problem Duration:</strong> 5+ years of inconsistent practices</div>
              <div><strong>Solution Timeline:</strong> 2-week template development project</div>
            </div>
          </div>

          <h3>The Problem</h3>
          <p>
            Riverside Engineering Group had been using Civil 3D for five years, but each designer had their own 
            "starter file" that they copied for new projects. Some started from Autodesk's default template, others 
            from old project files with all the design data purged (or not purged!). The result was chaos:
          </p>

          <h4>Symptoms:</h4>
          <ul>
            <li><strong>15 different surface styles</strong> across the firm's projects—none matching</li>
            <li><strong>Label styles were a nightmare:</strong> Text heights ranged from 0.06" to 0.25" randomly</li>
            <li><strong>Layer standards? What layer standards?</strong> One project used C-PROP, another PROP, another PROPERTY-LINE</li>
            <li><strong>New employee onboarding:</strong> Took 3-4 weeks to understand "how we do things here" 
              (because there was no consistent "way")</li>
            <li><strong>Client feedback:</strong> One reviewer noted that Riverside's submittals looked like they 
              came from different companies</li>
          </ul>

          <h3>The Decision</h3>
          <p>
            The CAD Manager, Sarah Chen, proposed a two-week project to create a master template that all future 
            projects would use. The managing principal was skeptical: "Two weeks? We're busy. Can't people just 
            keep doing what they're doing?" Sarah's response: "Sure, if we want to keep wasting 2-3 hours per project 
            on formatting and style cleanup."
          </p>

          <h3>The Process</h3>

          <h4>Week 1: Research and Draft</h4>
          <ul>
            <li><strong>Day 1-2:</strong> Sarah reviewed 20 recent projects, documenting all the styles currently in use</li>
            <li><strong>Day 3:</strong> Team meeting—presented findings and asked for input on standards:
              <ul>
                <li>What contour intervals do we use most? (1ft minor, 5ft major was unanimous)</li>
                <li>What text height for plan labels? (Settled on 0.08" as readable but not overwhelming)</li>
                <li>Layer naming convention? (Adopted AIA CAD Layer Guidelines with Civil 3D extensions)</li>
              </ul>
            </li>
            <li><strong>Day 4-5:</strong> Sarah built the first draft template:
              <ul>
                <li>Started from Autodesk's NCS template</li>
                <li>Created 5 surface styles matching team preferences</li>
                <li>Created 3 alignment styles (proposed, existing, centerline-only)</li>
                <li>Configured label styles for common scenarios</li>
                <li>Set up layer structure matching AIA standards</li>
              </ul>
            </li>
          </ul>

          <h4>Week 2: Testing and Refinement</h4>
          <ul>
            <li><strong>Day 6:</strong> Distributed draft template to three designers for testing</li>
            <li><strong>Day 7-8:</strong> Designers used the template on current projects and provided feedback:
              <ul>
                <li>"Can we add a surface style with triangulation visible? Useful for QC."</li>
                <li>"The profile label style needs decimal precision changed from 0.1 to 0.01."</li>
                <li>"Love the alignment styles—exactly what we need."</li>
              </ul>
            </li>
            <li><strong>Day 9:</strong> Sarah incorporated feedback and created Template v2</li>
            <li><strong>Day 10:</strong> Firm-wide training session (1 hour):
              <ul>
                <li>Demonstrated how to start new projects from the template</li>
                <li>Explained where the template is stored on the network</li>
                <li>Showed how to access different styles and when to use each</li>
                <li>Established rule: ALL new projects use this template</li>
              </ul>
            </li>
          </ul>

          <h3>Implementation Strategy</h3>
          <p>Sarah was smart about rollout:</p>
          <ul>
            <li><strong>All NEW projects:</strong> Must use the new template—no exceptions</li>
            <li><strong>Existing projects:</strong> Not required to retrofit (would be too disruptive), but encouraged 
              to import styles if time allows</li>
            <li><strong>Template location:</strong> Stored on network drive with READ-ONLY access (only Sarah can modify)</li>
            <li><strong>Support:</strong> Sarah scheduled weekly "Template Office Hours" for the first month to answer questions</li>
          </ul>

          <h4>The BASE-XREF Standard</h4>
          <p>
            As part of the template project, Sarah also created a standard procedure for BASE-XREF.dwg:
          </p>
          <ul>
            <li>Created a sample BASE-XREF.dwg showing proper setup</li>
            <li>Documented what goes in BASE-XREF vs what stays out</li>
            <li>Added a checklist to the template folder</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              The Results: Measured After 6 Months
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time savings:</strong> 2-3 hours per project on formatting and style setup = ~50 hours saved across 20 projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Consistency:</strong> Client reviewers noted that Riverside's submittals now looked "professional and polished"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>New hire onboarding:</strong> Reduced from 3-4 weeks to less than 1 week for Civil 3D setup knowledge</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>QC time reduced:</strong> Style consistency meant less time checking if labels were formatted correctly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Designer satisfaction:</strong> Team members appreciated not having to "figure it out" each time</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-800">
              Time Investment: 80 hours (2 weeks) for template development
            </p>
            <p className="text-lg font-bold text-green-800">
              Time Saved: 50+ hours in first 6 months, plus ongoing savings
            </p>
            <p className="text-lg font-bold text-green-800">
              ROI: Paid for itself in 4 months
            </p>
          </div>

          <h3>Lessons Learned</h3>
          <ol>
            <li><strong>Get team input early:</strong> Sarah's Day 3 meeting ensured buy-in and practical decisions</li>
            <li><strong>Test before rolling out:</strong> The Week 2 testing phase caught issues before they became widespread</li>
            <li><strong>Don't force retrofit:</strong> Allowing existing projects to continue avoided disruption</li>
            <li><strong>Provide ongoing support:</strong> Office hours helped smooth the transition</li>
            <li><strong>Measure results:</strong> Tracking time savings proved the value to management</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">CAD Manager's Quote (6 months later):</h3>
            <p className="italic">
              "Creating our master template was one of the best decisions we made as a firm. The two weeks felt like a 
              long time at the start, but we've saved that time ten times over. More importantly, our drawings just look 
              better—more consistent, more professional. And when a new client asks for a style change, I update the 
              template once instead of hunting through 15 different project files. I wish we'd done this years ago."
            </p>
            <p className="text-right mt-2"><em>— Sarah Chen, CAD Manager, Riverside Engineering Group</em></p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Template and BASE-XREF Setup Checklist</h2>
          <p className="text-gray-600 mb-6">Use this guide to create a Civil 3D template and BASE-XREF.dwg properly.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating a Civil 3D Template (.dwt)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Start from Autodesk's Civil 3D NCS template (Imperial or Metric)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure Drawing Settings: Units and Zone (coordinate system, precision)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set up Object Layers to match company standards</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure Abbreviations for labels</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create layer structure (C-PROP, C-ROW, C-BLDG-EXST, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set up text styles (Standard, Title, Label)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure dimension styles (arrow size, text height, precision)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create Civil 3D surface styles (Contours, Border Only, Triangulation)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create alignment styles (Proposed, Existing, Centerline)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure label styles (contours, stations, elevations)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add standard blocks (north arrow, benchmarks, symbols)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Run AUDIT to check for errors</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Run PURGE to remove unused elements</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save as .dwt file with descriptive name and date</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Store in network location accessible to all team members</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span">Document template contents and usage in a readme file</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating BASE-XREF.dwg</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Start from company Civil 3D template</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save immediately as BASE-XREF.dwg in 04_Design/Base/</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify coordinate system is correct for project</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Import or draw property boundary on C-PROP layer</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add right-of-way lines on C-ROW layer (magenta, phantom linetype)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add easements on C-EASE or C-NOGO layer</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Draw existing building footprints on C-BLDG-EXST layer</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add existing structures (manholes, poles) on appropriate layers</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create project information block (project name, coordinate system, units, date)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Insert north arrow block and rotate to correct orientation</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add benchmark notation if available</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify NO Civil 3D objects are in the file (no surfaces, alignments, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify NO annotations or dimensions (these go in MODEL.dwg later)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Run AUDIT to fix errors</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Run PURGE to keep file size small</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Check file size—should be under 500 KB for typical projects</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test by xref'ing into a new drawing to verify display</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Document BASE-XREF contents in 01_Admin/ project notes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">What Goes IN BASE-XREF.dwg</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Property boundaries and lot lines</li>
                <li>✓ Right-of-way and easements</li>
                <li>✓ Existing building footprints</li>
                <li>✓ Reference linework (existing centerlines, construction limits)</li>
                <li>✓ Coordinate system and project info block</li>
                <li>✓ North arrow</li>
                <li>✓ Benchmark notation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">What Does NOT Go in BASE-XREF.dwg</h3>
              <ul className="space-y-2 text-sm">
                <li>✗ Civil 3D objects (surfaces, alignments, profiles, corridors)</li>
                <li>✗ Annotations, labels, dimensions</li>
                <li>✗ Design elements (proposed roads, grading)</li>
                <li>✗ Heavy data or large blocks</li>
                <li>✗ Title blocks (these go in sheet files)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Template Maintenance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Store master template on network drive with READ-ONLY access for users</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Version templates with dates when making updates</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Keep archive of old template versions</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Document template changes in a readme file</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Review and update templates annually or when standards change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Template and BASE-XREF Quick Guide</h2>
          <p className="text-gray-600 mb-6">Essential commands and decision points for template and base file setup.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Key Commands for Template Setup</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">SETTINGS</td>
                    <td>Drawing Settings dialog</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LA</td>
                    <td>Layer Properties Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">ST</td>
                    <td>Text Style dialog</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">D or DIMSTYLE</td>
                    <td>Dimension Style Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">AUDIT</td>
                    <td>Fix drawing errors</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">PURGE</td>
                    <td>Remove unused elements</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-accent">SAVEAS &gt; .dwt</td>
                    <td>Save as template file</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Essential Layer Names (AIA Standards)</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-PROP</td>
                    <td>Property lines</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-ROW</td>
                    <td>Right-of-way</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-EASE</td>
                    <td>Easements</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-BLDG-EXST</td>
                    <td>Existing buildings</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-TINN-MAJR</td>
                    <td>Major contours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-TINN-MINR</td>
                    <td>Minor contours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">C-ROAD-CNTR</td>
                    <td>Alignments</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">C-ANNO-NOTE</td>
                    <td>General notes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
              <h3 className="font-bold mb-3 text-primary-light">Typical Text and Dimension Sizes</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2"><strong>Plan Labels:</strong></td>
                    <td>0.08" height</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>General Notes:</strong></td>
                    <td>0.1" height</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>Sheet Titles:</strong></td>
                    <td>0.25" height</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>Dimension Arrows:</strong></td>
                    <td>0.09" size</td>
                  </tr>
                  <tr>
                    <td className="py-2"><strong>Precision:</strong></td>
                    <td>0.01 typical</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-300">
              <h3 className="font-bold mb-3 text-primary-light">Decision Matrix: Template vs BASE-XREF</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="py-2 text-left">Element</th>
                    <th className="py-2">Template</th>
                    <th className="py-2">BASE-XREF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Styles</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Layers</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Property Lines</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">ROW Lines</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Surfaces</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="py-2">Annotations</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold mb-2 text-primary-light flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Critical Don'ts
            </h3>
            <ul className="text-sm space-y-1">
              <li>• DON'T put Civil 3D design objects in BASE-XREF.dwg</li>
              <li>• DON'T start projects without using your template</li>
              <li>• DON'T modify BASE-XREF mid-project without archiving first</li>
              <li>• DON'T save template and BASE-XREF in the same location (template is firm-wide, BASE-XREF is project-specific)</li>
              <li>• DON'T forget to PURGE before saving templates—unnecessary baggage accumulates</li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Test your template on a sample project before rolling out firm-wide</li>
              <li>• Keep BASE-XREF file size under 500 KB—if it's larger, it's probably too complex</li>
              <li>• Version your templates with dates: Firm_Template_2024-Q1.dwt</li>
              <li>• Create a "Template Test Project" folder to experiment without affecting real work</li>
              <li>• Document your template contents in a PDF stored with the template file</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Templates: The Secret to Civil 3D Consistency"</h2>
          <p className="text-gray-600 mb-6">An engaging 7-minute video demonstrating template creation and BASE-XREF setup.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">COLD OPEN (0:00-0:25)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Side-by-side comparison of two plan sheets—one beautiful and consistent, one messy with random fonts and line weights]</p>
              <p>
                "Two civil engineering firms. Same software. Same project type. But look at these submittals. This one 
                [point to messy one] looks like it was thrown together by five different people who've never met. This one 
                [point to clean one] looks like it came from a well-oiled machine.
              </p>
              <p>
                "The difference? This firm [point to clean one] uses templates. Let me show you how powerful they are."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:25-1:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Title card and instructor]</p>
              <p>
                "Welcome to Session 3 of Civil 3D Workflow Mastery. Today we're covering templates and BASE-XREF creation. 
                Now, templates might sound boring—they're just setup files, right? Wrong. Templates are the secret weapon 
                of efficient Civil 3D teams.
              </p>
              <p>
                "I'm going to show you a real case study where one firm invested two weeks creating a master template, 
                and it paid for itself in four months. Then we'll walk through creating your own template and setting up 
                BASE-XREF.dwg properly. Let's dive in."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE PROBLEM (1:00-2:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Animation showing chaos—different surface styles, label styles, text heights]</p>
              <p>
                "Picture a 15-person engineering firm. They've been using Civil 3D for five years. But here's the thing: 
                everyone starts projects differently. Some people copy an old project file. Others start from Autodesk's 
                default template. One guy has his own 'special' template that only he understands.
              </p>
              <p>
                "The result? Open five different projects from this firm, and you'll see five completely different styles. 
                Surface contours are different line weights. Labels are different sizes. Layers are named differently. 
                It's chaos.
              </p>
              <p>
                "A client reviewer actually told them, 'Your submittals look like they came from different companies.' Ouch.
              </p>
              <p>
                "So the CAD Manager, Sarah, proposed creating ONE master template that everyone would use. Management was 
                skeptical—'Two weeks of work? We're busy!' But Sarah convinced them, and here's what happened..."
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE SOLUTION: CREATING A TEMPLATE (2:00-4:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Screen recording of actual template creation process]</p>
              <p>
                "Let me show you how to create a Civil 3D template from scratch. We'll move quickly, but you can slow down 
                and follow along with the written guide.
              </p>
              <p>[Screen recording begins]</p>
              <p>
                "Step 1: Start from Autodesk's NCS template. File &gt; New, browse to the Civil 3D template folder, 
                select the Imperial NCS template. This gives you a clean starting point.
              </p>
              <p>
                "Step 2: Configure drawing settings. Type SETTINGS. Go to Units and Zone. This is CRITICAL—set your 
                coordinate system, units, and precision. For most US projects, US Survey Feet and your state's State Plane 
                zone. Get this wrong, and everything that follows will be wrong.
              </p>
              <p>
                "Step 3: Set up layers. Type LA for Layer Properties. Create your standard layers—C-PROP for property lines, 
                C-ROW for right-of-way, C-BLDG-EXST for existing buildings. Follow AIA CAD Layer Guidelines if your firm 
                doesn't have its own standard.
              </p>
              <p>
                "Step 4: Configure styles. This is where templates really shine. Open Toolspace, Settings tab. Create surface 
                styles for different uses—Contours for design, Border Only for reference, Triangulation for QC checking. 
                Create alignment styles—Proposed Centerline, Existing Centerline. Set these up once, use them forever.
              </p>
              <p>
                "Step 5: Text and dimension styles. Type ST for text styles. Create Standard text at 0.1", Label text at 0.08", 
                Title text at 0.25". Type D for dimension styles—set arrow size, precision, text placement.
              </p>
              <p>
                "Step 6: Clean up. Type AUDIT to fix any errors. Type PURGE to remove unused elements. Keep your template lean.
              </p>
              <p>
                "Step 7: Save as template. File &gt; Save As, change file type to .dwt, name it with your firm name and date. 
                Store it on your network drive where everyone can access it.
              </p>
              <p>
                "[End screen recording]"
              </p>
              <p>
                "That's the process. Sarah spent two weeks on this because she refined styles, got team input, and tested 
                thoroughly. You could create a basic template in a day."
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">BASE-XREF.DWG: THE FOUNDATION (4:30-5:45)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Graphic showing BASE-XREF as foundation with design files building on top]</p>
              <p>
                "Now, once you have a template, every project starts with creating BASE-XREF.dwg. This is your foundational 
                drawing—it contains reference linework that's common to all views.
              </p>
              <p>
                "Here's what goes IN BASE-XREF: Property boundaries, right-of-way lines, existing building footprints, 
                north arrow, project info block. Basically, the framework.
              </p>
              <p>
                "Here's what does NOT go in BASE-XREF—and this is critical: NO Civil 3D objects. No surfaces, no alignments, 
                no profiles. Those go in separate design files. Why? Because BASE-XREF gets xref'd into everything. If it's 
                heavy with data, every single drawing that references it becomes slow. Keep it lean.
              </p>
              <p>
                "To create BASE-XREF: Start from your template. Save immediately as BASE-XREF.dwg in your 04_Design/Base folder. 
                Draw property lines on C-PROP layer. Add ROW on C-ROW layer. Add existing features. Add info block and north 
                arrow. Run AUDIT and PURGE. Done. File size should be under 500 KB for most projects."
              </p>
              <p>
                "Then xref this into all your design files. When you update BASE-XREF, everything updates automatically. 
                That's the power of this workflow."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE PAYOFF (5:45-6:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Metrics appearing—time saved, consistency improved]</p>
              <p>
                "Back to Sarah's firm. After six months of using the new template, here are the results:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Time saved: 2-3 hours per project on setup and formatting. Across 20 projects, that's 50+ hours.</li>
                <li>Consistency: Client reviewers noticed the difference—called their submittals 'professional and polished.'</li>
                <li>Onboarding: New hires learned the firm's Civil 3D setup in less than a week instead of 3-4 weeks.</li>
                <li>QC time: Reduced because style checking was no longer necessary—everything was already consistent.</li>
              </ul>
              <p className="mt-2">
                "Two weeks of work paid for itself in four months. And the benefits continue with every new project.
              </p>
              <p>
                "Sarah's quote, six months later: 'I wish we'd done this years ago. The two weeks felt long at the start, 
                but we've saved that time ten times over.' That's the power of templates."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">YOUR ACTION PLAN (6:30-6:50)</h3>
              <p>
                "So here's your homework. Download the checklist that comes with this session. Block out one day—just one—
                and create your firm's master template. Get input from your team on styles. Test it on a sample project. 
                Then roll it out.
              </p>
              <p>
                "And on your next project, create BASE-XREF.dwg properly. Reference linework only. Keep it lean. Then 
                xref it into your design files and watch the workflow come together.
              </p>
              <p>
                "You'll thank yourself six months from now."
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (6:50-7:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Next session preview]</p>
              <p>
                "Next up is Session 4: Survey Data Import and Existing Conditions. We'll cover how to bring survey data 
                into Civil 3D, create point groups, build surfaces, and handle the inevitable data issues that come up. 
                See you there!"
              </p>
              <p className="italic text-gray-700">[End card: Download links for checklist and example template]</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-primary-light mb-2">Production Notes:</h3>
            <ul className="text-sm space-y-1">
              <li>• Total duration: ~7 minutes</li>
              <li>• Include full screen recording of template creation process (sped up where appropriate)</li>
              <li>• Show before/after examples of projects with and without templates</li>
              <li>• Provide downloadable example template in video description</li>
              <li>• Use picture-in-picture for instructor commentary during screen recordings</li>
              <li>• Background music: Professional but unobtrusive</li>
            </ul>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
