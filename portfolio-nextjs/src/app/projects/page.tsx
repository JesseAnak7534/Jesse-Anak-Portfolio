'use client';

import { useState } from 'react';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, BulletList, Card } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';
import { X, CheckCircle, Database, BarChart3, Target, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const { nationalProject } = resumeData;
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const caseStudy = nationalProject.caseStudy;

  return (
    <PageWrapper
      title="Research Projects"
      subtitle="Major research initiatives and data science projects."
    >
      {/* Featured National Project */}
      <Section title="Featured Project">
        <AccordionGroup>
          <AccordionItem
            id="national-project"
            title={nationalProject.title}
            subtitle={nationalProject.role}
            badge={nationalProject.year}
          >
            <div className="space-y-4">
              {/* Role */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Role
                </h4>
                <p className="text-gray-900 dark:text-white font-medium">
                  {nationalProject.role}
                </p>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Summary
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{nationalProject.summary}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Key Features
                </h4>
                <BulletList items={nationalProject.features} />
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {nationalProject.tools.map((tool, i) => (
                    <Badge key={i} variant="primary">{tool}</Badge>
                  ))}
                </div>
              </div>

              {/* Case Study Button */}
              {caseStudy && (
                <button
                  onClick={() => setShowCaseStudy(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <FlaskConical size={18} />
                  View AMR Case Study
                </button>
              )}
            </div>
          </AccordionItem>
        </AccordionGroup>
      </Section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {showCaseStudy && caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCaseStudy(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                  AMR Case Study
                </h2>
                <button
                  onClick={() => setShowCaseStudy(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Target size={20} className="text-red-500" />
                    Problem Statement
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.problem}
                  </p>
                </Card>

                {/* Approach */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FlaskConical size={20} className="text-blue-500" />
                    Approach
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.approach}
                  </p>
                </Card>

                {/* Data Pipeline */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Database size={20} className="text-purple-500" />
                    Data Pipeline
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.dataPipeline}
                  </p>
                </Card>

                {/* Validation */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    Validation & QC
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.validation}
                  </p>
                </Card>

                {/* Dashboards */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <BarChart3 size={20} className="text-orange-500" />
                    Dashboards & Visualization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.dashboards}
                  </p>
                </Card>

                {/* Results */}
                <Card className="border-primary border-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Target size={20} className="text-primary" />
                    Key Results
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {caseStudy.results}
                  </p>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
