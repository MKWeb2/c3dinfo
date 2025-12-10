import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Link } from 'lucide-react'

export default function Session9() {
  return (
    <SessionLayout 
      sessionNumber={9} 
      title="External References (Xrefs) & Layer States"
    >
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>External References (Xrefs) in Civil 3D Workflow</h3>
          <p>
            External References (Xrefs) allow you to reference other drawings without copying their content. This is fundamental 
            to the Civil 3D workflow: BASE-XREF is referenced in design drawings, MODEL.dwg is referenced in sheet files. 
            Changes to the source drawing automatically appear in all referencing drawings.
          </p>

          <h4>Why Xrefs Are Essential:</h4>
          <ul>
            <li><strong>File Size Management:</strong> References are lightweight vs copying all content</li>
            <li><strong>Automatic Updates:</strong> Reload xrefs to see latest changes</li>
            <li><strong>Team Collaboration:</strong> Multiple people can reference same file</li>
            <li><strong>Drawing Organization:</strong> Separates design from presentation</li>
          </ul>

          <h3>Attaching External References</h3>

          <h4>Step 1: Attach Xref</h4>
          <ol>
            <li>Type <code>XREF</code> or go to <code>Insert tab &gt; Reference panel &gt; Attach</code></li>
            <li>In Xref Manager, click <code>Attach DWG</code></li>
            <li>Browse to file (e.g., BASE-XREF.dwg)</li>
            <li>Configure attachment:  
              <ul>
                <li><strong>Attachment Type:</strong> Attach (not Overlay)</li>
                <li><strong>Path Type:</strong> Relative Path (critical for portability!)</li>
                <li><strong>Insertion Point:</strong> 0,0,0 (if coordinate systems match)</li>
                <li><strong>Scale/Rotation:</strong> Usually 1 and 0</li>
              </ul>
            </li>
            <li>Click OK—xref loads into drawing</li>
          </ol>

          <h4>Relative vs Absolute Paths:</h4>
          <ul>
            <li><strong>Relative Path:</strong> Specifies location relative to current drawing (e.g., ..\\Base\\BASE-XREF.dwg)</li>
            <li><strong>Absolute Path:</strong> Full path including drive letter (e.g., C:\\Projects\\...)</li>
            <li><strong>Rule:</strong> ALWAYS use Relative Paths for project portability</li>
            <li>If project folder moves or is shared, relative paths still work</li>
          </ul>

          <h3>Managing Xrefs</h3>

          <h4>Xref Manager Commands:</h4>
          <ul>
            <li><strong>Reload:</strong> Updates xref to show latest saved changes in source drawing</li>
            <li><strong>Unload:</strong> Temporarily removes xref from display (still attached)</li>
            <li><strong>Bind:</strong> Converts xref to a block (permanent copy—avoid in workflow)</li>
            <li><strong>Detach:</strong> Removes xref attachment completely</li>
          </ul>

          <h4>Reloading Xrefs:</h4>
          <ol>
            <li>Type <code>XREF</code></li>
            <li>Right-click xref &gt; <code>Reload</code></li>
            <li>Or type <code>RELOADALL</code> to reload all xrefs at once</li>
            <li>Xref updates to match current source drawing</li>
          </ol>

          <h3>Layer States: Controlling Display</h3>
          <p>
            Layer States save and restore layer visibility, freeze/thaw, color, and other properties. Essential for creating 
            different views from the same MODEL.dwg (e.g., show storm drainage on some sheets, hide on others).
          </p>

          <h4>Creating Layer States:</h4>
          <ol>
            <li>Type <code>LAYSTATE</code> or go to <code>Home tab &gt; Layers panel &gt; Layer States Manager</code></li>
            <li>Configure layers how you want them (freeze/thaw, on/off, colors)</li>
            <li>In Layer States Manager, click <code>New</code></li>
            <li>Name the state descriptively: "Storm-Visible", "Sanitary-Visible", "Base-Only"</li>
            <li>Check which properties to save (visibility, freeze, color, etc.)</li>
            <li>Click OK—layer state saved</li>
          </ol>

          <h4>Restoring Layer States:</h4>
          <ul>
            <li>Type <code>LAYSTATE</code></li>
            <li>Select desired layer state</li>
            <li>Click <code>Restore</code></li>
            <li>Layers reconfigure to saved settings instantly</li>
          </ul>

          <h4>Layer States in Sheet Files:</h4>
          <p>Critical workflow technique:</p>
          <ul>
            <li>MODEL.dwg contains all design elements</li>
            <li>Create layer states for different sheet types</li>
            <li>In sheet files, restore appropriate layer state when xrefing MODEL.dwg</li>
            <li>Each sheet shows only relevant layers</li>
          </ul>

          <h3>Best Practices</h3>

          <h4>Xref Organization:</h4>
          <ul>
            <li>BASE-XREF in all design drawings</li>
            <li>MODEL.dwg in all sheet drawings</li>
            <li>Use consistent xref names across project</li>
            <li>Don't nest xrefs excessively (xref of an xref of an xref gets confusing)</li>
          </ul>

          <h4>Layer State Strategy:</h4>
          <ul>
            <li>Create layer states for common sheet types</li>
            <li>Name clearly: "Plan-Sheet-Storm", "Profile-Sheet", "Detail-Sheet"</li>
            <li>Export layer states to share with team</li>
            <li>Document which layer state to use for each sheet type</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Xref Problems
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Xref won't load:</strong> File moved or renamed—update path in Xref Manager</li>
              <li><strong>Circular reference error:</strong> Drawing A xrefs Drawing B which xrefs Drawing A—fix nesting</li>
              <li><strong>Xref layers frozen:</strong> Check layer properties—may be frozen in source or current drawing</li>
              <li><strong>Changes don't appear:</strong> Reload xref with RELOADALL command</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Layer States Streamline 50-Sheet Plan Set</h2>
          <p>
            A highway reconstruction project with 50 sheets used layer states to control display of multiple utilities. 
            Instead of creating separate MODEL files, one MODEL.dwg with layer states served all sheets, saving significant 
            time and preventing coordination errors.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Efficiency:</strong> One MODEL.dwg vs 10+ separate model files</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Coordination:</strong> All sheets referenced same source—zero conflicts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Updates:</strong> Change once in MODEL, reload xrefs, all 50 sheets update</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Xrefs & Layer States</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Xref Workflow</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Type XREF to open External References palette</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Click Attach DWG, browse to file</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set Path Type: Relative Path</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set insertion point 0,0,0</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Reload xrefs when source files change</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Layer States Workflow</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure layers for desired view</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Type LAYSTATE, click New</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Name descriptively (e.g., "Storm-Visible")</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save layer properties (freeze, color, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Restore layer states as needed for different sheets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Xref & Layer Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Xref Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">XREF</td>
                    <td>Open Xref Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">RELOADALL</td>
                    <td>Reload all xrefs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">XATTACH</td>
                    <td>Attach xref</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Layer Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LA or LAYER</td>
                    <td>Layer Properties</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LAYSTATE</td>
                    <td>Layer States Manager</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LAYISO</td>
                    <td>Isolate layers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">Critical Rule</h3>
            <p className="text-lg italic">
              "Always use Relative Paths for xrefs. Makes projects portable and team-friendly."
            </p>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Xrefs and Layer States Mastery"</h2>
          <p className="text-gray-600 mb-6">A 6-minute guide to mastering external references and layer control.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"Xrefs and Layer States are the glue that holds the Civil 3D workflow together. Master these, and you'll 
              understand how MODEL.dwg updates 50 sheets instantly."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DEMONSTRATION (0:30-5:00)</h3>
              <p>Screen recording: Attaching xrefs with relative paths, reloading xrefs to see updates, creating layer states 
              for different views, using layer states in sheet files.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (5:00-6:00)</h3>
              <p>"Next session: MODEL.dwg creation and Named Views—bringing everything together for sheet production."</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
