// TypeScript interfaces for presentation data

export type Language = "de" | "en";

export interface PitchItem {
  point: string;
  detail?: string;
}

export interface PitchCategory {
  title: string;
  question: string;
  items: PitchItem[];
  color: string;
}

export interface Motivation {
  position: string[];
  expectations: string[];
  challenges: string[];
}

export interface LeadershipNotMyStyle {
  style: string;
  reason: string;
}

export interface Leadership {
  principles: string[];
  style: string;
  appeal: string[];
  notMyStyle: LeadershipNotMyStyle[];
}

export interface PresentationData {
  hero: {
    title: string;
    subtitle: string;
    name: string;
    context: string;
  };
  pitch: PitchCategory[];
  motivation: Motivation;
  leadership: Leadership;
}

// UI labels that need translation
export interface UILabels {
  // Navigation
  nav: {
    pitch: string;
    motivation: string;
    leadership: string;
  };
  // Hero
  hero: {
    scrollPrompt: string;
  };
  // Pitch section
  pitch: {
    partLabel: string;
    title: string;
    subtitle: string;
    dimensionLabel: string;
    narratives: string[];
  };
  // Motivation section
  motivation: {
    partLabel: string;
    title: string;
    subtitle: string;
    questionLabel: string;
    sections: {
      position: { title: string; subtitle: string };
      expectations: { title: string; subtitle: string };
      challenges: { title: string; subtitle: string };
    };
  };
  // Leadership section
  leadership: {
    partLabel: string;
    title: string;
    subtitle: string;
    questionLabel: string;
    sections: {
      principles: { title: string; subtitle: string };
      style: { title: string; subtitle: string };
      appeal: { title: string; subtitle: string };
      notMyStyle: { title: string; subtitle: string };
    };
  };
  // Footer
  footer: {
    label: string;
  };
}

