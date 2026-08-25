import type { Language } from '../types';

export interface Translations {
  nav: {
    about: string;
    works: string;
    skills: string;
    doodles: string;
    contact: string;
    switchTo: string;
    soundToggleMute: string;
    soundToggleUnmute: string;
    viewing: string;
    langToggle: string;
    langTitle: string;
  };
  hero: {
    greeting: string;
    viewWorks: string;
    letsTalk: string;
    requestResume: string;
    resumeMailSubject: string;
    switchToProfile: (targetName: string) => string;
    stampText: string;
  };
  about: {
    sectionNum: string;
    sectionTitle: string;
    personalNotesTitle: string;
    principlesTitle: string;
    journeyTitle: string;
    journeySubtitle: string;
    filterAll: string;
    filterWork: string;
    filterEducation: string;
  };
  skills: {
    sectionNum: string;
    sectionTitle: string;
    sectionSubtitle: string;
    ecosystemTitle: string;
  };
  projects: {
    sectionNum: string;
    sectionTitle: string;
    showingCount: (current: number, total: number) => string;
    featured: string;
    viewDetails: string;
    githubTitle: string;
    liveTitle: string;
  };
  projectModal: {
    featured: string;
    impactTitle: string;
    highlightsTitle: string;
    architectureTitle: string;
    techTitle: string;
    viewLive: string;
    viewCode: string;
    closeSketch: string;
  };
  doodlePad: {
    sectionNum: string;
    sectionTitle: string;
    sectionSubtitle: string;
    pen: string;
    highlighter: string;
    eraser: string;
    undoTitle: string;
    clearTitle: string;
    saveDrawing: string;
    placeholder: string;
    canvasStamp: (fullName: string) => string;
    toastCleared: string;
    toastDownloaded: string;
    colors: {
      ink: string;
      red: string;
      blue: string;
      yellow: string;
      graphite: string;
    };
  };
  contact: {
    sectionNum: string;
    sectionTitle: string;
    stampTitle: string;
    stampSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    formSuccessTitle: string;
    formSuccessSubtitle: (name: string, email: string) => string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    submitButton: string;
    directChannelsTitle: string;
    copyEmailTitle: string;
    copyPhoneTitle: string;
    whatsappTitle: string;
    toastCopied: (label: string) => string;
    toastValidation: string;
    emailInvalid: string;
    emailError: string;
    activationNotice: (email: string) => string;
    fallbackMailto: string;
    toastSuccess: (name: string) => string;
    statusPrefix: string;
    statusSuffix: string;
  };
  footer: {
    backToTop: string;
    coffeeCountText: (count: number) => string;
    coffeeToast1: string;
    coffeeToast2: string;
    credits: (fullName: string) => string;
    subcredits: string;
  };
  toast: {
    successHeader: string;
    infoHeader: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'sobre',
      works: 'trabalhos',
      skills: 'habilidades',
      doodles: 'rabiscos',
      contact: 'contato',
      switchTo: 'Mudar p/',
      soundToggleMute: 'Desativar efeitos sonoros',
      soundToggleUnmute: 'Ativar efeitos sonoros de papel',
      viewing: 'Vendo:',
      langToggle: 'EN',
      langTitle: 'Switch to English / Mudar para Inglês',
    },
    hero: {
      greeting: 'Oi, eu sou',
      viewWorks: 'ver trabalhos',
      letsTalk: 'bater um papo',
      requestResume: 'solicitar currículo',
      resumeMailSubject: 'Contato via Portfolio - Solicitação de Currículo',
      switchToProfile: (targetName: string) => `Alternar para ${targetName}`,
      stampText: '✓ Lab 2026',
    },
    about: {
      sectionNum: '01 //',
      sectionTitle: 'minha trajetória & notas',
      personalNotesTitle: '★ bloco de anotações pessoais',
      principlesTitle: 'o que me move no dia a dia:',
      journeyTitle: 'jornada profissional & estudos',
      journeySubtitle: 'marcos cronológicos e projetos por onde passei',
      filterAll: 'Todos',
      filterWork: 'Experiência',
      filterEducation: 'Formação',
    },
    skills: {
      sectionNum: '03 //',
      sectionTitle: 'ferramentas & stack',
      sectionSubtitle: 'Tecnologias, frameworks e ferramentas que utilizo diariamente para criar soluções de ponta a ponta com alta fidelidade, robustez e performance.',
      ecosystemTitle: 'Visão Geral do Ecossistema',
    },
    projects: {
      sectionNum: '02 //',
      sectionTitle: 'trabalhos & projetos',
      showingCount: (current: number, total: number) => `Mostrando ${current} de ${total} registros`,
      featured: 'Destaque',
      viewDetails: 'Ver detalhes',
      githubTitle: 'Código no GitHub',
      liveTitle: 'Demonstração Online',
    },
    projectModal: {
      featured: '★ Destaque',
      impactTitle: 'Resultados & Impacto',
      highlightsTitle: 'Destaques da Implementação',
      architectureTitle: 'Arquitetura & Fluxo',
      techTitle: 'Tecnologias Utilizadas',
      viewLive: 'Ver Projeto Online',
      viewCode: 'Código / Repositório',
      closeSketch: 'Fechar rascunho ✕',
    },
    doodlePad: {
      sectionNum: '04 //',
      sectionTitle: 'bloco de rascunhos interativo',
      sectionSubtitle: 'Deixe um recado, autógrafo ou rabisco livre!',
      pen: 'Caneta',
      highlighter: 'Marca-Texto',
      eraser: 'Borracha',
      undoTitle: 'Desfazer último traço',
      clearTitle: 'Limpar tudo',
      saveDrawing: 'Salvar Desenho',
      placeholder: '✏️ Desenhe algo aqui com o mouse ou o dedo...',
      canvasStamp: (fullName: string) => `Rabiscos @ ${fullName} // 2026`,
      toastCleared: 'Caderno de rabiscos limpo com sucesso! 📄',
      toastDownloaded: 'Rascunho baixado com sucesso! 🎨',
      colors: {
        ink: 'Nanquim',
        red: 'Vermelho',
        blue: 'Azul',
        yellow: 'Amarelo',
        graphite: 'Grafite',
      },
    },
    contact: {
      sectionNum: '05 //',
      sectionTitle: 'correio & contato',
      stampTitle: 'LAB // 2026',
      stampSubtitle: 'commit & café',
      formTitle: 'vamos construir algo juntos?',
      formSubtitle: 'Escreva contando sua ideia, projeto ou dúvida — mesmo que ainda seja um rascunho de guardanapo. Respondo em até 24h úteis!',
      formSuccessTitle: 'Mensagem anotada com carinho!',
      formSuccessSubtitle: (name: string, email: string) => `Obrigado pelo contato, ${name}. Entrarei em contato pelo e-mail ${email}.`,
      sendAnother: 'Enviar outra mensagem',
      nameLabel: 'Seu Nome *',
      namePlaceholder: 'Ex: Maria Silva',
      emailLabel: 'Seu E-mail *',
      emailPlaceholder: 'maria@empresa.com',
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Ex: Projeto novo, Consultoria, Oportunidade...',
      messageLabel: 'Mensagem / Ideia *',
      messagePlaceholder: 'Conte sobre o projeto, escopo ou prazos estimados...',
      sending: 'Enviando...',
      submitButton: 'Enviar Cartão Postal ✉',
      directChannelsTitle: '✎ canais diretos',
      copyEmailTitle: 'Copiar e-mail',
      copyPhoneTitle: 'Copiar telefone',
      whatsappTitle: 'Conversar no WhatsApp',
      toastCopied: (label: string) => `${label} copiado para a área de transferência! 📋`,
      toastValidation: 'Por favor, preencha nome, e-mail e mensagem! ✏️',
      emailInvalid: 'Por favor, insira um endereço de e-mail válido! ✉️',
      emailError: 'Erro ao enviar a mensagem. Tente novamente ou use o e-mail direto abaixo.',
      activationNotice: (email: string) => `O serviço de envio enviou um e-mail de ativação para ${email}. Basta clicar em 'Activate Form' nele para liberar o recebimento!`,
      fallbackMailto: 'Abrir no app de e-mail ↗',
      toastSuccess: (name: string) => `Mensagem enviada com sucesso para ${name}! Responderemos em breve. ✉️`,
      statusPrefix: 'Status:',
      statusSuffix: 'Respostas rápidas e propostas sem compromisso.',
    },
    footer: {
      backToTop: 'Voltar ao topo',
      coffeeCountText: (count: number) => `Cafés consumidos neste projeto: ${count} ☕ (clique p/ abastecer)`,
      coffeeToast1: 'Mais um café fresquinho adicionado! ☕',
      coffeeToast2: 'Nível de cafeína no limite máximo de produtividade! 🚀⚡',
      credits: (fullName: string) => `Feito à mão (com código limpo & muito café) © 2026 // ${fullName}`,
      subcredits: 'Portfólio Compartilhado: Murilo Freitas (Full-Stack) & Letícia Figueiredo (Data Engineering)',
    },
    toast: {
      successHeader: 'Nota Anotada!',
      infoHeader: 'Informação',
    },
  },
  en: {
    nav: {
      about: 'about',
      works: 'works',
      skills: 'skills',
      doodles: 'doodles',
      contact: 'contact',
      switchTo: 'Switch to',
      soundToggleMute: 'Mute sound effects',
      soundToggleUnmute: 'Enable paper sound effects',
      viewing: 'Viewing:',
      langToggle: 'PT',
      langTitle: 'Mudar para Português / Switch to Portuguese',
    },
    hero: {
      greeting: 'Hi, I am',
      viewWorks: 'view works',
      letsTalk: "let's talk",
      requestResume: 'request resume',
      resumeMailSubject: 'Portfolio Contact - Resume Request',
      switchToProfile: (targetName: string) => `Switch to ${targetName}`,
      stampText: '✓ Lab 2026',
    },
    about: {
      sectionNum: '01 //',
      sectionTitle: 'my journey & notes',
      personalNotesTitle: '★ personal notebook & reflections',
      principlesTitle: 'what drives me every single day:',
      journeyTitle: 'career journey & education',
      journeySubtitle: 'chronological milestones, roles and key achievements',
      filterAll: 'All',
      filterWork: 'Experience',
      filterEducation: 'Education',
    },
    skills: {
      sectionNum: '03 //',
      sectionTitle: 'tools & tech stack',
      sectionSubtitle: 'Technologies, frameworks, and tools I use daily to build robust, scalable, and high-performance end-to-end solutions.',
      ecosystemTitle: 'Ecosystem Overview',
    },
    projects: {
      sectionNum: '02 //',
      sectionTitle: 'works & projects',
      showingCount: (current: number, total: number) => `Showing ${current} of ${total} records`,
      featured: 'Featured',
      viewDetails: 'View details',
      githubTitle: 'Code on GitHub',
      liveTitle: 'Live Demo',
    },
    projectModal: {
      featured: '★ Featured',
      impactTitle: 'Results & Impact',
      highlightsTitle: 'Implementation Highlights',
      architectureTitle: 'Architecture & Flow',
      techTitle: 'Technologies Used',
      viewLive: 'View Live Project',
      viewCode: 'Code / Repository',
      closeSketch: 'Close sketch ✕',
    },
    doodlePad: {
      sectionNum: '04 //',
      sectionTitle: 'interactive doodle pad',
      sectionSubtitle: 'Leave a note, autograph, or freehand drawing!',
      pen: 'Pen',
      highlighter: 'Highlighter',
      eraser: 'Eraser',
      undoTitle: 'Undo last stroke',
      clearTitle: 'Clear all',
      saveDrawing: 'Save Drawing',
      placeholder: '✏️ Draw something here with your mouse or finger...',
      canvasStamp: (fullName: string) => `Doodles @ ${fullName} // 2026`,
      toastCleared: 'Doodle pad cleared successfully! 📄',
      toastDownloaded: 'Sketch downloaded successfully! 🎨',
      colors: {
        ink: 'Ink',
        red: 'Red',
        blue: 'Blue',
        yellow: 'Yellow',
        graphite: 'Graphite',
      },
    },
    contact: {
      sectionNum: '05 //',
      sectionTitle: 'mail & contact',
      stampTitle: 'LAB // 2026',
      stampSubtitle: 'commit & coffee',
      formTitle: "let's build something together?",
      formSubtitle: "Write to me about your idea, project, or question — even if it's just a napkin sketch. I usually reply within 24 business hours!",
      formSuccessTitle: 'Message noted with care!',
      formSuccessSubtitle: (name: string, email: string) => `Thanks for reaching out, ${name}. I will contact you back via ${email}.`,
      sendAnother: 'Send another message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Jane Doe',
      emailLabel: 'Your E-mail *',
      emailPlaceholder: 'jane@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. New Project, Consulting, Opportunity...',
      messageLabel: 'Message / Idea *',
      messagePlaceholder: 'Tell me about your project, scope, or estimated timeline...',
      sending: 'Sending...',
      submitButton: 'Send Postcard ✉',
      directChannelsTitle: '✎ direct channels',
      copyEmailTitle: 'Copy e-mail',
      copyPhoneTitle: 'Copy phone',
      whatsappTitle: 'Chat on WhatsApp',
      toastCopied: (label: string) => `${label} copied to clipboard! 📋`,
      toastValidation: 'Please fill in your name, email, and message! ✏️',
      emailInvalid: 'Please enter a valid e-mail address! ✉️',
      emailError: 'Error sending message. Please try again or reach out directly below.',
      activationNotice: (email: string) => `An activation email was sent to ${email}. Just click 'Activate Form' to start receiving messages directly!`,
      fallbackMailto: 'Open in email app ↗',
      toastSuccess: (name: string) => `Message sent successfully to ${name}! We will reply shortly. ✉️`,
      statusPrefix: 'Status:',
      statusSuffix: 'Fast responses and no-commitment inquiries.',
    },
    footer: {
      backToTop: 'Back to top',
      coffeeCountText: (count: number) => `Coffees consumed on this project: ${count} ☕ (click to refill)`,
      coffeeToast1: 'Fresh cup of coffee added! ☕',
      coffeeToast2: 'Caffeine level at maximum productivity! 🚀⚡',
      credits: (fullName: string) => `Handcrafted (with clean code & lots of coffee) © 2026 // ${fullName}`,
      subcredits: 'Shared Portfolio: Murilo Freitas (Full-Stack) & Letícia Figueiredo (Data Engineering)',
    },
    toast: {
      successHeader: 'Note Taken!',
      infoHeader: 'Information',
    },
  },
};
