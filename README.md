# 🚀 Soumya Madishetti — Portfolio
A modern, animated React portfolio with dark tech aesthetic, particle background, custom cursor, and smooth animations throughout.

---

## 📁 COMPLETE FOLDER STRUCTURE

```
portfolio/
├── public/
│   └── index.html                  ← HTML shell + Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              ← Fixed nav, scroll progress, mobile drawer
│   │   ├── Hero.jsx                ← Typing animation, stats strip, glow orbs
│   │   ├── About.jsx               ← Bio text + 4 feature cards
│   │   ├── Skills.jsx              ← 4 category tabs, animated skill bars
│   │   ├── Projects.jsx            ← Filter (All/AI-ML/Full Stack), project cards
│   │   ├── Experience.jsx          ← Work experience + Education side by side
│   │   ├── Achievements.jsx        ← 3 award cards + LeetCode CountUp stats
│   │   ├── Contact.jsx             ← Contact info + working form
│   │   ├── Footer.jsx              ← Full footer with nav links + socials
│   │   ├── CursorFollower.jsx      ← Custom cursor dot + spring ring
│   │   ├── ParticleBackground.jsx  ← Canvas particle network
│   │   └── UI.jsx                  ← BackToTop floating button
│   ├── styles/
│   │   └── global.css              ← ALL CSS (variables, layout, animations, responsive)
│   ├── App.js                      ← Root: assembles all components
│   └── index.js                    ← ReactDOM entry point
├── package.json                    ← All npm dependencies
└── README.md                       ← This file
```

---

## ⚡ TECH STACK

| Package                       | What it does                               |
|-------------------------------|--------------------------------------------|
| react + react-dom             | Core React framework                       |
| framer-motion                 | All animations, hover, spring effects      |
| react-type-animation          | Typing typewriter in Hero                  |
| react-scroll                  | Smooth scroll between sections             |
| react-icons                   | All icons (Feather set)                    |
| react-intersection-observer   | Triggers animations when scrolled into view|
| react-countup                 | Animated counting numbers                  |

---

## 🛠️ STEP-BY-STEP SETUP

### STEP 1 — Install Node.js (ONE TIME ONLY)
Go to: https://nodejs.org
Download the "LTS" version and install it.

Verify after install — open terminal/cmd and type:
```
node --version
```
You should see something like: v18.19.0

### STEP 2 — Extract the ZIP
Unzip `portfolio.zip` to a folder, e.g.:
  Windows: C:\Users\YourName\Desktop\portfolio\
  Mac/Linux: ~/Desktop/portfolio/

### STEP 3 — Open Terminal in the folder
  Windows: Right-click inside the portfolio folder → "Open in Terminal"
  Mac: Right-click → "New Terminal at Folder"
  OR type in any terminal: cd path/to/portfolio

### STEP 4 — Install all packages
```
npm install
```
This downloads all libraries listed in package.json into a node_modules/ folder.
Takes about 1-3 minutes. You will see a progress bar.

### STEP 5 — Run the development server
```
npm start
```
This compiles your React app and opens http://localhost:3000 in your browser automatically.
Every time you save a file, it auto-refreshes!

### STEP 6 — Build for production (when deploying)
```
npm run build
```
Creates a build/ folder with optimized files ready to upload to a web server.

---

## 🎨 HOW TO PERSONALIZE

### Your name + title
→ src/components/Hero.jsx
  Change "Soumya Madishetti" and the TypeAnimation sequences

### Contact info
→ src/components/Contact.jsx
  Change email, phone, location values

### Social links (GitHub, LinkedIn)
→ Search for href="https://github.com" in Hero.jsx, Contact.jsx, Footer.jsx
  Replace with your real profile URLs

### Projects
→ src/components/Projects.jsx
  Edit the projects[] array — add/remove objects following the same structure

### Skills + percentages
→ src/components/Skills.jsx
  Edit the skillData object

### LeetCode stats
→ src/components/Achievements.jsx
  Change the numbers in the stats[] array

### Resume download
→ Put your resume.pdf inside the public/ folder
  The "Download Resume" button already points to /resume.pdf

### Color scheme
→ src/styles/global.css, edit the :root block at the top:
  --accent-cyan: #00d4ff;    ← main accent
  --bg-primary: #070d1a;     ← page background

---

## 🌟 ANIMATIONS BREAKDOWN

| Animation               | How it works                                        |
|-------------------------|-----------------------------------------------------|
| Particle network        | Canvas API — 60 dots connected by proximity lines   |
| Custom cursor           | framer-motion useMotionValue + useSpring            |
| Scroll progress bar     | CSS width = (scrollY / maxScroll) * 100%            |
| Hero fade-ups           | framer-motion with staggered delay per element      |
| Typing text             | react-type-animation cycling through role titles    |
| Hero stat counters      | react-countup triggers on component mount           |
| Skill bar fill          | framer-motion scaleX 0→1 on intersection            |
| Section reveals         | react-intersection-observer + framer-motion         |
| Tab switch (Skills)     | AnimatePresence fade out → new tab fades in         |
| Project filter          | AnimatePresence layout animation                    |
| Hover lift on cards     | whileHover={{ y: -4 }} across all cards             |
| Floating glow orbs      | framer-motion scale + opacity loop animation        |
| Back to top button      | AnimatePresence scale-in when scrollY > 400px       |
| Mobile drawer slide     | spring animation x: 100% → 0                       |
| LeetCode counters       | react-countup with delay trigger on scroll          |

---

## 🚀 FREE DEPLOYMENT

### Vercel (Recommended — Easiest)
1. Create free account at vercel.com
2. Push your portfolio folder to a GitHub repo
3. Import the repo on Vercel → Deploy
4. Get a free .vercel.app URL in 60 seconds

### Netlify
1. Run: npm run build
2. Go to netlify.com
3. Drag & drop the build/ folder onto the Netlify dashboard
4. Get a free .netlify.app URL instantly

### GitHub Pages
1. npm install --save-dev gh-pages
2. Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
3. Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
4. Run: npm run deploy

---

## ❓ COMMON ISSUES

Problem: npm install fails
Solution: Run: npm install --legacy-peer-deps

Problem: Port 3000 is in use
Solution: Press Y when terminal asks to use another port, OR kill the process using 3000

Problem: Blank white page
Solution: Open browser console (F12 → Console tab) and check for red errors. 
Most likely you forgot to run npm install first.

Problem: Animations not working
Solution: Make sure framer-motion installed correctly: npm install framer-motion

Problem: Fonts look wrong
Solution: You need internet — fonts come from Google Fonts CDN.
