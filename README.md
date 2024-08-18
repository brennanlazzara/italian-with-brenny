# Italian Language Learning Program

## Description
Welcome to our Italian Language Learning Program! This interactive software is designed to help learners of all levels improve their Italian language skills through engaging exercises, lessons, and cultural insights.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Lesson Structure](#lesson-structure)
- [Contributing](#contributing)
- [License](#license)

## Structure

```
italian-verb-master/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── VerbConjugationCard.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── tenses/
│   │       ├── indicativo/
│   │       │   ├── Presente.tsx
│   │       │   ├── PassatoProssimo.tsx
│   │       │   ├── Imperfetto.tsx
│   │       │   ├── TrapassatoProssimo.tsx
│   │       │   ├── PassatoRemoto.tsx
│   │       │   ├── TrapassatoRemoto.tsx
│   │       │   ├── FuturoSemplice.tsx
│   │       │   └── FuturoAnteriore.tsx
│   │       │
│   │       ├── congiuntivo/
│   │       │   ├── Presente.tsx
│   │       │   ├── Passato.tsx
│   │       │   ├── Imperfetto.tsx
│   │       │   └── Trapassato.tsx
│   │       │
│   │       ├── condizionale/
│   │       │   ├── Presente.tsx
│   │       │   └── Passato.tsx
│   │       │
│   │       ├── imperativo/
│   │       │   └── Presente.tsx
│   │       │
│   │       ├── infinito/
│   │       │   ├── Presente.tsx
│   │       │   └── Passato.tsx
│   │       │
│   │       ├── participio/
│   │       │   ├── Presente.tsx
│   │       │   └── Passato.tsx
│   │       │
│   │       └── gerundio/
│   │           ├── Presente.tsx
│   │           └── Passato.tsx
│   │
│   ├── utils/
│   │   └── conjugationRules.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
├── tsconfig.json
└── README.md
```

## Features
- Interactive lessons covering grammar, vocabulary, and pronunciation
- Speech recognition for pronunciation practice
- Cultural notes to enhance understanding of Italian society and customs
- Progress tracking and personalized learning paths
- Gamified elements to keep learners motivated
- Mobile and desktop compatibility for learning on-the-go

## Installation
```bash
# Example installation steps
git clone https://github.com/username/italian-program.git
cd italian-program
npm install
