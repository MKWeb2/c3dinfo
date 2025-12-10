import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Route } from 'lucide-react'

export default function Session6() {
  return (
    <SessionLayout 
      sessionNumber={6} 
      title="Alignments & Profiles with Data Shortcuts"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Alignments in Civil 3D: The Backbone of Infrastructure Design</h3>
          <p>
            Alignments define the horizontal and vertical geometry of linear infrastructure—roads, trails, pipelines, 
            railways. In Civil 3D, alignments are intelligent objects that know their geometry, stationing, and can be 
            referenced across multiple drawings using Data Shortcuts.
          </p>

          <h4>Components of a Complete Alignment System:</h4>
          <ul>
            <li><strong>Horizontal Alignment:</strong> The plan view centerline with curves and tangents</li>
            <li><strong>Profile (Vertical Alignment):</strong> The elevation view showing grades and vertical curves</li>
            <li><strong>Profile View:</strong> The graphical representation showing profile geometry</li>
            <li><strong>Assemblies & Corridors:</strong> Cross-sections applied along the alignment (Session 7)</li>
          </ul>

          <h3>Creating Horizontal Alignments</h3>

          <h4>Step 1: Prepare the Alignment Drawing</h4>
          <ol>
            <li>Create new drawing from template</li>
            <li>Save as: <code>[RoadName]-Alignment.dwg</code> in <code>04_Design/Alignments/</code></li>
            <li>Example: <code>MainStreet-Alignment.dwg</code></li>
            <li>Xref BASE-XREF.dwg for property lines and reference</li>
            <li>Reference EG surface Data Shortcut (needed for profile design)</li>
          </ol>

          <h4>Step 2: Create Horizontal Alignment</h4>
          <p><strong>Method 1: Alignment Layout Tools (Most Common)</strong></p>
          <ol>
            <li>Go to <code>Home tab &gt; Create Design panel &gt; Alignment &gt; Alignment Creation Tools</code></li>
            <li>In Create Alignment dialog:
              <ul>
                <li><strong>Name:</strong> Use clear name like "MainStreet-CL"</li>
                <li><strong>Type:</strong> Centerline (typical for roads)</li>
                <li><strong>Site:</strong> Usually &lt;none&gt; or create project-specific site</li>
                <li><strong>Alignment Style:</strong> Select appropriate style from template</li>
                <li><strong>Alignment Label Set:</strong> Choose label set (stations, geometry points, etc.)</li>
              </ul>
            </li>
            <li>Click OK to enter layout mode</li>
            <li>Alignment Layout Tools toolbar appears</li>
          </ol>

          <p><strong>Using Alignment Layout Tools:</strong></p>
          <ul>
            <li><strong>Tangent-Tangent (No Curves):</strong> Click to place PI (point of intersection) points</li>
            <li><strong>Tangent-Tangent (With Curves):</strong> Places curves automatically between tangents</li>
            <li><strong>Fixed/Floating Curves:</strong> Specific curve radius or best-fit</li>
            <li><strong>Free Spiral-Curve-Spiral:</strong> For high-speed roads requiring spiral transitions</li>
          </ul>

          <p><strong>Design Tips:</strong></p>
          <ul>
            <li>Start from known point (e.g., existing road intersection)</li>
            <li>Work through site following desired path</li>
            <li>Use constraints: minimum radius, maximum grade, etc.</li>
            <li>Snap to objects when connecting to existing features</li>
          </ul>

          <h4>Step 3: Edit and Refine Alignment</h4>
          <p>After initial creation, refine geometry:</p>
          <ul>
            <li><strong>Grip Editing:</strong> Select alignment, use grips to adjust PI locations</li>
            <li><strong>Geometry Editor:</strong> Right-click alignment &gt; Edit Alignment Geometry
              <ul>
                <li>Modify tangent lengths</li>
                <li>Change curve radii</li>
                <li>Insert/delete PIs</li>
                <li>Add/remove spirals</li>
              </ul>
            </li>
            <li><strong>Alignment Properties:</strong> Station equations, design speeds, superelevation</li>
          </ul>

          <h4>Step 4: Review Alignment Report</h4>
          <ul>
            <li>Select alignment &gt; Contextual Ribbon: <code>Alignment Properties</code></li>
            <li>Review <code>Entities</code> tab: Lists all tangents, curves, spirals with dimensions</li>
            <li>Verify minimum radius meets design standards</li>
            <li>Check tangent lengths are adequate</li>
          </ul>

          <h3>Creating Profiles and Profile Views</h3>
          <p>Profiles define vertical geometry—grades and vertical curves.</p>

          <h4>Step 1: Create Surface Profile</h4>
          <p>First, sample the existing ground surface along the alignment:</p>
          <ol>
            <li>Select alignment in drawing</li>
            <li>Contextual Ribbon: <code>Create Design panel &gt; Profile &gt; Create Surface Profile</code></li>
            <li>In Create Profile from Surface dialog:
              <ul>
                <li>Select EG surface to sample</li>
                <li>Profile name: Typically "EG" or "Existing Ground"</li>
                <li>Station range: Usually full alignment</li>
                <li>Click <code>Add</code> to add surface to profile</li>
              </ul>
            </li>
            <li>Click <code>Draw in Profile View</code></li>
          </ol>

          <h4>Step 2: Create Profile View</h4>
          <p>Profile View is the graphical window showing the profile:</p>
          <ol>
            <li>After clicking "Draw in Profile View", dialog appears</li>
            <li>Configure:
              <ul>
                <li><strong>Profile View Style:</strong> Select from template styles</li>
                <li><strong>Station Range:</strong> Automatic (full alignment) or Custom</li>
                <li><strong>Profile View Height:</strong> Automatic (based on elevation range) or specify</li>
                <li><strong>Grid:</strong> Horizontal and vertical grid intervals</li>
              </ul>
            </li>
            <li>Click in drawing to place Profile View—typically below plan view alignment</li>
            <li>Profile View displays with EG profile shown</li>
          </ol>

          <h4>Step 3: Design Finished Grade Profile</h4>
          <p>Create the proposed vertical alignment:</p>
          <ol>
            <li>Select Profile View (the frame, not the profile inside)</li>
            <li>Contextual Ribbon: <code>Launch Pad &gt; Profile Creation Tools</code></li>
            <li>In Create Profile dialog:
              <ul>
                <li><strong>Name:</strong> "FG" or "Proposed"</li>
                <li><strong>Profile Style:</strong> Design style (typically solid line, distinct from EG)</li>
                <li><strong>Profile Label Set:</strong> Station/elevation labels</li>
              </ul>
            </li>
            <li>Click OK—Profile Layout Tools toolbar appears</li>
          </ol>

          <p><strong>Profile Layout Tools:</strong></p>
          <ul>
            <li><strong>Draw Tangents:</strong> Click to place PVI (point of vertical intersection) points</li>
            <li><strong>Fixed Vertical Curve:</strong> Insert curve of specific length between grades</li>
            <li><strong>Free Vertical Curve:</strong> Auto-insert curves meeting standards</li>
            <li><strong>Best Fit:</strong> Fit profile to points or alignment</li>
          </ul>

          <p><strong>Design Considerations:</strong></p>
          <ul>
            <li>Match existing roads at tie-in points</li>
            <li>Meet minimum grades (typically 0.5% for drainage)</li>
            <li>Meet maximum grades (varies by road type and standards)</li>
            <li>Adequate vertical curve lengths (K-values for sight distance)</li>
            <li>Balance cut and fill where possible</li>
          </ul>

          <h4>Step 4: Edit Profile Geometry</h4>
          <ul>
            <li><strong>Grip Editing:</strong> Select profile in Profile View, drag PVIs vertically</li>
            <li><strong>Profile Grid View:</strong> Tabular editor showing all PVIs and curves with exact values</li>
            <li><strong>Profile Properties:</strong> Review vertical curve lengths, grades, K-values</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Alignment and Profile Mistakes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Creating alignment without referencing EG surface:</strong> Can't create profiles later</li>
              <li><strong>Not using alignment layout tools:</strong> Hand-drawn polylines aren't intelligent alignments</li>
              <li><strong>Inadequate curve radii:</strong> Violates design standards, unsafe for design speed</li>
              <li><strong>Forgetting vertical curves:</strong> Sharp grade breaks are uncomfortable and unsafe</li>
              <li><strong>Not creating Data Shortcuts:</strong> Can't reference in corridor or other drawings</li>
            </ul>
          </div>

          <h3>Creating Data Shortcuts for Alignments and Profiles</h3>

          <h4>Create Alignment Data Shortcut:</h4>
          <ol>
            <li>In source drawing (e.g., MainStreet-Alignment.dwg)</li>
            <li>Toolspace &gt; Prospector &gt; Alignments &gt; Centerline Alignments</li>
            <li>Right-click your alignment &gt; <code>Create Data Shortcut</code></li>
            <li>XML file created in <code>_Shortcuts/Alignments/</code></li>
          </ol>

          <h4>Reference Alignment in Another Drawing:</h4>
          <ol>
            <li>Open target drawing (e.g., corridor drawing)</li>
            <li>Set Data Shortcuts working folder if not already done</li>
            <li>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Alignments &gt; Centerline Alignments</li>
            <li>Right-click your alignment &gt; <code>Create Reference</code></li>
            <li>Alignment appears in your drawing—can be used as target for corridor, profiles, etc.</li>
          </ol>

          <h4>Profiles and Data Shortcuts:</h4>
          <ul>
            <li>Profiles are "children" of alignments</li>
            <li>When you reference an alignment, you can also reference its profiles</li>
            <li>Right-click referenced alignment &gt; <code>Create Profile View</code></li>
            <li>Select which profiles to display (EG, FG, etc.)</li>
          </ul>

          <h3>Advanced Alignment Techniques</h3>

          <h4>Offset Alignments:</h4>
          <p>Create parallel alignments (e.g., edge of pavement from centerline):</p>
          <ol>
            <li>Select alignment</li>
            <li>Contextual Ribbon: <code>Create Offset Alignment</code></li>
            <li>Specify offset distance (e.g., 12' for lane edge)</li>
            <li>Side: Left or Right</li>
            <li>Offset alignment created automatically, updates when parent changes</li>
          </ol>

          <h4>Widening and Transitions:</h4>
          <p>For lanes that widen:</p>
          <ul>
            <li>Use <code>Widening</code> tool in Alignment Layout Tools</li>
            <li>Or create multiple offset alignments at different stations</li>
            <li>Useful for turn lanes, tapers, intersections</li>
          </ul>

          <h4>Superelevation:</h4>
          <p>Banking curves for drainage and vehicle dynamics:</p>
          <ol>
            <li>Select alignment &gt; Alignment Properties</li>
            <li>Go to <code>Superelevation</code> tab</li>
            <li>Calculate superelevation based on design speed and curve radius</li>
            <li>Superelevation data stored with alignment, used in corridor modeling</li>
          </ol>

          <h3>Profile Best Practices</h3>

          <h4>Vertical Curve Design:</h4>
          <ul>
            <li><strong>Crest Curves:</strong> Sight distance governs—use K-value from design standards</li>
            <li><strong>Sag Curves:</strong> Comfort and drainage governs—typically less critical than crest</li>
            <li><strong>K-Value:</strong> Curve length per percent grade change (e.g., K=100 means 100' curve for 1% grade change)</li>
          </ul>

          <h4>Grade Break Points:</h4>
          <ul>
            <li>Place PVIs at logical locations: intersections, driveways, drainage features</li>
            <li>Avoid unnecessary grade breaks—smoother is better</li>
            <li>Match existing grades at tie-in points precisely</li>
          </ul>

          <h4>Cut/Fill Analysis:</h4>
          <p>Compare EG and FG profiles visually:</p>
          <ul>
            <li>In Profile View, both profiles display</li>
            <li>Area between = cut (above EG) or fill (below EG)</li>
            <li>Use <code>Volume Report</code> for quantities</li>
            <li>Adjust FG profile to balance cut/fill if economical</li>
          </ul>

          <h3>Workflow Summary: Alignment to Corridor</h3>
          <ol>
            <li><strong>Create Horizontal Alignment</strong> in [RoadName]-Alignment.dwg</li>
            <li><strong>Sample EG Surface</strong> to create EG profile</li>
            <li><strong>Create Profile View</strong> to display profiles</li>
            <li><strong>Design FG Profile</strong> with appropriate grades and curves</li>
            <li><strong>Create Data Shortcuts</strong> for alignment (and profiles if needed)</li>
            <li><strong>Reference in Corridor Drawing</strong> (Session 7) to build 3D road model</li>
          </ol>

          <h3>Troubleshooting Alignments and Profiles</h3>

          <h4>Problem: Can't Create Profile from Surface</h4>
          <p><strong>Cause:</strong> Surface not loaded or alignment doesn't cross surface</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Verify EG surface is in drawing (or referenced)</li>
            <li>Check that alignment path crosses the surface boundary</li>
            <li>Try recreating surface profile</li>
          </ul>

          <h4>Problem: Profile View is Distorted</h4>
          <p><strong>Cause:</strong> Vertical exaggeration setting</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Right-click Profile View &gt; Profile View Properties</li>
            <li>Check <code>Vertical Scale</code>—may be exaggerated (e.g., 10:1)</li>
            <li>Adjust to appropriate scale for display</li>
          </ul>

          <h4>Problem: Alignment Referenced but Won't Display</h4>
          <p><strong>Cause:</strong> Outside current view or display settings</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Zoom Extents to see if alignment is far away</li>
            <li>Check alignment style—may be set to no display</li>
            <li>Verify alignment layer is not frozen</li>
          </ul>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Alignment Redesign Propagates Instantly to 15 Sheets</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Project Name:</strong> Valley Creek Trail Extension</div>
              <div><strong>Location:</strong> Austin, Texas</div>
              <div><strong>Scope:</strong> 2.5-mile multi-use trail with three bridges</div>
              <div><strong>Challenge:</strong> Late-stage alignment change requested by Parks Department</div>
              <div><strong>Timeline:</strong> 3 days to revise and resubmit</div>
            </div>
          </div>

          <h3>The Request</h3>
          <p>
            Valley Creek Trail was in 90% design review when the Parks Department called: "Can you shift the trail 20 feet 
            south in the Willow Grove section to avoid impacting a grove of mature oak trees? We didn't realize they were 
            there until this week's site walk."
          </p>
          <p>
            The project manager, Carlos, looked at the plans. The Willow Grove section spanned 1,200 linear feet—about 
            half a mile. It appeared on 6 plan sheets, 3 profile sheets, 4 cross-section sheets, and was the basis for 
            the entire grading design in that area.
          </p>
          <p>
            In a traditional CAD workflow, this would be a nightmare: manually adjust the alignment on each sheet, redraw 
            profiles, recalculate cross-sections, update grading. Estimated time: 40+ hours, possibly requiring deadline extension.
          </p>

          <h3>The Data Shortcuts Solution</h3>
          <p>
            But Carlos's team had set up the project properly using Civil 3D's Data Shortcuts workflow. Here's what happened:
          </p>

          <h4>Day 1, Morning: Alignment Revision</h4>
          <ol>
            <li>Designer opened <code>TrailCenterline-Alignment.dwg</code> (source drawing)</li>
            <li>Used alignment editing tools to shift the affected section 20 feet south</li>
            <li>Adjusted curves to maintain smooth geometry</li>
            <li>Verified minimum radius still met trail design standards</li>
            <li>Saved the file</li>
          </ol>
          <p><strong>Time spent: 2 hours</strong> (careful geometric design)</p>

          <h4>Day 1, Afternoon: Profile Adjustment</h4>
          <ol>
            <li>Because the alignment shifted, the EG profile changed slightly (different ground elevations)</li>
            <li>Designer adjusted FG profile to maintain target grades while following new EG</li>
            <li>Tweaked two vertical curves to smooth the profile</li>
            <li>Saved the file</li>
          </ol>
          <p><strong>Time spent: 1 hour</strong></p>

          <h4>Day 1, Late Afternoon: Automatic Updates Begin</h4>
          <p>
            The grading designer opened <code>MODEL.dwg</code> where all design elements came together. 
            Civil 3D displayed notification: "Referenced alignment has been modified."
          </p>
          <ol>
            <li>Designer right-clicked alignment in Prospector &gt; <code>Synchronize</code></li>
            <li>Alignment updated to new geometry instantly</li>
            <li>Associated grading referenced the alignment—automatically adjusted to new location</li>
            <li>Spot elevations updated automatically</li>
          </ol>
          <p><strong>Time spent: 5 minutes</strong> (just synchronizing and verification)</p>

          <h4>Day 2, Morning: Sheet Updates</h4>
          <p>
            The sheet files (<code>05_Sheets/</code>) all xref'd MODEL.dwg, which now contained the updated alignment:
          </p>
          <ol>
            <li>Designer opened each of the 15 affected sheet files</li>
            <li>Typed <code>RELOADALL</code> in each to reload xrefs</li>
            <li>Alignment, profiles, and grading all displayed in new locations automatically</li>
            <li>Minor title block text updates (sheet notes mentioning station ranges)</li>
            <li>Verified each sheet, saved</li>
          </ol>
          <p><strong>Time spent: 3 hours</strong> (opening, reloading, verifying 15 sheets)</p>

          <h4>Day 2, Afternoon: QC and Final Checks</h4>
          <ul>
            <li>Project engineer reviewed all sheets</li>
            <li>Verified alignment geometry met standards</li>
            <li>Checked that grading made sense in new location</li>
            <li>Confirmed cut/fill quantities were reasonable</li>
            <li>Generated updated quantity report</li>
          </ul>
          <p><strong>Time spent: 2 hours</strong></p>

          <h4>Day 3: Plot and Submit</h4>
          <ul>
            <li>Plotted revised sheets to PDF</li>
            <li>Created submittal package</li>
            <li>Delivered to Parks Department—2 days ahead of deadline</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              The Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Total time for revision:</strong> ~8 hours (vs 40+ hours estimated for manual method)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Coordination errors:</strong> Zero—all sheets updated from single source</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Deadline:</strong> Met with 2 days to spare</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Client satisfaction:</strong> Parks Department impressed with quick turnaround</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Firm reputation:</strong> Enhanced—responsive and efficient</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-800">
              Time Saved: 32+ hours (vs traditional manual update method)
            </p>
          </div>

          <h3>Key Success Factors</h3>
          <ol>
            <li><strong>Proper initial setup:</strong> Alignment in source drawing, Data Shortcuts created</li>
            <li><strong>Consistent workflow:</strong> All drawings referenced alignment via shortcuts, not copies</li>
            <li><strong>Single source of truth:</strong> One alignment drawing—no confusion about which version is current</li>
            <li><strong>Team understanding:</strong> Everyone knew to synchronize references when source changed</li>
            <li><strong>Time investment upfront:</strong> Proper setup took extra time initially, but paid off massively</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">Project Manager's Quote:</h3>
            <p className="italic">
              "When the Parks Department called with that request, my first thought was 'this is going to blow our deadline.' 
              But then I remembered we'd set this project up with Data Shortcuts properly. We made the change in the source 
              alignment drawing, and everything else updated automatically. What would have been a week of panic was two days 
              of methodical work. This is why we invested time in learning the proper Civil 3D workflow."
            </p>
            <p className="text-right mt-2"><em>— Carlos Ruiz, PE, Project Manager</em></p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Alignment & Profile Creation Checklist</h2>
          <p className="text-gray-600 mb-6">Step-by-step guide for creating alignments and profiles with Data Shortcuts.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Horizontal Alignment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create drawing: <code>[RoadName]-Alignment.dwg</code> in <code>04_Design/Alignments/</code></span>
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
                  <span>Home tab &gt; Create Design &gt; Alignment &gt; Alignment Creation Tools</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Name alignment clearly (e.g., "MainStreet-CL")</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select alignment style and label set</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Use layout tools to draw alignment geometry</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Review alignment report: verify curve radii and tangent lengths</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Edit as needed using grips or Geometry Editor</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Surface Profile (EG)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select alignment in drawing</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Contextual Ribbon: Create Surface Profile</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select EG surface, name profile "EG"</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Click "Add" then "Draw in Profile View"</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Profile View</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>In Profile View dialog, select style and settings</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Configure station range (usually Automatic)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set profile view height (Automatic or specify)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Click in drawing to place—typically below plan view alignment</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify EG profile displays correctly</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Designing Finished Grade Profile (FG)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select Profile View</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Contextual Ribbon: Launch Pad &gt; Profile Creation Tools</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Name profile "FG" or "Proposed"</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select design profile style and label set</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Use Draw Tangents tool to place PVIs (point of vertical intersection)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Insert vertical curves at grade breaks</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify grades meet standards (min/max slopes)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Check vertical curve lengths (K-values for sight distance)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Match existing grades at tie-in points</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Alignment Data Shortcut</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify alignment and profiles are complete and correct</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Toolspace &gt; Prospector &gt; Alignments &gt; Centerline Alignments</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click alignment &gt; Create Data Shortcut</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify XML file created in <code>_Shortcuts/Alignments/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test: Open another drawing and reference the alignment shortcut</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Referencing Alignment in Other Drawings</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open target drawing (e.g., corridor or MODEL drawing)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set Data Shortcuts working folder if needed</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Alignments</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click alignment &gt; Create Reference</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Alignment appears with shortcut arrow icon</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify alignment displays correctly</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>If needed, create Profile View to display profiles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Alignment & Profile Commands</h2>
          <p className="text-gray-600 mb-6">Quick reference for alignment and profile operations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <Route className="h-5 w-5 mr-2" />
                Alignment Commands
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Alignment</td>
                    <td>Home &gt; Create Design &gt; Alignment</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Edit Geometry</td>
                    <td>Right-click alignment &gt; Edit Alignment Geometry</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Alignment Properties</td>
                    <td>Right-click &gt; Alignment Properties</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Offset</td>
                    <td>Select alignment &gt; Create Offset Alignment</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Data Shortcut</td>
                    <td>Right-click &gt; Create Data Shortcut</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Profile Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Surface Profile</td>
                    <td>Select alignment &gt; Create Surface Profile</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Profile View</td>
                    <td>After surface profile: Draw in Profile View</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Design Profile</td>
                    <td>Select Profile View &gt; Profile Creation Tools</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Edit Profile</td>
                    <td>Select profile &gt; Geometry Editor</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Profile Grid View</td>
                    <td>Select profile &gt; Edit Profile Grid View</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
              <h3 className="font-bold mb-3 text-primary-light">Design Standards Quick Reference</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2"><strong>Min Radius (local road):</strong></td>
                    <td>150-300 ft (varies by speed)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>Min Grade:</strong></td>
                    <td>0.5% (drainage)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>Max Grade (road):</strong></td>
                    <td>6-12% (varies by type)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><strong>K-value (crest):</strong></td>
                    <td>30-100+ (sight distance)</td>
                  </tr>
                  <tr>
                    <td className="py-2"><strong>K-value (sag):</strong></td>
                    <td>20-60 (comfort)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs mt-2 italic">Note: Check local standards—values vary by jurisdiction</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Don't Forget!
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ Reference EG surface before creating profiles</li>
                <li>✓ Always use alignment layout tools (not polylines!)</li>
                <li>✓ Add vertical curves at all grade breaks</li>
                <li>✓ Verify design standards are met</li>
                <li>✓ Create Data Shortcuts for alignments</li>
                <li>✗ DON'T copy alignments between drawings—reference them!</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">The Golden Rule of Alignments</h3>
            <p className="text-lg italic">
              "One alignment, one source drawing. Reference everywhere you need it."
            </p>
            <p className="text-sm mt-2">
              This prevents version confusion and allows instant updates across all drawings when geometry changes.
            </p>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Use meaningful alignment names (MainStreet-CL, not Alignment1)</li>
              <li>• Match existing roads precisely at tie-in points</li>
              <li>• Balance cut and fill in profile design when economical</li>
              <li>• Review alignment report to verify all standards are met</li>
              <li>• Test Data Shortcuts—reference in another drawing before proceeding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Alignments That Update Everywhere Automatically"</h2>
          <p className="text-gray-600 mb-6">An engaging 8-minute demonstration of alignment and profile creation with Data Shortcuts.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">COLD OPEN (0:00-0:30)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Designer frantically updating alignment on 15 different sheets by hand vs another designer clicking one button and all sheets update]</p>
              <p>
                "Late-stage design change. Client wants the road moved. On the left, this designer is spending the next two days 
                manually updating 15 sheets. On the right, this designer changes the source alignment, clicks Synchronize, and all 
                15 sheets update in 30 seconds.
              </p>
              <p>
                "Same change. Two very different outcomes. Let me show you the right way."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:30-1:00)</h3>
              <p>
                "Welcome to Session 6 of Civil 3D Workflow Mastery. Today we're covering alignments and profiles—the backbone 
                of every linear infrastructure project. And more importantly, how to set them up so changes propagate instantly 
                to every drawing.
              </p>
              <p>
                "I'll show you a project where an alignment change was requested with a 3-day deadline. Using Data Shortcuts 
                properly, they delivered in 2 days. Then we'll walk through creating alignments, profiles, and setting up Data 
                Shortcuts so your projects work the same way. Let's go."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">CREATING ALIGNMENTS (1:00-3:30)</h3>
              <p className="italic text-gray-700 mb-2">[Screen recording of alignment creation process]</p>
              <p>
                "Let me show you how to create a horizontal alignment properly. Follow the written checklist for details—I'll 
                move quickly here.
              </p>
              <p>
                "Create new drawing, save as [RoadName]-Alignment.dwg in your Alignments folder. Xref BASE-XREF. Reference your 
                EG surface Data Shortcut—you'll need this for profiles later.
              </p>
              <p>
                "Home tab, Create Design, Alignment, Alignment Creation Tools. Name it clearly—MainStreet-CL, not Alignment1. 
                Select your alignment style and label set. Click OK.
              </p>
              <p>
                "Now you're in layout mode. See this toolbar? These are your alignment layout tools. For basic roads, use 
                Tangent-Tangent With Curves. Click to place points—these are your PIs, points of intersection. Civil 3D 
                automatically adds curves between tangents based on your settings.
              </p>
              <p>
                "Follow your desired path through the site. Snap to existing roads at tie-in points. Press Escape when done. 
                There's your alignment—intelligent, parametric geometry.
              </p>
              <p>
                "Right-click alignment, Alignment Properties, review the Entities tab. See all your tangents and curves with 
                dimensions? Verify minimum radius meets your design standards. If not, edit with grips or the Geometry Editor.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">CREATING PROFILES (3:30-5:30)</h3>
              <p>
                "Now let's add vertical design. Select your alignment. Contextual ribbon: Create Surface Profile. Select your 
                EG surface, name the profile 'EG', click Add, then Draw in Profile View.
              </p>
              <p>
                "Configure your profile view—style, station range, height. Place it below your plan view alignment. There's 
                your EG profile—the existing ground elevations sampled along your alignment.
              </p>
              <p>
                "Now design the FG profile. Select the Profile View frame, Launch Pad, Profile Creation Tools. Name it 'FG' 
                or 'Proposed', pick a design style, click OK.
              </p>
              <p>
                "Use Draw Tangents to place PVIs—points of vertical intersection. Click to set your grades. Insert vertical 
                curves at grade breaks. This is art and science: balance grades for drainage, meet maximum grade standards, 
                smooth ride quality, balance cut and fill.
              </p>
              <p>
                "Check your design: grades reasonable? Vertical curve lengths adequate? Tie into existing roads smoothly? Good. 
                That's your design profile."
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DATA SHORTCUTS MAGIC (5:30-6:45)</h3>
              <p>
                "Now here's where it gets powerful. Right-click your alignment, Create Data Shortcut. Done. That's it.
              </p>
              <p>
                "Open your corridor drawing or MODEL drawing. Set Data Shortcuts working folder. Toolspace, Prospector, Data 
                Shortcuts, Alignments, right-click your alignment, Create Reference. The alignment appears—but it's a reference, 
                not a copy.
              </p>
              <p>
                "Now imagine this: you've used this alignment in 5 different drawings. Corridor, MODEL, cross-section sheets, 
                quantity calculations. One day, the client asks to shift it 20 feet. In traditional workflow, you update the 
                alignment in one drawing, then hunt down the other four and manually update or re-copy. Takes hours.
              </p>
              <p>
                "With Data Shortcuts? Update the alignment in the source drawing. Open the other drawings, click Synchronize. 
                Done. 30 seconds per drawing. That's the payoff.
              </p>
              <p>
                "This is exactly what happened on the Valley Creek Trail project. Alignment change requested, 3-day deadline. 
                They updated the source alignment, synchronized references, verified sheets. Delivered in 2 days. 32 hours saved 
                versus manual method."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">YOUR ACTION PLAN (6:45-7:30)</h3>
              <p>
                "On your next project, create alignments properly. One alignment, one source drawing. Create Data Shortcut 
                immediately after verifying geometry. Reference it everywhere you need it.
              </p>
              <p>
                "When changes happen—and they will—you'll update once and synchronize everywhere. No hunting through multiple 
                files. No version confusion. No missed sheets with old geometry.
              </p>
              <p>
                "This is how professional Civil 3D users work. This is what separates efficient teams from everyone else. Use it."
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (7:30-8:00)</h3>
              <p>
                "Next up is Session 7: Corridors and Design Elements. We'll take your alignments and profiles and build full 
                3D corridor models—roads with lanes, curbs, sidewalks, slopes. And of course, we'll use Data Shortcuts so your 
                corridor updates automatically when the alignment changes. See you there!"
              </p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-primary-light mb-2">Production Notes:</h3>
            <ul className="text-sm space-y-1">
              <li>• Total duration: ~8 minutes</li>
              <li>• Full screen recording of alignment and profile creation</li>
              <li>• Before/after split screen showing manual vs Data Shortcuts method</li>
              <li>• Include animation showing one source, many references concept</li>
              <li>• Emphasize the time savings and error prevention</li>
              <li>• Download checklist and design standards reference sheet</li>
            </ul>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
