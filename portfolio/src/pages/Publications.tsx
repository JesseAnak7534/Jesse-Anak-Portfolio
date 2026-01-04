import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import PublicationsComp from '../components/Publications'
import { useResume } from '../lib/useResume'

export default function PublicationsPage(){
  const { data } = useResume()
  return (
    <>
      <Nav />
      <main>
        <Section id="publications" title="Publications">
          <PublicationsComp data={data} />
        </Section>
      </main>
    </>
  )
}
