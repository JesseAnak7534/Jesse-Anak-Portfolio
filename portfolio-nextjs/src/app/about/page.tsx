'use client';

import Image from 'next/image';
import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Badge, BulletList } from '@/components/UI';
import { AccordionGroup, AccordionItem } from '@/components/Accordion';

export default function AboutPage() {
  const { personal, aboutMe, hobbies, memberships } = resumeData;

  return (
    <PageWrapper
      title="About Me"
      subtitle="Get to know more about my background, interests, and professional affiliations."
    >
      {/* About Section with Image */}
      <Section>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20">
              <Image
                src="/images/profile.jpg"
                alt={personal.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* About Text */}
          <div className="flex-1 prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {aboutMe}
            </p>
          </div>
        </div>
      </Section>

      {/* Personal Details */}
      <Section title="Personal Information">
        <AccordionGroup>
          <AccordionItem
            id="personal-details"
            title="Contact Details"
            subtitle="Location, nationality, and contact information"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h4>
                <p className="text-gray-900 dark:text-white">{personal.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Headline</h4>
                <p className="text-gray-900 dark:text-white">{personal.headline}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                <p className="text-gray-900 dark:text-white">{personal.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Nationality</h4>
                <p className="text-gray-900 dark:text-white">{personal.nationality}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</h4>
                <p className="text-gray-900 dark:text-white">{personal.dob}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Availability</h4>
                <p className="text-gray-900 dark:text-white">{personal.availability}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                <a href={`mailto:${personal.email}`} className="text-primary hover:underline">
                  {personal.email}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                <a href={`tel:${personal.phone}`} className="text-primary hover:underline">
                  {personal.phone}
                </a>
              </div>
            </div>
          </AccordionItem>
        </AccordionGroup>
      </Section>

      {/* Hobbies */}
      <Section title="Hobbies & Interests">
        <AccordionGroup>
          <AccordionItem
            id="hobbies"
            title="Personal Interests"
            subtitle={`${hobbies.length} hobbies and interests`}
          >
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, i) => (
                <Badge key={i} variant="primary">
                  {hobby}
                </Badge>
              ))}
            </div>
          </AccordionItem>
        </AccordionGroup>
      </Section>

      {/* Professional Memberships */}
      <Section title="Professional Memberships">
        <AccordionGroup>
          {memberships.map((membership, i) => (
            <AccordionItem
              key={i}
              id={`membership-${i}`}
              title={membership.organization}
              subtitle={membership.dates}
            >
              <p className="text-gray-600 dark:text-gray-400">
                Active member since {membership.dates.split(' – ')[0]}
              </p>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Section>
    </PageWrapper>
  );
}
