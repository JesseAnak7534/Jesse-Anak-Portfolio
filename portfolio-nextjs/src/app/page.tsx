'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Badge } from '@/components/UI';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, FileDown } from 'lucide-react';

// Animated text component - letter by letter reveal
function AnimatedName({ name }: { name: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Keep cursor blinking after completion
      }
    }, 80);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <span>
      {displayedText}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function HomePage() {
  const { personal, aboutMe, quickStats } = resumeData;

  const statsArray = [
    { value: quickStats.yearsExperience, label: 'Years in Research' },
    ...quickStats.areas.slice(0, 3).map(area => ({ value: '✓', label: area })),
  ];

  // Handle full CV download - opens printable version
  const handleDownloadCV = () => {
    window.open('/cv-print', '_blank');
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p 
              className="text-primary font-medium text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hey there! I'm
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              <AnimatedName name={personal.name} />
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {personal.headline}
            </motion.p>
          </div>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            {aboutMe}
          </motion.p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 pt-4">
            {statsArray.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.1 }}
              >
                <Badge variant="outline">
                  <span className="font-bold text-primary">{stat.value}</span>
                  <span className="mx-1">•</span>
                  <span>{stat.label}</span>
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-4 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              {personal.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {personal.location}
            </span>
            {personal.orcid && (
              <a 
                href={personal.orcid} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                ORCID
              </a>
            )}
            {personal.linkedin && (
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
            )}
            {personal.googleScholar && (
              <a 
                href={personal.googleScholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Google Scholar
              </a>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all"
            >
              Let's Connect
            </Link>
            <Link
              href="/cv-print"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all print:hidden"
            >
              <FileDown size={18} />
              Download Full CV
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 border-t border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">
          Know me...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: '/about', title: 'About Me', desc: 'The story behind the stats — who I am beyond the resume' },
            { href: '/education', title: 'Education', desc: 'Where I sharpened my thinking and built my foundations' },
            { href: '/skills', title: 'Skills', desc: 'From SPSS to storytelling — the tools I bring to the table' },
            { href: '/experience', title: 'Experience', desc: 'Real projects, real impact, real lessons learned' },
            { href: '/projects', title: 'Projects', desc: 'Deep dives into research that actually matters' },
            { href: '/publications', title: 'Publications', desc: 'Sharing knowledge at conferences and in journals' },
            { href: '/leadership', title: 'Leadership', desc: 'Leading teams, mentoring peers, building communities' },
            { href: '/contact', title: 'Contact', desc: 'Let\'s collaborate on something meaningful' },
          ].map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 + 0.1 * i }}
            >
              <Link
                href={link.href}
                className="block p-6 glass rounded-xl hover:border-primary dark:hover:border-primary transition-all hover:scale-[1.02] group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {link.desc}
                </p>
                <ArrowRight size={16} className="mt-3 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
