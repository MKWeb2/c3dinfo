'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

export default function ProgressTracker() {
  const [completedSessions, setCompletedSessions] = useState<number[]>([])

  const sessions = [
    { number: 1, title: 'Introduction & Project Setup' },
    { number: 2, title: 'Folder Structure' },
    { number: 3, title: 'Template Setup' },
    { number: 4, title: 'Survey Data Import' },
    { number: 5, title: 'Surfaces & Data Shortcuts' },
    { number: 6, title: 'Alignments & Profiles' },
    { number: 7, title: 'Corridors' },
    { number: 8, title: 'Pipe Networks' },
    { number: 9, title: 'Xrefs & Layer States' },
    { number: 10, title: 'Model.dwg Creation' },
    { number: 11, title: 'Plan Production' },
    { number: 12, title: 'QA & Delivery' },
  ]

  // Load completed sessions from localStorage
  useEffect(() => {
    const stored = localStorage?.getItem?.('completedSessions')
    if (stored) {
      try {
        setCompletedSessions(JSON.parse(stored))
      } catch (e) {
        setCompletedSessions([])
      }
    }
  }, [])

  const toggleSession = (sessionNumber: number) => {
    const newCompleted = completedSessions?.includes?.(sessionNumber)
      ? completedSessions?.filter?.((n) => n !== sessionNumber) ?? []
      : [...(completedSessions ?? []), sessionNumber]
    
    setCompletedSessions(newCompleted)
    localStorage?.setItem?.('completedSessions', JSON.stringify(newCompleted))
  }

  const progress = ((completedSessions?.length ?? 0) / sessions.length) * 100
  const nextSession = sessions.find((s) => !completedSessions?.includes?.(s.number))

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-primary">Your Progress</h3>
          <span className="text-2xl font-bold text-secondary">
            {completedSessions?.length ?? 0}/{sessions.length}
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {progress === 100 
            ? '🎉 Congratulations! You\'ve completed all sessions!' 
            : `${Math.round(progress)}% complete`}
        </p>
      </div>

      {nextSession && (
        <div className="bg-blue-50 border border-primary rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-primary mb-2">Next Up:</p>
          <Link 
            href={`/session/${nextSession.number}`}
            className="flex items-center justify-between group"
          >
            <span className="text-lg font-bold text-primary-light group-hover:text-primary transition-colors">
              Session {nextSession.number}: {nextSession.title}
            </span>
            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      )}

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-700 mb-3">Track Completed Sessions:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sessions.map((session) => {
            const isCompleted = completedSessions?.includes?.(session.number)
            return (
              <div
                key={session.number}
                className="flex items-center space-x-3"
              >
                <button
                  onClick={() => toggleSession(session.number)}
                  className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={`Mark session ${session.number} as ${isCompleted ? 'incomplete' : 'complete'}`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300 hover:text-gray-400 transition-colors" />
                  )}
                </button>
                <Link
                  href={`/session/${session.number}`}
                  className={`text-sm hover:text-primary transition-colors ${
                    isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'
                  }`}
                >
                  Session {session.number}: {session.title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Click the circles to mark sessions as complete as you progress through the course.
        </p>
      </div>
    </div>
  )
}
