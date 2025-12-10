import Link from 'next/link'
import { ArrowLeft, Check, AlertCircle, Code, Globe, Users, Layout } from 'lucide-react'

export default function IntegrationGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-sm text-gray-200 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold font-heading mb-4">GoHighLevel Integration Guide</h1>
          <p className="text-xl text-gray-100">
            Complete step-by-step guide for integrating your Civil 3D training course with GoHighLevel
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="section-content">
            <h2>Introduction to Integration Options</h2>
            <p>
              GoHighLevel (GHL) is a comprehensive marketing and sales platform that includes website building, funnel creation, 
              and membership site functionality. This guide will walk you through four different methods to integrate your 
              Civil 3D training course website with GoHighLevel.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Check className="h-6 w-6 mr-2 text-secondary" />
                Why Integrate with GoHighLevel?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Marketing Automation:</strong> Automated email sequences for course delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>CRM Integration:</strong> Track student progress and engagement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Payment Processing:</strong> Built-in Stripe and PayPal integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Membership Management:</strong> Control access levels and drip content</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Analytics:</strong> Track user behavior and course completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Methods Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary font-heading">Choose Your Integration Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Method 1 */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Iframe Embedding</h3>
                  <p className="text-sm text-gray-600">Easy • 15-30 minutes</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Display your externally hosted Civil 3D training website inside GHL pages. Fastest method that preserves 
                your custom design completely.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quick setup</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maintains custom design</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Easy to update</span>
                </div>
              </div>
              <a href="#method1" className="btn-primary w-full mt-6 text-center block">
                Learn Method 1
              </a>
            </div>

            {/* Method 2 */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Custom Domain Setup</h3>
                  <p className="text-sm text-gray-600">Intermediate • 1-2 hours</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Host your GoHighLevel site on your own domain for professional branding and SEO benefits.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Professional branded URL</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Better SEO</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic SSL</span>
                </div>
              </div>
              <a href="#method2" className="btn-primary w-full mt-6 text-center block">
                Learn Method 2
              </a>
            </div>

            {/* Method 3 */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Native GHL Membership</h3>
                  <p className="text-sm text-gray-600">Intermediate-Advanced • 4-8 hours</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Rebuild your course entirely within GHL for full integration with marketing automation, CRM, and course management.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full GHL integration</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Built-in payments</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Drip content control</span>
                </div>
              </div>
              <a href="#method3" className="btn-primary w-full mt-6 text-center block">
                Learn Method 3
              </a>
            </div>

            {/* Method 4 */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Dashboard Embedding</h3>
                  <p className="text-sm text-gray-600">Easy • 15-30 minutes</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Embed the course directly in GHL dashboards for internal team access without creating a public-facing site.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quick setup</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Team member access</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Internal training focus</span>
                </div>
              </div>
              <a href="#method4" className="btn-primary w-full mt-6 text-center block">
                Learn Method 4
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Method 1: Iframe Embedding */}
      <section id="method1" className="py-16 bg-white">
        <div className="container-custom max-w-4xl section-content">
          <div className="flex items-center space-x-4 mb-6">
            <Code className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-0">Method 1: Iframe Embedding</h2>
              <p className="text-gray-600">Difficulty: Easy | Time: 15-30 minutes</p>
            </div>
          </div>

          <h3>Overview</h3>
          <p>
            Iframe embedding allows you to display your externally hosted Civil 3D training website inside GHL pages. 
            This is the fastest method and preserves your custom design completely.
          </p>

          <h3>Prerequisites</h3>
          <ul>
            <li>Your Civil 3D training website hosted on a public URL</li>
            <li>Access to a GoHighLevel account</li>
            <li>Basic understanding of HTML (helpful but not required)</li>
          </ul>

          <h3>Step-by-Step Instructions</h3>

          <h4>Step 1: Get Your Website URL</h4>
          <p>Ensure your Civil 3D training course website is hosted and accessible:</p>
          <ul>
            <li>Example: <code>https://yourdomain.com/civil3d-training</code></li>
            <li>Test the URL in a private browser window to ensure it loads correctly</li>
          </ul>

          <h4>Step 2: Access GHL Website/Funnel Editor</h4>
          <ol>
            <li>Log into your GoHighLevel account</li>
            <li>Navigate to <strong>Sites</strong> from the left sidebar</li>
            <li>Select the website or funnel where you want to embed the course</li>
            <li>Click <strong>Edit</strong> to open the builder</li>
          </ol>

          <h4>Step 3: Add Custom HTML/Code Element</h4>
          <ol>
            <li>In the GHL page builder, locate the section where you want the course</li>
            <li>Drag a <strong>Custom HTML/Code</strong> element onto the page</li>
            <li>Click on the element to open the code editor</li>
          </ol>

          <h4>Step 4: Insert Iframe Code</h4>
          <p>Paste the following HTML code into the Custom HTML element:</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`<div style="width: 100%; overflow: hidden;">
  <iframe 
    src="https://yourdomain.com/civil3d-training" 
    width="100%" 
    height="800px" 
    frameborder="0" 
    scrolling="yes"
    style="border: none; display: block;"
    title="Civil 3D Training Course">
  </iframe>
</div>`}
          </pre>

          <div className="bg-yellow-50 border-l-4 border-secondary p-4 my-6">
            <h4 className="text-lg font-bold mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Customize the Code
            </h4>
            <ul className="space-y-1 text-sm">
              <li>• Replace <code>https://yourdomain.com/civil3d-training</code> with your actual URL</li>
              <li>• Adjust <code>height="800px"</code> based on your content (recommend 1000px-1500px)</li>
              <li>• Set <code>scrolling="yes"</code> to allow scrolling within the iframe</li>
            </ul>
          </div>

          <h4>Step 5: Test on Multiple Devices</h4>
          <ol>
            <li>Save your GHL page</li>
            <li>Preview in desktop browser</li>
            <li>Test on mobile device or use browser dev tools</li>
            <li>Adjust height values if content is cut off</li>
            <li>Ensure all navigation works within iframe</li>
          </ol>

          <h3>Pros and Cons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Quick and easy implementation</li>
                <li>✅ Maintains your custom design completely</li>
                <li>✅ Easy to update</li>
                <li>✅ No need to rebuild content in GHL</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm">
                <li>❌ Limited GHL-specific features</li>
                <li>❌ Potential cross-origin issues</li>
                <li>❌ Less seamless user experience</li>
                <li>❌ SEO limitations for embedded content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method 2: Custom Domain */}
      <section id="method2" className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl section-content">
          <div className="flex items-center space-x-4 mb-6">
            <Globe className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-0">Method 2: Custom Domain Setup</h2>
              <p className="text-gray-600">Difficulty: Intermediate | Time: 1-2 hours (including DNS propagation)</p>
            </div>
          </div>

          <h3>Overview</h3>
          <p>
            Custom domain setup allows you to host your GoHighLevel site (with embedded course) on your own domain, 
            providing a seamless branded experience.
          </p>

          <h3>Prerequisites</h3>
          <ul>
            <li>Domain name registered (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare)</li>
            <li>Access to domain DNS settings</li>
            <li>GoHighLevel account with appropriate plan</li>
          </ul>

          <h3>Step-by-Step Instructions</h3>

          <h4>Step 1: Access GHL Domain Settings</h4>
          <ol>
            <li>Log into GoHighLevel</li>
            <li>Navigate to <strong>Sites &gt; Settings</strong></li>
            <li>Click on <strong>Domains</strong> tab</li>
            <li>Click <strong>Connect a Domain</strong> or <strong>Add Domain</strong></li>
          </ol>

          <h4>Step 2: Enter Your Domain</h4>
          <ol>
            <li>Enter your desired domain or subdomain:
              <ul>
                <li>Full domain: <code>civil3dtraining.com</code></li>
                <li>Subdomain: <code>training.yourdomain.com</code> or <code>civil3d.yourdomain.com</code></li>
              </ul>
            </li>
            <li>Click <strong>Continue</strong> or <strong>Next</strong></li>
          </ol>

          <h4>Step 3: DNS Configuration</h4>
          <p>GHL will provide DNS records to add. Typically:</p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h5 className="font-bold mb-2">A Record:</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Type:</strong> A</li>
              <li><strong>Name:</strong> @ (or your subdomain)</li>
              <li><strong>Value:</strong> [IP address provided by GHL]</li>
              <li><strong>TTL:</strong> 3600 (or default)</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h5 className="font-bold mb-2">CNAME Record (if using subdomain):</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Type:</strong> CNAME</li>
              <li><strong>Name:</strong> training (or your chosen subdomain)</li>
              <li><strong>Value:</strong> [domain provided by GHL]</li>
              <li><strong>TTL:</strong> 3600</li>
            </ul>
          </div>

          <h4>Step 4: Wait for DNS Propagation</h4>
          <ul>
            <li>DNS changes can take 1-48 hours to propagate worldwide</li>
            <li>Typically propagates in 15 minutes to 4 hours</li>
            <li>Check propagation status: <a href="https://www.whatsmydns.net/" target="_blank" className="text-primary hover:underline">whatsmydns.net</a></li>
          </ul>

          <h4>Step 5: SSL Certificate Activation</h4>
          <p>GHL automatically provisions SSL certificates (HTTPS):</p>
          <ul>
            <li>Once domain is verified, SSL cert is generated (usually automatic)</li>
            <li>Can take 10 minutes to 2 hours</li>
            <li>Check by visiting <code>https://yourdomain.com</code></li>
            <li>You should see a padlock icon in the browser</li>
          </ul>

          <h3>Pros and Cons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Professional branded URL</li>
                <li>✅ Better SEO than subdomain</li>
                <li>✅ Full GHL features available</li>
                <li>✅ Automatic SSL certificate</li>
                <li>✅ Improved trust and credibility</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm">
                <li>❌ Requires DNS configuration knowledge</li>
                <li>❌ Waiting time for DNS propagation</li>
                <li>❌ May require GHL plan upgrade</li>
                <li>❌ Need to own a domain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method 3: Native GHL Membership */}
      <section id="method3" className="py-16 bg-white">
        <div className="container-custom max-w-4xl section-content">
          <div className="flex items-center space-x-4 mb-6">
            <Users className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-0">Method 3: Native GHL Membership Site</h2>
              <p className="text-gray-600">Difficulty: Intermediate-Advanced | Time: 4-8 hours (for full course migration)</p>
            </div>
          </div>

          <h3>Overview</h3>
          <p>
            GHL's native membership/course features allow you to rebuild your Civil 3D training course entirely within the 
            GoHighLevel platform, providing seamless integration with all GHL features.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li><strong>Course Structure:</strong> Organize content into modules and lessons</li>
            <li><strong>Drip Content:</strong> Release lessons on schedule or after completion</li>
            <li><strong>Progress Tracking:</strong> Monitor student advancement through the course</li>
            <li><strong>Payment Integration:</strong> Built-in Stripe and PayPal support</li>
            <li><strong>Automation:</strong> Trigger emails and workflows based on progress</li>
          </ul>

          <h3>Recommended Course Structure</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm">
{`Course: Civil 3D Workflow Mastery
├── Module 1: Fundamentals (Sessions 1-3)
├── Module 2: Data Management (Sessions 4-6)
├── Module 3: Design Elements (Sessions 7-9)
├── Module 4: Production (Sessions 10-12)
└── Bonus: GoHighLevel Integration Guide`}
          </pre>

          <h3>Content Migration Process</h3>
          <ol>
            <li><strong>Create Membership Site:</strong> Navigate to Sites &gt; Membership &gt; Create New</li>
            <li><strong>Add Modules:</strong> Create 4 modules matching course structure</li>
            <li><strong>Add Lessons:</strong> Create 12 lessons (one per session)
              <ul>
                <li>Upload main content as text/article</li>
                <li>Embed video scripts or upload videos</li>
                <li>Attach downloadable PDFs (quick references, cheat sheets)</li>
              </ul>
            </li>
            <li><strong>Configure Drip Schedule:</strong> Set lesson release timing</li>
            <li><strong>Set Up Automations:</strong> Create workflows for enrollment, completion, engagement</li>
            <li><strong>Test Thoroughly:</strong> Go through entire course as test user</li>
          </ol>

          <h3>Pros and Cons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Full GHL integration (CRM, automations, email)</li>
                <li>✅ Built-in payment processing</li>
                <li>✅ Drip content and access control</li>
                <li>✅ Progress tracking and certificates</li>
                <li>✅ All-in-one platform</li>
                <li>✅ Mobile-responsive design</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm">
                <li>❌ Time-consuming to migrate content</li>
                <li>❌ Less design flexibility than custom site</li>
                <li>❌ Limited customization compared to custom code</li>
                <li>❌ Dependent on GHL platform</li>
                <li>❌ May require learning GHL course builder</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method 4: Dashboard Embedding */}
      <section id="method4" className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl section-content">
          <div className="flex items-center space-x-4 mb-6">
            <Layout className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-0">Method 4: Dashboard Embedding</h2>
              <p className="text-gray-600">Difficulty: Easy | Time: 15-30 minutes</p>
            </div>
          </div>

          <h3>Overview</h3>
          <p>
            If your primary goal is to provide Civil 3D training to your internal team (not public), you can embed the course 
            directly in GHL dashboards, making it accessible to team members without creating a public-facing site.
          </p>

          <h3>Best For</h3>
          <ul>
            <li>Internal training programs</li>
            <li>Team member onboarding</li>
            <li>Reference resource for staff</li>
            <li>Client training in white-label agency accounts</li>
          </ul>

          <h3>Step-by-Step Instructions</h3>

          <h4>Step 1: Access Dashboard Editor</h4>
          <ol>
            <li>Log into GoHighLevel</li>
            <li>Navigate to <strong>Dashboards</strong> from left sidebar</li>
            <li>Select existing dashboard or create new: <strong>Create Dashboard</strong></li>
            <li>Click <strong>Edit</strong> to enter edit mode</li>
          </ol>

          <h4>Step 2: Add Embed Widget</h4>
          <ol>
            <li>Look for <strong>Add Widget</strong> button (usually top-right or center)</li>
            <li>Click <strong>Add Widget</strong></li>
            <li>Select <strong>Elements</strong> tab or <strong>Advanced</strong> tab</li>
            <li>Find and click <strong>Embed</strong> widget</li>
          </ol>

          <h4>Step 3: Configure Embed Widget</h4>
          <ol>
            <li><strong>Widget Title:</strong> "Civil 3D Training Course"</li>
            <li><strong>Type:</strong> Choose URL or IFRAME</li>
            <li><strong>Source URL:</strong> Enter <code>https://yourdomain.com/civil3d-training</code></li>
            <li><strong>Widget Size:</strong> Set width (full width) and height (800px or custom)</li>
            <li><strong>Permissions:</strong> Set which team roles can view this widget</li>
          </ol>

          <h4>Step 4: Position and Save</h4>
          <ol>
            <li>Drag widget to desired position on dashboard</li>
            <li>Resize if needed</li>
            <li>Click <strong>Save</strong> or <strong>Save Changes</strong></li>
          </ol>

          <h3>Pros and Cons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Very quick setup</li>
                <li>✅ Controlled access (team members only)</li>
                <li>✅ Integrated with GHL workspace</li>
                <li>✅ No public website needed</li>
                <li>✅ Easy to update (change embed URL)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm">
                <li>❌ Not suitable for public courses</li>
                <li>❌ Limited to GHL users</li>
                <li>❌ Less polished than dedicated membership site</li>
                <li>❌ No built-in course progress tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary font-heading">Comparison: All Four Methods</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Iframe</th>
                  <th className="p-4 text-left">Custom Domain</th>
                  <th className="p-4 text-left">Native Membership</th>
                  <th className="p-4 text-left">Dashboard</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Setup Time</td>
                  <td className="p-4">15-30 min</td>
                  <td className="p-4">1-2 hours</td>
                  <td className="p-4">4-8 hours</td>
                  <td className="p-4">15-30 min</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Difficulty</td>
                  <td className="p-4">Easy</td>
                  <td className="p-4">Intermediate</td>
                  <td className="p-4">Intermediate-Advanced</td>
                  <td className="p-4">Easy</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Design Control</td>
                  <td className="p-4">Full</td>
                  <td className="p-4">Full</td>
                  <td className="p-4">Limited</td>
                  <td className="p-4">Limited</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">GHL Features</td>
                  <td className="p-4">Minimal</td>
                  <td className="p-4">Full</td>
                  <td className="p-4">Full</td>
                  <td className="p-4">Minimal</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Payment Processing</td>
                  <td className="p-4">External</td>
                  <td className="p-4">External or GHL</td>
                  <td className="p-4">Built-in GHL</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Public Access</td>
                  <td className="p-4">Yes</td>
                  <td className="p-4">Yes</td>
                  <td className="p-4">Yes</td>
                  <td className="p-4">No (team only)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">SEO Benefits</td>
                  <td className="p-4">Limited</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Quick launch</td>
                  <td className="p-4">Professional branding</td>
                  <td className="p-4">Full integration</td>
                  <td className="p-4">Internal training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Integrate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the integration method that best fits your needs and follow the step-by-step instructions above.
          </p>
          <Link href="/" className="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Back to Course Home
          </Link>
        </div>
      </section>
    </div>
  )
}
