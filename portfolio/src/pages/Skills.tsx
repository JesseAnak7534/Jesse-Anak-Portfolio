import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import SkillsComp from '../components/Skills'
import { useResume } from '../lib/useResume'
import { parseCoreCompetencies, parseNationalProject } from '../lib/parse'

export default function SkillsPage(){
  const { data } = useResume()
  const core = parseCoreCompetencies(data||undefined)
  const nat = parseNationalProject(data||undefined)
  return (
    <>
      <Nav />
      <main>
        <Section id="skills" title="Skills">
          <SkillsComp data={data} />
        </Section>
        <Section id="core" title="Core Competencies">
          <div className="chips" style={{justifyContent:'flex-start'}}>
            {core.map((s,i)=> <span className="chip" key={i}>{s}</span>)}
          </div>
        </Section>
        <Section id="project" title="National Project — AMR Surveillance System">
          <div className="timeline">
            {nat.map((n,i)=> (
              <div className="timeline-item" key={i}>
                <h3 style={{margin:0}}>{n.key}</h3>
                {n.value && <div className="meta">{n.value}</div>}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
