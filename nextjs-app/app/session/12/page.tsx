import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, CheckSquare } from 'lucide-react'

export default function Session12() {
  return (
    <SessionLayout 
      sessionNumber={12} 
      title="Plan & Profile Sheets, QA & Project Delivery"
    >
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Plan and Profile Sheets: The Centerpiece of Road Projects</h3>
          <p>
            Plan and Profile sheets combine horizontal (plan) and vertical (profile) views on a single sheet—essential for 
            road, trail, and utility projects. These sheets show the relationship between alignment geometry, existing ground, 
            proposed grades, and design features.
          </p>

          <h4>Components of Plan & Profile Sheets:</h4>
          <ul>
            <li><strong>Top Viewport:</strong> Plan view showing alignment, stationing, features</li>
            <li><strong>Bottom Viewport:</strong> Profile view showing EG, FG, elevations, grade slopes</li>
            <li><strong>Station Match Line:</strong> Vertical line connecting plan and profile at same station</li>
            <li><strong>Annotations:</strong> Station labels, curve data, slope percentages, elevations</li>
          </ul>

          <h3>Creating Plan & Profile Sheets</h3>

          <h4>Method 1: Manual Layout</h4>
          <ol>
            <li>Create sheet with two viewports stacked vertically</li>
            <li>Top viewport: Plan view from MODEL.dwg using named view</li>
            <li>Bottom viewport: Profile view from alignment's profile view</li>
            <li>Align stations between viewports</li>
            <li>Set appropriate scales (plan: 1"=50', profile: 1"=50' H, 1"=5' V typical)</li>
          </ol>

          <h4>Method 2: Create View Frames (Plan Production Tools)</h4>
          <ol>
            <li>Civil 3D's Plan Production tools automate this process</li>
            <li><code>Output tab &gt; Plan Production &gt; Create View Frames</code></li>
            <li>Select alignment, specify sheet layout settings</li>
            <li>Civil 3D creates view frames along alignment at sheet intervals</li>
            <li><code>Create Sheets</code> generates all sheets automatically with plan/profile views</li>
            <li>Sheets reference view frames for consistent station ranges</li>
          </ol>

          <h4>Plan Production Tools Advantages:</h4>
          <ul>
            <li>Automated sheet creation for entire alignment</li>
            <li>Consistent station ranges across sheets</li>
            <li>Automatic match lines between sheets</li>
            <li>Updates when alignment changes</li>
            <li>Professional, uniform appearance</li>
          </ul>

          <h3>Quality Assurance & Quality Control (QA/QC)</h3>
          <p>
            Before delivering any project, systematic QA/QC prevents costly errors and ensures professional quality.
          </p>

          <h4>Design QA Checklist:</h4>
          <ul>
            <li><strong>Surfaces:</strong>
              <ul>
                <li>EG surface matches survey—spot-check elevations at benchmarks</li>
                <li>No spikes or artifacts in surface triangulation</li>
                <li>Breaklines in correct locations</li>
                <li>FG surface ties into EG properly at limits</li>
              </ul>
            </li>
            <li><strong>Alignments:</strong>
              <ul>
                <li>Curve radii meet minimum standards</li>
                <li>Tangent lengths adequate</li>
                <li>Ties into existing features correctly</li>
                <li>Station equations correct (if used)</li>
              </ul>
            </li>
            <li><strong>Profiles:</strong>
              <ul>
                <li>Grades meet minimum/maximum standards</li>
                <li>Vertical curve lengths adequate for sight distance</li>
                <li>Matches existing grades at tie-ins</li>
                <li>Adequate clearance over utilities</li>
              </ul>
            </li>
            <li><strong>Corridors:</strong>
              <ul>
                <li>Assembly appropriate for each region</li>
                <li>Targets set correctly</li>
                <li>Daylight slopes meet standards</li>
                <li>No gaps or overlaps in corridor surface</li>
              </ul>
            </li>
            <li><strong>Pipe Networks:</strong>
              <ul>
                <li>Minimum slopes met</li>
                <li>Adequate cover over all pipes</li>
                <li>No conflicts with other utilities</li>
                <li>Inverts calculated correctly</li>
              </ul>
            </li>
          </ul>

          <h4>Sheet QA Checklist:</h4>
          <ul>
            <li><strong>Title Blocks:</strong> All fields filled, correct project info, dates current</li>
            <li><strong>Sheet Numbers:</strong> Sequential, match sheet index</li>
            <li><strong>Scales:</strong> Correct and noted on each sheet</li>
            <li><strong>North Arrows:</strong> Present and oriented correctly</li>
            <li><strong>Legends:</strong> Match sheet content</li>
            <li><strong>Labels:</strong> Readable, no overlaps, correct data</li>
            <li><strong>Xrefs:</strong> All loaded, no missing references</li>
            <li><strong>Line Weights:</strong> Appropriate hierarchy (bold for proposed, lighter for existing)</li>
          </ul>

          <h4>Common QC Checks:</h4>
          <ol>
            <li><strong>Visual Review:</strong> Print or view all sheets, scan for obvious errors</li>
            <li><strong>Coordinate Review:</strong> Have another team member review design and sheets</li>
            <li><strong>Client Standards:</strong> Verify compliance with local/client requirements</li>
            <li><strong>Calculations:</strong> Spot-check quantities, elevations, slopes</li>
            <li><strong>Consistency:</strong> Uniform appearance across all sheets</li>
          </ol>

          <h3>Final Deliverables Package</h3>

          <h4>Typical Deliverables:</h4>
          <ul>
            <li><strong>PDF Plan Set:</strong> Complete construction documents
              <ul>
                <li>Multi-page PDF or individual sheet PDFs</li>
                <li>Organized by sheet type</li>
                <li>Bookmarked for navigation</li>
              </ul>
            </li>
            <li><strong>CAD Files:</strong> (if requested)
              <ul>
                <li>Provide sheet files and/or MODEL.dwg</li>
                <li>Include xref files (BASE-XREF, design files)</li>
                <li>Document folder structure and file relationships</li>
              </ul>
            </li>
            <li><strong>Data Files:</strong>
              <ul>
                <li>Surface files (.xml or .dwg)</li>
                <li>Alignment files for machine control</li>
                <li>Quantity reports (earthwork, pipe, etc.)</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong>
              <ul>
                <li>Design report explaining methodology</li>
                <li>Assumptions and criteria used</li>
                <li>Calculation packages</li>
              </ul>
            </li>
          </ul>

          <h4>Organizing Submittals:</h4>
          <ol>
            <li>Create folders in <code>06_Submittals/Final/</code>:  
              <ul>
                <li><code>01_PDF_Plans/</code></li>
                <li><code>02_CAD_Files/</code> (if providing)</li>
                <li><code>03_Data_Files/</code></li>
                <li><code>04_Reports/</code></li>
              </ul>
            </li>
            <li>Include transmittal letter or README explaining contents</li>
            <li>Verify file sizes reasonable for email/upload</li>
            <li>Test opening PDFs before sending</li>
          </ol>

          <h3>Project Closeout</h3>

          <h4>Internal Archive:</h4>
          <ul>
            <li>Create final project archive in <code>08_Archive/Final/</code></li>
            <li>Include copy of all deliverables</li>
            <li>Save final working files (all design drawings, MODEL, sheets)</li>
            <li>Document any deviations from standards or special notes for future reference</li>
            <li>Backup to multiple locations (server, cloud, external drive)</li>
          </ul>

          <h4>Lessons Learned:</h4>
          <ul>
            <li>Document what worked well and what didn't</li>
            <li>Note time-saving techniques discovered</li>
            <li>Record problems encountered and solutions</li>
            <li>Share with team to improve future projects</li>
          </ul>

          <h3>Conclusion: Mastering the Civil 3D Workflow</h3>
          <p>
            Congratulations on completing the 12-session Civil 3D Workflow Mastery course! You've learned:
          </p>
          <ul>
            <li>Project setup and folder structure organization</li>
            <li>Template creation and BASE-XREF fundamentals</li>
            <li>Survey data import and surface QC</li>
            <li>Data Shortcuts for efficient collaboration</li>
            <li>Alignment and profile design</li>
            <li>Corridor modeling</li>
            <li>Pipe network design</li>
            <li>Xrefs and layer state management</li>
            <li>MODEL.dwg as project hub</li>
            <li>Sheet production and delivery</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            This workflow isn't just about software—it's about working smarter, collaborating better, and delivering 
            higher quality projects faster. Apply these principles consistently, and you'll transform how your team works.  
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">Your Next Steps</h3>
            <ul className="space-y-2">
              <li>• Apply this workflow on your next project—start to finish</li>
              <li>• Share these principles with your team</li>
              <li>• Create firm standards based on these sessions</li>
              <li>• Continue learning—Civil 3D evolves, so should you</li>
              <li>• Teach others—best way to solidify your own understanding</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Firm Transforms Workflow, Wins Repeat Business</h2>
          <p>
            A mid-sized engineering firm implemented this complete workflow across all projects. Within 6 months, they 
            reduced design time by 30%, virtually eliminated coordination errors, and earned repeat contracts from clients 
            impressed by consistency and quality.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Transformation Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Efficiency:</strong> 30% reduction in design hours per project</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Quality:</strong> Coordination errors nearly eliminated</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Client satisfaction:</strong> Repeat business from major clients</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Team morale:</strong> Staff appreciation for organized, efficient workflow</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Final QA Checklist</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Pre-Delivery Checklist</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>All design elements QC'd and approved</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>All sheets reviewed for completeness and accuracy</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Title blocks complete with current information</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Sheet numbering correct and sequential</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>All xrefs loaded and current</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>PDFs generated and tested</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Deliverables organized in <code>06_Submittals/Final/</code></span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Transmittal letter or README included</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Final archive created in <code>08_Archive/Final/</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Complete Workflow Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">The 12-Step Workflow</h3>
              <ol className="text-sm space-y-1">
                <li>1. Project Setup & Folder Structure</li>
                <li>2. Template & BASE-XREF Creation</li>
                <li>3. Survey Import & EG Surface</li>
                <li>4. Design Surfaces (FG, etc.)</li>
                <li>5. Alignments & Profiles</li>
                <li>6. Corridors & Road Design</li>
                <li>7. Pipe Networks & Utilities</li>
                <li>8. Create Data Shortcuts for All</li>
                <li>9. MODEL.dwg Assembly</li>
                <li>10. Named Views for Sheets</li>
                <li>11. Sheet Production</li>
                <li>12. QA & Delivery</li>
              </ol>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Golden Rules</h3>
              <ul className="text-sm space-y-1">
                <li>• One source of truth per design element</li>
                <li>• Use Data Shortcuts, never copy</li>
                <li>• Reference via xrefs, never bind</li>
                <li>• Always use relative paths</li>
                <li>• QC before creating Data Shortcuts</li>
                <li>• Document as you go</li>
                <li>• Archive regularly</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold mb-2 text-primary-light">Final Wisdom</h3>
            <p className="text-lg italic">
              "The workflow is more important than any single command. Master the workflow, and you master Civil 3D."
            </p>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Completing Your Civil 3D Journey"</h2>
          <p className="text-gray-600 mb-6">A 6-minute wrap-up and motivational conclusion.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"This is the final session. We've covered the complete Civil 3D workflow from project setup to final delivery. 
              Now it's time to bring it all together."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">REVIEW (0:30-4:00)</h3>
              <p>Quick recap of all 12 sessions, showing how each step builds on the previous. Highlight key principles: 
              Data Shortcuts, single source of truth, xref workflow, MODEL.dwg as hub.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">CALL TO ACTION (4:00-5:30)</h3>
              <p>"Now it's your turn. Take this workflow and apply it to your next project. Don't try to change everything 
              at once—start with one project, learn, refine. Share with your team. Create your firm standards. This workflow 
              has been proven on thousands of projects—it works. Make it yours."</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (5:30-6:00)</h3>
              <p>"Thank you for completing Civil 3D Workflow Mastery. You now have the knowledge to work efficiently, 
              collaborate effectively, and deliver quality projects. Go build something amazing!"</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