// German content - Benjamin Fink
// Sources: Resume, Reference Letter (Baloise), Self-Assessment, Vorbereitungsaufgabe
const presentationDE: PresentationData = {
  hero: {
    title: "Selbstpräsentation & Führungsprofil",
    subtitle: "Fachleader Investment Performance und Risk Controlling",
    name: "Benjamin Fink",
    context: "Leadership Assessment | 27. Januar 2026",
  },

  pitch: [
    {
      title: "Charaktereigenschaften",
      question: "Was macht mich besonders?",
      color: "green",
      items: [
        {
          point: "Strukturiert & analytisch",
          detail: "Ich denke strukturiert und handle lösungsorientiert",
        },
        {
          point: "Ruhig unter Druck",
          detail:
            "Auch in belastenden Situationen bleibe ich handlungsfähig und behalte den Überblick",
        },
        {
          point: "Verlässlich",
          detail: "Hohe Eigenverantwortung und Verbindlichkeit in allem was ich tue",
        },
        {
          point: "Neugierig",
          detail:
            "Kontinuierliche Beobachtung aktueller Trends und permanente Weiterbildung",
        },
        {
          point: "Zugänglich",
          detail: "Ruhiges, offenes Auftreten das Zusammenarbeit fördert",
        },
      ],
    },
    {
      title: "Prägende Erlebnisse",
      question: "Was habe ich dabei gelernt?",
      color: "teal",
      items: [
        {
          point: "Zweimaliges Vaterwerden",
          detail:
            "Verantwortungsbewusstsein, Prioritätensetzung und Geduld nachhaltig gestärkt",
        },
        {
          point: "Aufbau von Risiko-Analytics-Plattformen",
          detail:
            "Zweimal von Grund auf konzipiert und in Produktion gebracht",
        },
        {
          point: "Stellvertretende Führungsverantwortung",
          detail:
            "Strategischer Weitblick und Einblick in Gesamtsteuerung",
        },
        {
          point: "Fachliche Führung von Mitarbeitenden",
          detail: "Menschen entwickeln, Qualität sichern, Wissen weitergeben",
        },
      ],
    },
    {
      title: "Vorbildhafte Stärken",
      question: "Welches sind meine besonderen Stärken?",
      color: "mauve",
      items: [
        {
          point: "Komplexität strukturieren",
          detail: "Komplexe Risiko- und Systemzusammenhänge verständlich aufbereiten",
        },
        {
          point: "Anforderungen in Lösungen übersetzen",
          detail:
            "Fachliche Anforderungen in praktikable, produktionsreife Tools umsetzen",
        },
        {
          point: "Brücke zwischen Tech & Business",
          detail:
            "Tiefes Verständnis für Geschäftsprozesse kombiniert mit technischer Expertise",
        },
        {
          point: "Qualitätsbewusstsein",
          detail:
            "Grösste Sorgfalt und Gewissenhaftigkeit für hochwertige Arbeitsqualität",
        },
      ],
    },
    {
      title: "Entwicklungsfelder",
      question: "Wo kann ich mich verbessern?",
      color: "peach",
      items: [
        {
          point: "Delegation",
          detail:
            "Tendenz, Verantwortung selbst zu übernehmen statt frühzeitig zu delegieren",
        },
        {
          point: "Perfektionismus",
          detail:
            "Hoher Qualitätsanspruch führt manchmal zu knappen Zeitpuffern",
        },
        {
          point: "Detailtiefe",
          detail:
            "Themen sehr tief durchdringen, Aufwand und Wirkung besser balancieren",
        },
        {
          point: "Strategisches Management",
          detail: "Führungsthemen und strategische Managementthemen weiter vertiefen",
        },
      ],
    },
    {
      title: "Werte",
      question: "Wie verhalte ich mich normalerweise?",
      color: "blue",
      items: [
        {
          point: "Verantwortung",
          detail: "Ownership für Entscheidungen und deren Konsequenzen übernehmen",
        },
        {
          point: "Ehrlichkeit",
          detail: "Authentisch und transparent kommunizieren",
        },
        {
          point: "Verlässlichkeit",
          detail: "Zusagen einhalten, verbindlich und dienstleistungsorientiert",
        },
        {
          point: "Offenheit",
          detail: "Andere Meinungen und konstruktive Kritik als Anregung begrüssen",
        },
        {
          point: "Kontinuierliches Lernen",
          detail: "Aus eigenem Antrieb permanent weiterbilden und entwickeln",
        },
      ],
    },
  ],

  motivation: {
    position: [
      "Führungsverantwortung mit klarem Wirkungsfeld",
      "Komplexe analytische Herausforderungen im Investment Performance und Risk Controlling",
      "Stärkung und Förderung eines bestehenden Teams",
      "Skalierbares Fundament für datenbasierte Entscheidungen",
    ],
    expectations: [
      "Gestaltungsfreiraum in einer kleineren Organisation",
      "Offene Feedbackkultur und gegenseitiger Austausch",
      "Klare Mandate für notwendige Veränderungen",
    ],
    challenges: [
      "Erste formelle Teamleitungsposition",
      "Hoher Qualitätsanspruch kann zu Zeitdruck führen",
      "Tendenz, Verantwortung selbst zu übernehmen statt früh zu delegieren",
    ],
  },

  leadership: {
    principles: [
      "Vorleben was ich von anderen erwarte",
      "Transparenz schafft Vertrauen",
      "Klare Anweisungen mit Raum für Eigenverantwortung",
      "Menschen entwickeln, nicht nur Aufgaben verwalten",
      "Faktenbasierte Entscheidungen statt Bauchgefühl",
    ],
    style:
      "Ich stehe für einen partizipativen, faktenbasierten Führungsstil mit klarer Ergebnisorientierung. Ich setze den Rahmen und vertraue darauf, dass mein Team innerhalb dieser Grenzen eigenverantwortlich arbeitet. Offene Kommunikation, regelmässiges Feedback in beide Richtungen und ein anregendes Arbeitsklima sind mir wichtig.",
    appeal: [
      "Menschen fördern und ihr Wachstum begleiten",
      "Methoden und Prozesse aktiv weiterentwickeln",
      "Komplexe Herausforderungen gemeinsam meistern",
      "Brücken bauen zwischen Teams und Stakeholdern",
    ],
    notMyStyle: [
      {
        style: "Mikromanagement",
        reason: "Untergräbt Eigenverantwortung und Vertrauen",
      },
      {
        style: "Autoritärer Stil",
        reason: "Blockiert Offenheit und eigenständiges Denken",
      },
      {
        style: "Laissez-faire",
        reason: "Führt zu Orientierungslosigkeit ohne klare Richtung",
      },
    ],
  },
};

