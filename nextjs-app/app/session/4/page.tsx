import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Database } from 'lucide-react'

export default function Session4() {
  return (
    <SessionLayout 
      sessionNumber={4} 
      title="Survey Data Import & Existing Conditions"
    >
      {/* Main Content */}
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Understanding Survey Data in Civil 3D</h3>
          <p>
            Survey data is the foundation of every civil engineering project. Accurate existing conditions inform design decisions, 
            prevent costly errors, and ensure regulatory compliance. Civil 3D provides powerful tools for importing, managing, 
            and visualizing survey data—when you understand the workflow.
          </p>

          <h4>Types of Survey Data:</h4>
          <ul>
            <li><strong>Point Data:</strong> .csv, .txt, or point database files containing X, Y, Z, Description</li>
            <li><strong>Total Station Files:</strong> Raw survey observations that need processing</li>
            <li><strong>GPS Data:</strong> Typically exported as point files or shapefiles</li>
            <li><strong>LiDAR Data:</strong> Point cloud data (LAS/LAZ files)</li>
            <li><strong>GIS Data:</strong> Shapefiles or geodatabase files with feature data</li>
          </ul>

          <h3>The Survey Data Workflow</h3>
          <p>Follow this systematic approach for every project:</p>
          <ol>
            <li>Receive and archive original survey data in <code>02_Survey/</code></li>
            <li>Review data format and coordinate system</li>
            <li>Import points into Civil 3D point groups</li>
            <li>Create description key sets for automatic point styling</li>
            <li>Build existing ground surface from survey points</li>
            <li>Quality check the surface for errors</li>
            <li>Create Data Shortcut for the EG surface</li>
          </ol>

          <h3>Step-by-Step: Importing Survey Points</h3>

          <h4>Step 1: Prepare Your Survey Data File</h4>
          <p>Before importing, examine your survey data:</p>
          <ul>
            <li><strong>File Format:</strong> Most common is .csv (Comma-Separated Values) with format: Point#, Northing, Easting, Elevation, Description</li>
            <li><strong>Coordinate Order:</strong> Civil 3D expects Northing (Y) then Easting (X)—NOT X, Y order!</li>
            <li><strong>Units:</strong> Verify units match your drawing (US Survey Feet vs International Feet)</li>
            <li><strong>Descriptions:</strong> Check description codes (e.g., "EP" for edge of pavement, "TB" for top of bank)</li>
          </ul>

          <p>Example .csv format:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
{`1,1000.00,2000.00,100.50,EP
2,1000.00,2025.00,100.75,EP
3,1010.00,2000.00,99.80,TB
4,1015.00,2010.00,98.50,TREE
5,1020.00,2030.00,101.20,BM`}
          </pre>

          <h4>Step 2: Create Your Survey Drawing</h4>
          <ol>
            <li>Open Civil 3D</li>
            <li>Create new drawing from template</li>
            <li>Xref BASE-XREF.dwg for reference (type <code>XREF</code>, attach from <code>04_Design/Base/</code>)</li>
            <li>Save immediately as: <code>EG-Surface.dwg</code> in <code>04_Design/Surfaces/</code></li>
            <li>Verify coordinate system matches project setup (type <code>SETTINGS</code>, check Units and Zone)</li>
          </ol>

          <h4>Step 3: Import Points</h4>
          <ol>
            <li>Go to <code>Insert tab &gt; Import Points</code> button</li>
            <li>In the Import Points dialog:
              <ul>
                <li><strong>Format:</strong> Select PNEZD (space delimited) or PENZD (comma delimited) based on your file</li>
                <li><strong>Source File:</strong> Browse to your survey file in <code>02_Survey/</code></li>
                <li><strong>Add Points to Point Group:</strong> Check this box, create new group called "AllPoints"</li>
                <li><strong>Do coordinate transformation:</strong> Only if your survey data is in different coordinate system</li>
              </ul>
            </li>
            <li>Click OK—points import into drawing</li>
          </ol>

          <h4>Step 4: Create Point Groups for Organization</h4>
          <p>Point groups allow you to manage and display subsets of points:</p>
          <ol>
            <li>Open <code>Toolspace &gt; Prospector &gt; Point Groups</code></li>
            <li>Right-click Point Groups &gt; New</li>
            <li>Create groups based on description codes:
              <ul>
                <li><strong>TopographicPoints:</strong> Include all ground shots (TB, TOB, TC, etc.)</li>
                <li><strong>PavementPoints:</strong> Include EP, BC, etc.</li>
                <li><strong>UtilityFeatures:</strong> Include MH, INV, VALVE, etc.</li>
                <li><strong>Trees:</strong> Include TREE descriptions</li>
                <li><strong>Benchmarks:</strong> Include BM, CONT (control points)</li>
              </ul>
            </li>
            <li>Use <code>Include</code> tab with wildcards: <code>EP*</code> matches EP, EP1, EP2, etc.</li>
          </ol>

          <h4>Step 5: Configure Point Display Styles</h4>
          <ul>
            <li>In <code>Toolspace &gt; Settings &gt; Point &gt; Point Styles</code>, create or modify styles</li>
            <li>Typical styles:
              <ul>
                <li><strong>Topographic:</strong> Small circle, green, visible</li>
                <li><strong>Benchmark:</strong> Larger circle with square, red, always visible</li>
                <li><strong>No Display:</strong> For points used in surface only</li>
              </ul>
            </li>
            <li>Assign styles to point groups for automatic application</li>
          </ul>

          <h3>Creating the Existing Ground Surface</h3>

          <h4>Step 1: Create New Surface</h4>
          <ol>
            <li>In <code>Toolspace &gt; Prospector</code>, right-click <code>Surfaces &gt; Create Surface</code></li>
            <li>Set properties:
              <ul>
                <li><strong>Name:</strong> EG (or Existing-Ground)</li>
                <li><strong>Description:</strong> "Existing Ground Surface from [Survey Date]"</li>
                <li><strong>Style:</strong> Select appropriate contour style (1ft/5ft typical)</li>
                <li><strong>Render Material:</strong> Leave as default or choose terrain material</li>
              </ul>
            </li>
            <li>Click OK</li>
          </ol>

          <h4>Step 2: Add Point Group to Surface</h4>
          <ol>
            <li>Expand the new surface in Prospector: <code>Surfaces &gt; EG &gt; Definition</code></li>
            <li>Right-click <code>Point Groups &gt; Add</code></li>
            <li>Select "TopographicPoints" point group (or AllPoints if not organized yet)</li>
            <li>Click OK—surface builds from points automatically</li>
            <li>Type <code>REGEN</code> to see contours display</li>
          </ol>

          <h4>Step 3: Add Breaklines (Critical!)</h4>
          <p>Breaklines enforce surface behavior at linear features:</p>
          <ul>
            <li><strong>Why breaklines matter:</strong> Without them, triangulation crosses roads, creating false valleys/peaks</li>
            <li><strong>Where to add breaklines:</strong>
              <ul>
                <li>Edge of pavement (both sides of roads)</li>
                <li>Top of bank / bottom of bank (streams, ditches)</li>
                <li>Curb lines</li>
                <li>Building edges</li>
                <li>Retaining wall top/bottom</li>
              </ul>
            </li>
          </ul>

          <p>To add breaklines:</p>
          <ol>
            <li>Draw 3D polylines connecting appropriate survey points (use <code>3DPOLY</code> command)</li>
            <li>Or use <code>Feature Lines</code> for more control</li>
            <li>Add to surface: Right-click <code>EG &gt; Definition &gt; Breaklines &gt; Add</code></li>
            <li>Select breakline type: <strong>Standard</strong> (most common) or <strong>Proximity</strong> (for streams)</li>
            <li>Select your 3D polylines or feature lines</li>
            <li>Surface rebuilds with breaklines enforced—see improved triangulation</li>
          </ol>

          <h4>Step 4: Add Surface Boundaries</h4>
          <p>Boundaries control where your surface displays:</p>
          <ul>
            <li><strong>Outer Boundary:</strong> Limits surface to project area (use property boundary)</li>
            <li><strong>Hide Boundaries:</strong> Removes surface from areas like ponds or buildings</li>
          </ul>

          <ol>
            <li>Draw a closed polyline around your project area (or copy from BASE-XREF if available)</li>
            <li>Right-click <code>EG &gt; Definition &gt; Boundaries &gt; Add</code></li>
            <li>Select boundary type: <strong>Outer</strong> or <strong>Hide</strong></li>
            <li>Select your polyline</li>
            <li>Surface trims to boundary</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Survey Import Problems
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Points import far from origin:</strong> Coordinate system mismatch or wrong coordinate order (X/Y vs N/E)</li>
              <li><strong>Elevations seem wrong:</strong> Vertical datum mismatch or units problem (feet vs meters)</li>
              <li><strong>Surface looks spikey:</strong> Missing breaklines or bad point elevations</li>
              <li><strong>Descriptions don't display:</strong> Description key set not configured</li>
              <li><strong>Surface won't build:</strong> Insufficient points, all points on same elevation, or corrupt data</li>
            </ul>
          </div>

          <h3>Quality Checking Your Surface</h3>
          <p>ALWAYS quality check before proceeding to design:</p>

          <h4>Visual Inspection Methods:</h4>
          <ol>
            <li><strong>Contour Review:</strong> Look for:
              <ul>
                <li>Closed contours inside project (indicate peaks/valleys—are they real?)</li>
                <li>Contours crossing each other (ERROR—should never happen)</li>
                <li>Contour spacing (sudden changes indicate possible data issues)</li>
              </ul>
            </li>
            <li><strong>Triangulation View:</strong> Change surface style to show triangulation
              <ul>
                <li>Long, thin triangles crossing features indicate missing breaklines</li>
                <li>Triangles should follow terrain features logically</li>
              </ul>
            </li>
            <li><strong>3D View:</strong> Use <code>3DORBIT</code> to view surface in 3D
              <ul>
                <li>Look for spikes (bad point elevations)</li>
                <li>Check overall terrain makes sense</li>
              </ul>
            </li>
            <li><strong>Slope Analysis:</strong> Create a slope analysis surface style
              <ul>
                <li>Unusual colors in expected flat areas indicate problems</li>
              </ul>
            </li>
          </ol>

          <h4>Statistical Analysis:</h4>
          <ol>
            <li>Right-click surface in Prospector &gt; <code>Surface Properties</code></li>
            <li>Check <code>Statistics</code> tab:
              <ul>
                <li><strong>Minimum/Maximum Elevation:</strong> Do these make sense for your site?</li>
                <li><strong>Number of Points:</strong> Matches expected point count?</li>
                <li><strong>2D/3D Area:</strong> Roughly matches project area?</li>
              </ul>
            </li>
          </ol>

          <h3>Creating Data Shortcuts for the EG Surface</h3>
          <p>Once your surface is verified and correct:</p>
          <ol>
            <li>Right-click surface in Prospector: <code>EG &gt; Create Data Shortcut</code></li>
            <li>Shortcut XML file created in <code>_Shortcuts/</code> folder automatically</li>
            <li>This surface can now be referenced in other drawings without duplication</li>
            <li>Test by opening a new drawing and referencing the shortcut:
              <ul>
                <li>In new drawing, Toolspace &gt; Prospector &gt; Data Shortcuts &gt; Surfaces</li>
                <li>Right-click <code>EG &gt; Create Reference</code></li>
                <li>Surface appears in your new drawing</li>
              </ul>
            </li>
          </ol>

          <h3>Best Practices for Survey Data Management</h3>

          <h4>File Organization:</h4>
          <ul>
            <li>Keep original survey data in <code>02_Survey/</code> UNTOUCHED</li>
            <li>Work with copies in <code>04_Design/Surfaces/</code></li>
            <li>If survey is revised, save new version with date: <code>SurveyPoints_2024-03-15.csv</code></li>
          </ul>

          <h4>Documentation:</h4>
          <ul>
            <li>Create a text file documenting:
              <ul>
                <li>Survey date and surveyor name</li>
                <li>Coordinate system and datum used</li>
                <li>Any adjustments or transformations applied</li>
                <li>Known issues or areas to verify</li>
              </ul>
            </li>
            <li>Store in <code>01_Admin/</code> folder</li>
          </ul>

          <h4>Point Group Strategy:</h4>
          <ul>
            <li>Create logical point groups matching your workflow</li>
            <li>Use point group order to control display (order matters!)</li>
            <li>Consider creating a "SurfacePoints" group for only points used in EG surface</li>
          </ul>

          <h4>Surface Naming:</h4>
          <ul>
            <li>Use clear, descriptive names: <code>EG</code>, <code>Existing-Ground</code>, <code>EG-2024-March</code></li>
            <li>If multiple survey versions, include date or version number</li>
            <li>Avoid generic names like "Surface1"</li>
          </ul>

          <h3>Handling Survey Data Issues</h3>

          <h4>Problem: Points Import in Wrong Location</h4>
          <p><strong>Cause:</strong> Coordinate system mismatch or X/Y vs N/E order confusion</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Delete imported points</li>
            <li>Verify drawing coordinate system matches survey coordinate system</li>
            <li>Check point file format—swap Northing/Easting if needed</li>
            <li>Use coordinate transformation option if survey is in different system</li>
          </ul>

          <h4>Problem: Surface Has Spikes or Valleys</h4>
          <p><strong>Cause:</strong> Bad point elevations or missing breaklines</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>View surface in 3D to locate problem areas</li>
            <li>Check point elevations in those areas—delete or correct bad points</li>
            <li>Add breaklines along linear features</li>
            <li>Use <code>Simplify Surface</code> tool to reduce noise in noisy data</li>
          </ul>

          <h4>Problem: Surface Won't Build</h4>
          <p><strong>Cause:</strong> Insufficient data, corrupt data, or incorrect settings</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Verify point group contains points (check point group properties)</li>
            <li>Zoom extents to ensure points are visible</li>
            <li>Check for duplicate points at same X,Y with different Z (Civil 3D may reject these)</li>
            <li>Start with simple surface (no breaklines/boundaries) then add complexity</li>
          </ul>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Survey Data Disaster Averted by QC</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Project Name:</strong> Mountain View Business Park</div>
              <div><strong>Location:</strong> Boulder, Colorado</div>
              <div><strong>Scope:</strong> 15-acre commercial site development with grading, utilities, parking</div>
              <div><strong>Survey Date:</strong> January 2024</div>
              <div><strong>Design Team:</strong> 1 project engineer, 1 CAD technician</div>
            </div>
          </div>

          <h3>The Initial Import</h3>
          <p>
            The CAD technician, Mike, received survey data from the client's surveyor—a .csv file with 2,847 points 
            covering the 15-acre site. The project engineer, Lisa, was eager to start grading design, so Mike imported 
            the points quickly and built a surface. "Looks good!" he said, seeing contours display. He created a Data 
            Shortcut and told Lisa she could start designing.
          </p>

          <h3>Week 2: The Problem Surfaces</h3>
          <p>
            Lisa started designing a parking lot in the northwest corner of the site. She noticed something odd: the 
            cut/fill numbers seemed excessive. "Mike, this shows 6 feet of cut, but this area looked pretty flat when 
            we did the site walk. Can you check the surface?"
          </p>

          <p>
            Mike opened EG-Surface.dwg and looked more carefully. In 3D view, he saw several problems:
          </p>
          <ul>
            <li>Sharp spikes in three locations—looked like needles sticking out of the surface</li>
            <li>A valley running through the middle of an existing parking lot that was obviously flat</li>
            <li>The surface extended into a pond shown on the property boundary—obviously wrong</li>
          </ul>

          <h3>The Investigation</h3>
          <p>Mike performed detailed QC that he should have done initially:</p>

          <h4>Finding #1: Bad Point Elevations</h4>
          <ul>
            <li>Examined points at spike locations</li>
            <li>Found three points with elevations 50-60 feet higher than surrounding points</li>
            <li>Contacted surveyor: "These were GPS points with poor satellite coverage—we meant to flag them. Sorry!"</li>
            <li>Solution: Deleted the three bad points, surface rebuilt correctly</li>
          </ul>

          <h4>Finding #2: Missing Breaklines</h4>
          <ul>
            <li>The "valley" through the parking lot was caused by triangulation connecting points across a retaining wall</li>
            <li>Surveyor had shot top-of-wall and bottom-of-wall points, but Mike hadn't added breaklines</li>
            <li>Solution: Created breaklines along both edges of pavement and along retaining walls</li>
            <li>Parking lot now showed correctly as flat surface</li>
          </ul>

          <h4>Finding #3: No Surface Boundary</h4>
          <ul>
            <li>Surface triangulation extended into the pond and beyond property lines</li>
            <li>This created false terrain in areas with no data</li>
            <li>Solution: Created outer boundary using property line, added hide boundary for pond</li>
          </ul>

          <h3>The Process Fix</h3>
          <p>
            Lisa, the project engineer, was frustrated: "We lost almost two weeks because we started designing with a 
            bad surface. We need a QC checklist so this doesn't happen again."
          </p>

          <p>Together, Mike and Lisa created a survey import procedure:</p>

          <h4>Survey Import QC Checklist:</h4>
          <ol>
            <li><strong>Pre-Import:</strong>
              <ul>
                <li>Review survey point file in text editor—check format, look for obvious bad data</li>
                <li>Ask surveyor about coordinate system, units, and any known issues</li>
                <li>Document survey date and source in project notes</li>
              </ul>
            </li>
            <li><strong>Import:</strong>
              <ul>
                <li>Create point groups immediately (Topo, Pavement, Utilities, Trees, Benchmarks)</li>
                <li>Apply point styles for visual differentiation</li>
              </ul>
            </li>
            <li><strong>Surface Build:</strong>
              <ul>
                <li>Build initial surface from topographic points only</li>
                <li>View in 3D—look for spikes or unusual features</li>
                <li>Add breaklines along all linear features (EP, TOB, BOB, curbs, walls)</li>
                <li>Add outer boundary and any hide boundaries</li>
              </ul>
            </li>
            <li><strong>QC Checks (MANDATORY before releasing to design team):</strong>
              <ul>
                <li>Check surface statistics—min/max elevations reasonable?</li>
                <li>View contours—any closed contours inside site? (Verify they're real features)</li>
                <li>View triangulation—long triangles crossing features? (Add breaklines)</li>
                <li>View in 3D—rotate around entire site looking for spikes or valleys</li>
                <li>Spot-check elevations at known benchmarks or features</li>
                <li>Create quick profile along existing features (roads, etc.) to verify reasonableness</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong>
              <ul>
                <li>Create QC report documenting checks performed and any issues found/fixed</li>
                <li>Add to 01_Admin/ folder</li>
              </ul>
            </li>
          </ol>

          <h3>The Do-Over</h3>
          <p>
            With the corrected surface, Mike archived the old version and created EG-Surface_v2.dwg. He followed the 
            new QC checklist meticulously. The entire QC process took 90 minutes but gave him confidence the surface 
            was correct.
          </p>

          <p>
            Lisa started her design over with the corrected surface. The cut/fill numbers now made sense. Grading design 
            proceeded smoothly.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              The Results and Lessons
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time lost initially:</strong> ~16 hours of design work based on bad surface</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Time spent on proper QC:</strong> 90 minutes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>New standard:</strong> QC checklist used on all subsequent projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Culture change:</strong> Team now says "trust but verify" with survey data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Better surveyor communication:</strong> Now have pre-import call to discuss data quality</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-800">
              ROI: 90 minutes of QC prevented 16+ hours of wasted design work
            </p>
          </div>

          <h3>Key Takeaways</h3>
          <ol>
            <li><strong>Never trust survey data blindly:</strong> Surveyors are human, equipment has issues, data gets corrupted</li>
            <li><strong>QC before design:</strong> Fix surface problems BEFORE designers start working</li>
            <li><strong>Use checklists:</strong> Systematic QC catches problems you might miss</li>
            <li><strong>Document everything:</strong> Future you will thank present you</li>
            <li><strong>Communicate with surveyors:</strong> A 5-minute call prevents hours of troubleshooting</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-primary mb-2">Project Engineer's Quote:</h3>
            <p className="italic">
              "I learned an expensive lesson on this project: garbage in, garbage out. If the existing conditions surface 
              is wrong, everything we design on top of it is wrong. Now I won't let anyone start designing until I see 
              the QC report. That 90 minutes of Mike's time is the most valuable 90 minutes of the project."
            </p>
            <p className="text-right mt-2"><em>— Lisa Chen, PE, Project Engineer</em></p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Survey Import & Surface Creation Checklist</h2>
          <p className="text-gray-600 mb-6">Follow this checklist for every survey import to ensure accurate existing conditions.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Pre-Import Preparation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Receive survey data and save to <code>02_Survey/</code> folder (original, untouched)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Contact surveyor: verify coordinate system, units, datum, and any known issues</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Open survey file in text editor to review format and look for obvious problems</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Document survey information in <code>01_Admin/Project_Notes.txt</code></span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating the Surface Drawing</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create new drawing from company template</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Save as: <code>EG-Surface.dwg</code> in <code>04_Design/Surfaces/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Xref BASE-XREF.dwg for reference (type <code>XREF</code>)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify drawing coordinate system matches survey data (type <code>SETTINGS</code>)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Importing Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Go to <code>Insert tab &gt; Import Points</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Select format: PNEZD or PENZD based on your file</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Browse to survey file in <code>02_Survey/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Check "Add Points to Point Group" and create "AllPoints" group</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Import points and verify they appear in drawing</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Zoom Extents to verify points are in correct location (near BASE-XREF)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Point Groups</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "TopographicPoints" group (include TB, TOB, BOB, TC, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "PavementPoints" group (include EP, BC, curb descriptions)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "UtilityFeatures" group (include MH, INV, VALVE, etc.)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "Trees" group (include TREE descriptions)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create "Benchmarks" group (include BM, CONT control points)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Assign appropriate point styles to each group for visual differentiation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Existing Ground Surface</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Toolspace &gt; Prospector &gt; Right-click Surfaces &gt; Create Surface</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Name: "EG" or "Existing-Ground"</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Description: Include survey date</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Style: Select contour style (1ft/5ft typical)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add point group to surface: Right-click EG &gt; Definition &gt; Point Groups &gt; Add</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Type <code>REGEN</code> to see contours</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Adding Breaklines (Critical!)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Draw 3D polylines connecting survey points along linear features</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Edge of pavement (both sides of all roads/drives)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Top of bank / Bottom of bank (streams, ditches)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Curb lines</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Building edges</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Retaining walls (top and bottom)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add breaklines to surface: Right-click EG &gt; Definition &gt; Breaklines &gt; Add</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Adding Surface Boundaries</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Draw or copy property boundary polyline (closed)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add outer boundary: Right-click EG &gt; Definition &gt; Boundaries &gt; Add (type: Outer)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Draw hide boundaries for ponds, buildings, or areas with no data</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Add hide boundaries: Right-click EG &gt; Definition &gt; Boundaries &gt; Add (type: Hide)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Quality Check (MANDATORY!)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Check surface statistics: Right-click EG &gt; Surface Properties &gt; Statistics tab</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify min/max elevations are reasonable for site</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>View contours: Look for closed contours, crossing contours, unusual spacing</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>View triangulation: Change style to show TIN—look for long triangles crossing features</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>View in 3D: Type <code>3DORBIT</code>, rotate around site looking for spikes/valleys</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Spot-check elevations at known benchmarks or features</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create quick profile along existing road to verify reasonableness</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Document QC checks performed and any issues found/fixed</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Creating Data Shortcut</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify surface is complete and QC'd</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Right-click surface in Prospector: EG &gt; Create Data Shortcut</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify shortcut XML file created in <code>_Shortcuts/</code> folder</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Test shortcut: Open new drawing, reference the EG surface shortcut, verify it displays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Survey Import Quick Commands</h2>
          <p className="text-gray-600 mb-6">Essential commands and troubleshooting guide for survey data work.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Key Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">Import Points</td>
                    <td>Insert tab &gt; Import Points</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">CREATESURFACE</td>
                    <td>Create new surface</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">EDITSURFACE</td>
                    <td>Edit surface definition</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">3DPOLY</td>
                    <td>Draw 3D polyline for breaklines</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">3DORBIT</td>
                    <td>View surface in 3D</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono text-accent">REGEN</td>
                    <td>Regenerate display</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-accent">ZE (Zoom Extents)</td>
                    <td>View all objects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Common Point File Formats</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">PNEZD</td>
                    <td>Point#, N, E, Z, Desc (space delimited)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">PENZD</td>
                    <td>Point#, E, N, Z, Desc (comma delimited)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">NEZ</td>
                    <td>N, E, Z only (no point# or desc)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">XYZ</td>
                    <td>X (E), Y (N), Z (may need to swap)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs mt-2 italic">Note: Civil 3D expects Northing (Y) first, then Easting (X)</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
              <h3 className="font-bold mb-3 text-primary-light">Breakline Locations (Don't Forget!)</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Edge of pavement (both sides)</li>
                <li>✓ Top of curb</li>
                <li>✓ Top of bank / Bottom of bank</li>
                <li>✓ Building edges</li>
                <li>✓ Retaining walls (top &amp; bottom)</li>
                <li>✓ Swale centerlines</li>
                <li>✓ Ridge lines and valley lines</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-300">
              <h3 className="font-bold mb-3 text-primary-light flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Troubleshooting Guide
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Points far away?</td>
                    <td>Check coordinate system or N/E order</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Surface spikes?</td>
                    <td>Bad point elevations or missing breaklines</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Won't build?</td>
                    <td>Check point group has points</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Crossing contours?</td>
                    <td>ERROR—check surface for bad data</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Elevations wrong?</td>
                    <td>Units or vertical datum mismatch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">The Golden Rule of Survey Data</h3>
            <p className="text-lg italic">
              "Garbage in, garbage out. QC your surface BEFORE anyone starts designing."
            </p>
            <p className="text-sm mt-2">
              90 minutes of thorough QC can prevent weeks of wasted design time on a bad surface.
            </p>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-primary-light">Pro Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Always call the surveyor before importing—5 minutes saves hours</li>
              <li>• Keep original survey data untouched in 02_Survey/ folder</li>
              <li>• View every surface in 3D before creating Data Shortcut</li>
              <li>• Document your QC checks—it protects you and helps teammates</li>
              <li>• When in doubt about a spike or valley, call the surveyor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Script */}
      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Don't Let Bad Survey Data Ruin Your Project"</h2>
          <p className="text-gray-600 mb-6">A 7-minute video on survey import, surface creation, and critical QC procedures.</p>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">COLD OPEN (0:00-0:25)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: 3D view of surface with dramatic spikes sticking up like needles]</p>
              <p>
                "See these spikes? This is what happens when you trust survey data blindly. This engineer spent two weeks 
                designing a parking lot based on this surface. The cut and fill numbers were way off. When they finally 
                figured out the problem, they had to start over.
              </p>
              <p>
                "Two weeks of work down the drain. All because they skipped one critical step. Let me show you what 
                that step is."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:25-0:50)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Title card and instructor]</p>
              <p>
                "Welcome to Session 4 of Civil 3D Workflow Mastery. Today we're covering survey data import and existing 
                conditions—specifically, how to do it RIGHT so you don't end up like that engineer who lost two weeks.
              </p>
              <p>
                "We'll cover importing points, building surfaces, adding breaklines, and most importantly, the QC checklist 
                that catches problems before they become disasters. This isn't glamorous work, but it's absolutely critical. 
                Let's dive in."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE IMPORT PROCESS (0:50-3:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Screen recording of actual import process]</p>
              <p>
                "Let me walk you through importing survey points properly. I'll move quickly, but you can follow the detailed 
                checklist in the written materials.
              </p>
              <p>[Screen recording begins]</p>
              <p>
                "First, before you even open Civil 3D, open your survey file in a text editor. Look at it. Does the format 
                make sense? See any weird data? Point numbers going in order? Elevations in a reasonable range? This 30-second 
                scan can catch obvious problems.
              </p>
              <p>
                "Next, call the surveyor. I'm serious. Five-minute conversation: 'What coordinate system? Any known problems 
                with the data? Any points I should ignore?' This call prevents hours of troubleshooting.
              </p>
              <p>
                "Now open Civil 3D. New drawing from your template. Save immediately as EG-Surface.dwg in your Surfaces folder. 
                Xref your BASE-XREF for reference.
              </p>
              <p>
                "Insert tab, Import Points. Select your format—PNEZD if space-delimited, PENZD if comma-delimited. The 'N' 
                comes BEFORE the 'E'—that's Northing then Easting. Civil 3D is picky about order. Browse to your survey file, 
                check 'Add Points to Point Group,' create a group called AllPoints. Import.
              </p>
              <p>
                "Zoom extents. Do your points appear near your BASE-XREF? Yes? Good. If they're miles away, you have a 
                coordinate system problem—stop and fix it before continuing.
              </p>
              <p>
                "Create point groups to organize: TopographicPoints, PavementPoints, UtilityFeatures, Trees, Benchmarks. 
                Assign styles so you can visually differentiate them.
              </p>
              <p>[End of import section]</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">BUILDING THE SURFACE (3:00-4:30)</h3>
              <p>
                "Now the surface. Toolspace, Prospector, right-click Surfaces, Create Surface. Name it EG. Add your 
                TopographicPoints group to the surface definition. Regen. You should see contours.
              </p>
              <p>
                "But we're not done. This surface is probably wrong. Why? Because we haven't added breaklines yet.
              </p>
              <p>[Show animation of triangulation crossing a road]</p>
              <p>
                "See this? Without breaklines, Civil 3D connects points in straight lines. When it connects a point on one 
                side of a road to a point on the other side, it creates a false valley through the pavement. This road is 
                flat, but the surface shows it as sloped. That's why breaklines matter.
              </p>
              <p>
                "Draw 3D polylines along linear features: both sides of roads, curb lines, top and bottom of banks, building 
                edges, retaining walls. Connect your survey points. Then add these to the surface as Standard breaklines.
              </p>
              <p>[Show before/after of triangulation with breaklines]</p>
              <p>
                "See the difference? Now the triangulation respects the road edges. The surface is accurate.
              </p>
              <p>
                "Add a boundary too—outer boundary using your property line, hide boundaries for ponds or buildings. This 
                prevents the surface from extending into areas where you have no data."
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE CRITICAL QC STEP (4:30-6:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Split screen showing good surface vs bad surface]</p>
              <p>
                "Now here's the most important part of this entire video: Quality Check. Do NOT create a Data Shortcut yet. 
                Do NOT tell your design team they can start working. Not until you QC this surface.
              </p>
              <p>
                "Here's your QC checklist:
              </p>
              <ul className="list-decimal ml-6 space-y-2 mt-2">
                <li>Check surface statistics. Right-click surface, Surface Properties, Statistics tab. Are min and max 
                  elevations reasonable? If your site is in Colorado and your min elevation is -50 feet, something's wrong.</li>
                <li>Look at the contours. Any closed contours inside your site? They indicate peaks or valleys—verify they're 
                  real features. Contours crossing each other? That's an ERROR—surfaces can't have crossing contours. Find 
                  and fix the bad data.</li>
                <li>View the triangulation. Change your surface style to show the TIN. Look for long, skinny triangles 
                  crossing features—those need breaklines.</li>
                <li>View in 3D. Type 3DORBIT and rotate around the entire site. Look for spikes—they stick out like needles. 
                  Look for valleys that shouldn't exist. This is where you catch bad point elevations.</li>
                <li>Spot-check elevations. Click on points at known benchmarks. Do the elevations match the surveyor's report?</li>
                <li>Create a quick profile along an existing road. Does it look reasonable, or are there weird bumps and dips?</li>
              </ul>
              <p className="mt-2">
                "This QC process takes 90 minutes. And it can save you weeks of wasted work. In our case study, Mike skipped 
                this step. Cost his team 16 hours. Don't be Mike."
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">THE PAYOFF (6:00-6:35)</h3>
              <p>
                "After Mike's project went sideways, he and his project engineer created a mandatory QC checklist. Every 
                surface gets checked before anyone starts designing. It's part of their workflow now.
              </p>
              <p>
                "Result? They haven't had a bad surface issue since. The 90 minutes of QC is built into the schedule. And 
                their designers trust the existing conditions, which means they design confidently and efficiently.
              </p>
              <p>
                "The project engineer's quote: 'That 90 minutes of QC is the most valuable 90 minutes of the project.' She's right."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">YOUR ACTION PLAN (6:35-6:50)</h3>
              <p>
                "Download the QC checklist that comes with this session. Print it out. Tape it to your monitor. And use it 
                on every single survey import. Trust me, the one time you skip it will be the time you have bad data.
              </p>
              <p>
                "Treat survey data like explosives: handle with care, check everything, and never make assumptions."
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (6:50-7:00)</h3>
              <p className="italic text-gray-700 mb-2">[On screen: Next session preview]</p>
              <p>
                "Next up is Session 5: Surfaces and Data Shortcuts Fundamentals. We'll dive deeper into surface editing, 
                creating finished grade surfaces, and mastering Data Shortcuts so your design propagates automatically. 
                See you there!"
              </p>
              <p className="italic text-gray-700">[End card: QC checklist download link]</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-primary-light mb-2">Production Notes:</h3>
            <ul className="text-sm space-y-1">
              <li>• Total duration: ~7 minutes</li>
              <li>• Include dramatic 3D surface visualization showing spikes and problems</li>
              <li>• Screen recording of full import process (can speed up routine parts)</li>
              <li>• Before/after animations showing effect of breaklines</li>
              <li>• Emphasize the QC checklist—make it memorable</li>
              <li>• Provide downloadable QC checklist PDF</li>
            </ul>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
