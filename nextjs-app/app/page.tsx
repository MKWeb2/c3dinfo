import Link from 'next/link'
import { CheckCircle, BookOpen, Users, Award, ArrowRight, Download, Video, FileText } from 'lucide-react'
import ProgressTracker from './components/ProgressTracker'

export default function HomePage() {
  const sessions = [
    {
      number: 1,
      title: 'Introduction to Civil 3D Workflow & Project Setup',
      description: 'Understanding standardized processes and project setup fundamentals',
      duration: '60-90 min',
    },
    {
      number: 2,
      title: 'Folder Structure Organization & Standards',
      description: 'Complete folder hierarchy, naming conventions, and team collaboration',
      duration: '60-90 min',
    },
    {
      number: 3,
      title: 'Template Setup & Base Drawing Creation',
      description: 'Creating custom templates and base drawings for consistent projects',
      duration: '60-90 min',
    },
    {
      number: 4,
      title: 'Survey Data Import & Existing Conditions',
      description: 'Importing survey data and creating existing ground surfaces',
      duration: '60-90 min',
    },
    {
      number: 5,
      title: 'Surfaces & Data Shortcuts Fundamentals',
      description: 'Mastering surface creation and Data Shortcuts workflow',
      duration: '60-90 min',
    },
    {
      number: 6,
      title: 'Alignments & Profiles with Data Shortcuts',
      description: 'Creating alignments, profiles, and sharing via Data Shortcuts',
      duration: '60-90 min',
    },
    {
      number: 7,
      title: 'Corridors & Design Elements',
      description: 'Corridor modeling, assemblies, and optimization techniques',
      duration: '60-90 min',
    },
    {
      number: 8,
      title: 'Pipe Networks & Utilities',
      description: 'Creating and managing pipe networks for storm, sanitary, and water',
      duration: '60-90 min',
    },
    {
      number: 9,
      title: 'External References (Xrefs) & Layer States',
      description: 'Managing Xrefs and layer control for multi-discipline projects',
      duration: '60-90 min',
    },
    {
      number: 10,
      title: 'Model.dwg Creation & Named Views',
      description: 'The Model.dwg approach and setting up Named Views for sheets',
      duration: '60-90 min',
    },
    {
      number: 11,
      title: 'Plan Production & Sheet Generation',
      description: 'Efficient plan sheet creation using SaveAs method',
      duration: '60-90 min',
    },
    {
      number: 12,
      title: 'Plan & Profile Sheets, QA & Project Delivery',
      description: 'Automated sheet generation, QA procedures, and final delivery',
      duration: '60-90 min',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Civil 3D Workflow Mastery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transform Your Civil 3D Productivity with Standardized Workflows
            </p>
            <p className="text-lg mb-8 text-gray-200">
              A comprehensive 12-session training course for intermediate-level Civil 3D technicians
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/session/1" className="btn-secondary inline-flex items-center justify-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#course-overview" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600">Training Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18-24</div>
              <div className="text-gray-600">Total Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Practical Focus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">✓</div>
              <div className="text-gray-600">GoHighLevel Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="course-overview" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary font-heading">What You'll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-primary mb-4">
                <BookOpen className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Standardized Workflows</h3>
              <p className="text-gray-700">
                Learn the proven workflow used by top engineering firms to manage Civil 3D projects efficiently from setup to delivery.
              </p>
            </div>
            <div className="card">
              <div className="text-primary mb-4">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Data Shortcuts Mastery</h3>
              <p className="text-gray-700">
                Master Civil 3D's most powerful feature for team collaboration. Share surfaces, alignments, and pipe networks seamlessly.
              </p>
            </div>
            <div className="card">
              <div className="text-primary mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Team Collaboration</h3>
              <p className="text-gray-700">
                Implement folder structures, naming conventions, and protocols that enable multiple team members to work efficiently together.
              </p>
            </div>
            <div className="card">
              <div className="text-secondary mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Production Efficiency</h3>
              <p className="text-gray-700">
                Create plan sets faster with the Model.dwg approach, Named Views, and automated sheet generation techniques.
              </p>
            </div>
            <div className="card">
              <div className="text-secondary mb-4">
                <FileText className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Templates & Standards</h3>
              <p className="text-gray-700">
                Build custom Civil 3D templates that enforce company standards automatically and accelerate project setup.
              </p>
            </div>
            <div className="card">
              <div className="text-secondary mb-4">
                <Video className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-light">Real-World Case Studies</h3>
              <p className="text-gray-700">
                Learn from detailed case studies of actual projects, with specific challenges, solutions, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary font-heading">Who This Course Is For</h2>
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="text-xl font-bold mb-4 text-primary-light">Ideal for Intermediate-Level Civil 3D Technicians</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>You have 6-18 months of Civil 3D experience and know the basic tools</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>You can create surfaces, alignments, and profiles but want to work more efficiently</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>You want to standardize workflows within your firm or team</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>You struggle with Data Shortcuts, Xrefs, or managing multi-sheet projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>You're a CAD manager looking to improve team productivity and consistency</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary font-heading">Learning Objectives</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Implement a standardized folder structure for all Civil 3D projects
              </h3>
              <p className="text-gray-600 ml-7">Organize project files consistently to enable efficient collaboration and reduce time spent searching for files.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Master Data Shortcuts for seamless object sharing across drawings
              </h3>
              <p className="text-gray-600 ml-7">Share surfaces, alignments, profiles, and pipe networks between drawings without duplication, enabling automatic updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Create custom Civil 3D templates that enforce company standards
              </h3>
              <p className="text-gray-600 ml-7">Build templates with pre-configured styles, layers, and settings to ensure consistency across all projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Use the Model.dwg approach for efficient sheet production
              </h3>
              <p className="text-gray-600 ml-7">Coordinate all design elements in a master model file, then generate sheets using Named Views and SaveAs method.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Manage multi-discipline projects with Xrefs and Layer States
              </h3>
              <p className="text-gray-600 ml-7">Coordinate with architects, MEP engineers, and other disciplines using external references and layer control strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-light flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                Apply quality assurance procedures and deliver professional plan sets
              </h3>
              <p className="text-gray-600 ml-7">Implement QA checklists, use Sheet Set Manager for batch plotting, and create archive-ready deliverables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary font-heading">Course Curriculum</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            12 comprehensive sessions, each 60-90 minutes, covering the complete Civil 3D workflow from project setup to final delivery
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {sessions.map((session) => (
                <Link 
                  key={session.number} 
                  href={`/session/${session.number}`}
                  className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-primary rounded-lg p-6 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="bg-primary text-white font-bold text-lg rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors">
                        {session.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-light mb-2 group-hover:text-primary transition-colors">
                          {session.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{session.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-4">⏱️ {session.duration}</span>
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Includes downloads
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* GoHighLevel Integration Guide */}
            <Link 
              href="/integration"
              className="block bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white rounded-lg p-6 mt-8 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-white text-secondary font-bold text-lg rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    +
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      Bonus: GoHighLevel Integration Guide
                    </h3>
                    <p className="text-gray-100 mb-2">Complete step-by-step guide for integrating this course with GoHighLevel platform (4 integration methods)</p>
                    <div className="text-sm text-gray-200">
                      ✓ Iframe embedding • ✓ Custom domain setup • ✓ Native membership site • ✓ Dashboard embedding
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Tracker Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary font-heading">Track Your Progress</h2>
          <ProgressTracker />
        </div>
      </section>

      {/* Each Session Includes */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary font-heading">What's Included in Each Session</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Main Educational Content</h3>
                <p className="text-gray-700">Comprehensive written content covering concepts, procedures, and best practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <FileText className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Case Study</h3>
                <p className="text-gray-700">Real-world project example with specific challenges, solutions, and results</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Quick Reference Guide</h3>
                <p className="text-gray-700">Step-by-step checklist format for use during actual project work</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <Download className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Cheat Sheet</h3>
                <p className="text-gray-700">Commands, shortcuts, and quick tips in easy-to-reference format</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <Video className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Video Script</h3>
                <p className="text-gray-700">Engaging 3-5 minute video script with conversational instruction</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <Award className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-light">Practical Focus</h3>
                <p className="text-gray-700">Actionable information you can apply immediately to your projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-lighter text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">Ready to Transform Your Civil 3D Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Start with Session 1 and begin your journey to Civil 3D workflow mastery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/session/1" className="btn-secondary inline-flex items-center justify-center">
              Start Session 1
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/integration" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
              View Integration Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
