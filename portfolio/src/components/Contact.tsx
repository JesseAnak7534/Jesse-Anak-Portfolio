import { FaEnvelope, FaPhone, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa6'
import type { Resume } from '../lib/types'

export default function Contact({ data }: { data?: Resume | null }){
  const c = data?.contact || {}
  return (
    <div className="grid cols-2">
      <div className="card">
        <h3>Get in touch</h3>
        <div className="meta">I respond quickly — email preferred.</div>
        <div style={{display:'grid', gap:10, marginTop:12}}>
          {c.email && <a href={`mailto:${c.email}`}><FaEnvelope style={{marginRight:8}}/> {c.email}</a>}
          {c.phone && <a href={`tel:${c.phone.replace(/[^\+\d]/g,'')}`}><FaPhone style={{marginRight:8}}/> {c.phone}</a>}
          {c.website && <a href={c.website} target="_blank" rel="noreferrer"><FaGlobe style={{marginRight:8}}/> Website</a>}
          {c.github && <a href={c.github} target="_blank" rel="noreferrer"><FaGithub style={{marginRight:8}}/> GitHub</a>}
          {c.linkedin && <a href={c.linkedin} target="_blank" rel="noreferrer"><FaLinkedin style={{marginRight:8}}/> LinkedIn</a>}
        </div>
      </div>
      <div className="card">
        <h3>Message</h3>
        <form action={`mailto:${c.email || ''}`} method="post" encType="text/plain" style={{display:'grid', gap:10}}>
          <input name="name" placeholder="Your name" required style={{padding:10, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.02)', color:'inherit'}} />
          <input name="email" placeholder="Your email" type="email" required style={{padding:10, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.02)', color:'inherit'}} />
          <textarea name="message" placeholder="Message" rows={4} required style={{padding:10, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.02)', color:'inherit'}} />
          <button className="theme-toggle" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
