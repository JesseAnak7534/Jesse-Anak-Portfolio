import type { Resume } from '../lib/types'

function buildExperience(res?: Resume) {
  // Try structured first
  const structured = res?.experience?.filter(Boolean) || []
  if (structured.length && structured[0]?.role !== 'Duration') return structured
  // Fallback from sectionsRaw.experience
  const raw = res?.sectionsRaw?.experience || []
  const items: { role?: string; company?: string; dates?: string; details?: string[] }[] = []
  let i = 0
  while (i < raw.length) {
    const org = raw[i]
    const role = raw[i+1]
    const dates = raw[i+2]
        const looksLikeDates = /\d{2}\/\d{4}/.test(dates || '') || /\b\d{4}\b/.test(dates || '')
    if (org && role && looksLikeDates) {
      const details: string[] = []
      i += 3
      while (i < raw.length && !raw[i].match(/^[A-Z].*\b(Institute|University|Project|School|Language|Unpaired|Noguchi|PROMPT|Centre|Department|Workshop|Introduction)\b/)) {
        details.push(raw[i]); i++
      }
      items.push({ role, company: org, dates, details })
      continue
    }
    i++
  }
  return items
}

export default function Experience({ data }: { data?: Resume | null }) {
  const items = buildExperience(data || undefined)
  return (
    <div className="timeline">
      {items.map((e, idx) => (
        <div className="timeline-item" key={idx}>
          <div style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
            <div>
              <h3 style={{margin:0}}>{e.role || 'Role'}</h3>
              <div className="meta">{e.company}</div>
            </div>
            {e.dates && <span className="badge">{e.dates}</span>}
          </div>
          {e.details && e.details.length>0 && (
            <ul style={{margin:'8px 0 0 18px'}}>
              {e.details.slice(0,6).map((d,i)=>(<li key={i}>{d}</li>))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