// English content - Benjamin Fink
const presentationEN: PresentationData = {
  hero: {
    title: "Self-Presentation & Leadership Profile",
    subtitle: "Team Lead Investment Performance and Risk Controlling",
    name: "Benjamin Fink",
    context: "Leadership Assessment | January 27, 2026",
  },

  pitch: [
    {
      title: "Character Traits",
      question: "What makes me unique?",
      color: "green",
      items: [
        {
          point: "Structured & analytical",
          detail: "I think systematically and act solution-oriented",
        },
        {
          point: "Calm under pressure",
          detail:
            "I remain capable of action and maintain overview even in stressful situations",
        },
        {
          point: "Reliable",
          detail: "High sense of responsibility and commitment in everything I do",
        },
        {
          point: "Curious",
          detail:
            "Continuous observation of current trends and permanent professional development",
        },
        {
          point: "Approachable",
          detail: "Calm, open demeanor that fosters collaboration",
        },
      ],
    },
    {
      title: "Formative Experiences",
      question: "What did I learn from them?",
      color: "teal",
      items: [
        {
          point: "Becoming a father twice",
          detail:
            "Sustainably strengthened sense of responsibility, prioritization, and patience",
        },
        {
          point: "Building risk analytics platforms",
          detail:
            "Designed and delivered to production twice from the ground up",
        },
        {
          point: "Deputy leadership responsibility",
          detail:
            "Strategic foresight and insight into overall governance",
        },
        {
          point: "Technical leadership of team members",
          detail: "Developing people, ensuring quality, sharing knowledge",
        },
      ],
    },
    {
      title: "Exemplary Strengths",
      question: "What are my particular strengths?",
      color: "mauve",
      items: [
        {
          point: "Structuring complexity",
          detail: "Making complex risk and system relationships understandable",
        },
        {
          point: "Translating requirements into solutions",
          detail:
            "Converting business requirements into practical, production-ready tools",
        },
        {
          point: "Bridge between Tech & Business",
          detail:
            "Deep understanding of business processes combined with technical expertise",
        },
        {
          point: "Quality consciousness",
          detail:
            "Greatest care and conscientiousness for high-quality work output",
        },
      ],
    },
    {
      title: "Development Areas",
      question: "Where can I improve?",
      color: "peach",
      items: [
        {
          point: "Delegation",
          detail:
            "Tendency to take responsibility myself rather than delegating early",
        },
        {
          point: "Perfectionism",
          detail:
            "High quality standards sometimes lead to tight time buffers",
        },
        {
          point: "Depth of detail",
          detail:
            "Diving very deep into topics, better balancing effort and impact",
        },
        {
          point: "Strategic management",
          detail: "Further deepening leadership and strategic management topics",
        },
      ],
    },
    {
      title: "Values",
      question: "How do I normally behave?",
      color: "blue",
      items: [
        {
          point: "Responsibility",
          detail: "Taking ownership of decisions and their consequences",
        },
        {
          point: "Honesty",
          detail: "Communicating authentically and transparently",
        },
        {
          point: "Reliability",
          detail: "Keeping commitments, being dependable and service-oriented",
        },
        {
          point: "Openness",
          detail: "Welcoming other opinions and constructive criticism as input",
        },
        {
          point: "Continuous learning",
          detail: "Self-driven permanent education and development",
        },
      ],
    },
  ],

  motivation: {
    position: [
      "Leadership responsibility with clear scope of impact",
      "Complex analytical challenges in Investment Performance and Risk Controlling",
      "Strengthening and developing an existing team",
      "Creating scalable, data-driven decision foundations",
    ],
    expectations: [
      "Creative freedom in a smaller organization",
      "Open feedback culture and mutual exchange",
      "Clear mandates for necessary changes",
    ],
    challenges: [
      "First formal team leadership position",
      "High quality standards can lead to time pressure",
      "Tendency to take responsibility myself rather than delegating early",
    ],
  },

  leadership: {
    principles: [
      "Lead by example – practice what I expect from others",
      "Transparency builds trust",
      "Clear direction with room for autonomy",
      "Develop people, not just manage tasks",
      "Fact-based decisions over gut feeling",
    ],
    style:
      "I stand for a participative, fact-based leadership style with clear results orientation. I set the framework and trust that my team works autonomously within these boundaries. Open communication, regular two-way feedback, and a stimulating work environment are important to me.",
    appeal: [
      "Developing people and supporting their growth",
      "Actively advancing methods and processes",
      "Mastering complex challenges together",
      "Building bridges between teams and stakeholders",
    ],
    notMyStyle: [
      {
        style: "Micromanagement",
        reason: "Undermines autonomy and trust",
      },
      {
        style: "Authoritarian style",
        reason: "Blocks openness and independent thinking",
      },
      {
        style: "Laissez-faire",
        reason: "Leads to lack of direction without clear guidance",
      },
    ],
  },
};

