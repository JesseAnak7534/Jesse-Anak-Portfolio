import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import EducationList from '../components/Education'
import { useResume } from '../lib/useResume'

export default function EducationPage(){
  const { data } = useResume()
  return (
    <>
      <Nav />
      <main>
        <Section id="education" title="Education">
          <EducationList data={data} />
        </Section>
      </main>
    </>
  )
}
