import type { Resume } from '../lib/types'

function parseSkills(res?: Resume) {
  if (res?.skills && res.skills.length) return res.skills
  const ft = (res?.fullText || []).map(s=>s.toLowerCase())
  const start = ft.findIndex(l => l.includes('core competencies'))
  if (start >= 0){
    const end = ft.findIndex((l,i)=> i>start && (l.includes('national project') || l.includes('work experience')))
    const slice = (res!.fullText || []).slice(start+1, end>0? end : start+25)
    return Array.from(new Set(slice.map(s=>s.replace(/^[•\-*\s]+/, '').trim()).filter(Boolean))).slice(0, 30)
  }
  return []
}

export default function Skills({ data }: { data?: Resume | null }) {
  const skills = parseSkills(data || undefined)
  return (
    <div className="chips" style={{justifyContent:'flex-start'}}>
      {skills.map((s, i) => <span className="chip" key={i}>{s}</span>)}
    </div>
  )
}
