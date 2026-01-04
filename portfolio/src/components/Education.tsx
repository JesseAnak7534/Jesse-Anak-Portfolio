import type { Resume } from '../lib/types'

function parseEducation(res?: Resume) {
  const items = res?.education || []
  if (items.length) return items
  const raw = res?.sectionsRaw?.education || []
  const result: { degree?: string; school?: string; dates?: string; details?: string[] }[] = []
  for (let i=0;i<raw.length-2;i++){
    const a=raw[i], b=raw[i+1], c=raw[i+2]
    if (/\d{4}/.test(c)) {
      result.push({ degree:b, school:a, dates:c, details: [] })
      i+=2
    }
  }
  return result
}

export default function Education({ data }: { data?: Resume | null }) {
  const items = parseEducation(data || undefined)
  return (
    <div className="grid cols-2">
      {items.map((e, idx) => (
        <div className="card" key={idx}>
          <h3>{e.degree}</h3>
          <div className="meta">{e.school}</div>
          {e.dates && <div className="badge" style={{marginTop:8}}>{e.dates}</div>}
        </div>
      ))}
    </div>
  )
}
