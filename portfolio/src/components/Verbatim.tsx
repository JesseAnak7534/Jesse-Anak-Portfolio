import type { Resume } from '../lib/types'

const HEADINGS = [
  'JESSE AZEBIIK ANAK', 'ABOUT ME', 'EDUCATION', 'CORE COMPETENCIES', 'NATIONAL PROJECT',
  'WORK EXPERIENCE', 'OTHER CORE COMPETENCIES', 'CONFERENCES AND WORKSHOPS/SEMINARS',
  'PUBLICATIONS', 'MANAGEMENT AND LEADERSHIP SKILLS', 'DIGITAL AND SOCIAL SKILLS',
  'NETWORKS AND MEMBERSHIPS', 'HOBBIES AND INTERESTS', 'REFEREES'
]

function isHeading(line: string){
  const t = line.trim().replace(/:$/,'')
  return HEADINGS.some(h => t.toUpperCase().includes(h)) || /^[A-Z][A-Z\s/&-]+$/.test(t)
}

function isBullet(line: string){
  return /^([\u2022•\-\–\—\*]|)/.test(line.trim())
}

export default function Verbatim({ data }: { data?: Resume | null }) {
  const lines = (data?.fullText || [])
  const sections: { title?: string; content: string[] }[] = []
  let current: { title?: string; content: string[] } = { content: [] }
  for(const l of lines){
    if(isHeading(l)){
      if(current.content.length){ sections.push(current) }
      current = { title: l.trim(), content: [] }
    } else {
      current.content.push(l)
    }
  }
  if(current.content.length || current.title){ sections.push(current) }

  return (
    <div style={{display:'grid', gap:18}}>
      {sections.map((s, idx) => (
        <section key={idx} className="section" style={{padding:'24px 0', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
          {s.title && <h2 style={{margin:'0 0 10px', fontFamily:'Space Grotesk'}}>{s.title}</h2>}
          <div>
            {/* Render bullets as list, others as paragraphs, preserving order */}
            {s.content.map((c, i) => {
              if(isBullet(c)){
                const text = c.replace(/^([\u2022•\-\–\—\*]|)\s*/, '')
                return <li key={i} style={{marginLeft:18}}>{text}</li>
              }
              return <p key={i} style={{margin:'6px 0', color:'var(--muted)'}}>{c}</p>
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
