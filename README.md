# Milan — Where Culture Comes Alive ✦ SRMIST

A modern, responsive cultural festival web application built for the **SRM DSA Tech Team** frontend recruitment task. The application represents **Milan**, the annual national cultural extravaganza of SRM Institute of Science and Technology, showcasing live stage events, event discovery, details modal, and an interactive demo registration system.

---

## 🌟 Features Implemented

### Phase 1: Project Setup & Baseline Architecture
- Clean scaffolding using **Vite + React (JavaScript)**.
- Streamlined dependency footprint (`react`, `react-dom`, `@vitejs/plugin-react`, `vite`).
- Dark-theme foundation with CSS custom properties.
- Zero-configuration Vercel deployment compatibility.

### Phase 2: Design System & Core Sections
- **Brand Identity**: Milan wordmark with SRMIST crest badge and radiant amber/orange gradients.
- **Header & Navigation**: Fixed blurred navigation header with desktop links, CTA button, and a responsive mobile drawer menu.
- **Hero Section**:
  - Eyebrow tag: `SRMIST PRESENTS` with pulsing status glow.
  - Large headline typography: *"Where Culture Comes Alive"*.
  - Cultural fest synopsis and smooth-scroll call-to-actions.
  - Category tags (Dance, Music, Drama, Fashion, Technical) that scroll and filter the events section.
- **Featured Events Section**:
  - Sample events database located in `src/data/events.js`.
  - Categories covering Dance, Music, Drama, Fashion, and Technical.
  - Custom image media viewer with automated fallback error handlers (`onError`).
  - Clear demonstration labels for dates, timings, and campus venues.
- **About Section**:
  - Narrative introducing Milan's legacy of artistic expression.
  - Three thematic pillars: *Pure Performance*, *Boundless Creativity*, and *Student Talent*.
- **Footer**:
  - Festival overview, quick navigation links, DSA recruitment task notice, and copyright.

### Phase 3: Discovery, Modals & Demo Registration
- **Event Discovery Toolbar**:
  - Case-insensitive search bar filtering across event titles and descriptions.
  - Category filter pills (**All**, **Dance**, **Music**, **Drama**, **Fashion**, **Technical**).
  - Combined multi-criteria filtering (search query + category).
  - Dynamic results counter and one-click "Clear Filters" button.
  - Friendly empty state card with query recap and filter reset action.
- **Accessible Event Details Modal**:
  - Full-screen blurred backdrop with keyboard `Escape` dismissal and body scroll locking.
  - Displays high-resolution banner, category tag, descriptive overview, and logistics card.
  - Integrated **Register Now** CTA that opens registration with the selected event pre-chosen.
- **Interactive Registration Modal**:
  - Preselects the chosen event when triggered from event details or cards.
  - Form fields: Full Name (*required*), Email (*required* with regex pattern validation), Student ID (*optional*), and Event Selection (*required*).
  - Real-time and submission-time inline error messaging with red boundary highlights.
  - Submission prevention when required fields are missing or invalid.
  - Demo confirmation pass card displaying a unique reference code (`MILAN-2026-XXXX`), attendee info, and registered event venue.
  - Options to register for another event or exit.

### Phase 4: Quality Assurance & Responsive Polish
- Refined mobile navigation drawer with max-height constraint and touch scrolling.
- Responsive breakpoints tailored for desktop (>992px), tablets (768px), and mobile devices (down to 320px).
- Sanitized input trimming and accessibility attributes.

> [!NOTE]
> **Frontend Demo Notice**: The registration system is an interactive frontend demo using client-side React state. Submitted registrations generate a visual confirmation pass for interface preview and do not persist to a remote database.

---

## 🛠️ Technologies Used

- **Framework**: React 19
- **Build Tool / Bundler**: Vite 6
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, Responsive Breakpoints)
- **Icons**: Accessible Inline SVG Vectors (Zero external font/icon dependencies)
- **Hosting Target**: Vercel / Static Web Hosting

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (Tested on `v24.18.1`)
- **npm**: `v9.0.0` or higher (Tested on `v11.16.0`)

---

## 🚀 Getting Started

### 1. Clone or Open Project
```bash
cd milan-cultural-fest
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

---

## 📦 Production Build

To generate the optimized production assets:
```bash
npm run build
```
The compiled bundle will be output to the `dist/` directory:
- `dist/index.html`
- `dist/assets/*.css`
- `dist/assets/*.js`

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The project is structured out-of-the-box for seamless Vercel deployment:

### Option A: Via Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Deploy project
vercel
```

### Option B: Via Vercel Web Dashboard (GitHub / Git)
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your `milan-cultural-fest` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

---

## 📂 Project Structure

```
milan-cultural-fest/
├── index.html                  # HTML entry template
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite React configuration
├── README.md                   # Project documentation
├── public/
│   └── vite.svg                # Brand icon asset
└── src/
    ├── main.jsx                # Application root mount point
    ├── index.css               # Global theme variables, reset & base styles
    ├── App.jsx                 # Core app shell & modal state coordinator
    ├── App.css                 # Component layout, animations & responsive media queries
    ├── data/
    │   └── events.js           # Featured events dataset with demo logistics
    └── components/
        ├── Navbar.jsx          # Header with logo, smooth links & mobile menu
        ├── Hero.jsx            # Hero banner, typography & category filter chips
        ├── EventsSection.jsx   # Search bar, category tabs, count & event grid
        ├── EventCard.jsx       # Event showcase card with image fallback & actions
        ├── EventDetailsModal.jsx # Detail popup with logistics and registration CTA
        ├── RegistrationModal.jsx # Form with inline validation & confirmation pass
        ├── AboutSection.jsx    # Introduction to Milan's 3 pillars
        └── Footer.jsx          # Footer links, project notice & copyright
```

---

## 🤝 Project Credits
Created for the **SRM DSA Tech Team** Frontend Recruitment Task.
Designed with passion for **Milan — SRMIST**.
