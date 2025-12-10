'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Home, BookOpen, Settings } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sessionsDropdownOpen, setSessionsDropdownOpen] = useState(false)

  const sessions = [
    { number: 1, title: 'Introduction & Project Setup' },
    { number: 2, title: 'Folder Structure & Standards' },
    { number: 3, title: 'Template Setup & Base Drawing' },
    { number: 4, title: 'Survey Data & Existing Conditions' },
    { number: 5, title: 'Surfaces & Data Shortcuts' },
    { number: 6, title: 'Alignments & Profiles' },
    { number: 7, title: 'Corridors & Design Elements' },
    { number: 8, title: 'Pipe Networks & Utilities' },
    { number: 9, title: 'Xrefs & Layer States' },
    { number: 10, title: 'Model.dwg & Named Views' },
    { number: 11, title: 'Plan Production & Sheets' },
    { number: 12, title: 'QA & Project Delivery' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 no-print">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-primary hover:text-primary-light transition-colors">
            <BookOpen className="h-8 w-8" />
            <span className="hidden sm:inline">Civil 3D Workflow Mastery</span>
            <span className="sm:hidden">Civil 3D</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            {/* Sessions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSessionsDropdownOpen(true)}
              onMouseLeave={() => setSessionsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors py-2">
                <BookOpen className="h-4 w-4" />
                <span>Sessions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {sessionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl rounded-b-lg border border-gray-200 py-2 max-h-96 overflow-y-auto">
                  {sessions.map((session) => (
                    <Link
                      key={session.number}
                      href={`/session/${session.number}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                    >
                      <span className="font-semibold">Session {session.number}:</span> {session.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/integration" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <Settings className="h-4 w-4" />
              <span>Integration</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2">
              <button 
                onClick={() => setSessionsDropdownOpen(!sessionsDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors"
              >
                <span>Sessions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${sessionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {sessionsDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {sessions.map((session) => (
                    <Link
                      key={session.number}
                      href={`/session/${session.number}`}
                      className="block py-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Session {session.number}: {session.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/integration" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integration Guide
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
