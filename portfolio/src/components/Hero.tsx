import { motion } from 'framer-motion'
import Starfield from './Starfield'
import type { Resume } from '../lib/types'

function extractAbout(res?: Resume) {
  const lines = res?.fullText || []
  const i = lines.findIndex(l => l.toLowerCase().includes('about me'))
  if (i >= 0) {
    const slice = lines.slice(i+1, i+6)
    return slice.join(' ')
  }
  return res?.summary || ''
}

function extractChips(res?: Resume) {
  const chips = new Set<string>()
  ;(res?.skills || []).forEach(s => chips.add(s))
  const addIfFound = (kw: string) => {
    if ((res?.fullText || []).join(' ').toLowerCase().includes(kw)) chips.add(kw.replace(/\b\w/g, c=>c.toUpperCase()))
  }
  ;['data analysis','bioinformatics','research','public health','sql','python','r programming','power bi','tableau'].forEach(addIfFound)
  return Array.from(chips).slice(0, 10)
}

export default function Hero({ data }: { data?: Resume | null }) {
  const about = extractAbout(data || undefined)
  const chips = extractChips(data || undefined)
  return (
    <header className="hero">
      <Starfield />
      <div className="content container">
        <div className="kicker">Portfolio</div>
        <motion.h1 className="title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          {data?.name || 'Your Name Here'}
        </motion.h1>
        <p className="subtitle">{about || 'Research-focused professional with strengths across data, statistics and bioinformatics.'}</p>
        <div className="chips">
          {chips.map(c => <span className="chip" key={c}>{c}</span>)}
        </div>
      </div>
    </header>
  )
}
