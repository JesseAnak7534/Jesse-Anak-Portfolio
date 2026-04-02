'use client';

import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationPage() {
  const { education } = resumeData;

  return (
    <PageWrapper
      title="Education"
      subtitle="Academic background, qualifications, and specialized training."
    >
      <Section>
        <AccordionGroup>
          {education.map((edu, i) => (
            <AccordionItem
              key={i}
              id={`edu-${i}`}
              title={edu.degree}
              subtitle={`${edu.institution}, ${edu.location}`}
              badge={edu.dates}
            >
              <div className="space-y-4">
                {/* Institution & Location */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.dates}</span>
                </div>

                {/* Details */}
                {edu.details && edu.details.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Key Details
                    </h4>
                    <BulletList items={edu.details} />
                  </div>
                )}

                {/* PhD Research Link */}
                {edu.degree.includes('PhD') && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      href="/phd-overview"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
                    >
                      <BookOpen size={18} />
                      View Research Overview
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Section>

      {/* Research Interest Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200/50 dark:border-emerald-800/50"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Microscope className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Research Interest
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore my research focus on CRISPR-Cas13a technology for targeting antimicrobial resistance determinants in multidrug-resistant bacteria.
              </p>
              <Link 
                href="/phd-overview"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
              >
                <BookOpen size={18} />
                View Research Details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}
