import Nav from '../components/Nav'
import { Section } from '../components/Sections'
import ContactComp from '../components/Contact'
import { useResume } from '../lib/useResume'

export default function ContactPage(){
  const { data } = useResume()
  return (
    <>
      <Nav />
      <main>
        <Section id="contact" title="Contact">
          <ContactComp data={data} />
        </Section>
      </main>
    </>
  )
}
