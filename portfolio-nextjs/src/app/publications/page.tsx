'use client';

import { useState, useMemo } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, Chip, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import { FileText, Presentation, Search, X, Tag, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PublicationsPage() {
  const { publications, conferences } = resumeData;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'conferences' | 'publications'>('conferences');

  // Filter by search
  const filteredConferences = useMemo(() => {
    if (!searchTerm.trim()) return conferences;
    const term = searchTerm.toLowerCase();
    return conferences.filter(c => 
      c.title.toLowerCase().includes(term) ||
      c.dates.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const filteredPublications = useMemo(() => {
    if (!searchTerm.trim()) return publications;
    const term = searchTerm.toLowerCase();
    return publications.filter(p => 
      p.title.toLowerCase().includes(term) ||
      p.year.toLowerCase().includes(term) ||
      p.keywords?.some(k => k.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  return (
    <PageWrapper
      title="Publications & Conferences"
      subtitle={`${conferences.length} conference presentations and ${publications.length} publications.`}
    >
      {/* Search & Tabs */}
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Tabs */}
          <div className="flex gap-2">
            <Chip
              active={activeTab === 'conferences'}
              onClick={() => setActiveTab('conferences')}
            >
              <Presentation size={16} className="mr-1" />
              Conferences ({conferences.length})
            </Chip>
            <Chip
              active={activeTab === 'publications'}
              onClick={() => setActiveTab('publications')}
            >
              <FileText size={16} className="mr-1" />
              Publications ({publications.length})
            </Chip>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </Section>

      {/* Conferences Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'conferences' && (
          <motion.div
            key="conferences"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Section title="Conference Presentations">
              <AccordionGroup>
                {filteredConferences.map((conf, i) => (
                  <AccordionItem
                    key={i}
                    id={`conf-${i}`}
                    title={conf.title}
                    subtitle={conf.dates}
                  >
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {conf.dates}
                      </p>
                      {conf.details && conf.details.length > 0 && (
                        <BulletList items={conf.details} />
                      )}
                    </div>
                  </AccordionItem>
                ))}
              </AccordionGroup>

              {filteredConferences.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p>No conferences found matching "{searchTerm}"</p>
                </div>
              )}
            </Section>
          </motion.div>
        )}

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <motion.div
            key="publications"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Section title="Publications">
              <AccordionGroup>
                {filteredPublications.map((pub, i) => (
                  <AccordionItem
                    key={i}
                    id={`pub-${i}`}
                    title={pub.title}
                    badge={pub.year}
                  >
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Published: {pub.year}
                      </p>

                      {/* Link to Publication */}
                      {pub.link && (
                        <div>
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                          >
                            <ExternalLink size={16} />
                            View Publication
                          </a>
                        </div>
                      )}

                      {/* Keywords */}
                      {pub.keywords && pub.keywords.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                            <Tag size={14} />
                            Keywords
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {pub.keywords.map((kw, j) => (
                              <Badge key={j} variant="outline">
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionItem>
                ))}
              </AccordionGroup>

              {filteredPublications.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p>No publications found matching "{searchTerm}"</p>
                </div>
              )}
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
