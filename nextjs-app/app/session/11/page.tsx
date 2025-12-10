import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, FileText } from 'lucide-react'

export default function Session11() {
  return (
    <SessionLayout 
      sessionNumber={11} 
      title="Plan Production & Sheet Generation"
    >
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Sheet Production in Civil 3D: The Final Mile</h3>
          <p>
            After weeks of design work, it's time to create deliverable sheets. Civil 3D's sheet production workflow uses 
            layouts (or Sheet Set Manager) to create individual sheets that xref MODEL.dwg and display specific views. 
            This session covers the mechanics of creating professional construction document sheets.
          </p>

          <h4>Sheet Production Methods:</h4>
          <ul>
            <li><strong>Layouts:</strong> Individual sheet files, each with layout tabs referencing MODEL.dwg</li>
            <li><strong>Sheet Set Manager:</strong> Organized collection of sheets with automated sheet numbering and plotting</li>
            <li><strong>Hybrid:</strong> Individual files managed by Sheet Set Manager (recommended for most projects)</li>
          </ul>

          <h3>Creating Sheet Files with Layouts</h3>

          <h4>Step 1: Create Sheet Drawing</h4>
          <ol>
            <li>Create new drawing from template (should include standard title block)</li>
            <li>Save as: <code>C-101.dwg</code> in <code>05_Sheets/Plan_Sheets/</code></li>
            <li>Sheet number matches named view from MODEL.dwg</li>
          </ol>

          <h4>Step 2: Configure Layout</h4>
          <ol>
            <li>Click on <code>Layout1</code> tab (or create new layout)</li>
            <li>Right-click layout tab &gt; <code>Page Setup Manager</code></li>
            <li>Configure:  
              <ul>
                <li><strong>Plotter:</strong> DWG to PDF or physical plotter</li>
                <li><strong>Paper Size:</strong> ARCH D (24x36), ARCH E (36x48), etc.</li>
                <li><strong>Plot Scale:</strong> 1:1 (layout is actual paper size)</li>
                <li><strong>Plot Style Table:</strong> Monochrome.ctb or color-dependent</li>
              </ul>
            </li>
          </ol>

          <h4>Step 3: Insert Title Block</h4>
          <ul>
            <li>If not in template, insert title block as a block</li>
            <li>Place at 0,0 in layout space</li>
            <li>Fill in title block attributes: project name, sheet number, date, engineer, etc.</li>
          </ul>

          <h4>Step 4: Create Viewport</h4>
          <ol>
            <li>Type <code>MVIEW</code> or go to <code>Layout tab &gt; Viewports &gt; Rectangular</code></li>
            <li>Draw rectangle defining viewport area (within title block border)</li>
            <li>Viewport created—shows model space content</li>
          </ol>

          <h4>Step 5: Xref MODEL.dwg into Viewport</h4>
          <ol>
            <li>Double-click inside viewport to activate it</li>
            <li>Type <code>XREF</code></li>
            <li>Attach <code>MODEL.dwg</code> with relative path</li>
            <li>MODEL content displays in viewport</li>
          </ol>

          <h4>Step 6: Set Viewport to Named View</h4>
          <ol>
            <li>With viewport active, type <code>VIEW</code></li>
            <li>Select named view from MODEL.dwg (e.g., "C-101")</li>
            <li>Restore view—viewport shows exact area intended for this sheet</li>
            <li>Double-click outside viewport to deactivate</li>
          </ol>

          <h4>Step 7: Set Viewport Scale</h4>
          <ul>
            <li>Select viewport border (click on edge)</li>
            <li>Properties palette: Set <strong>Standard Scale</strong> (e.g., 1"=50')</li>
            <li>Viewport displays MODEL content at correct sheet scale</li>
          </ul>

          <h4>Step 8: Lock Viewport</h4>
          <ul>
            <li>Select viewport border</li>
            <li>Properties palette: Set <strong>Display Locked</strong> = Yes</li>
            <li>Prevents accidental pan/zoom in viewport</li>
          </ul>

          <h3>Sheet Set Manager Workflow</h3>
          <p>For projects with many sheets, Sheet Set Manager provides organization and automation:</p>

          <h4>Creating a Sheet Set:</h4>
          <ol>
            <li>Type <code>SHEETSET</code> or press <code>Ctrl+4</code></li>
            <li>Click <code>New Sheet Set</code></li>
            <li>Choose method: "Example Sheet Set" or "Existing Drawings"</li>
            <li>Configure sheet set properties: project name, number, client</li>
            <li>Organize sheets into subsets: "Cover", "Site Plans", "Profiles", "Details"</li>
          </ol>

          <h4>Adding Sheets to Set:</h4>
          <ul>
            <li>Right-click subset &gt; <code>New Sheet</code></li>
            <li>Or <code>Import Layouts</code> from existing drawings</li>
            <li>Sheet Set Manager lists all sheets organized by subset</li>
          </ul>

          <h4>Sheet Set Benefits:</h4>
          <ul>
            <li><strong>Automated Numbering:</strong> Sheets numbered sequentially within subsets</li>
            <li><strong>Batch Plotting:</strong> Publish entire sheet set to PDF with one command</li>
            <li><strong>Sheet List Tables:</strong> Auto-generated index of sheets</li>
            <li><strong>View Management:</strong> Jump to any sheet quickly</li>
          </ul>

          <h3>Batch Plotting and PDF Generation</h3>

          <h4>Publishing from Sheet Set:</h4>
          <ol>
            <li>In Sheet Set Manager, right-click sheet set name</li>
            <li><code>Publish &gt; Publish to PDF</code></li>
            <li>All sheets plot to individual or multi-page PDF</li>
            <li>Save to <code>06_Submittals/[Milestone]/</code></li>
          </ol>

          <h4>Publishing Individual Layouts:</h4>
          <ol>
            <li>Type <code>PUBLISH</code></li>
            <li>Add layouts from multiple drawings</li>
            <li>Configure output settings</li>
            <li>Publish to PDF or plotter</li>
          </ol>

          <h3>Best Practices for Sheet Production</h3>

          <h4>File Organization:</h4>
          <ul>
            <li>Store sheet files in <code>05_Sheets/</code> organized by type</li>
            <li>Name sheets by sheet number: C-101.dwg, C-102.dwg</li>
            <li>One sheet per file OR one file with multiple layout tabs (team preference)</li>
            <li>Archive old sheet versions before major revisions</li>
          </ul>

          <h4>Viewport Management:</h4>
          <ul>
            <li>Always lock viewports after setting scale and view</li>
            <li>Use layer overrides in viewports if specific layers need different display per sheet</li>
            <li>Test print/PDF before finalizing—verify scale, readability</li>
          </ul>

          <h4>Quality Control:</h4>
          <ul>
            <li>Check all title block fields filled correctly</li>
            <li>Verify sheet numbers are sequential and match sheet list</li>
            <li>Confirm scales are correct and consistent</li>
            <li>Ensure all xrefs loaded before plotting</li>
            <li>Review PDFs for completeness and clarity</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Sheet Production Issues
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Viewport shows wrong area:</strong> Restore correct named view from MODEL.dwg</li>
              <li><strong>Scale is wrong:</strong> Check viewport Standard Scale property</li>
              <li><strong>Xref won't load:</strong> Verify relative path, check if MODEL.dwg moved</li>
              <li><strong>Text too small/large:</strong> Verify viewport scale matches intended sheet scale</li>
              <li><strong>PDF plots blank:</strong> Check that layout is configured to plot, viewport is on plottable layer</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: 60-Sheet Set Generated in One Day</h2>
          <p>
            A highway widening project required 60 construction sheets. Using Sheet Set Manager, named views from MODEL.dwg, 
            and batch plotting, the team generated the entire set in one day vs. traditional 3-4 days.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time saved:</strong> 60-sheet set produced in 1 day vs 3-4 days traditional</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Consistency:</strong> All sheets from same MODEL source—uniform appearance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Revisions:</strong> Update MODEL, republish entire set in hours</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Sheet Creation Checklist</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Individual Sheet</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create drawing, save as [SheetNumber].dwg in <code>05_Sheets/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure layout: page setup, paper size, plot scale 1:1</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Insert title block, fill attributes</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create viewport with MVIEW</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Activate viewport, xref MODEL.dwg</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Restore named view matching sheet number</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set viewport scale (e.g., 1"=50')</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Lock viewport (Display Locked = Yes)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test plot to PDF, verify appearance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Sheet Production Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Essential Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LAYOUT</td>
                    <td>Manage layouts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">MVIEW</td>
                    <td>Create viewport</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">SHEETSET (Ctrl+4)</td>
                    <td>Sheet Set Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">PUBLISH</td>
                    <td>Batch plot sheets</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Viewport Tips</h3>
              <ul className="text-sm space-y-1">
                <li>• Always lock viewports after setup</li>
                <li>• Set scale in Properties palette</li>
                <li>• Use named views from MODEL.dwg</li>
                <li>• Double-click inside to activate viewport</li>
                <li>• Double-click outside to exit viewport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "From MODEL to Sheets in Minutes"</h2>
          <p className="text-gray-600 mb-6">A 7-minute demonstration of sheet creation workflow.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"You've designed everything in MODEL.dwg. Now it's time to create deliverable sheets. I'll show you how to 
              go from MODEL to printable PDFs efficiently."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DEMONSTRATION (0:30-6:00)</h3>
              <p>Screen recording: Creating sheet file, configuring layout, inserting title block, creating viewport, 
              xrefing MODEL.dwg, restoring named view, setting scale, locking viewport, testing print.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (6:00-7:00)</h3>
              <p>"Final session covers Plan & Profile sheets, QA procedures, and project delivery. The finish line!"</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
