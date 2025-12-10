import SessionLayout from '../../components/SessionLayout'
import { AlertCircle, CheckCircle, Info, Workflow } from 'lucide-react'

export default function Session8() {
  return (
    <SessionLayout 
      sessionNumber={8} 
      title="Pipe Networks & Utilities"
    >
      <section id="main-content" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
            <Info className="h-8 w-8 mr-3" />
            Main Content
          </h2>
          
          <h3>Pipe Networks in Civil 3D</h3>
          <p>
            Pipe networks in Civil 3D allow you to design storm drainage, sanitary sewer, and water distribution systems 
            with intelligent, connected objects. Pipes and structures know their connectivity, automatically calculate 
            inverts, slopes, and hydraulic properties.
          </p>

          <h4>Components of Pipe Networks:</h4>
          <ul>
            <li><strong>Pipes:</strong> Linear conduits with diameter, material, slope</li>
            <li><strong>Structures:</strong> Manholes, inlets, valves, junctions</li>
            <li><strong>Parts Lists:</strong> Catalog of available pipe sizes and structure types</li>
            <li><strong>Network Rules:</strong> Design constraints (min/max slopes, cover depths)</li>
            <li><strong>Profile Views:</strong> Visualize pipe slopes and inverts</li>
          </ul>

          <h3>Creating Pipe Networks</h3>

          <h4>Step 1: Set Up Parts List</h4>
          <ol>
            <li>Go to <code>Home tab &gt; Create Design &gt; Pipe Network &gt; Set Pipe Network Catalog</code></li>
            <li>Select appropriate catalog (e.g., US Imperial Drainage, Sanitary, Water)</li>
            <li>Configure parts list with sizes you'll use (12", 18", 24", 36" pipes, standard manholes)</li>
          </ol>

          <h4>Step 2: Create Network</h4>
          <ol>
            <li>Create drawing: <code>Storm-Network.dwg</code> in <code>04_Design/Pipe_Networks/</code></li>
            <li>Xref BASE-XREF.dwg and reference EG surface</li>
            <li><code>Home tab &gt; Create Design &gt; Pipe Network &gt; Pipe Network Creation Tools</code></li>
            <li>Name network: "Storm" or "Sanitary" or "Water"</li>
            <li>Select parts list and configure settings</li>
          </ol>

          <h4>Step 3: Layout Network</h4>
          <p>Use layout tools to place structures and pipes:</p>
          <ul>
            <li><strong>Structure:</strong> Click to place manholes or inlets</li>
            <li><strong>Pipe:</strong> Draw pipes connecting structures (automatically connects)</li>
            <li><strong>Set depths:</strong> Specify rim and invert elevations or set cover depth</li>
            <li><strong>Set slopes:</strong> Define pipe slopes for gravity flow</li>
          </ul>

          <h4>Design Considerations:</h4>
          <ul>
            <li>Flow from high point to low point (outlet)</li>
            <li>Minimum slopes for self-cleansing (typically 0.5% for storm, 0.4% for sanitary)</li>
            <li>Minimum cover over pipes (varies by road type, frost depth)</li>
            <li>Maximum velocities to prevent erosion</li>
            <li>Structure spacing based on maintenance access</li>
          </ul>

          <h3>Pipe Network in Profile View</h3>
          <ol>
            <li>Create or open profile view for alignment near pipes</li>
            <li>Select profile view, <code>Add Pipe Network Profile</code></li>
            <li>Select your pipe network</li>
            <li>Pipes display showing inverts, slopes, structures</li>
            <li>Edit inverts graphically by dragging in profile view</li>
          </ol>

          <h3>Best Practices</h3>
          <ul>
            <li>One network per system type per drawing</li>
            <li>Use consistent naming: "Storm-Main", "Storm-Laterals"</li>
            <li>Check for conflicts with other utilities</li>
            <li>Verify adequate cover and clearances</li>
            <li>Create Data Shortcuts for networks if referenced in multiple drawings</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold text-accent mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Common Pipe Network Issues
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Pipes flowing uphill:</strong> Check invert elevations and slopes</li>
              <li><strong>Insufficient cover:</strong> Deepen pipes or adjust alignment grade</li>
              <li><strong>Conflicts with other utilities:</strong> Use 3D view to check clearances</li>
              <li><strong>Can't connect pipes:</strong> Ensure structures are placed first, then pipes between them</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Case Study: Storm Drainage Design with Pipe Networks</h2>
          <p>
            A 25-acre commercial development required comprehensive storm drainage design. Using Civil 3D pipe networks, 
            the team designed, analyzed, and optimized the system in 2 weeks vs 4 weeks with traditional methods.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Results
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Design time:</strong> Reduced from 4 weeks to 2 weeks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Accuracy:</strong> Automatic slope and invert calculations prevented errors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Coordination:</strong> 3D visualization caught utility conflicts early</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-reference" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Quick Reference: Pipe Network Creation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Essential Steps</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Set pipe network catalog and configure parts list</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Create pipe network with clear naming</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Layout structures (manholes, inlets) at key locations</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Connect structures with pipes, set slopes</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Display in profile view for vertical design</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Verify slopes, cover depths, and clearances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cheat-sheet" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cheat Sheet: Pipe Network Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold mb-3 text-primary-light">Key Commands</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Create Network</td>
                    <td>Home &gt; Pipe Network Creation Tools</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Edit Network</td>
                    <td>Right-click &gt; Edit Network</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Add to Profile</td>
                    <td>Select Profile View &gt; Add Pipe Network</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold mb-3 text-primary-light">Design Standards</h3>
              <ul className="text-sm space-y-1">
                <li>• Min slope (storm): 0.5%</li>
                <li>• Min slope (sanitary): 0.4%</li>
                <li>• Min cover: 3-4 ft typical</li>
                <li>• Max velocity: 10-15 fps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="video-script" className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 section-content">
          <h2 className="text-3xl font-bold mb-6 text-primary">Video Script: "Designing Storm Drainage in Civil 3D"</h2>
          <p className="text-gray-600 mb-6">A 7-minute overview of pipe network design workflow.</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">INTRO (0:00-0:30)</h3>
              <p>"Pipe networks in Civil 3D transform utility design. Today I'll show you how to create intelligent drainage 
              systems that automatically calculate slopes, inverts, and catch design conflicts."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">DEMONSTRATION (0:30-6:00)</h3>
              <p>Screen recording showing: parts list setup, network creation, structure and pipe layout, profile view display, 
              and design verification.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-accent mb-2">OUTRO (6:00-7:00)</h3>
              <p>"Next session covers Xrefs and Layer States—essential for managing references and display control in your 
              MODEL.dwg and sheets."</p>
            </div>
          </div>
        </div>
      </section>
    </SessionLayout>
  )
}