// German UI labels
const labelsDE: UILabels = {
  nav: {
    pitch: "pitch",
    motivation: "motivation",
    leadership: "führung",
  },
  hero: {
    scrollPrompt: "Scrollen um zu starten",
  },
  pitch: {
    partLabel: "Teil Eins",
    title: "5 x 5 Pitch",
    subtitle: "Fünf Dimensionen die mich ausmachen",
    dimensionLabel: "Dimension",
    narratives: [
      "Das Fundament meiner Persönlichkeit",
      "Die Momente die mich geprägt haben",
      "Wo ich den grössten Impact erzeuge",
      "Mein Weg der kontinuierlichen Entwicklung",
      "Der Kompass meiner Entscheidungen",
    ],
  },
  motivation: {
    partLabel: "Teil Zwei",
    title: "Meine Motivation",
    subtitle: "Was mich antreibt, was ich erwarte und wo ich Herausforderungen sehe",
    questionLabel: "Frage",
    sections: {
      position: {
        title: "Was motiviert mich für diese Position?",
        subtitle: "Der Antrieb hinter meinem Engagement",
      },
      expectations: {
        title: "Welche Erwartungen und Wünsche habe ich?",
        subtitle: "Was ich mir erhoffe und erreichen möchte",
      },
      challenges: {
        title: "Herausforderungen & was gegen mich sprechen könnte?",
        subtitle: "Ehrliche Reflexion über potenzielle Hürden",
      },
    },
  },
  leadership: {
    partLabel: "Teil Drei",
    title: "Mein Führungsverständnis",
    subtitle: "Wie ich führe, was mich antreibt und was nicht zu mir passt",
    questionLabel: "Aspekt",
    sections: {
      principles: {
        title: "Meine Führungsgrundsätze",
        subtitle: "Die Prinzipien nach denen ich führe",
      },
      style: {
        title: "Mein Führungsstil",
        subtitle: "Wie ich im Alltag führe",
      },
      appeal: {
        title: "Was reizt mich an Führung?",
        subtitle: "Die Aspekte die mich begeistern",
      },
      notMyStyle: {
        title: "Meine Abgrenzung",
        subtitle: "Was ich nicht tue und woran ich stattdessen glaube",
      },
    },
  },
  footer: {
    label: "Leadership Assessment",
  },
};

// English UI labels
const labelsEN: UILabels = {
  nav: {
    pitch: "pitch",
    motivation: "motivation",
    leadership: "leadership",
  },
  hero: {
    scrollPrompt: "Scroll to start",
  },
  pitch: {
    partLabel: "Part One",
    title: "5 x 5 Pitch",
    subtitle: "Five dimensions that define me",
    dimensionLabel: "Dimension",
    narratives: [
      "The foundation of my personality",
      "The moments that shaped me",
      "Where I create the greatest impact",
      "My path of continuous development",
      "The compass of my decisions",
    ],
  },
  motivation: {
    partLabel: "Part Two",
    title: "My Motivation",
    subtitle: "What drives me, what I expect, and where I see challenges",
    questionLabel: "Question",
    sections: {
      position: {
        title: "What motivates me for this position?",
        subtitle: "The drive behind my commitment",
      },
      expectations: {
        title: "What are my expectations and wishes?",
        subtitle: "What I hope for and want to achieve",
      },
      challenges: {
        title: "Challenges & what could count against me?",
        subtitle: "Honest reflection on potential hurdles",
      },
    },
  },
  leadership: {
    partLabel: "Part Three",
    title: "My Leadership Philosophy",
    subtitle: "How I lead, what drives me, and what doesn't fit me",
    questionLabel: "Aspect",
    sections: {
      principles: {
        title: "My Leadership Principles",
        subtitle: "The principles I lead by",
      },
      style: {
        title: "My Leadership Style",
        subtitle: "How I lead day-to-day",
      },
      appeal: {
        title: "What appeals to me about leadership?",
        subtitle: "The aspects that excite me",
      },
      notMyStyle: {
        title: "My Boundaries",
        subtitle: "What I don't do and what I believe in instead",
      },
    },
  },
  footer: {
    label: "Leadership Assessment",
  },
};

// Exported content by language
export const presentations: Record<Language, PresentationData> = {
  de: presentationDE,
  en: presentationEN,
};

export const labels: Record<Language, UILabels> = {
  de: labelsDE,
  en: labelsEN,
};

// Default export for backward compatibility during migration
export const presentationData = presentationDE;

// Color mappings for Catppuccin theme
export const colorMap: Record<string, string> = {
  green: "var(--ctp-green)",
  teal: "var(--ctp-teal)",
  mauve: "var(--ctp-mauve)",
  peach: "var(--ctp-peach)",
  blue: "var(--ctp-blue)",
};
