'use client'

import { resumeData } from '@/data/resumeData'
import { useEffect } from 'react'

export default function CVPrintPage() {
  useEffect(() => {
    // Auto-trigger print dialog when page loads
    const timer = setTimeout(() => {
      window.print()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 print:text-black">
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.75in;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page-break {
            page-break-before: always;
          }
          .no-break {
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto p-8 print:p-0">
        {/* Header / Personal Info */}
        <header className="text-center border-b-2 border-emerald-600 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {resumeData.personal.name}
          </h1>
          <p className="text-lg text-emerald-700 font-medium mb-4">
            {resumeData.personal.headline}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>📧 {resumeData.personal.email}</span>
            <span>📱 {resumeData.personal.phone}</span>
            <span>📍 {resumeData.personal.location}</span>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            <a href={resumeData.personal.orcid} className="text-emerald-600 hover:underline">
              ORCID: {resumeData.personal.orcid.split('/').pop()}
            </a>
          </div>
        </header>

        {/* About Me */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {resumeData.aboutMe}
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            EDUCATION
          </h2>
          <div className="space-y-3">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="no-break">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.institution}, {edu.location}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{edu.dates}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            SKILLS & COMPETENCIES
          </h2>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Digital & Data Tools</h3>
              <p className="text-gray-600">{resumeData.skills.digitalDataTools.join(' • ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Professional Skills</h3>
              <p className="text-gray-600">{resumeData.skills.socialMediaSkills.join(' • ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Core Competencies</h3>
              <p className="text-gray-600">{resumeData.skills.otherCoreCompetencies.join(' • ')}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6 page-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="no-break">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-sm text-emerald-600">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{exp.dates}</span>
                </div>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-0.5 ml-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* National Project */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            KEY PROJECT
          </h2>
          <div>
            <h3 className="font-semibold text-gray-900">{resumeData.nationalProject.title}</h3>
            <p className="text-sm text-emerald-600 mb-2">
              {resumeData.nationalProject.role} | {resumeData.nationalProject.year}
            </p>
            <p className="text-sm text-gray-600 mb-2">{resumeData.nationalProject.summary}</p>
            <p className="text-xs text-gray-500">
              <strong>Tools:</strong> {resumeData.nationalProject.tools.join(', ')}
            </p>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            PUBLICATIONS
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            {resumeData.publications.map((pub, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gray-400">[{i + 1}]</span>
                <span>
                  {pub.link ? (
                    <a href={pub.link} className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )} ({pub.year})
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Conferences */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            CONFERENCES & WORKSHOPS
          </h2>
          <ul className="text-sm text-gray-600 space-y-1">
            {resumeData.conferences.map((conf, i) => (
              <li key={i}>
                <span className="font-medium">{conf.title}</span>
                <span className="text-gray-400"> — {conf.dates}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Leadership */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            LEADERSHIP
          </h2>
          {resumeData.leadership.map((lead, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-900">{lead.position} ({lead.year})</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                {lead.duties.slice(0, 3).map((duty, j) => (
                  <li key={j}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Memberships */}
        <section className="mb-6 no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            PROFESSIONAL MEMBERSHIPS
          </h2>
          <ul className="text-sm text-gray-600 space-y-1">
            {resumeData.memberships.map((mem, i) => (
              <li key={i}>
                {mem.organization} <span className="text-gray-400">({mem.dates})</span>
              </li>
            ))}
          </ul>
        </section>

        {/* References */}
        <section className="mb-6 page-break no-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-3">
            REFERENCES
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {resumeData.referees.map((ref, i) => (
              <div key={i} className="no-break">
                <h3 className="font-semibold text-gray-900">{ref.name}</h3>
                <p className="text-gray-600 text-xs">{ref.organization}</p>
                <p className="text-gray-500 text-xs">{ref.email}</p>
                <p className="text-gray-500 text-xs">{ref.phone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer for screen only */}
        <div className="text-center text-sm text-gray-400 mt-8 print:hidden border-t pt-6">
          <p>This is a print-friendly version of Jesse Azebiik Anak's CV</p>
          <button
            onClick={() => window.print()}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Print / Save as PDF
          </button>
          <p className="mt-4">
            <a href="/" className="text-emerald-600 hover:underline">← Back to Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  )
}
