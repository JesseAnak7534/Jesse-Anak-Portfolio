'use client';

import { useState, useMemo } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, Chip } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillsPage() {
  const { skills } = resumeData;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { key: 'digital', label: 'Digital & Data Tools', data: skills.digitalDataTools },
    { key: 'social', label: 'Social Media Skills', data: skills.socialMediaSkills },
    { key: 'other', label: 'Core Competencies', data: skills.otherCoreCompetencies },
  ];

  // Filter skills based on search
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    const term = searchTerm.toLowerCase();
    return categories.map(cat => ({
      ...cat,
      data: cat.data.filter((skill: string) => skill.toLowerCase().includes(term)),
    })).filter(cat => cat.data.length > 0);
  }, [searchTerm]);

  // Count total skills
  const totalSkills = skills.digitalDataTools.length + skills.socialMediaSkills.length + skills.otherCoreCompetencies.length;
  const filteredCount = filteredCategories.reduce((sum, cat) => sum + cat.data.length, 0);

  return (
    <PageWrapper
      title="Skills & Competencies"
      subtitle={`${totalSkills} skills across technical, social, and specialized domains.`}
    >
      {/* Search & Filter */}
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            <Chip
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            >
              All ({totalSkills})
            </Chip>
            {categories.map(cat => (
              <Chip
                key={cat.key}
                active={activeCategory === cat.key}
                onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
              >
                {cat.label} ({cat.data.length})
              </Chip>
            ))}
          </div>
        </div>

        {/* Results count */}
        {searchTerm && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Found {filteredCount} skill{filteredCount !== 1 ? 's' : ''} matching "{searchTerm}"
          </p>
        )}
      </Section>

      {/* Skills Accordions */}
      <Section>
        <AccordionGroup>
          <AnimatePresence mode="popLayout">
            {filteredCategories
              .filter(cat => activeCategory === null || activeCategory === cat.key)
              .map((cat) => (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AccordionItem
                    id={cat.key}
                    title={cat.label}
                    subtitle={`${cat.data.length} skills`}
                    badge={`${cat.data.length}`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {cat.data.map((skill: string, i: number) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02 }}
                        >
                          <Badge
                            variant={
                              cat.key === 'digital' ? 'primary' :
                              cat.key === 'social' ? 'accent' : 'default'
                            }
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionItem>
                </motion.div>
              ))}
          </AnimatePresence>
        </AccordionGroup>

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>No skills found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </Section>
    </PageWrapper>
  );
}
