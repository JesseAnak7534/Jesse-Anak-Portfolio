'use client';

import { resumeData } from '@/data/resumeData';
import { PageWrapper, Section, Card } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  Target, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  Globe2, 
  Lightbulb, 
  Microscope, 
  Handshake, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function PhDOverviewPage() {
  const { personal } = resumeData;

  const researchAreas = [
    'CRISPR-Cas13a',
    'Antimicrobial Resistance',
    'Molecular Biology',
    'Genomics',
    'One Health',
    'Bioinformatics',
    'Microbiology',
    'Gene Silencing',
    'Biosafety Analysis',
    'Whole Genome Sequencing'
  ];

  const objectives = [
    'To isolate and characterize multidrug-resistant K. pneumoniae and E. coli from food-producing livestock.',
    'To determine phenotypic resistance profiles and identify key antimicrobial resistance genes.',
    'To design CRISPR-Cas13a guide RNAs targeting selected resistance determinants.',
    'To evaluate the ability of CRISPR-Cas13a systems to silence resistance genes and restore antibiotic susceptibility in vitro.',
    'To assess biosafety, genetic stability, and potential off-target effects of the CRISPR-Cas13a approach.'
  ];

  const expectedOutcomes = [
    'Novel insights into AMR prevalence in Ghanaian livestock populations',
    'Proof-of-concept for CRISPR-Cas13a-based resistance gene silencing',
    'Contribution to One Health AMR surveillance frameworks',
    'Policy recommendations for antimicrobial stewardship in agriculture',
    'High-impact peer-reviewed publications and conference presentations',
    'Strengthened regional research capacity in advanced molecular techniques'
  ];

  const sdgContributions = [
    {
      number: 3,
      title: 'Good Health & Well-being',
      description: 'Addressing antimicrobial resistance, a major threat to effective disease treatment globally.',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      number: 2,
      title: 'Zero Hunger',
      description: 'Improving food safety and livestock health through targeted interventions.',
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-200 dark:border-amber-800'
    },
    {
      number: 12,
      title: 'Responsible Consumption & Production',
      description: 'Promoting prudent antimicrobial use in food production systems.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    }
  ];

  return (
    <PageWrapper
      title="PhD Research Overview"
      subtitle="Advancing antimicrobial resistance research through CRISPR-Cas13a technology"
    >
      {/* Hero Section - Research Topic */}
      <Section>
        <motion.div {...fadeInUp}>
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Research Topic
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  CRISPR-Cas13a–Based Targeting of Antimicrobial Resistance Determinants in Multidrug-Resistant{' '}
                  <em className="text-emerald-600 dark:text-emerald-400">Klebsiella pneumoniae</em> and{' '}
                  <em className="text-emerald-600 dark:text-emerald-400">Escherichia coli</em> Isolates from Food-Producing Livestock in Ghana
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <GraduationCap size={16} />
                  <span>PhD Biotechnology • University of Ghana • 2025 – Present</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Background */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Background
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Antimicrobial resistance (AMR) is a growing threat to public health, food safety, and animal health worldwide. 
                  In Ghana, food-producing livestock increasingly serve as reservoirs of multidrug-resistant (MDR) bacteria, 
                  particularly <em>Klebsiella pneumoniae</em> and <em>Escherichia coli</em>. These organisms are commonly 
                  associated with zoonotic and foodborne infections and are capable of transferring resistance genes to humans 
                  through direct contact, contaminated animal products, and environmental exposure.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                  The widespread use of antibiotics in animal production has accelerated the emergence and spread of resistance 
                  genes that compromise the effectiveness of commonly used antimicrobials. Innovative and targeted approaches 
                  are therefore required to complement existing AMR control strategies, especially within the <strong>One Health framework</strong>.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Problem Statement */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="border-l-4 border-l-amber-500">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-amber-600 dark:text-amber-400" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Statement of the Problem
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Despite national and regional efforts to address AMR, surveillance and intervention strategies in Ghana 
                  remain largely focused on detection rather than targeted mitigation of resistance at its source. MDR{' '}
                  <em>K. pneumoniae</em> and <em>E. coli</em> circulating in food-producing livestock harbor clinically 
                  important resistance determinants that can enter the human population through the food chain.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                  However, there is <strong>limited laboratory-based research in Ghana</strong> exploring advanced, gene-targeted 
                  approaches for addressing resistance in animal reservoirs. This gap limits the development of effective, 
                  context-specific solutions to interrupt zoonotic transmission of AMR.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Research Objectives */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <Card>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Research Objectives
              </h2>
            </div>
            <div className="space-y-3 ml-14">
              {objectives.map((objective, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <span className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">{objective}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* SDG Contributions */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <Card>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe2 className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Contribution to UN Sustainable Development Goals
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sdgContributions.map((sdg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`${sdg.bgColor} ${sdg.borderColor} border rounded-xl p-4 text-center`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${sdg.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {sdg.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{sdg.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{sdg.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Significance */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Significance of the Study
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This study will generate laboratory-based evidence on AMR in zoonotic and foodborne pathogens from livestock, 
                  supporting <strong>One Health–driven AMR surveillance and control strategies</strong> in Ghana. By exploring 
                  CRISPR-Cas13a as a precision tool for targeting resistance genes, the research introduces innovative approaches 
                  that may complement conventional antimicrobial stewardship efforts.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                  The findings are expected to <strong>inform policy</strong>, <strong>strengthen research capacity</strong>, 
                  and contribute to national and regional AMR action plans.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Key Research Areas */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
          <Card>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Microscope className="text-indigo-600 dark:text-indigo-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Key Research Areas & Techniques
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 ml-14">
              {researchAreas.map((area, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Expected Outcomes */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
          <Card>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-teal-600 dark:text-teal-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Expected Outcomes & Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-14">
              {expectedOutcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="text-teal-500 flex-shrink-0" size={16} />
                  <span>{outcome}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Collaboration Opportunities */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Handshake className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Sponsorship & Collaboration Opportunities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The successful execution of this PhD research depends on access to advanced molecular biology and genomics facilities. 
                  I am actively seeking:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Research sponsorship and funding partnerships
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Institutional partnerships (local or international)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Laboratory hosting opportunities for sequencing and CRISPR experiments
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Biosafety analyses support
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm italic">
                  Collaborative laboratories and funding partners will play a critical role in enabling this work and 
                  advancing shared goals in AMR and One Health research.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section>
        <motion.div {...fadeInUp} transition={{ delay: 0.9 }}>
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Interested in Collaborating?
              </h2>
              <p className="text-emerald-100">
                Let&apos;s work together to combat antimicrobial resistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-3">{personal.name}</h3>
                <p className="text-emerald-100 text-sm mb-1">PhD Candidate, Biotechnology</p>
                <p className="text-emerald-100 text-sm">University of Ghana, Accra</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-200" />
                  <a href={`mailto:${personal.email}`} className="hover:underline">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-200" />
                  <a href={`tel:${personal.phone}`} className="hover:underline">
                    {personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-200" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-white/20">
              <a 
                href={personal.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                ORCID Profile
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a 
                href={personal.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Google Scholar
              </a>
            </div>

            <div className="text-center mt-6">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <Mail size={18} />
                Send Me a Message
              </Link>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Back to Education */}
      <div className="text-center mt-8">
        <Link 
          href="/education"
          className="text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          ← Back to Education
        </Link>
      </div>
    </PageWrapper>
  );
}
