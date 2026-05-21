# NeoCalc ── Premium Glassmorphic Web Calculator

NeoCalc is a visually stunning, premium web-based calculator built using React and Vite. It features a modern, dark glassmorphic design system, high-fidelity active/hover micro-animations, full keyboard interaction support, and a high-tech OLED-inspired display panel.

---

## ✨ Features

- **Modern Glassmorphism UI**: High-end frosted glass layout console featuring radial gradient lighting, drop shadows, and subtle dual-layer borders.
- **OLED Display Panel**: A clean digital screen utilizing custom monospace typography, digital text shadow glows, and dynamic expression updates.
- **Keyboard Support**: Full keyboard control including numbers, standard operators (`+`, `-`, `*`, `/`), `Backspace` for cross-deleting, and `Enter` for calculation.
- **Color-Coded Buttons**: 
  - *Numbers*: Sleek frosted glass buttons.
  - *Operators*: Vibrant neon amber/orange gradient accents.
  - *Action Keys*: Rich rose danger accents for clearing (AC) and deleting (Cross).
  - *Equals Key*: A premium indigo/violet gradient action button.
- **Fully Responsive**: Adapts seamlessly to all screen sizes including desktop, tablet, and multiple mobile dimensions.
- **Optimized Typography**: Powered by the modern, premium typeface **Plus Jakarta Sans**.

---

## 🛠️ Technologies Used

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS (embedded inside components for complete style encapsulation)
- **Fonts**: Plus Jakarta Sans (Google Fonts)

---

## 📁 Project Directory Structure

```
Calculator/
├── index.html          # Entry point with Google Fonts integration & meta SEO tags
├── package.json        # Project metadata, scripts, and dependencies
├── vite.config.js      # Vite build configuration
├── src/
│   ├── main.jsx        # App mounting and React initialization
│   ├── App.jsx         # Root component rendering the Landing page
│   ├── Navbar.jsx      # Glassmorphic responsive header component with animated links
│   └── Landing.jsx     # Main calculator component containing math logic and core styles
└── public/             # Static public assets
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd Calculator
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

   Once started, open your browser and navigate to the local address displayed (e.g. `http://localhost:5173/`).

### Production Build

To build a minimized, production-ready version of the calculator:
```bash
npm run build
```
This will compile all assets into a `dist/` directory, optimized for deployment.
