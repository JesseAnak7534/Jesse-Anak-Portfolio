'use client';

import { useState, useMemo } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, Chip, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import { Eye, EyeOff, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperiencePage() {
  const { experience } = resumeData;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showHighlights, setShowHighlights] = useState(true);

  // Get unique categories
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    experience.forEach(exp => exp.category?.forEach(c => cats.add(c)));
    return Array.from(cats);
  }, []);

  // Filter experiences
  const filteredExperience = useMemo(() => {
    if (!activeCategory) return experience;
    return experience.filter(exp => exp.category?.includes(activeCategory));
  }, [activeCategory]);

  return (
    <PageWrapper
      title="Professional Experience"
      subtitle={`${experience.length} roles across research, data science, bioinformatics, and education.`}
    >
      {/* Filters */}
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            <Chip
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            >
              All Roles ({experience.length})
            </Chip>
            {allCategories.map(cat => (
              <Chip
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              >
                {cat}
              </Chip>
            ))}
          </div>

          {/* Highlights Toggle */}
          <button
            onClick={() => setShowHighlights(!showHighlights)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {showHighlights ? <Eye size={16} /> : <EyeOff size={16} />}
            {showHighlights ? 'Showing Highlights' : 'Show Highlights'}
          </button>
        </div>
      </Section>

      {/* Experience List */}
      <Section>
        <AccordionGroup>
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <AccordionItem
                  id={`exp-${i}`}
                  title={exp.title}
                  subtitle={exp.organization}
                  badge={exp.dates}
                >
                  <div className="space-y-4">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.dates}</span>
                    </div>

                    {/* Categories */}
                    {exp.category && exp.category.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.category.map((cat, j) => (
                          <Badge key={j} variant="outline">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Duties */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Key Responsibilities
                      </h4>
                      <BulletList items={exp.duties} />
                    </div>

                    {/* Highlights */}
                    <AnimatePresence>
                      {showHighlights && exp.highlights && exp.highlights.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border-l-4 border-primary"
                        >
                          <h4 className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                            <Star size={14} />
                            Key Highlights
                          </h4>
                          <BulletList items={exp.highlights} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </AccordionGroup>

        {/* No results */}
        {filteredExperience.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>No experiences found in this category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-2 text-primary hover:underline"
            >
              Show all roles
            </button>
          </div>
        )}
      </Section>
    </PageWrapper>
  );
}
