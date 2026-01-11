'use client';

import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

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

                {/* PhD Overview Link */}
                {edu.degree.includes('PhD') && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      href="/phd-overview"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
                    >
                      <BookOpen size={18} />
                      View PhD Research Overview
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Section>
    </PageWrapper>
  );
}
