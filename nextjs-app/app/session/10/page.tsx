import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Eye } from 'lucide-react'

export default function Session10() {
  return (
    <SessionLayout 
      sessionNumber={10} 
      title="Model.dwg Creation & Named Views"
    >
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Understanding MODEL.dwg: The Hub of Your Project</h3>
          <p>
            MODEL.dwg is where all your design elements come together. It references all Data Shortcuts (surfaces, alignments, 
            corridors, pipe networks), adds annotations and labels, and serves as the single source for all sheet files. 
            This is the culmination of the entire workflow.
          </p>

          <h4>Purpose of MODEL.dwg:</h4>
          <ul>
            <li><strong>Aggregation:</strong> Brings together all design elements via Data Shortcuts</li>
            <li><strong>Annotation:</strong> Add labels, dimensions, call  outs, notes</li>
            <li><strong>Named Views:</strong> Define views for each sheet area</li>
            <li><strong>Xref Source:</strong> Referenced by all sheet files</li>
            <li><strong>Single Source:</strong> Update MODEL, all sheets update</li>
          </ul>

          <h3>Creating MODEL.dwg Step-by-Step</h3>

          <h4>Step 1: Create the Drawing</h4>
          <ol>
            <li>Create new drawing from template</li>
            <li>Save as: <code>MODEL.dwg</code> in <code>04_Design/Model/</code></li>
            <li>This is THE model file for your entire project</li>
          </ol>

          <h4>Step 2: Attach BASE-XREF</h4>
          <ol>
            <li>Type <code>XREF</code></li>
            <li>Attach <code>BASE-XREF.dwg</code> with relative path</li>
            <li>This provides property lines, ROW, reference features</li>
          </ol>

          <h4>Step 3: Reference All Data Shortcuts</h4>
          <p>Bring in all design elements:</p>
          <ul>
            <li><strong>Surfaces:</strong>
              <ul>
                <li>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Surfaces</li>
                <li>Right-click EG &gt; Create Reference</li>
                <li>Right-click FG &gt; Create Reference</li>
                <li>Right-click Corridor surfaces &gt; Create Reference</li>
              </ul>
            </li>
            <li><strong>Alignments:</strong>
              <ul>
                <li>Data Shortcuts &gt; Alignments &gt; Centerline Alignments</li>
                <li>Create references for all project alignments</li>
              </ul>
            </li>
            <li><strong>Pipe Networks:</strong>
              <ul>
                <li>Data Shortcuts &gt; Pipe Networks</li>
                <li>Create references for storm, sanitary, water networks</li>
              </ul>
            </li>
          </ul>

          <h4>Step 4: Add Annotations</h4>
          <p>Now add labels, dimensions, callouts:</p>
          <ul>
            <li><strong>Surface Labels:</strong> Spot elevations, contour labels</li>
            <li><strong>Alignment Labels:</strong> Station/offset callouts</li>
            <li><strong>Profile Labels:</strong> Elevations along alignments</li>
            <li><strong>General Notes:</strong> Text objects with project-specific information</li>
            <li><strong>Dimensions:</strong> Key distances, clearances</li>
            <li><strong>Symbols:</strong> North arrow, benchmark callouts</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h4 className="text-lg font-bold text-primary mb-2 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Key Principle
            </h4>
            <p>
              <strong>Design objects stay in design drawings.</strong> MODEL.dwg references them via Data Shortcuts—it doesn't 
              contain the actual surfaces, alignments, etc. This keeps MODEL.dwg lightweight and ensures updates propagate correctly.
            </p>
          </div>

          <h3>Named Views: Setting Up Sheet Boundaries</h3>
          <p>
            Named Views define specific areas of MODEL.dwg that will become sheets. Each view corresponds to one sheet.
          </p>

          <h4>Creating Named Views:</h4>
          <ol>
            <li>Type <code>VIEW</code> or go to <code>View tab &gt; Views panel &gt; View Manager</code></li>
            <li>Click <code>New</code></li>
            <li>Configure view:  
              <ul>
                <li><strong>View Name:</strong> Match sheet number (e.g., "C-101", "C-102")</li>
                <li><strong>View Category:</strong> Organize views (e.g., "Plan Sheets", "Profile Sheets")</li>
                <li><strong>Boundary:</strong> Define with window or current display</li>
                <li><strong>Layer Snapshot:</strong> Save layer states with view</li>
              </ul>
            </li>
            <li>Click OK—view saved</li>
          </ol>

          <h4>Defining View Boundaries:</h4>
          <p>Two methods:</p>
          <ul>
            <li><strong>Current Display:</strong> Zoom to desired sheet area, create view from current screen</li>
            <li><strong>Define Window:</strong> Draw rectangle defining sheet limits, select as boundary</li>
          </ul>

          <h4>Best Practices for Named Views:</h4>
          <ul>
            <li>Name views to match sheet numbers for easy identification</li>
            <li>Use consistent view scales (e.g., all plan sheets at 1"=50')</li>
            <li>Include layer states if different sheets show different layers</li>
            <li>Organize views into categories for large projects</li>
            <li>Test views before creating sheets—restore each view to verify coverage</li>
          </ul>

          <h3>MODEL.dwg Workflow Integration</h3>

          <h4>The Complete Flow:</h4>
          <ol>
            <li><strong>Design Phase:</strong> Create surfaces, alignments, corridors, networks in separate design drawings</li>
            <li><strong>Data Shortcuts:</strong> Create shortcuts for all design objects</li>
            <li><strong>MODEL.dwg:</strong> Reference all shortcuts, add annotations, create named views</li>
            <li><strong>Sheet Files:</strong> Xref MODEL.dwg, create viewports using named views</li>
            <li><strong>Updates:</strong> Change design drawing, DATA Shortcut updates, MODEL updates, reload xrefs in sheets, all sheets show changes</li>
          </ol>

          <h3>Advanced Techniques</h3>

          <h4>Multiple Model Files:</h4>
          <p>For very large projects:</p>
          <ul>
            <li>Create MODEL-Phase1.dwg, MODEL-Phase2.dwg, etc.</li>
            <li>Or MODEL-North.dwg, MODEL-South.dwg for geographic divisions</li>
            <li>Each references relevant Data Shortcuts for that area</li>
            <li>Keeps file sizes manageable</li>
          </ul>

          <h4>View Templates:</h4>
          <ul>
            <li>Create standard view sizes for common sheet scales</li>
            <li>Example: 24"x36" sheet at 1"=50' scale = specific view area size</li>
            <li>Draw rectangles as templates, use to define view boundaries consistently</li>
          </ul>

          <h3>Best Practices</h3>

          <h4>MODEL.dwg Management:</h4>
          <ul>
            <li>Keep MODEL.dwg in <code>04_Design/Model/</code> folder</li>
            <li>Reference only—never copy design objects into MODEL</li>
            <li>Organize annotations on logical layers</li>
            <li>Use consistent text styles and label styles</li>
            <li>Save regularly and archive major versions</li>
          </ul>

          <h4>Performance:</h4>
          <ul>
            <li>MODEL.dwg can get large—manage layers and purge regularly</li>
            <li>Consider xref clipping if only portions of design needed</li>
            <li>Turn off automatic Data Shortcut synchronization during heavy annotation work</li>
            <li>Close unnecessary xrefs when not needed</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common MODEL.dwg Mistakes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Copying objects instead of referencing:</strong> Breaks the workflow—always use Data Shortcuts</li>
              <li><strong>Not creating named views:</strong> Makes sheet creation tedious and inconsistent</li>
              <li><strong>Inconsistent view scales:</strong> Causes label and text sizing issues across sheets</li>
              <li><strong>Over-annotating:</strong> Too many labels clutter—annotate purposefully</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: One MODEL.dwg Serves 40 Sheets Effortlessly</h2>
          <p>
            A mixed-use development project with 40 sheets used a single MODEL.dwg referencing all design elements. 
            Named views were created for each sheet. When design changes occurred mid-project, MODEL.dwg was updated 
            once and all 40 sheets reflected changes upon xref reload.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Efficiency:</strong> Single MODEL served entire 40-sheet plan set</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Updates:</strong> Design changes propagated to all sheets automatically</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Consistency:</strong> All annotations from one source—uniform appearance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: MODEL.dwg Creation Checklist</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Essential Steps</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create MODEL.dwg in <code>04_Design/Model/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Xref BASE-XREF.dwg with relative path</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Reference all surface Data Shortcuts (EG, FG, corridors)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Reference all alignment Data Shortcuts</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Reference pipe network Data Shortcuts</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add annotations: labels, dimensions, notes</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create named views for each sheet area</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test views—restore each to verify coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Named Views Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">View Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">VIEW</td>
                    <td>View Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">-VIEW</td>
                    <td>Command line View</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">NEWVIEW</td>
                    <td>Quick create view</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">View Naming Convention</h3>
              <ul className="text-sm space-y-1">
                <li>• Match sheet numbers: C-101, C-102</li>
                <li>• Use categories: "Plan Sheets", "Profiles"</li>
                <li>• Consistent scales across similar views</li>
                <li>• Include layer states for different displays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Building MODEL.dwg—The Project Hub"</h2>
          <p className="text-gray-600 mb-6">A 7-minute walkthrough of MODEL.dwg creation and named view setup.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"MODEL.dwg is where it all comes together. All your design elements, all your annotations, all your sheets—
              they all reference this one file. Let me show you how to build it properly."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DEMONSTRATION (0:30-6:00)</h3>
              <p>Screen recording: Creating MODEL.dwg, xrefing BASE-XREF, referencing all Data Shortcuts, adding annotations, 
              creating named views for sheet areas.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (6:00-7:00)</h3>
              <p>"Next session: Plan Production and Sheet Generation—using MODEL.dwg to create the final deliverable sheets."</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
