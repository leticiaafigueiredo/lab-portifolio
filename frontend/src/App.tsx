import { PortfolioProvider } from './context/PortfolioContext';
import { usePortfolio } from './hooks/usePortfolio';
import { SvgFilters } from './assets/svgFilters';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { DoodlePad } from './components/DoodlePad';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

function PortfolioMain() {
  const {
    currentUser,
    profile,
    toggleUser,
    language,
    toggleLanguage,
    t,
    selectedProject,
    setSelectedProject,
    toastMessage,
    showToast,
    clearToast,
    isMuted,
    toggleSound,
  } = usePortfolio();

  return (
    <div
      style={{
        backgroundColor: profile.theme.paper,
        backgroundImage: `radial-gradient(${profile.theme.line} 1px, transparent 1px)`,
        backgroundSize: '6px 6px',
        color: profile.theme.ink,
        minHeight: '100vh',
        transition: 'background-color 0.35s ease, color 0.35s ease',
      }}
    >
      {/* Filtros SVG para bordas rugosas e texturas */}
      <SvgFilters />

      {/* Barra de Navegação com Troca de Idioma e Perfil */}
      <Navbar
        profile={profile}
        currentUser={currentUser}
        onToggleUser={toggleUser}
        language={language}
        onToggleLanguage={toggleLanguage}
        isMuted={isMuted}
        onToggleSound={toggleSound}
        t={t.nav}
      />

      {/* Conteúdo Principal com Container Centralizado */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <Hero profile={profile} onToggleUser={toggleUser} t={t.hero} />
        <About profile={profile} t={t.about} />
        <Projects profile={profile} onSelectProject={setSelectedProject} t={t.projects} />
        <Skills profile={profile} t={t.skills} />
        <DoodlePad profile={profile} onToast={showToast} t={t.doodlePad} />
        <Contact profile={profile} onToast={showToast} t={t.contact} />
        <Footer profile={profile} onToast={showToast} t={t.footer} />
      </main>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={profile.theme}
        t={t.projectModal}
      />

      {/* Notificação Toast */}
      <Toast
        message={toastMessage}
        onClose={clearToast}
        theme={profile.theme}
        t={t.toast}
      />
    </div>
  );
}

export function App() {
  return (
    <PortfolioProvider>
      <PortfolioMain />
    </PortfolioProvider>
  );
}

export default App;