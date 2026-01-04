'use client'

import { useState, createContext, useContext, ReactNode, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import clsx from 'clsx'

interface AccordionContextType {
  openId: string | null
  setOpenId: (id: string | null) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

export function AccordionGroup({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null)
  return (
    <AccordionContext.Provider value={{ openId, setOpenId }}>
      <div className="space-y-3">{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  title: string
  subtitle?: string
  badge?: string
  children: ReactNode
  defaultOpen?: boolean
  id?: string
}

export function AccordionItem({ title, subtitle, badge, children, defaultOpen = false, id }: AccordionItemProps) {
  const generatedId = useId()
  const itemId = id || generatedId
  const ctx = useContext(AccordionContext)
  
  const [localOpen, setLocalOpen] = useState(defaultOpen)
  const isOpen = ctx ? ctx.openId === itemId : localOpen
  
  const toggle = () => {
    if (ctx) {
      ctx.setOpenId(isOpen ? null : itemId)
    } else {
      setLocalOpen(!localOpen)
    }
  }

  const contentId = `accordion-content-${itemId}`
  const headerId = `accordion-header-${itemId}`

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggle()
          }
        }}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base md:text-lg truncate">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {badge && (
            <span className="px-2.5 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
              {badge}
            </span>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400 dark:text-gray-500"
          >
            <Plus size={20} />
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 border-t border-gray-100 dark:border-gray-700">
              <div className="pt-4">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function AccordionContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('text-gray-600 dark:text-gray-300 text-sm md:text-base', className)}>{children}</div>
}
