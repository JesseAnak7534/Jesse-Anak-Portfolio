'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageWrapperProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function PageWrapper({ children, title, subtitle }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {title && (
          <header className="mb-8 md:mb-12">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                {subtitle}
              </p>
            )}
          </header>
        )}
        <main>{children}</main>
      </div>
    </motion.div>
  )
}

export function Section({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mb-10 ${className || ''}`}>
      {title && (
        <h2 className="font-display text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export function Badge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'primary' | 'accent' | 'outline' }) {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent',
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function Chip({ children, onClick, active }: { children: ReactNode; onClick?: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-primary-500 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {children}
    </button>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm ${className || ''}`}>
      {children}
    </div>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
