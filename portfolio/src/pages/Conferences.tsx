import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import { useResume } from '../lib/useResume'
import { parseConferences } from '../lib/parse'

export default function ConferencesPage(){
  const { data } = useResume()
  const items = parseConferences(data || undefined)
  return (
    <>
      <Nav />
      <main>
        <Section id="conferences" title="Conferences & Workshops">
          <div className="timeline">
            {items.map((e,idx)=> (
              <div className="timeline-item" key={idx}>
                <div style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
                  <h3 style={{margin:0}}>{e.title}</h3>
                  {e.dates && <span className="badge">{e.dates}</span>}
                </div>
                {e.details && e.details.length>0 && (
                  <ul style={{margin:'8px 0 0 18px'}}>
                    {e.details.slice(0,5).map((d,i)=>(<li key={i}>{d}</li>))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
