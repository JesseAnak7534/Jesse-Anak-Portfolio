export type ExperienceItem = { role?: string | null; company?: string | null; dates?: string | null; details?: string[] }
export type EducationItem = { degree?: string | null; school?: string | null; dates?: string | null; details?: string[] }
export type Resume = {
  name?: string | null
  title?: string | null
  contact?: { email?: string; phone?: string; website?: string; linkedin?: string; github?: string; twitter?: string; location?: string }
  summary?: string | null
  skills?: string[] | null
  experience?: ExperienceItem[] | null
  education?: EducationItem[] | null
  publications?: (string)[] | null
  fullText?: string[]
  sectionsRaw?: Record<string,string[]>
}
