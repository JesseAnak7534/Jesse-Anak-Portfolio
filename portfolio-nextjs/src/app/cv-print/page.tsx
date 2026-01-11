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
            margin: 0.5in;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin: 0;
            padding: 0;
          }
          .page-break {
            page-break-before: always;
          }
          .no-break {
            page-break-inside: avoid;
          }
          .print-header {
            display: flex !important;
            visibility: visible !important;
          }
          .profile-img {
            width: 80px !important;
            height: 80px !important;
            border-radius: 50% !important;
            border: 2px solid #059669 !important;
            object-fit: cover !important;
          }
        }
        @media screen {
          .profile-img {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            border: 2px solid #059669;
            object-fit: cover;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto p-8 print:p-0 print:max-w-none">
        {/* Header / Personal Info with Profile Image */}
        <header className="print-header border-b-2 border-emerald-600 pb-6 mb-6">
          <div className="flex items-start gap-6">
            {/* Profile Image - using regular img for print compatibility */}
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt={resumeData.personal.name}
                className="profile-img"
              />
            </div>
            
            {/* Personal Details */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 print:text-2xl">
                {resumeData.personal.name}
              </h1>
              <p className="text-lg text-emerald-700 font-medium mb-3 print:text-base print:mb-2">
                {resumeData.personal.headline}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 print:text-xs print:gap-1">
                <span>📧 {resumeData.personal.email}</span>
                <span>📱 {resumeData.personal.phone}</span>
                <span>📍 {resumeData.personal.location}</span>
                <span>🌍 {resumeData.personal.nationality}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2 print:text-xs print:gap-2 print:mt-1">
                <a href={resumeData.personal.orcid} className="text-emerald-600">
                  ORCID
                </a>
                <a href={resumeData.personal.linkedin} className="text-emerald-600">
                  LinkedIn
                </a>
                <a href={resumeData.personal.googleScholar} className="text-emerald-600">
                  Google Scholar
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2 print:text-xs print:mt-1">
                <strong>Availability:</strong> {resumeData.personal.availability}
              </p>
            </div>
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
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree}
                      {edu.degree.includes('PhD') && (
                        <a 
                          href="#phd-overview" 
                          className="ml-2 text-xs text-emerald-600 font-normal hover:underline print:text-emerald-700"
                        >
                          → View Research Overview
                        </a>
                      )}
                    </h3>
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

        {/* PhD Overview */}
        <section id="phd-overview" className="mb-6 page-break">
          <h2 className="text-lg font-bold text-emerald-700 border-b border-gray-200 pb-1 mb-4">
            PHD RESEARCH OVERVIEW
          </h2>
          
          {/* PhD Topic */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">🎯</span> Research Topic
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500">
              CRISPR-Cas13a–Based Targeting of Antimicrobial Resistance Determinants in Multidrug-Resistant <em>Klebsiella pneumoniae</em> and <em>Escherichia coli</em> Isolates from Food-Producing Livestock in Ghana
            </p>
          </div>

          {/* Background */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">📚</span> Background
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Antimicrobial resistance (AMR) is a growing threat to public health, food safety, and animal health worldwide. In Ghana, food-producing livestock increasingly serve as reservoirs of multidrug-resistant (MDR) bacteria, particularly <em>Klebsiella pneumoniae</em> and <em>Escherichia coli</em>. These organisms are commonly associated with zoonotic and foodborne infections and are capable of transferring resistance genes to humans through direct contact, contaminated animal products, and environmental exposure. The widespread use of antibiotics in animal production has accelerated the emergence and spread of resistance genes that compromise the effectiveness of commonly used antimicrobials. Innovative and targeted approaches are therefore required to complement existing AMR control strategies, especially within the One Health framework.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">⚠️</span> Statement of the Problem
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Despite national and regional efforts to address AMR, surveillance and intervention strategies in Ghana remain largely focused on detection rather than targeted mitigation of resistance at its source. MDR <em>K. pneumoniae</em> and <em>E. coli</em> circulating in food-producing livestock harbor clinically important resistance determinants that can enter the human population through the food chain. However, there is limited laboratory-based research in Ghana exploring advanced, gene-targeted approaches for addressing resistance in animal reservoirs. This gap limits the development of effective, context-specific solutions to interrupt zoonotic transmission of AMR.
            </p>
          </div>

          {/* Research Objectives */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">🎯</span> Research Objectives
            </h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>To isolate and characterize multidrug-resistant <em>K. pneumoniae</em> and <em>E. coli</em> from food-producing livestock.</li>
                <li>To determine phenotypic resistance profiles and identify key antimicrobial resistance genes.</li>
                <li>To design CRISPR-Cas13a guide RNAs targeting selected resistance determinants.</li>
                <li>To evaluate the ability of CRISPR-Cas13a systems to silence resistance genes and restore antibiotic susceptibility <em>in vitro</em>.</li>
                <li>To assess biosafety, genetic stability, and potential off-target effects of the CRISPR-Cas13a approach.</li>
              </ol>
            </div>
          </div>

          {/* SDG Contributions */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">🌍</span> Contribution to UN Sustainable Development Goals
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-green-50 p-2 rounded-lg border border-green-200 text-center">
                <div className="font-bold text-green-700">SDG 3</div>
                <div className="text-gray-600">Good Health & Well-being</div>
                <div className="text-gray-500 mt-1">Addressing AMR threats to disease treatment</div>
              </div>
              <div className="bg-amber-50 p-2 rounded-lg border border-amber-200 text-center">
                <div className="font-bold text-amber-700">SDG 2</div>
                <div className="text-gray-600">Zero Hunger</div>
                <div className="text-gray-500 mt-1">Improving food safety & livestock health</div>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-center">
                <div className="font-bold text-blue-700">SDG 12</div>
                <div className="text-gray-600">Responsible Consumption</div>
                <div className="text-gray-500 mt-1">Prudent antimicrobial use in food production</div>
              </div>
            </div>
          </div>

          {/* Significance */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">💡</span> Significance of the Study
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This study will generate laboratory-based evidence on AMR in zoonotic and foodborne pathogens from livestock, supporting One Health–driven AMR surveillance and control strategies in Ghana. By exploring CRISPR-Cas13a as a precision tool for targeting resistance genes, the research introduces innovative approaches that may complement conventional antimicrobial stewardship efforts. The findings are expected to inform policy, strengthen research capacity, and contribute to national and regional AMR action plans.
            </p>
          </div>

          {/* Key Research Areas */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">🔬</span> Key Research Areas & Techniques
            </h3>
            <div className="flex flex-wrap gap-2">
              {['CRISPR-Cas13a', 'Antimicrobial Resistance', 'Molecular Biology', 'Genomics', 'One Health', 'Bioinformatics', 'Microbiology', 'Gene Silencing', 'Biosafety Analysis', 'Whole Genome Sequencing'].map((area, i) => (
                <span key={i} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Collaboration Note */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">🤝</span> Sponsorship & Collaboration Opportunities
            </h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                The successful execution of this PhD research depends on access to advanced molecular biology and genomics facilities. I am actively seeking research sponsorship, institutional partnerships, and laboratory hosting opportunities—locally or internationally—to support sequencing, CRISPR-related experiments, and biosafety analyses. Collaborative laboratories and funding partners will play a critical role in enabling this work and advancing shared goals in AMR and One Health research.
              </p>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="mb-4 no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">📈</span> Expected Outcomes & Impact
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Novel insights into AMR prevalence in Ghanaian livestock populations</li>
              <li>Proof-of-concept for CRISPR-Cas13a-based resistance gene silencing</li>
              <li>Contribution to One Health AMR surveillance frameworks</li>
              <li>Policy recommendations for antimicrobial stewardship in agriculture</li>
              <li>High-impact peer-reviewed publications and conference presentations</li>
              <li>Strengthened regional research capacity in advanced molecular techniques</li>
            </ul>
          </div>

          {/* Contact for Collaboration */}
          <div className="no-break">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">📬</span> Contact for Research Collaboration
            </h3>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">{resumeData.personal.name}</p>
                  <p className="text-gray-600">PhD Candidate, Biotechnology</p>
                  <p className="text-gray-600">University of Ghana, Accra</p>
                </div>
                <div className="text-gray-600">
                  <p>📧 {resumeData.personal.email}</p>
                  <p>📱 {resumeData.personal.phone}</p>
                  <p>📍 {resumeData.personal.location}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-emerald-200 flex flex-wrap gap-4 text-xs">
                <a href={resumeData.personal.orcid} className="text-emerald-600 hover:underline">🔗 ORCID Profile</a>
                <a href={resumeData.personal.linkedin} className="text-emerald-600 hover:underline">🔗 LinkedIn</a>
                <a href={resumeData.personal.googleScholar} className="text-emerald-600 hover:underline">🔗 Google Scholar</a>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Open to research collaborations, funding partnerships, and laboratory hosting opportunities. Let&apos;s work together to combat antimicrobial resistance.
              </p>
            </div>
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
