import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'Jesse Azebiik Anak | Data Analyst & Researcher',
    template: '%s | Jesse Anak Portfolio',
  },
  description: 'Portfolio of Jesse Azebiik Anak - Data Analyst, Researcher, and Bioinformatics Specialist from Ghana with expertise in public health, biomedical research, and data science.',
  keywords: ['Data Analyst', 'Researcher', 'Bioinformatics', 'Ghana', 'Public Health', 'Python', 'R', 'Power BI', 'Tableau'],
  authors: [{ name: 'Jesse Azebiik Anak' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jesseanak.com',
    siteName: 'Jesse Anak Portfolio',
    title: 'Jesse Azebiik Anak | Data Analyst & Researcher',
    description: 'Portfolio of Jesse Azebiik Anak - Data Analyst, Researcher, and Bioinformatics Specialist from Ghana.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesse Azebiik Anak | Data Analyst & Researcher',
    description: 'Portfolio of Jesse Azebiik Anak - Data Analyst, Researcher, and Bioinformatics Specialist from Ghana.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-gray-900 dark:text-gray-100 antialiased transition-colors min-h-screen">
        {/* Colorful background blobs */}
        <div className="bg-blobs print:hidden">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>
        <Navbar />
        {children}
        <footer className="border-t border-gray-200/50 dark:border-gray-800/50 py-8 mt-12 print:hidden backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Jesse Azebiik Anak. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
