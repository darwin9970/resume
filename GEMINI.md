# Project Context: Resume-Vite

## Project Overview
**resume-vite** is a personal resume website generator built with **Vue 3** and **Vite**. It allows users to maintain their resume content via Vue components and provides functionality to view the resume online or export it as a PDF.

## Key Features
- **Page-Based Layout:** structured content with a left sidebar (personal info, skills) and main content area (work, projects).
- **PDF Export:** "One-click" PDF download using `html2canvas` and `jspdf`.
- **Print Optimization:** dedicated `print.css` styles for A4 paper support.
- **Responsive:** Mobile-friendly adjustments.

## Tech Stack
- **Framework:** Vue 3 (Options/Composition API)
- **Build Tool:** Vite
- **UI Library:** Element Plus
- **Routing:** Vue Router
- **State Management:** Vuex (Currently empty configuration)
- **Styling:** SCSS, CSS
- **Utilities:** `html2canvas`, `jspdf`, `animate.css`

## Project Structure

```text
src/
├── assets/          # Static assets (fonts, images)
├── common/          # Constants and shared utility functions
├── components/      # Reusable UI components
│   ├── fix-button/  # Fixed positioning buttons
│   ├── pdf-button/  # PDF export logic component
│   ├── flex/        # Global Flex layout component
│   └── ...
├── router/          # Vue Router configuration
├── store/           # Vuex store configuration
├── styles/          # Global styles
│   ├── global.scss  # Main global styles
│   └── print.css    # Print-specific overrides
├── utils/           # Helper scripts (DOM, directives)
└── views/           # Page views and Resume content sections
    ├── aside/       # Left sidebar (Contact, Education, Skills)
    ├── content/     # Main content (Work Experience, Projects)
    └── Resume.vue   # Main container view
```

## Development

### Setup & Run
```bash
pnpm install
pnpm dev
```

### Build
```bash
pnpm build
pnpm preview
```

## Key Configurations
- **Alias:** `@` maps to `src/` (configured in `vite.config.js`).
- **Global Registrations:**
  - `Flex` component is globally registered.
  - `clickoutside` directive is globally registered.
  - Element Plus is installed as a plugin.

## Content Maintenance
Resume data is maintained directly within specific Vue components:
- **Personal Info/Skills:** `src/views/aside/Aside.vue`
- **Work Experience:** `src/views/content/work/Work.vue`
- **Projects:** `src/views/content/project/Project.vue`

## PDF Generation Logic
Located in `src/components/pdf-button/PDFButton.vue`. Uses `html2canvas` to screenshot the DOM and `jspdf` to generate the PDF document.
