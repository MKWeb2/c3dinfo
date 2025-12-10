import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, FileText } from 'lucide-react'

export default function Session3() {
  return (
    <SessionLayout 
      sessionNumber={3} 
      title="Template Setup & Base Drawing Creation"
    >
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
          </p>

          <h4>What Templates Provide:</h4>
          <ul>
            <li><strong>Object Styles:</strong> Surface, alignment, profile, corridor styles</li>
            <li><strong>Label Styles:</strong> Consistent labeling across all objects</li>
            <li><strong>Drawing Settings:</strong> Units, coordinate system, precision</li>
            <li><strong>Layer Standards:</strong> Pre-configured layer structure</li>
            <li><strong>Blocks:</strong> Standard symbols and title blocks</li>
          </ul>

          <h3>Creating Your Template</h3>
          <h4>Step 1: Start with Autodesk Template</h4>
          <ol>
            <li>Go to <code>File &gt; New</code></li>
            <li>Select <code>Civil 3D (Imperial) NCS.dwt</code></li>
            <li>This provides clean starting point with basic Civil 3D styles</li>
          </ol>

          <h4>Step 2: Configure Drawing Settings</h4>
          <ul>
            <li>Type <code>SETTINGS</code></li>
            <li>Set coordinate system for your region</li>
            <li>Configure units (US Survey Feet vs International Feet)</li>
            <li>Set precision and display options</li>
          </ul>

          <h4>Step 3: Set Up Layer Standards</h4>
          <ul>
            <li><code>C-PROP</code> - Property lines</li>
            <li><code>C-ROW</code> - Right-of-way</li>
            <li><code>C-BLDG-EXST</code> - Existing buildings</li>
            <li><code>C-ROAD-CNTR</code> - Alignment centerlines</li>
            <li>Follow AIA CAD Layer Guidelines or firm standards</li>
          </ul>

          <h4>Step 4: Configure Styles</h4>
          <ul>
            <li><strong>Surface Styles:</strong> Contours, border, triangulation</li>
            <li><strong>Alignment Styles:</strong> Proposed vs existing</li>
            <li><strong>Label Styles:</strong> Surface contours, stations, elevations</li>
            <li>Configure once, use forever</li>
          </ul>

          <h4>Step 5: Save as Template</h4>
          <ol>
            <li><code>File &gt; Save As</code></li>
            <li>Change type to <strong>.dwt</strong></li>
            <li>Name: <code>YourFirm_Civil3D_2024.dwt</code></li>
            <li>Store in standards folder and user template directory</li>
          </ol>

          <h3>Creating BASE-XREF.dwg</h3>
          <p>
            BASE-XREF.dwg is your foundational drawing containing non-Civil 3D reference elements that are common 
            to all views: property boundaries, ROW, buildings, etc.
          </p>

          <h4>What Goes IN BASE-XREF:</h4>
          <ul>
            <li>Property boundaries and lot lines</li>
            <li>Right-of-way and easements</li>
            <li>Existing building footprints</li>
            <li>Reference linework</li>
            <li>North arrow and project info block</li>
          </ul>

          <h4>What Does NOT Go in BASE-XREF:</h4>
          <ul>
            <li><strong>NO Civil 3D Objects:</strong> No surfaces, alignments, corridors</li>
            <li><strong>NO Annotations:</strong> Labels stay out</li>
            <li><strong>NO Design Elements:</strong> Proposed features belong elsewhere</li>
          </ul>

          <h4>Creating BASE-XREF:</h4>
          <ol>
            <li>Start from template</li>
            <li>Save as <code>BASE-XREF.dwg</code> in <code>04_Design/Base/</code></li>
            <li>Draw property lines on <code>C-PROP</code> layer</li>
            <li>Add ROW on <code>C-ROW</code> layer</li>
            <li>Add existing features</li>
            <li>Add project information block</li>
            <li>Run AUDIT and PURGE</li>
            <li>Keep file size under 500 KB</li>
          </ol>

          <h3>Best Practices</h3>
          <ul>
            <li>Version templates with dates</li>
            <li>Store master templates on network drive</li>
            <li>Document template contents</li>
            <li>Keep BASE-XREF lightweight</li>
            <li>Never put Civil 3D objects in BASE-XREF</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Mistakes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Adding Civil 3D objects to BASE-XREF:</strong> Causes performance issues</li>
              <li><strong>Not using templates:</strong> Leads to inconsistency</li>
              <li><strong>Wrong coordinate system:</strong> Propagates to all drawings</li>
              <li><strong>Not purging:</strong> Accumulated junk spreads</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Template Overhaul Saves Time</h2>
          <p>
            A 15-person firm created master template, saving 2-3 hours per project on formatting. Investment paid for 
            itself in 4 months across 20 projects.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time saved:</strong> 2-3 hours per project on setup</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Consistency:</strong> Professional, uniform appearance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>ROI:</strong> Paid for itself in 4 months</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Template Creation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Essential Steps</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Start from Autodesk Civil 3D NCS template</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure drawing settings (units, coordinate system)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set up layer structure</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure text and dimension styles</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create Civil 3D object styles</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save as .dwt file</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Template Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Key Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">SETTINGS</td>
                    <td>Drawing Settings</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">LA</td>
                    <td>Layer Properties</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">ST</td>
                    <td>Text Style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">AUDIT</td>
                    <td>Fix errors</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-accent">PURGE</td>
                    <td>Remove unused items</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Essential Layers</h3>
              <ul className="text-sm space-y-1">
                <li>• C-PROP: Property lines</li>
                <li>• C-ROW: Right-of-way</li>
                <li>• C-BLDG-EXST: Buildings</li>
                <li>• C-ROAD-CNTR: Alignments</li>
                <li>• C-TINN: Surface triangulation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: Templates Power</h2>
          <p className="text-gray-600 mb-6">A 6-minute overview of template creation and BASE-XREF setup.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>Templates are Civil 3D's secret weapon for consistency. Today I'll show you how to create them and why 
              they save massive time.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DEMONSTRATION (0:30-5:00)</h3>
              <p>Screen recording: starting from Autodesk template, configuring settings, creating styles, saving as .dwt, 
              and creating BASE-XREF.dwg.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (5:00-6:00)</h3>
              <p>Next session covers Survey Data Import—bringing existing conditions into your workflow.</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
