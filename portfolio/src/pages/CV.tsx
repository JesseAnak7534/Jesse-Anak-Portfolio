import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import Verbatim from '../components/Verbatim'
import { useResume } from '../lib/useResume'

export default function CVPage(){
  const { data } = useResume()
  return (
    <>
      <Nav />
      <main>
        <Section id="cv" title="Curriculum Vitae — Verbatim View">
          <Verbatim data={data} />
        </Section>
      </main>
    </>
  )
}
