'use client';

import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';

export default function LeadershipPage() {
  const { leadership, memberships } = resumeData;

  return (
    <PageWrapper
      title="Leadership & Community"
      subtitle="Leadership roles, community involvement, and professional affiliations."
    >
      {/* Leadership Roles */}
      <Section title="Leadership Roles">
        <AccordionGroup>
          {leadership.map((role, i) => (
            <AccordionItem
              key={i}
              id={`leadership-${i}`}
              title={role.position}
              badge={role.year}
            >
              <div className="space-y-4">
                {/* Meta */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {role.year}
                </p>

                {/* Duties */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Key Responsibilities
                  </h4>
                  <BulletList items={role.duties} />
                </div>
              </div>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Section>

      {/* Professional Memberships */}
      <Section title="Professional Memberships">
        <AccordionGroup>
          <AccordionItem
            id="memberships"
            title="Professional Affiliations"
            subtitle={`${memberships.length} active memberships`}
          >
            <div className="space-y-4">
              {memberships.map((membership, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-900 dark:text-white">
                      {membership.organization}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{membership.dates}</span>
                </div>
              ))}
            </div>
          </AccordionItem>
        </AccordionGroup>
      </Section>

      {/* Referees Section */}
      <Section title="Professional References">
        <AccordionGroup>
          {resumeData.referees.map((ref, i) => (
            <AccordionItem
              key={i}
              id={`referee-${i}`}
              title={ref.name}
              subtitle={ref.organization}
            >
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</h4>
                    <p className="text-gray-900 dark:text-white">{ref.organization}</p>
                  </div>
                  {ref.address && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</h4>
                      <p className="text-gray-900 dark:text-white">{ref.address}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a href={`mailto:${ref.email}`} className="text-primary hover:underline">
                      {ref.email}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                    <a href={`tel:${ref.phone}`} className="text-primary hover:underline">
                      {ref.phone}
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Section>
    </PageWrapper>
  );
}
