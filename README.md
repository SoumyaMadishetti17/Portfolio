# 🚀 Soumya Madishetti — Portfolio

![Portfolio](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?logo=framer)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

> A modern, animated personal portfolio built with React.js — showcasing Full Stack & AI/ML projects, skills, and experience.

🌐 **Live Site:** https://portfolio-gilt-five-66.vercel.app/
💻 **GitHub Repo:** https://github.com/SoumyaMadishetti17/Portfolio.git

---

## 📁 FOLDER STRUCTURE

```
portfolio/
├── public/
│   └── index.html                  ← HTML shell + Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              ← Fixed nav + scroll progress bar
│   │   ├── Hero.jsx                ← Typing animation + glow orbs
│   │   ├── About.jsx               ← Bio + 4 feature cards
│   │   ├── Skills.jsx              ← 4 category tabs + animated skill bars
│   │   ├── Projects.jsx            ← Filterable project cards (All/AI-ML/Full Stack)
│   │   ├── Experience.jsx          ← Work experience + Education
│   │   ├── Achievements.jsx        ← Award cards + LeetCode CountUp stats
│   │   ├── Contact.jsx             ← Contact info + message form
│   │   └── Footer.jsx              ← Footer
│   ├── styles/
│   │   └── global.css              ← All CSS variables, layouts, animations
│   ├── App.js                      ← Root component
│   └── index.js                    ← ReactDOM entry point
├── package.json                    ← All dependencies
└── README.md                       ← This file
```

---

## ⚡ TECH STACK

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | Core React framework |
| `framer-motion` | Animations, hover & spring effects |
| `react-type-animation` | Typewriter effect in Hero section |
| `react-scroll` | Smooth scroll between sections |
| `react-icons` | All icons (Feather icon set) |
| `react-intersection-observer` | Trigger animations on scroll |
| `react-countup` | Animated number counters (LeetCode stats) |

---

## 🛠️ SETUP & RUN LOCALLY

### Step 1 — Install Node.js (one time only)
Download LTS version from: https://nodejs.org
```bash
node --version   # should show v18.x.x or higher
npm --version    # should show 9.x.x or higher
```

### Step 2 — Clone the repository
```bash
git clone https://github.com/SoumyaMadishetti17/Portfolio.git
cd Portfolio
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Start development server
```bash
npm start
```
Opens automatically at **http://localhost:3000**
Hot-reloads on every file save ✅

### Step 5 — Build for production
```bash
npm run build
```
Creates optimized `build/` folder ready for deployment.

---

## 🎨 HOW TO CUSTOMIZE

| What to change | File to edit |
|----------------|-------------|
| Name & typing titles | `src/components/Hero.jsx` |
| About me text | `src/components/About.jsx` |
| Skills & percentages | `src/components/Skills.jsx` |
| Projects (title, desc, links) | `src/components/Projects.jsx` |
| Work & education details | `src/components/Experience.jsx` |
| Awards & LeetCode stats | `src/components/Achievements.jsx` |
| Email, phone, location | `src/components/Contact.jsx` |
| Social links (GitHub, LinkedIn) | `Hero.jsx`, `Contact.jsx` |
| Resume PDF | Place `resume.pdf` in `public/` folder |
| Accent color | `src/styles/global.css` → `--accent-cyan` |
| Background color | `src/styles/global.css` → `--bg-primary` |

---

## 🌟 ANIMATIONS

| Animation | Library | Section |
|-----------|---------|---------|
| Typing effect | `react-type-animation` | Hero |
| Fade-up on scroll | `framer-motion` + `react-intersection-observer` | All sections |
| Skill bar fill | `framer-motion` scaleX 0→1 | Skills |
| Animated counters | `react-countup` | Achievements |
| Hover lift on cards | `framer-motion` whileHover | All cards |
| Tab switching | `framer-motion` AnimatePresence | Skills, Projects |
| Scroll progress bar | Vanilla JS + CSS | Top of page |
| Background grid | CSS background-image | Entire page |
| Floating glow orbs | `framer-motion` loop animation | Hero |

---

## 🚀 DEPLOYMENT

This project is deployed on **Vercel** with auto-deploy on every push.

### Update & redeploy (3 commands):
```bash
git add .
git commit -m "your update message"
git push
```
Vercel detects the push and redeploys automatically in ~30 seconds. ✅

### Deploy on Netlify (alternative):
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag & drop the `build/` folder
4. Done — get a free `.netlify.app` URL

### Deploy on GitHub Pages:
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://SoumyaMadishetti17.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run:
```bash
npm run deploy
```

---

## 🗂️ FEATURED PROJECTS

| Project | Tech | Live |
|---------|------|------|
| Quick Blog — AI Blog Platform | React, Node.js, MongoDB, Gemini LLM | [Live](https://tangerine-sunburst-abaad0.netlify.app/) |
| My Gemini — AI Chat App | React, Google Gemini API | [Live](https://gemini-two-taupe.vercel.app/) |
| Destinify — Property Rental App | React, Node.js, MongoDB, Express | [Live](https://resonant-druid-489371.netlify.app) |
| MediTrack — Medication Manager | React, Node.js, MongoDB | [Live](https://meditrackapplication.netlify.app) |
| News Generator App | React, News API | [Live](https://newsappnews.netlify.app/) |

---

## ❓ TROUBLESHOOTING

| Problem | Solution |
|---------|---------|
| `npm install` fails | Run `npm install --legacy-peer-deps` |
| Port 3000 in use | Press `Y` to use another port, or kill the process |
| Blank white page | Open F12 console → check for red errors. Run `npm install` first |
| Animations not working | Run `npm install framer-motion` |
| Fonts look wrong | Check internet connection — fonts load from Google Fonts CDN |
| Push rejected | Run `git pull origin main --rebase` then push again |

---

## 📬 CONTACT

- 📧 soumyamadishettimsd17@gmail.com
- 📱 +91 7780389603
- 📍 Hyderabad, Telangana
- 🔗 [GitHub](https://github.com/SoumyaMadishetti17) | [LinkedIn](https://linkedin.com)

---

> Designed & Built by **Soumya Madishetti** © 2025