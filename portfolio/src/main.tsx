import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CVPage from './pages/CV'
import ExperiencePage from './pages/Experience'
import EducationPage from './pages/Education'
import SkillsPage from './pages/Skills'
import PublicationsPage from './pages/Publications'
import ConferencesPage from './pages/Conferences'
import RefereesPage from './pages/Referees'
import ContactPage from './pages/Contact'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CVPage />} />
        <Route path="/overview" element={<App />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/referees" element={<RefereesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
