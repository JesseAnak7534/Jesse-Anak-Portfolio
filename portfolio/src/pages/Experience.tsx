import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import ExperienceList from '../components/Experience'
import { useResume } from '../lib/useResume'

export default function ExperiencePage(){
  const { data } = useResume()
  return (
    <>
      <Nav />
      <main>
        <Section id="experience" title="Work Experience">
          <ExperienceList data={data} />
        </Section>
      </main>
    </>
  )
}
