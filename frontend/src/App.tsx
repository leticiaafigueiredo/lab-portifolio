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

      {/* Barra de Navegação */}
      <Navbar
        profile={profile}
        currentUser={currentUser}
        onToggleUser={toggleUser}
        isMuted={isMuted}
        onToggleSound={toggleSound}
      />

      {/* Conteúdo Principal com Container Centralizado */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <Hero profile={profile} onToggleUser={toggleUser} />
        <About profile={profile} />
        <Projects profile={profile} onSelectProject={setSelectedProject} />
        <Skills profile={profile} />
        <DoodlePad profile={profile} onToast={showToast} />
        <Contact profile={profile} onToast={showToast} />
        <Footer profile={profile} onToast={showToast} />
      </main>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={profile.theme}
      />

      {/* Notificação Toast */}
      <Toast
        message={toastMessage}
        onClose={clearToast}
        theme={profile.theme}
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