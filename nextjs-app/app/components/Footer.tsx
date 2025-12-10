import Link from 'next/link'
import { BookOpen, Mail, Linkedin, Youtube, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = 2024

  return (
    <footer className="bg-primary text-white no-print">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-lg">Civil 3D Workflow Mastery</span>
            </div>
            <p className="text-gray-300 text-sm">
              Comprehensive training course for intermediate-level Civil 3D technicians. Master workflows, boost productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/session/1" className="text-gray-300 hover:text-white transition-colors">
                  Start Learning
                </Link>
              </li>
              <li>
                <Link href="/integration" className="text-gray-300 hover:text-white transition-colors">
                  Integration Guide
                </Link>
              </li>
              <li>
                <Link href="/#course-overview" className="text-gray-300 hover:text-white transition-colors">
                  Course Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Sessions */}
          <div>
            <h3 className="font-bold mb-4">Sessions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/session/1" className="text-gray-300 hover:text-white transition-colors">
                  Sessions 1-3: Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/session/4" className="text-gray-300 hover:text-white transition-colors">
                  Sessions 4-6: Data Management
                </Link>
              </li>
              <li>
                <Link href="/session/7" className="text-gray-300 hover:text-white transition-colors">
                  Sessions 7-9: Design Elements
                </Link>
              </li>
              <li>
                <Link href="/session/10" className="text-gray-300 hover:text-white transition-colors">
                  Sessions 10-12: Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li className="text-gray-300">
                Downloadable Guides
              </li>
              <li className="text-gray-300">
                Quick Reference Sheets
              </li>
              <li className="text-gray-300">
                Video Scripts
              </li>
              <li className="text-gray-300">
                Case Studies
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Civil 3D Workflow Mastery. All rights reserved.</p>
          <p className="mt-2">
            For intermediate-level Civil 3D technicians | Autodesk Civil 3D Training Course
          </p>
        </div>
      </div>
    </footer>
  )
}
