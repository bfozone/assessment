# Leadership Assessment Presentation

## Purpose

This Astro web application is a digital self-presentation for Benjamin Fink's leadership assessment at **Avenir Consulting AG** for the position of **Fachleader Investment Performance und Risk Controlling** at **BLKB** (Basellandschaftliche Kantonalbank).

## Assessment Details

| Field | Details |
|-------|---------|
| Date | 27. Januar 2026, 08:30 - 14:30 |
| Location | Avenir Consulting AG, Gotthardstrasse 27, 8002 Zürich |
| Assessors | Yvonne Holzer & Martin Weiss |
| Client | BLKB (Basellandschaftliche Kantonalbank) |
| Position | Fachleader Investment Performance und Risk Controlling (80-100%) |

## Position Overview

### Key Responsibilities
- Lead Investment Performance and Risk Controlling (technical and operational)
- Ensure independent, audit-proof investment and risk controlling for Sustainable Asset Management
- Independent and adequate performance and risk measurement
- Continuously develop department, methods, and tools
- Create scalable, data-driven decision foundation
- Run GIPS Office and ensure GIPS conformity

### Required Profile
- Finance degree with additional qualifications
- Multi-year experience in Risk and Performance Monitoring
- Strong knowledge of Performance and Risk tools
- IT skills and programming (VBA, Python, SQL)
- Fluent German and English
- Knowledge of Investment Policies/Guidelines

## Presentation Structure

The presentation follows Avenir's "Selbstpräsentation und Führungsprofil" format:

### Part 1: 5x5 Pitch
Five dimensions with 3-5 points each:
1. **Charaktereigenschaften** - What makes me unique?
2. **Prägende Erlebnisse** - What did I learn from them?
3. **Vorbildhafte Stärken** - What are my particular strengths?
4. **Entwicklungsfelder** - Where can I improve?
5. **Werte** - How do I normally behave?

### Part 2: Meine Motivation
Three questions:
1. What motivates me for this position?
2. What are my expectations and wishes?
3. What are the challenges & what could count against me?

### Part 3: Mein Führungsverständnis
Three aspects:
1. My leadership principles & style
2. What appeals to me about leadership?
3. Leadership styles that don't fit me (contrast layout)

## Technical Implementation

### Stack
- **Framework**: Astro 4.16
- **Styling**: Tailwind CSS 3.4
- **Theme**: Catppuccin color palette (dark/light mode)
- **Language**: TypeScript

### Features
- Full German/English language switching (i18n)
- Dark/light theme toggle
- Scroll-triggered animations (IntersectionObserver)
- Section progress indicators (desktop)
- Smooth scroll navigation
- Mobile responsive design

### Project Structure
```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Pitch.astro
│   ├── Motivation.astro
│   ├── Leadership.astro
│   ├── Footer.astro
│   ├── GlobalNav.astro
│   ├── LanguageToggle.astro
│   ├── ThemeToggle.astro
│   └── BackToTop.astro
├── data/
│   └── presentation.ts    # All content (DE/EN)
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── scripts/
│   └── languageStore.ts
└── styles/
    └── global.css
```

## Content Sources

The presentation content is synthesized from:

1. **bfink_resume_2025.pdf** - Career history, technical skills, project experience
2. **bfink_reference_letter_interim_bam_senior_risk_manager.pdf** - Performance evaluation from Baloise
3. **bfink_selbsteinschätzung.pdf** - Self-assessment on 9 competency dimensions
4. **Vorbereitungsaufgabe - Avenir Assessment.pdf** - Completed questionnaire with personal reflections
5. **Sollprofil IPRC.pdf** - Job profile with required competency levels
6. **Selbstpräsentation.pdf** - Presentation format instructions from Avenir

## Competency Alignment

The Sollprofil defines 9 competencies (scale 1-6):

| Competency | Required | Self-Assessment |
|------------|----------|-----------------|
| Self-reflection & Learning | 5 | 5 |
| Resilience | 5 | 5 |
| Motivation | 5 | 6 |
| Communication | 5 | 5 |
| Cooperation & Conflict Mgmt | 5-6 | 5 |
| Leadership | 5 | 5 |
| Problem Solving | 5 | 6 |
| Goal Setting & Results | 5-6 | 5 |
| Stakeholder Management | 5 | 5 |

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint

# Format code
npm run format
```

## Deployment

The app is configured for Docker deployment (Coolify). See `Dockerfile` and `docker-compose.yml` in the project root.

---

*Last updated: January 2026*
