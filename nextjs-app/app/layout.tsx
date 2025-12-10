import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Civil 3D Workflow Mastery - Training Course',
  description: 'Comprehensive Civil 3D training course for intermediate-level technicians. Master workflows, Data Shortcuts, and project organization.',
  keywords: 'Civil 3D, training, workflow, CAD, engineering, Autodesk, civil engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
