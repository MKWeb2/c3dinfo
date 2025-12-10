import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, BookOpen, FileText, CheckSquare, Video } from 'lucide-react'

interface SessionLayoutProps {
  sessionNumber: number
  title: string
  children: React.ReactNode
}

export default function SessionLayout({ sessionNumber, title, children }: SessionLayoutProps) {
  const prevSession = sessionNumber > 1 ? sessionNumber - 1 : null
  const nextSession = sessionNumber < 12 ? sessionNumber + 1 : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-sm text-gray-300 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            <span className="text-sm text-gray-300">Session {sessionNumber} of 12</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-secondary text-white font-bold text-2xl rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
              {sessionNumber}
            </div>
            <div>
              <h1 className="text-4xl font-bold font-heading">{title}</h1>
              <p className="text-gray-300 mt-2">Duration: 60-90 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - Sticky */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 no-print">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 space-x-6 text-sm">
            <a href="#main-content" className="flex items-center space-x-2 text-gray-700 hover:text-primary whitespace-nowrap">
              <BookOpen className="h-4 w-4" />
              <span>Main Content</span>
            </a>
            <a href="#case-study" className="flex items-center space-x-2 text-gray-700 hover:text-primary whitespace-nowrap">
              <FileText className="h-4 w-4" />
              <span>Case Study</span>
            </a>
            <a href="#quick-reference" className="flex items-center space-x-2 text-gray-700 hover:text-primary whitespace-nowrap">
              <CheckSquare className="h-4 w-4" />
              <span>Quick Reference</span>
            </a>
            <a href="#cheat-sheet" className="flex items-center space-x-2 text-gray-700 hover:text-primary whitespace-nowrap">
              <Download className="h-4 w-4" />
              <span>Cheat Sheet</span>
            </a>
            <a href="#video-script" className="flex items-center space-x-2 text-gray-700 hover:text-primary whitespace-nowrap">
              <Video className="h-4 w-4" />
              <span>Video Script</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t border-gray-200 py-8 no-print">
        <div className="container-custom">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {prevSession ? (
              <Link 
                href={`/session/${prevSession}`}
                className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Session {prevSession}</span>
              </Link>
            ) : (
              <div />
            )}
            
            <Link 
              href="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              All Sessions
            </Link>
            
            {nextSession ? (
              <Link 
                href={`/session/${nextSession}`}
                className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
              >
                <span>Session {nextSession}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <Link 
                href="/integration"
                className="flex items-center space-x-2 btn-secondary"
              >
                <span>Integration Guide</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
