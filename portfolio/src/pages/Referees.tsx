import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import { useResume } from '../lib/useResume'
import { parseReferees } from '../lib/parse'

export default function RefereesPage(){
  const { data } = useResume()
  const refs = parseReferees(data || undefined)
  return (
    <>
      <Nav />
      <main>
        <Section id="referees" title="Referees">
          <div className="grid cols-2">
            {refs.map((r,i)=> (
              <div className="card" key={i}>
                <h3>{r.name}</h3>
                {r.org && <div className="meta" style={{marginBottom:8}}>{r.org}</div>}
                <div style={{display:'grid', gap:8}}>
                  {r.email && <a href={`mailto:${r.email}`}>{r.email}</a>}
                  {r.phone && <a href={`tel:${r.phone.replace(/[^\+\d]/g,'')}`}>{r.phone}</a>}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
