import Nav from './components/Nav'
import Hero from './components/Hero'
import { Section } from './components/Sections'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'
import { useResume } from './lib/useResume'
import { parseCoreCompetencies } from './lib/parse'

export default function App(){
  const { data, loading } = useResume()
  const core = parseCoreCompetencies(data||undefined)
  return (
    <>
      <Nav />
      <Hero data={data} />
      <main>
        <Section id="about" title="About">
          <p style={{color:'var(--muted)', maxWidth:800}}>
            {loading ? 'Loading…' : (data?.summary || 'I am a data-driven researcher with hands-on experience across data analysis, reporting and visualization in public health, biomedical and social research projects.')}
          </p>
        </Section>
        <Section id="experience" title="Experience">
          <Experience data={data} />
        </Section>
        <Section id="education" title="Education">
          <Education data={data} />
        </Section>
        <Section id="skills" title="Skills">
          <Skills data={data} />
        </Section>
        <Section id="competencies" title="Core Competencies">
          <div className="chips" style={{justifyContent:'flex-start'}}>
            {core.map((s,i)=> <span className="chip" key={i}>{s}</span>)}
          </div>
        </Section>
        <Section id="publications" title="Publications">
          <Publications data={data} />
        </Section>
        <Section id="contact" title="Contact">
          <Contact data={data} />
        </Section>
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Jesse Azebiik Anak</div>
      </footer>
    </>
  )
}
