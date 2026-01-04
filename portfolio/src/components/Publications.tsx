import type { Resume } from '../lib/types'

function parsePublications(res?: Resume){
  const arr = (res?.publications||[]).filter(Boolean)
  const pubs: {title:string; year?:string}[] = []
  for(let i=0;i<arr.length;i++){
    const t = String(arr[i])
    const y = String(arr[i+1]||'')
    if(/\b\d{4}\b/.test(y)){
      pubs.push({ title: t, year: y.match(/\b\d{4}\b/)?.[0] })
      i++
    }
  }
  return pubs.slice(0,8)
}

export default function Publications({ data }: { data?: Resume | null }){
  const pubs = parsePublications(data || undefined)
  if(!pubs.length) return null
  return (
    <div className="grid cols-2">
      {pubs.map((p,i)=> (
        <div className="card" key={i}>
          <h3>{p.title}</h3>
          {p.year && <div className="meta">{p.year}</div>}
        </div>
      ))}
    </div>
  )
}
