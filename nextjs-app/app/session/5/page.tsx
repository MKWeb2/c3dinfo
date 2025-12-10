import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Share2 } from 'lucide-react'

export default function Session5() {
  return (
    <SessionLayout 
      sessionNumber={5} 
      title="Surfaces & Data Shortcuts Fundamentals"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Advanced Surface Operations in Civil 3D</h3>
          <p>
            In Session 4, we imported survey data and created an existing ground surface. Now we'll dive deeper into surface 
            operations: creating finished grade surfaces, editing surfaces, understanding Data Shortcuts in depth, and managing 
            design surfaces throughout your project lifecycle.
          </p>

          <h4>Types of Surfaces in a Typical Project:</h4>
          <ul>
            <li><strong>Existing Ground (EG):</strong> Survey-derived surface representing current conditions</li>
            <li><strong>Finished Grade (FG):</strong> Proposed design surface after grading</li>
            <li><strong>Stripping Surface:</strong> Intermediate surface for topsoil removal</li>
            <li><strong>Datum Surface:</strong> Flat or sloped reference plane</li>
            <li><strong>Corridor Surface:</strong> Automatically generated from corridor model</li>
            <li><strong>Composite Surface:</strong> Combination of multiple surfaces (e.g., FG + Corridor)</li>
          </ul>

          <h3>Understanding Data Shortcuts: The Foundation of Civil 3D Workflow</h3>
          <p>
            Data Shortcuts are Civil 3D's method of sharing design objects (surfaces, alignments, profiles, pipe networks, corridors) 
            across multiple drawings WITHOUT duplicating the data. This is the cornerstone of efficient Civil 3D workflow.
          </p>

          <h4>How Data Shortcuts Work:</h4>
          <ol>
            <li>You create a design object (e.g., surface) in a "source drawing"</li>
            <li>You create a Data Shortcut for that object (creates .xml file in _Shortcuts folder)</li>
            <li>In other drawings, you create a "reference" to that Data Shortcut</li>
            <li>The referenced object displays in your drawing but lives in the source drawing</li>
            <li>When you edit the source drawing, ALL references update automatically</li>
          </ol>

          <h4>Benefits of Data Shortcuts:</h4>
          <ul>
            <li><strong>Single source of truth:</strong> Design object exists in one place only</li>
            <li><strong>Automatic updates:</strong> Changes propagate to all drawings</li>
            <li><strong>File size management:</strong> References are lightweight compared to full objects</li>
            <li><strong>Team collaboration:</strong> Multiple people can reference same design elements</li>
            <li><strong>Project organization:</strong> Logical separation of design elements</li>
          </ul>

          <h3>Step-by-Step: Creating Finished Grade Surface</h3>

          <h4>Method 1: Grading with Feature Lines</h4>
          <p>Most flexible method for site grading:</p>
          <ol>
            <li>Create new drawing from template: <code>FG-Surface.dwg</code> in <code>04_Design/Surfaces/</code></li>
            <li>Xref BASE-XREF.dwg</li>
            <li>Reference EG surface Data Shortcut:
              <ul>
                <li>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Surfaces</li>
                <li>Right-click EG &gt; Create Reference</li>
              </ul>
            </li>
            <li>Create Feature Lines for design:
              <ul>
                <li>Home tab &gt; Create Design panel &gt; Feature Line</li>
                <li>Draw building pad perimeters at design elevations</li>
                <li>Draw parking lot edges at design slopes</li>
                <li>Draw swale centerlines</li>
              </ul>
            </li>
            <li>Set feature line elevations:
              <ul>
                <li>Select feature line &gt; Grip edit vertices to set elevations</li>
                <li>Or use Elevation Editor in contextual ribbon</li>
                <li>Or assign slopes between points</li>
              </ul>
            </li>
            <li>Create FG surface:
              <ul>
                <li>Create new surface named "FG"</li>
                <li>Add feature lines as breaklines: Right-click FG &gt; Definition &gt; Breaklines &gt; Add (select feature lines)</li>
                <li>Surface builds from feature line geometry</li>
              </ul>
            </li>
          </ol>

          <h4>Method 2: Grading Objects</h4>
          <p>For automated grading with slopes:</p>
          <ol>
            <li>Create a feature line (e.g., building pad perimeter)</li>
            <li>Select feature line &gt; Modify tab &gt; Create Grading</li>
            <li>Specify:
              <ul>
                <li>Grading criteria (slope or distance)</li>
                <li>Grade to surface (typically EG)</li>
                <li>Cut/Fill slopes</li>
              </ul>
            </li>
            <li>Grading object creates automatically, adjusting to meet EG</li>
            <li>Add grading to FG surface as breakline</li>
          </ol>

          <h4>Method 3: Surface Paste</h4>
          <p>For incorporating corridor or other surfaces:</p>
          <ol>
            <li>Create base FG surface from feature lines</li>
            <li>Reference corridor surface Data Shortcut</li>
            <li>Use Surface Paste command:
              <ul>
                <li>Right-click FG &gt; Surface Properties &gt; Definition tab</li>
                <li>Expand "Edits" &gt; Right-click &gt; Paste Surface</li>
                <li>Select corridor surface</li>
                <li>Corridor geometry merges into FG surface</li>
              </ul>
            </li>
          </ol>

          <h3>Creating and Managing Data Shortcuts</h3>

          <h4>Setting Up Data Shortcuts Working Folder (If Not Done):</h4>
          <ol>
            <li>Open any Civil 3D drawing</li>
            <li>Toolspace &gt; Prospector &gt; Right-click Data Shortcuts &gt; Set Working Folder</li>
            <li>Browse to project's <code>_Shortcuts</code> folder</li>
            <li>This setting is drawing-specific—must be set in each drawing</li>
          </ol>

          <h4>Creating a Data Shortcut:</h4>
          <ol>
            <li>In source drawing (e.g., EG-Surface.dwg), ensure your surface is complete and QC'd</li>
            <li>Toolspace &gt; Prospector &gt; Surfaces &gt; Right-click your surface (e.g., EG) &gt; Create Data Shortcut</li>
            <li>Shortcut XML file created in <code>_Shortcuts/Surfaces/</code> folder</li>
            <li>No visual confirmation—it just works</li>
          </ol>

          <h4>Referencing a Data Shortcut:</h4>
          <ol>
            <li>Open the drawing where you need the surface (e.g., MODEL.dwg)</li>
            <li>Set Data Shortcuts working folder if not already set</li>
            <li>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Surfaces</li>
            <li>You should see your surface listed (e.g., EG)</li>
            <li>Right-click EG &gt; Create Reference</li>
            <li>Surface appears in your drawing—but it's a reference, not a copy</li>
          </ol>

          <h4>Understanding Reference vs Source:</h4>
          <ul>
            <li><strong>Source Drawing:</strong> Contains actual surface data—the master copy</li>
            <li><strong>Referenced Drawing:</strong> Contains pointer to source—lightweight</li>
            <li><strong>You can ONLY edit surfaces in source drawing</strong></li>
            <li><strong>Referenced surfaces display, label, analyze—but not edit</strong></li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h4 className="text-lg font-bold text-primary mb-2 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Identifying Source vs Reference
            </h4>
            <p>
              In Toolspace &gt; Prospector &gt; Surfaces, look at the icon:
            </p>
            <ul>
              <li><strong>Source surface:</strong> Normal surface icon</li>
              <li><strong>Referenced surface:</strong> Surface icon with small shortcut arrow overlay</li>
            </ul>
          </div>

          <h3>Advanced Surface Editing Techniques</h3>

          <h4>Editing Surface Definition:</h4>
          <ol>
            <li>In source drawing, expand surface in Prospector: Surfaces &gt; EG &gt; Definition</li>
            <li>You can add/remove:
              <ul>
                <li><strong>Point Groups:</strong> Add more survey points</li>
                <li><strong>Breaklines:</strong> Add linear features</li>
                <li><strong>Boundaries:</strong> Control surface extents</li>
                <li><strong>Edits:</strong> Manual edits to fix issues</li>
              </ul>
            </li>
          </ol>

          <h4>Common Surface Edits:</h4>
          <ul>
            <li><strong>Add Point:</strong> Right-click Edits &gt; Add Point—manually place point at specific elevation</li>
            <li><strong>Delete Point:</strong> Remove bad survey point from surface</li>
            <li><strong>Modify Point:</strong> Change elevation of existing point</li>
            <li><strong>Swap Edge:</strong> Flip triangulation line when two triangulations are possible</li>
            <li><strong>Add Line:</strong> Add breakline after initial surface creation</li>
            <li><strong>Delete Line:</strong> Remove unwanted triangulation edge</li>
          </ul>

          <h4>Surface Simplification:</h4>
          <p>For surfaces with excessive detail (LiDAR data, dense surveys):</p>
          <ol>
            <li>Right-click surface &gt; Surface Properties &gt; Definition tab</li>
            <li>Expand "Definition" &gt; Right-click &gt; Simplify Surface</li>
            <li>Methods:
              <ul>
                <li><strong>Edge thinning:</strong> Remove points based on proximity</li>
                <li><strong>Point reduction:</strong> Reduce based on percentage</li>
                <li><strong>Maximum change:</strong> Remove points that don't significantly affect surface shape</li>
              </ul>
            </li>
            <li>Useful for improving performance without losing accuracy</li>
          </ol>

          <h3>Working with Multiple Surfaces: Cut/Fill Analysis</h3>
          <p>Compare EG and FG surfaces to calculate earthwork quantities:</p>

          <h4>Method 1: Surface Analysis</h4>
          <ol>
            <li>Select FG surface in drawing</li>
            <li>Contextual Ribbon: Analyze panel &gt; Elevation Analysis or Cut/Fill Analysis</li>
            <li>For Cut/Fill:
              <ul>
                <li>Base surface: EG</li>
                <li>Comparison surface: FG</li>
                <li>Specify color scheme (red for cut, blue for fill)</li>
              </ul>
            </li>
            <li>Surface displays with colors showing cut/fill areas</li>
          </ol>

          <h4>Method 2: Volume Dashboard</h4>
          <ol>
            <li>Analyze tab &gt; Volumes and Materials &gt; Compute Materials</li>
            <li>Select surfaces: EG (existing) vs FG (proposed)</li>
            <li>Results show:
              <ul>
                <li>Cut volume (cubic yards)</li>
                <li>Fill volume</li>
                <li>Net volume (cut - fill)</li>
              </ul>
            </li>
            <li>Generate reports for documentation</li>
          </ol>

          <h4>Method 3: TIN Volume Surface</h4>
          <ol>
            <li>Surfaces &gt; Create Surface</li>
            <li>Type: TIN Volume Surface</li>
            <li>Base surface: EG</li>
            <li>Comparison surface: FG</li>
            <li>Creates a new surface showing the difference—useful for detailed analysis</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Data Shortcuts Problems
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Shortcut won't appear:</strong> Working folder not set, or set to wrong location</li>
              <li><strong>"Out of date" warning:</strong> Source drawing modified but not saved—open and save source</li>
              <li><strong>Can't edit referenced surface:</strong> Correct—must edit in source drawing</li>
              <li><strong>Reference doesn't update:</strong> Use Synchronize command or reload xrefs</li>
              <li><strong>Moved _Shortcuts folder:</strong> All shortcuts break—DON'T move this folder</li>
            </ul>
          </div>

          <h3>Best Practices for Surface and Data Shortcut Management</h3>

          <h4>Surface Organization:</h4>
          <ul>
            <li>One primary surface per drawing (e.g., EG-Surface.dwg contains only EG surface)</li>
            <li>Use descriptive names: EG, FG, FG-Pad-A, Corridor-MainStreet</li>
            <li>Document surface source and date in description field</li>
            <li>Create Data Shortcut immediately after surface is verified correct</li>
          </ul>

          <h4>Data Shortcuts Workflow:</h4>
          <ol>
            <li>Set working folder to _Shortcuts in ALL project drawings</li>
            <li>Create shortcuts for all design objects that will be referenced elsewhere</li>
            <li>Test shortcuts—create reference in a test drawing to verify</li>
            <li>Never move or rename _Shortcuts folder once established</li>
            <li>If source drawing is renamed, recreate the shortcut</li>
          </ol>

          <h4>Version Control:</h4>
          <ul>
            <li>When making major surface changes, archive current version first</li>
            <li>If surface changes significantly, consider new version: EG-Surface-v2.dwg</li>
            <li>Document changes in 01_Admin/ folder</li>
            <li>Communicate to team when major design changes affect shared surfaces</li>
          </ul>

          <h4>Performance Optimization:</h4>
          <ul>
            <li>Keep surfaces in separate drawings (don't combine EG, FG, corridors in one file)</li>
            <li>Use surface simplification for dense LiDAR data</li>
            <li>Reference surfaces via Data Shortcuts rather than copying</li>
            <li>Purge unused surfaces and point groups periodically</li>
          </ul>

          <h3>Synchronizing Data Shortcuts</h3>
          <p>When source drawings are modified:</p>
          <ol>
            <li>Open drawing with referenced surfaces</li>
            <li>If you see "out of date" notification, take action</li>
            <li>Right-click surface in Prospector &gt; Synchronize</li>
            <li>Or use Synchronize All command for multiple references</li>
            <li>Surface updates to match current source definition</li>
          </ol>

          <h3>Troubleshooting Data Shortcuts</h3>

          <h4>Problem: Data Shortcuts Don't Appear in Prospector</h4>
          <p><strong>Cause:</strong> Working folder not set or wrong folder selected</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Right-click Data Shortcuts &gt; Set Working Folder</li>
            <li>Navigate to project _Shortcuts folder</li>
            <li>Verify XML files exist in _Shortcuts/Surfaces/ (or /Alignments/, etc.)</li>
          </ul>

          <h4>Problem: "Cannot Create Reference" Error</h4>
          <p><strong>Cause:</strong> Source drawing file has moved or been renamed</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Locate original source drawing</li>
            <li>Open it, save in correct location with correct name</li>
            <li>Recreate Data Shortcut if necessary</li>
          </ul>

          <h4>Problem: Referenced Surface Shows but is Empty</h4>
          <p><strong>Cause:</strong> Source surface has no data or is outside current view</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Zoom Extents to see if surface is far away</li>
            <li>Open source drawing and verify surface has data</li>
            <li>Check that surface style in reference drawing displays properly</li>
          </ul>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Data Shortcuts Save 40 Hours on Multi-Phase Project</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Project Name:</strong> Riverside Mixed-Use Development</div>
              <div><strong>Location:</strong> Portland, Oregon</div>
              <div><strong>Scope:</strong> 50-acre site, 3 phases, multiple buildings, roads, utilities</div>
              <div><strong>Team:</strong> 3 designers working simultaneously</div>
              <div><strong>Timeline:</strong> 6-month design period</div>
            </div>
          </div>

          <h3>The Challenge</h3>
          <p>
            Riverside Mixed-Use was a complex project with three development phases occurring simultaneously. The civil 
            engineer assigned three designers to work in parallel:
          </p>
          <ul>
            <li>Designer A: Phase 1 - Buildings and parking</li>
            <li>Designer B: Phase 2 - Residential area</li>
            <li>Designer C: Main road network connecting all phases</li>
          </ul>
          <p>
            The challenge: All three phases shared a common existing ground surface, and the main road alignment needed 
            to be referenced by both Phase 1 and Phase 2 designs. Traditional approach (copying surfaces between files) 
            would lead to version chaos.
          </p>

          <h3>The Data Shortcuts Solution</h3>

          <h4>Week 1: Foundation Setup</h4>
          <p>The CAD manager, Tom, set up the project structure:</p>
          <ol>
            <li>Created project folder structure with <code>_Shortcuts</code> folder</li>
            <li>Imported survey data and built EG surface in <code>EG-Surface.dwg</code></li>
            <li>QC'd the surface thoroughly (learned from previous projects!)</li>
            <li>Created Data Shortcut for EG surface</li>
            <li>Created base alignment for main road in <code>MainRoad-Alignment.dwg</code></li>
            <li>Created Data Shortcut for alignment</li>
          </ol>

          <h4>Week 2: Parallel Design Begins</h4>
          <p>Tom trained all three designers on the workflow:</p>
          <ul>
            <li>Each designer creates their own design files in appropriate subfolders</li>
            <li>All designers reference EG surface Data Shortcut (not copy!)</li>
            <li>Designers A and B reference MainRoad alignment Data Shortcut</li>
            <li>Each designer works independently without file conflicts</li>
          </ul>

          <h4>Week 4: The First Major Change</h4>
          <p>
            Client reviewed 30% plans and requested changes: "Move the main road 15 feet south to avoid wetlands."
          </p>
          <p>
            In traditional workflow, this would be chaos: Designer C changes the road, then manually tells Designers A 
            and B, who each manually update their copies. Coordination nightmare.
          </p>
          <p>
            With Data Shortcuts: Designer C opened <code>MainRoad-Alignment.dwg</code>, modified the alignment, saved. 
            Designers A and B opened their drawings the next morning, saw "out of date" notification, clicked Synchronize. 
            Done. All drawings updated automatically.
          </p>

          <p className="font-bold mt-4">Time saved on this change alone: ~8 hours (vs manual coordination and updates)</p>

          <h4>Week 6: Survey Revision</h4>
          <p>
            Surveyor provided updated survey data for northeast corner (previously inaccessible due to weather). Tom 
            opened <code>EG-Surface.dwg</code>, imported additional points, updated surface, saved.
          </p>
          <p>
            All three designers synchronized their EG surface references. Grading designs in Phase 2 (in the updated area) 
            automatically adjusted to new EG surface. No manual coordination needed.
          </p>

          <p className="font-bold mt-4">Time saved: ~4 hours (vs coordinating surface updates across 3 designers)</p>

          <h4>Weeks 8-20: Dozens of Changes</h4>
          <p>Over the course of design development:</p>
          <ul>
            <li>Main road alignment modified 6 times (client requests, design refinements)</li>
            <li>EG surface updated twice more (additional survey, corrected errors)</li>
            <li>FG surface for Phase 1 modified 8 times</li>
          </ul>

          <p>
            Each change: Edit source drawing, save. All references update automatically. Designers always working with 
            latest design information.
          </p>

          <h3>The Results</h3>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Measured Benefits
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time savings:</strong> Estimated 40+ hours saved over 6-month project (vs traditional copy/update method)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Coordination errors:</strong> Zero—designers always had latest data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Version confusion:</strong> Eliminated—single source of truth for each element</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>File sizes:</strong> Smaller—references vs full objects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Team satisfaction:</strong> High—designers appreciated automatic updates</span>
              </li>
            </ul>
          </div>

          <h3>Key Success Factors</h3>
          <ol>
            <li><strong>Proper setup:</strong> Tom invested time in Week 1 to establish structure correctly</li>
            <li><strong>Team training:</strong> All designers understood how Data Shortcuts work</li>
            <li><strong>Communication:</strong> Tom notified team when making major source changes</li>
            <li><strong>Discipline:</strong> Team followed the workflow—no shortcuts (ironically) around Data Shortcuts</li>
            <li><strong>Documentation:</strong> Simple rules posted: "Reference, don't copy. Always synchronize."</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">CAD Manager's Quote:</h3>
            <p className="italic">
              "Data Shortcuts are Civil 3D's superpower, but many firms don't use them properly. On this project, we 
              committed to doing it right. The investment was maybe 4 extra hours in Week 1 to set up and train. The 
              return was 40+ hours saved and zero coordination errors. Every multi-designer project should use this workflow."
            </p>
            <p className="text-right mt-2"><em>— Tom Harrison, CAD Manager</em></p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">Designer's Quote:</h3>
            <p className="italic">
              "I was skeptical at first—'Why can't I just copy the surface into my drawing?' But after the first time 
              the EG surface was updated and my drawing automatically got the new data, I was sold. I didn't have to do 
              anything. It just worked. That's how design software should work."
            </p>
            <p className="text-right mt-2"><em>— Jessica Martinez, Designer A (Phase 1)</em></p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Surface & Data Shortcuts Checklist</h2>
          <p className="text-gray-600 mb-6">Your guide to creating surfaces and managing Data Shortcuts effectively.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Finished Grade Surface</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create <code>FG-Surface.dwg</code> in <code>04_Design/Surfaces/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Xref BASE-XREF.dwg</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Reference EG surface Data Shortcut</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create feature lines for design elements (building pads, parking, swales)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set elevations on feature lines (grip edit or elevation editor)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create new surface: "FG"</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add feature lines as breaklines to FG surface</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add surface boundary</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>QC surface (view in 3D, check contours)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create Data Shortcut for FG surface</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Setting Up Data Shortcuts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify <code>_Shortcuts</code> folder exists in project root</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>In each drawing: Toolspace &gt; Prospector &gt; Right-click Data Shortcuts &gt; Set Working Folder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Navigate to project <code>_Shortcuts</code> folder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify setting (Data Shortcuts node should show correct path)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Data Shortcuts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Ensure object (surface, alignment, etc.) is complete and verified</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Toolspace &gt; Prospector &gt; Surfaces (or Alignments, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click object &gt; Create Data Shortcut</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify XML file created in <code>_Shortcuts/[ObjectType]/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test: Open another drawing and attempt to reference</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Referencing Data Shortcuts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open target drawing (where you need the object)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify Data Shortcuts working folder is set</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; [Object Type]</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click desired object &gt; Create Reference</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Object appears with shortcut arrow icon in Prospector</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify object displays correctly in drawing</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Synchronizing Data Shortcuts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open drawing with referenced objects</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Look for "out of date" notification in Prospector</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click object &gt; Synchronize (for individual object)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Or: Right-click Data Shortcuts &gt; Synchronize All (for all references)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify updates appear correctly</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Cut/Fill Analysis</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Ensure both EG and FG surfaces are in drawing (or referenced)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select FG surface</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Contextual Ribbon: Analyze panel &gt; Cut/Fill Analysis</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Base surface: EG</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Comparison surface: FG</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set color scheme (red=cut, blue=fill)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Review visual display</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>For quantities: Analyze tab &gt; Compute Materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Data Shortcuts & Surface Commands</h2>
          <p className="text-gray-600 mb-6">Quick reference for common operations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Data Shortcuts Commands
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Set Working Folder</td>
                    <td>Right-click Data Shortcuts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Shortcut</td>
                    <td>Right-click object &gt; Create Data Shortcut</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Reference</td>
                    <td>Right-click shortcut &gt; Create Reference</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Synchronize</td>
                    <td>Right-click reference &gt; Synchronize</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Sync All</td>
                    <td>Right-click Data Shortcuts &gt; Synchronize All</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Surface Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">CREATESURFACE</td>
                    <td>Create new surface</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">EDITSURFACE</td>
                    <td>Edit surface definition</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">FEATURELINE</td>
                    <td>Create feature line</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">GRADING</td>
                    <td>Create grading object</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-accent">3DORBIT</td>
                    <td>View surface in 3D</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
              <h3 className="font-bold mb-3 text-primary-light">Surface Types Quick Guide</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">EG Surface</td>
                    <td>From survey points + breaklines</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">FG Surface</td>
                    <td>From feature lines/grading</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Corridor Surface</td>
                    <td>Auto-generated from corridor</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Volume Surface</td>
                    <td>EG vs FG comparison</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Composite Surface</td>
                    <td>Combined multiple surfaces</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Critical Rules
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ Reference, don't copy surfaces</li>
                <li>✓ NEVER move _Shortcuts folder</li>
                <li>✓ Always synchronize after source changes</li>
                <li>✓ Can only edit in source drawing</li>
                <li>✓ Set working folder in EVERY drawing</li>
                <li>✗ DON'T skip QC before creating shortcuts</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">The Golden Rule of Data Shortcuts</h3>
            <p className="text-lg italic">
              "One source of truth, many references. Edit once, update everywhere."
            </p>
            <p className="text-sm mt-2">
              This is the fundamental principle that makes Civil 3D workflow efficient.
            </p>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Test Data Shortcuts before full production—create shortcut and reference in test drawing</li>
              <li>• Document which drawing is the source for each design element</li>
              <li>• Communicate to team when making major changes to source drawings</li>
              <li>• Use meaningful names for surfaces (EG, FG, not Surface1, Surface2)</li>
              <li>• Keep separate drawings for separate surfaces—improves performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Data Shortcuts: Civil 3D's Secret Weapon"</h2>
          <p className="text-gray-600 mb-6">A compelling 8-minute demonstration of Data Shortcuts power and proper usage.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">COLD OPEN (0:00-0:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Split screen—left side shows designer manually copying surface, right side shows automatic update via Data Shortcut]</p>
              <p>
                "Two designers. Same change. On the left, John is manually copying an updated surface from one drawing to another. 
                Thirty minutes of tedious work. On the right, Sarah's drawing updates automatically in 3 seconds. She didn't do anything.
              </p>
              <p>
                "The difference? Data Shortcuts. And if you're not using them, you're working ten times harder than you need to."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:30-1:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Title card]</p>
              <p>
                "Welcome to Session 5 of Civil 3D Workflow Mastery. Today we're diving deep into surfaces and Data Shortcuts—
                the feature that separates efficient Civil 3D teams from everyone else.
              </p>
              <p>
                "I'm going to show you a project where Data Shortcuts saved 40 hours over 6 months. Then we'll walk through 
                creating surfaces, setting up Data Shortcuts, and making sure they work flawlessly on your projects. Let's go."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">WHY DATA SHORTCUTS MATTER (1:00-2:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Animation showing traditional copy method vs Data Shortcuts method]</p>
              <p>
                "Here's the problem with traditional CAD workflow: You have a surface. You need it in three different drawings. 
                So you copy it three times. Now you have four copies of the same surface.
              </p>
              <p>
                "The client requests a change. Now you have to update the surface in the original drawing, PLUS manually update 
                or re-copy to the other three drawings. And if someone forgets to update one of them? You have inconsistent data. 
                That's how errors happen.
              </p>
              <p>[Show diagram of Data Shortcuts workflow]</p>
              <p>
                "Data Shortcuts solve this. You create a surface in ONE drawing—the source. You create a shortcut to it. Then 
                in your other drawings, you create REFERENCES to that shortcut. Not copies—references.
              </p>
              <p>
                "When you change the source surface, all the references update automatically. One source of truth. Many references. 
                Edit once, update everywhere. That's the power."
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">CREATING A FINISHED GRADE SURFACE (2:30-4:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Screen recording of FG surface creation]</p>
              <p>
                "Let me show you how to create a finished grade surface. I'll work quickly but you can follow the detailed 
                checklist that comes with this session.
              </p>
              <p>[Screen recording begins]</p>
              <p>
                "Create new drawing, save as FG-Surface.dwg in your Surfaces folder. Xref your BASE-XREF. Now reference your 
                EG surface Data Shortcut—don't copy it, reference it. Toolspace, Prospector, Data Shortcuts, Surfaces, right-click 
                EG, Create Reference. See? The EG surface appears but with a little arrow icon. That means it's a reference.
              </p>
              <p>
                "Now create feature lines for your design. Home tab, Create Design panel, Feature Line. Draw your building pad 
                perimeter. Set elevations—grip edit the vertices, or use the Elevation Editor in the ribbon. Draw parking lot 
                edges, swale centerlines, wherever you need elevation control.
              </p>
              <p>
                "Create new surface: FG. Add your feature lines as breaklines. The surface builds from your feature line geometry. 
                Add a boundary. View it—does it look right? QC in 3D. Good.
              </p>
              <p>
                "Now create a Data Shortcut for your FG surface. Right-click surface, Create Data Shortcut. Done. This FG surface 
                can now be referenced in your corridor drawings, your MODEL.dwg, wherever you need it."
              </p>
              <p>[End screen recording]</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">SETTING UP DATA SHORTCUTS (4:30-5:45)</h3>
              <p>
                "The most common Data Shortcuts problem? People forget to set the working folder. This step is REQUIRED in every 
                drawing. Let me show you.
              </p>
              <p>[Screen recording]</p>
              <p>
                "Open any drawing. Toolspace, Prospector, right-click Data Shortcuts, Set Working Folder. Navigate to your project's 
                _Shortcuts folder. Click OK. That's it.
              </p>
              <p>
                "You have to do this in EVERY drawing. It's not a one-time thing. Every drawing needs to know where your project's 
                _Shortcuts folder lives. Get in the habit: New drawing, first thing, set working folder.
              </p>
              <p>
                "Once it's set, you can see available shortcuts. Expand Data Shortcuts, Surfaces—there's your EG surface, your FG 
                surface, any surfaces you've created shortcuts for. Right-click, Create Reference, done.
              </p>
              <p>
                "When the source changes, you'll see an 'out of date' warning. Right-click the reference, Synchronize. It updates 
                automatically. Three seconds vs thirty minutes of manual work."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE REAL-WORLD PAYOFF (5:45-7:00)</h3>
              <p>
                "Let me tell you about the Riverside Mixed-Use project. Three designers, working in parallel on three different 
                phases. All sharing a common EG surface and main road alignment.
              </p>
              <p>
                "They used Data Shortcuts properly. Every designer referenced the EG surface—didn't copy it. When the EG surface 
                was updated twice during the project, all three designers just clicked Synchronize. Done.
              </p>
              <p>
                "The main road alignment changed six times during design. Each time, the designer responsible for the road updated 
                the source drawing. The other two designers clicked Synchronize. Their drawings updated automatically.
              </p>
              <p>
                "Over six months, estimated time saved: 40+ hours. Zero coordination errors. Zero version confusion. Everyone always 
                working with the latest data.
              </p>
              <p>
                "The CAD manager's quote: 'Data Shortcuts are Civil 3D's superpower.' And he's right."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">YOUR ACTION PLAN (7:00-7:40)</h3>
              <p>
                "Here's what I want you to do on your next project. Set up the _Shortcuts folder. Create your EG surface, QC it, 
                create a Data Shortcut. Test it—open another drawing, set working folder, create reference. Make sure it works.
              </p>
              <p>
                "Then use Data Shortcuts for EVERYTHING. Surfaces, alignments, pipe networks, corridors. If it's a design object 
                that might be used in multiple drawings, create a shortcut.
              </p>
              <p>
                "Follow two rules: 'Reference, don't copy.' And 'Always synchronize.' Make these your mantra. Put them on a sticky 
                note on your monitor if you have to.
              </p>
              <p>
                "Do this right, and you'll save hours every week. Do it wrong, and you're back to manual updates and version chaos."
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (7:40-8:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Next session preview]</p>
              <p>
                "Next up is Session 6: Alignments and Profiles with Data Shortcuts. We'll create horizontal and vertical alignments, 
                design profiles, and of course, use Data Shortcuts so your alignments update across all your drawings automatically. 
                See you there!"
              </p>
              <p className="italic text-gray-700">[End card: Download checklist link]</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-primary-light mb-2">Production Notes:</h3>
            <ul className="text-sm space-y-1">
              <li>• Total duration: ~8 minutes</li>
              <li>• Use split-screen comparisons to show Data Shortcuts vs manual methods</li>
              <li>• Screen recording showing actual creation and referencing process</li>
              <li>• Animation showing "one source, many references" concept</li>
              <li>• Emphasize the time savings—make it tangible</li>
              <li>• Include before/after file size comparison</li>
            </ul>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
