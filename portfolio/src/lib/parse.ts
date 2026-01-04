import type { Resume } from './types'

const HEADINGS = [
  'ABOUT ME', 'EDUCATION', 'CORE COMPETENCIES', 'WORK EXPERIENCE', 'CONFERENCES AND WORKSHOPS/SEMINARS',
  'PUBLICATIONS', 'MANAGEMENT AND LEADERSHIP SKILLS', 'DIGITAL AND SOCIAL SKILLS', 'NETWORKS AND MEMBERSHIPS',
  'HOBBIES AND INTERESTS', 'REFEREES', 'NATIONAL PROJECT', 'OTHER CORE COMPETENCIES'
]

export function getSectionLines(res: Resume | undefined, heading: string){
  const ft = (res?.fullText || [])
  const idx = ft.findIndex(l => l.toUpperCase().includes(heading))
  if (idx < 0) return []
  const end = ft.findIndex((l,i)=> i>idx && HEADINGS.some(h=> l.toUpperCase().includes(h)))
  return ft.slice(idx+1, end>0? end: ft.length).map(s=> s.trim()).filter(Boolean)
}

export function splitBulletLines(lines: string[]){
  return Array.from(new Set(lines.map(s=> s.replace(/^([•\-*\s]+|\u2022)/,'').trim()).filter(Boolean)))
}

export function parseReferees(res?: Resume){
  const lines = getSectionLines(res, 'REFEREES')
  const refs: { name:string; org?:string; email?:string; phone?:string }[] = []
  let i = 0
  while(i < lines.length){
    const name = lines[i]
    const org = lines[i+1]
    let email: string | undefined
    let phone: string | undefined
    for(let j=i;j<i+6 && j<lines.length; j++){
      const l = lines[j]
      if(/@/.test(l)) email = l.split(/\s+/).find(w=> /@/.test(w)) || l
      if(/\+?\d/.test(l) && /\d{3,}/.test(l)) phone = l
    }
    refs.push({ name, org, email, phone })
    i += 6
  }
  return refs.filter(r=> r.name)
}

export function parseConferences(res?: Resume){
  const lines = getSectionLines(res, 'CONFERENCES AND WORKSHOPS/SEMINARS')
  const items: { title:string; dates?:string; details?:string[] }[] = []
  let i = 0
  while(i < lines.length){
    const title = lines[i]
    const maybeDate = lines[i+1]
    const isDate = /\d{2}\/\d{4}|\d{4}/.test(maybeDate||'')
    const details: string[] = []
    i += isDate ? 2 : 1
    while(i<lines.length && !/^[A-Z]/.test(lines[i])){ details.push(lines[i]); i++ }
    items.push({ title, dates: isDate ? maybeDate : undefined, details })
  }
  return items
}

export function parseLeadership(res?: Resume){
  return splitBulletLines(getSectionLines(res, 'MANAGEMENT AND LEADERSHIP SKILLS'))
}
export function parseMemberships(res?: Resume){
  const lines = getSectionLines(res, 'NETWORKS AND MEMBERSHIPS')
  const items: { org:string; period?:string }[] = []
  for(let i=0;i<lines.length;i++){
    const org = lines[i]
    const period = lines[i+1]
    if(/\d{4}/.test(period||'')) { items.push({ org, period }); i++ } else { items.push({ org }) }
  }
  return items
}
export function parseHobbies(res?: Resume){
  return splitBulletLines(getSectionLines(res, 'HOBBIES AND INTERESTS'))
}
export function parseCoreCompetencies(res?: Resume){
  const lines = getSectionLines(res, 'CORE COMPETENCIES')
  return splitBulletLines(lines).slice(0, 50)
}
export function parseNationalProject(res?: Resume){
  const lines = getSectionLines(res, 'NATIONAL PROJECT')
  const items: { key:string; value?:string }[] = []
  for(let i=0;i<lines.length;i++){
    const l = lines[i]
    if(/Key Role:/i.test(l)) items.push({ key:'Key Role', value: l.replace(/Key Role:\s*/i,'').trim() })
    else if(/Project title:/i.test(l)) items.push({ key:'Project Title', value: l.replace(/Project title:\s*/i,'').trim() })
    else items.push({ key:'Detail', value: l })
  }
  return items
}
