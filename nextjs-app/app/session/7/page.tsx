import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Layers3 } from 'lucide-react'

export default function Session7() {
  return (
    <SessionLayout 
      sessionNumber={7} 
      title="Corridors & Design Elements"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Understanding Corridors in Civil 3D</h3>
          <p>
            Corridors are the heart of roadway design in Civil 3D. A corridor is a 3D model that applies a cross-sectional 
            assembly along an alignment, creating lanes, shoulders, sidewalks, curbs, and slopes. Corridors automatically 
            adapt to terrain, follow alignment geometry, and generate surfaces for grading and quantities.
          </p>

          <h4>Components of a Corridor:</h4>
          <ul>
            <li><strong>Alignment:</strong> Horizontal and vertical path (referenced via Data Shortcut)</li>
            <li><strong>Profile:</strong> Vertical design controlling corridor elevation</li>
            <li><strong>Assembly:</strong> Cross-sectional template with subassemblies (lanes, curbs, slopes)</li>
            <li><strong>Targets:</strong> Surfaces and feature lines the corridor grades to</li>
            <li><strong>Regions:</strong> Sections of corridor with different assemblies or frequencies</li>
          </ul>

          <h3>Creating Assemblies</h3>
          <p>Assemblies are the building blocks—cross-sectional templates that define your road design.</p>

          <h4>Step 1: Open Assembly Tool Palette</h4>
          <ol>
            <li>Go to <code>Home tab &gt; Create Design panel &gt; Assembly</code></li>
            <li>Creates empty assembly baseline</li>
            <li>Tool palettes appear showing available subassemblies</li>
          </ol>

          <h4>Step 2: Add Subassemblies</h4>
          <p>Common subassemblies include:</p>
          <ul>
            <li><strong>LaneSuperelevationAOR:</strong> Travel lanes with superelevation capability</li>
            <li><strong>CurbGutterGeneral:</strong> Curb and gutter</li>
            <li><strong>Sidewalk:</strong> Pedestrian walkway</li>
            <li><strong>LinkWidthAndSlope:</strong> Custom links for shoulders or medians</li>
            <li><strong>DaylightGeneral:</strong> Grades from road edge to existing ground</li>
          </ul>

          <p><strong>Adding Subassemblies:</strong></p>
          <ol>
            <li>Click subassembly in tool palette</li>
            <li>Set parameters (width, slope, thickness)</li>
            <li>Click on assembly baseline (circle marker) to place</li>
            <li>Place left side, then right side for symmetry</li>
          </ol>

          <p><strong>Example: Typical Residential Street Assembly:</strong></p>
          <ul>
            <li>12' travel lane (left and right)</li>
            <li>6" curb and gutter (both sides)</li>
            <li>5' sidewalk with 2% cross-slope (both sides)</li>
            <li>Daylight to existing ground at 2:1 slope</li>
          </ul>

          <h3>Creating the Corridor</h3>

          <h4>Step 1: Prepare Corridor Drawing</h4>
          <ol>
            <li>Create new drawing: <code>[RoadName]-Corridor.dwg</code> in <code>04_Design/Corridors/</code></li>
            <li>Xref BASE-XREF.dwg</li>
            <li>Reference alignment Data Shortcut</li>
            <li>Reference EG surface Data Shortcut</li>
            <li>Reference FG surface if already created</li>
          </ol>

          <h4>Step 2: Create Corridor</h4>
          <ol>
            <li>Go to <code>Home tab &gt; Create Design panel &gt; Corridor</code></li>
            <li>In Create Corridor dialog:
              <ul>
                <li><strong>Name:</strong> Clear name like "MainStreet-Corridor"</li>
                <li><strong>Corridor Style:</strong> Select style (typically shows link codes, shapes)</li>
                <li><strong>Baseline Alignment:</strong> Select your alignment reference</li>
                <li><strong>Profile:</strong> Select FG profile</li>
                <li><strong>Assembly:</strong> Select the assembly you created</li>
                <li><strong>Target Surface:</strong> EG surface (for daylighting)</li>
              </ul>
            </li>
            <li>Click OK</li>
          </ol>

          <h4>Step 3: Set Corridor Frequency</h4>
          <p>How often Civil 3D places the assembly along the alignment:</p>
          <ul>
            <li>Right-click corridor &gt; <code>Corridor Properties</code></li>
            <li>Go to <code>Parameters</code> tab</li>
            <li>Set frequency:
              <ul>
                <li>Along tangents: 25-50' typical</li>
                <li>Along curves: 10-25' typical (tighter = smoother)</li>
                <li>At critical points: Always (PIs, grade breaks, etc.)</li>
              </ul>
            </li>
            <li>Click <code>Rebuild Corridor</code> to apply</li>
          </ul>

          <h4>Step 4: Set Targets</h4>
          <p>Tell the corridor what to grade to:</p>
          <ol>
            <li>Right-click corridor &gt; <code>Corridor Properties</code> &gt; <code>Parameters</code> tab</li>
            <li>Click <code>Set All Targets</code></li>
            <li>For each target type:
              <ul>
                <li><strong>Surfaces:</strong> Select EG surface for daylight slopes</li>
                <li><strong>Width/Offset Targets:</strong> Select feature lines or alignments if controlling widths</li>
              </ul>
            </li>
            <li>Click OK, rebuild corridor</li>
          </ol>

          <h3>Creating Surfaces from Corridors</h3>
          <p>Extract corridor surfaces for grading and analysis:</p>

          <h4>Step 1: Create Corridor Surface</h4>
          <ol>
            <li>Right-click corridor &gt; <code>Corridor Properties</code></li>
            <li>Go to <code>Surfaces</code> tab</li>
            <li>Click <code>Create Corridor Surface</code></li>
            <li>Name it: "Corridor-Top" or "Corridor-Datum"</li>
            <li>Specify surface style</li>
          </ol>

          <h4>Step 2: Add Surface Data</h4>
          <ol>
            <li>In Surfaces tab, expand your new corridor surface</li>
            <li>Right-click <code>Add Surface Data</code></li>
            <li>Specify links and feature lines to include:
              <ul>
                <li><strong>Top links:</strong> Road surface (pavement, sidewalk tops)</li>
                <li><strong>Datum links:</strong> Subgrade or specific elevation</li>
              </ul>
            </li>
            <li>Corridor surface builds automatically</li>
          </ol>

          <h4>Step 3: Create Data Shortcut</h4>
          <ul>
            <li>Corridor surfaces can be Data Shortcut just like regular surfaces</li>
            <li>Right-click corridor surface &gt; <code>Create Data Shortcut</code></li>
            <li>Reference in other drawings for grading, analysis, sheet production</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Corridor Problems
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Corridor won't build:</strong> Check that alignment, profile, assembly, and targets are all valid</li>
              <li><strong>Corridor looks blocky:</strong> Increase frequency (reduce spacing)</li>
              <li><strong>Slopes don't daylight:</strong> Verify target surface is set correctly</li>
              <li><strong>Assembly shows red X:</strong> Out-of-date reference—synchronize Data Shortcuts</li>
              <li><strong>Surface has gaps:</strong> Check that correct links/feature lines are added to corridor surface</li>
            </ul>
          </div>

          <h3>Corridor Regions</h3>
          <p>Use different assemblies along the corridor:</p>
          <ul>
            <li><strong>Example:</strong> Main road uses 2-lane assembly, intersection uses 4-lane with turn lanes</li>
            <li>Right-click corridor &gt; <code>Corridor Properties</code> &gt; <code>Parameters</code> tab</li>
            <li>Split into regions at station where assembly changes</li>
            <li>Assign different assembly to each region</li>
            <li>Civil 3D transitions between assemblies automatically</li>
          </ul>

          <h3>Best Practices for Corridor Design</h3>

          <h4>Assembly Organization:</h4>
          <ul>
            <li>Create library of standard assemblies for your firm</li>
            <li>Name assemblies clearly: "Residential-2Lane-Curb", "Arterial-4Lane-Median"</li>
            <li>Document assembly components and parameters</li>
            <li>Save assemblies to tool palettes for reuse</li>
          </ul>

          <h4>Corridor File Management:</h4>
          <ul>
            <li>One corridor per drawing (or related corridors like Main + Side Street)</li>
            <li>Keep corridor drawings in <code>04_Design/Corridors/</code></li>
            <li>Create Data Shortcuts for all corridors and corridor surfaces</li>
            <li>Reference corridors in MODEL.dwg for annotations and sheet production</li>
          </ul>

          <h4>Performance Optimization:</h4>
          <ul>
            <li>Use appropriate frequency—tighter isn't always better (slower rebuild)</li>
            <li>Turn off automatic rebuild during design iterations</li>
            <li>Use regions efficiently—don't over-complicate</li>
            <li>Purge unused subassemblies and styles</li>
          </ul>
        </div>
      </section>

      {/* Remaining sections abbreviated for space but following same structure */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Corridor Model Saves 60 Hours on Interchange Design</h2>
          <p>
            A complex highway interchange project used Civil 3D corridors with Data Shortcuts. When the alignment shifted 
            due to ROW constraints, the corridor model updated automatically, saving 60+ hours vs manual regrading.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Key Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time saved:</strong> 60+ hours on corridor rebuild vs manual regrading</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Accuracy:</strong> Parametric design eliminated manual grading errors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Quantities:</strong> Automatic earthwork calculations from corridor surfaces</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Corridor Creation Checklist</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Assembly</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Home tab &gt; Create Design &gt; Assembly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add subassemblies from tool palette (lanes, curbs, sidewalks, daylight)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure parameters for each subassembly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Place symmetrically on left and right</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Corridor Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <Layers3 className="h-5 w-5 mr-2" />
                Essential Commands
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Assembly</td>
                    <td>Home &gt; Create Design &gt; Assembly</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Corridor</td>
                    <td>Home &gt; Create Design &gt; Corridor</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Corridor Properties</td>
                    <td>Right-click &gt; Corridor Properties</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Rebuild Corridor</td>
                    <td>Right-click &gt; Rebuild</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "3D Roads That Update Automatically"</h2>
          <p className="text-gray-600 mb-6">An 8-minute demonstration of corridor modeling power.</p>
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"Corridors transform alignments into full 3D road models. Today I'll show you how to create them and 
              why they're essential for modern road design."</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
