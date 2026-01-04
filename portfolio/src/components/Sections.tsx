import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>{title}</motion.h2>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
