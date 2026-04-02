'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Badge } from '@/components/UI';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, FileDown, Microscope, Sparkles, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

// Animated text component - letter by letter reveal with gradient
function AnimatedName({ name }: { name: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <span className={`${isComplete ? 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient' : ''}`}>
      {displayedText}
      {!isComplete && <span className="typewriter-cursor" />}
    </span>
  );
}

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const isNumeric = /\d/.test(value);

  useEffect(() => {
    if (!isNumeric) return;
    
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, isNumeric]);

  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
        {isNumeric ? `${count}${value.replace(/\d/g, '')}` : value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const { personal, aboutMe, quickStats, experience, publications } = resumeData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const statsArray = [
    { value: quickStats.yearsExperience, label: 'Years Experience' },
    { value: `${publications.length}+`, label: 'Publications' },
    { value: `${experience.length}+`, label: 'Projects' },
    { value: '4', label: 'Research Areas' },
  ];

  return (
    <PageWrapper>
      <div ref={containerRef} className="relative">
        <FloatingParticles />
        
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center relative">
          <motion.div style={{ y }} className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                <Sparkles size={14} className="animate-pulse" />
                Founder of ICBB • Open for Collaborations
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.p 
                className="text-emerald-600 dark:text-emerald-400 font-semibold text-xl tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hello, I'm
              </motion.p>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                <AnimatedName name={personal.name} />
              </h1>
              <motion.p 
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {personal.headline}
              </motion.p>
            </div>

            {/* About Summary */}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {aboutMe}
            </motion.p>

            {/* Interactive Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              {statsArray.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-default group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-cyan-500 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Links */}
            <motion.div 
              className="flex flex-wrap gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 px-3 py-2 glass rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-all group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-2 px-3 py-2 glass rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-all group">
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                {personal.phone}
              </a>
              <span className="flex items-center gap-2 px-3 py-2 glass rounded-lg">
                <MapPin size={16} />
                {personal.location}
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {[
                { href: personal.orcid, label: 'ORCID', color: 'from-green-500 to-emerald-500' },
                { href: personal.linkedin, label: 'LinkedIn', color: 'from-blue-500 to-cyan-500' },
                { href: personal.googleScholar, label: 'Google Scholar', color: 'from-orange-500 to-red-500' },
              ].filter(link => link.href).map((link) => (
                <a 
                  key={link.label}
                  href={link.href!} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${link.color} text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all`}
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all hover:scale-105 shadow-xl shadow-emerald-500/30 group"
              >
                <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all border-2 border-transparent hover:border-emerald-500"
              >
                <Mail size={20} />
                Let's Connect
              </Link>
              <Link
                href="/cv-print"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all print:hidden group"
              >
                <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Section - ICBB */}
        <section className="py-16 border-t border-gray-200/50 dark:border-gray-700/50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200/50 dark:border-emerald-800/50">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                  <Microscope className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Institute of Computational Biology and Bioinformatics (ICBB)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    As Founder & Director, I lead research programs in computational biology, bioinformatics, genomics, and biomedical data science. We provide professional data analysis services and deliver training programs to build capacity across Africa.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Bioinformatics', 'Genomics', 'AI/ML', 'Capacity Building'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://icbb.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                  >
                    Visit ICBB Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Navigation */}
        <section className="py-16 border-t border-gray-200/50 dark:border-gray-700/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
              Explore My Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Discover more about my work, research, and expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/about', title: 'About Me', desc: 'The story behind the stats', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
              { href: '/education', title: 'Education', desc: 'Academic foundations', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
              { href: '/skills', title: 'Skills', desc: 'Technical expertise', icon: Award, color: 'from-orange-500 to-red-500' },
              { href: '/experience', title: 'Experience', desc: 'Professional journey', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
              { href: '/projects', title: 'Projects', desc: 'Research deep dives', icon: Microscope, color: 'from-indigo-500 to-purple-500' },
              { href: '/publications', title: 'Publications', desc: 'Published works', icon: BookOpen, color: 'from-teal-500 to-green-500' },
              { href: '/leadership', title: 'Leadership', desc: 'Community impact', icon: Award, color: 'from-amber-500 to-orange-500' },
              { href: '/contact', title: 'Contact', desc: `Let's collaborate`, icon: Mail, color: 'from-pink-500 to-rose-500' },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  className="block p-6 glass rounded-xl hover:scale-[1.03] transition-all group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <link.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {link.desc}
                  </p>
                  <ArrowRight size={16} className="mt-3 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-2 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
