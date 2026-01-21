// TypeScript interfaces for presentation data

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
    prompt: string;
  };
  pitch: PitchCategory[];
  motivation: Motivation;
  leadership: Leadership;
}

// Presentation content
export const presentationData: PresentationData = {
  hero: {
    title: "Self-Presentation & Leadership Profile",
    subtitle: "Leadership Assessment",
    prompt: "self_presentation.init",
  },

  // Part 1 - 5x5 Pitch (5 categories with 3-5 items each)
  // Based on Avenir Assessment structure
  pitch: [
    {
      title: "Character Traits",
      question: "What makes me special?",
      color: "green",
      items: [
        { point: "Analytical", detail: "Structured approach to complex problems" },
        { point: "Reliable", detail: "Commitment and meeting deadlines" },
        { point: "Solution-oriented", detail: "Focus on achievable results" },
        { point: "Communicative", detail: "Clear and transparent communication" },
        { point: "Curious", detail: "Continuous learning and development" },
      ],
    },
    {
      title: "Formative Experiences",
      question: "What have I learned?",
      color: "teal",
      items: [
        { point: "International projects", detail: "Collaboration in multicultural teams" },
        { point: "Crisis management", detail: "Experience in challenging situations" },
        { point: "Technology transformation", detail: "Guiding digital transformation processes" },
        { point: "Mentoring", detail: "Developing and supporting colleagues" },
      ],
    },
    {
      title: "Role Model Strengths",
      question: "What are my special strengths?",
      color: "mauve",
      items: [
        { point: "Strategic thinking", detail: "Developing long-term perspectives" },
        { point: "Stakeholder management", detail: "Effective collaboration at all levels" },
        { point: "Technical expertise", detail: "Contributing deep domain knowledge" },
        { point: "Team leadership", detail: "Motivating and developing teams" },
        { point: "Change management", detail: "Successfully driving transformation" },
      ],
    },
    {
      title: "Development Areas",
      question: "Where can I improve?",
      color: "peach",
      items: [
        { point: "Delegation", detail: "Placing more trust in others" },
        { point: "Patience", detail: "Allowing processes time to develop" },
        { point: "Work-life balance", detail: "Setting better boundaries" },
        { point: "Perfectionism", detail: "Accepting good enough" },
      ],
    },
    {
      title: "Values",
      question: "How do I normally behave?",
      color: "blue",
      items: [
        { point: "Integrity", detail: "Acting authentically and honestly" },
        { point: "Respect", detail: "Treating others with appreciation" },
        { point: "Excellence", detail: "Striving for quality" },
        { point: "Accountability", detail: "Taking ownership of decisions" },
        { point: "Innovation", detail: "Exploring new paths" },
      ],
    },
  ],

  // Part 2 - Motivation
  // Questions from Avenir Assessment:
  // - What motivates me for the target position?
  // - What expectations and wishes do I have?
  // - What are the biggest challenges? What could speak against me?
  motivation: {
    position: [
      "Shaping opportunities in a leadership role",
      "Strategic development of the department",
      "Building and developing high-performance teams",
      "Bridging technology and business",
    ],
    expectations: [
      "Clear mandates and decision-making authority",
      "Open feedback culture",
      "Support in implementing changes",
      "Development opportunities",
    ],
    challenges: [
      "Impatience with slow processes",
      "Tendency to take over instead of delegate",
      "High expectations of myself and others",
    ],
  },

  // Part 3 - Leadership
  // Questions from Avenir Assessment:
  // - What are my leadership principles? What leadership style do I practice?
  // - What attracts me to leadership?
  // - What leadership style do I not identify with? Why?
  leadership: {
    principles: [
      "Lead by example",
      "Transparency builds trust",
      "Mistakes are learning opportunities",
      "Results matter more than activity",
      "Develop people, don't just manage them",
    ],
    style:
      "I practice a participative leadership style with clear results orientation. I set the framework and trust my team to work autonomously within those boundaries. Open communication and regular feedback in both directions are essential to me.",
    appeal: [
      "Influence on strategic decisions",
      "Nurturing people and watching them grow",
      "Mastering complex challenges",
      "Building bridges between teams and stakeholders",
    ],
    notMyStyle: [
      {
        style: "Micromanagement",
        reason: "Prevents ownership and demotivates",
      },
      {
        style: "Authoritarian style",
        reason: "Suppresses innovation and engagement",
      },
      {
        style: "Laissez-faire",
        reason: "Leads to disorientation without clear direction",
      },
    ],
  },
};

// Color mappings for Catppuccin theme
export const colorMap: Record<string, string> = {
  green: "var(--ctp-green)",
  teal: "var(--ctp-teal)",
  mauve: "var(--ctp-mauve)",
  peach: "var(--ctp-peach)",
  blue: "var(--ctp-blue)",
};
