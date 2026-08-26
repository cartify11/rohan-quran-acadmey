# 📖 ONLINE ROHAN QURAN ACADEMY — PROJECT HANDOFF & CONTEXT MEMORY

> **Last Updated**: August 26, 2026  
> **Repository**: [https://github.com/cartify11/rohan-quran-acadmey](https://github.com/cartify11/rohan-quran-acadmey)  
> **Live Website (Vercel)**: [https://rohan-quran-acadmey.vercel.app/](https://rohan-quran-acadmey.vercel.app/)  
> **Branch**: main

---

## 📌 1. ACADEMY PROFILE & CORE CREDENTIALS

* **Academy Brand Name**: Online Rohan Quran Academy
* **Academy WhatsApp Number**: +92 322 7018875 (Code constant: 923227018875)
* **Official Email**: info@rohanquranacademy.com
* **Target Audience**: Global Muslim families, kids (age 4+), and adults in USA, UK, Canada, Australia, UAE, Saudi Arabia, Europe, Pakistan, and worldwide.
* **Technology Stack**:
  * **Frontend**: HTML5 (Semantic & Accessible), Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, AOS Motion Animations), Vanilla JavaScript (ES6+ Modular Architecture).
  * **Hosting & CI/CD**: Vercel (Auto-deploy on git push to main), GitHub (cartify11/rohan-quran-acadmey).
  * **Fonts**: Google Fonts (Plus Jakarta Sans for modern UI typography, Amiri for Quranic & Arabic calligraphy).

---

## ⚠️ 2. STRICT USER DIRECTIVES & ARCHITECTURAL RULES

1. **Single-Page Landing Page Architecture ONLY**:
   * The user explicitly tested and rejected a multi-page structure in favor of a fast, high-converting **Single-Page Landing Page** with smooth in-page anchor scrolling (#home, #courses, #why-us, #teachers, #about, #testimonials, #pricing, #faq, #contact).
   * Do **NOT** create separate .html pages (like bout.html, courses.html, etc.) unless the user explicitly requests them.

2. **Strict User Modification Directive**:
   * *Memory Update; jo kam ma khoi bs whi theak karna ha khud se kuch ni kran ha* (Only modify what the user explicitly asks for).
   * Preserve all existing working features and approved UI layouts.

3. **Color Palette & Visual Theme Preservation**:
   * **Primary Dark Emerald**: #083325
   * **Deep Forest Green**: #0D4735
   * **Warm Luxury Gold**: #C5A059, #DFBA73
   * **Clean Cream Background**: #FDFBF7
   * **Soft Sand**: #F7F4EC
   * **Pure White**: #FFFFFF
   * **Status Online Green**: #38A169 / #25D366

4. **Strict WhatsApp Message Format (Do NOT Alter)**:
   `	ext
   Assalamualaikum, I want to book a free trial class.

   Student Name: [value]

   Parent / Guardian: [value or N/A]

   Student Age: [value]

   Email: [value]

   WhatsApp Number: [value]

   Country: [value]

   Course: [value]

   Tutor Preference: [value]

   Preferred Class Timing: [value]
   `

---

## 🚀 3. COMPLETED FEATURES & FUNCTIONALITIES

### ✅ 1. Header & Navigation Bar
* **Frosted Glass Sticky Navbar**: Apple-style translucent blur (ackdrop-filter: blur(16px)) with subtle gold border glow on scroll (.navbar.scrolled).
* **Desktop In-Page Navigation**: Smooth anchor links to all sections.
* **Mobile Responsive Drawer**: Hamburger menu with animated state and auto-close on link selection.

### ✅ 2. Hero Section
* Verified badge: *Online 1-on-1 Interactive Classes Worldwide*.
* High-converting headline with gold gradient highlight: *Learn Quran Online With Qualified Teachers*.
* Dual CTAs: *Start Your Free Trial* and *Explore Courses*.
* Trust indicators grid (Male/Female tutors, 24/7 flexibility, 1-on-1 live, Global students).
* Hero visual card with floating animated **Verified Tutors Badge** (loatCard ambient bobbing motion).

### ✅ 3. Trust / Statistics Section
* Real-time counting stats triggered on scroll via IntersectionObserver:
  * **500+** Active Students
  * **25+** Qualified Teachers
  * **15+** Countries Served
  * **4.9/5** Student Rating

### ✅ 4. Courses Program (6 Cards + Detail Modal)
1. **Noorani Qaida**: Phonics, alphabet foundations for kids & beginners.
2. **Quran Reading**: Guided fluent recitation directly from Mushaf.
3. **Quran Tajweed**: Articulation points (Makharij) and recitation rules.
4. **Quran Hifz**: Step-by-step memorization with daily revision routines.
5. **Islamic Studies**: Daily Duas, Salah prayer methods, Hadith, Islamic character building.
6. **Arabic Language**: Basic grammar, vocabulary, Quranic comprehension.
* Interactive **Learn More modal popup** displaying course syllabus and group info.

### ✅ 5. Why Choose Us (8 Pillars)
* Certified Scholars, Male & Female Tutors, 1-on-1 Attention, Flexible 24/7 Timings, Kids & Adults Focus, Regular Evaluation Reports, Budget-Friendly Plans, Worldwide Classes.

### ✅ 6. How It Works (4 Interactive Steps)
1. Book Free Trial (Quick form link)
2. Select Your Course (Courses anchor link)
3. Choose Class Time (Scroll & focus on timing preference)
4. Start Learning (Live 1-on-1 via Zoom/Skype/Meet)

### ✅ 7. Teachers Section & Luxury Centered Tajweed Audio Player
* Verified Teacher Cards with photo, specialization, experience, languages, and View Profile popup.
* **Luxury Centered Tajweed Audio Showcase**:
  * Wide 860px centered dark emerald card with gold border and Arabic Calligraphy بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ.
  * Track title: *Surah Al-Fatiha • Sheikh Ahmad Al-Mansoor*.
  * Gold circular Play/Pause button ▶ / ⏸.
  * Interactive Click-to-Seek Progress Bar.
  * Animated Gold Waveform Sticks pulsing during playback.
  * Public audio source: Sheikh Abdul Basit Abdul Samad Surah Al-Fatiha recitation.

### ✅ 8. Mid-Page Call-To-Action Banner
* Arabic verse header: اقْرَأْ وَارْتَقِ وَرَتِّلْ.
* Direct button leading to the Free Trial form.

### ✅ 9. Parent & Student Testimonials
* 3 authentic global reviews from UK, USA, and Pakistan with 5-star badges and user avatar initials.

### ✅ 10. Pricing Plans with USD / PKR Currency Switcher
* Interactive Toggle Button: [ 🇺🇸 USD ($) | 🇵🇰 PKR (Rs) ].
* Smooth animated price transitions:
  * **Starter**: $39/mo ⇄ Rs. 4,500/mo (4 classes/week, 30 mins)
  * **Standard (Most Popular)**: $59/mo ⇄ Rs. 6,500/mo (5 classes/week, 30 mins)
  * **Premium**: $79/mo ⇄ Rs. 8,500/mo (6 classes/week, 45 mins)
* Selecting a plan auto-scrolls to the form and pre-selects the chosen plan.

### ✅ 11. About Us Section
* High-res Quran Mushaf photo on Rehal stand.
* Academy mission and pedagogical values.

### ✅ 12. Accessible FAQ Accordion
* 8 common questions regarding free trial, female teachers, age limits, class platforms, rescheduling, and Tajweed.
* Pure accessible accordion with smooth toggle and 180° chevron rotation.

### ✅ 13. Direct WhatsApp Enrollment Form
* Fields: Student Name, Parent Name (conditional), Age, Email, WhatsApp Phone, Country, Course, Tutor Preference, Time Slot.
* Client-side validation: Highlights empty fields, validates email regex and phone numbers.
* **Minor Age Logic**: If student age < 18, Parent Name field dynamically displays red asterisk * and becomes required.
* **Country Auto-Prefix**: Selecting country auto-fills phone code (+1, +44, +61, +971, +966, +49, +92).
* Direct redirection to official WhatsApp API (https://wa.me/923227018875?text=...).

### ✅ 14. Floating WhatsApp CTA & Live Social Proof Toast
* **Floating WhatsApp Button**: Bottom-right green button with pulsing green ripple waves (waPulse).
* **Live Social Proof Widget**: Bottom-left notification popup rotating realistic global student bookings (London, Texas, Toronto, Dubai, Sydney) every 28s without obstructing the WhatsApp CTA.

### ✅ 15. Rich Link Preview (OpenGraph SEO & WhatsApp Card)
* Verified OpenGraph & Twitter meta tags in <head> generating verified academy title, description, and preview card when shared on WhatsApp and social media.

### ✅ 16. Hardware-Accelerated Smooth Motion (AOS Engine)
* Integrated AOS animation engine (data-aos=fade-up) across all sections for smooth, 60fps scrolling entry with zero blank-space bugs.

---

## 📂 4. PROJECT FILE STRUCTURE

`
d:\quran acadmey/
├── .git/                      # Local Git repository
├── .gitignore                 # Production ignore rules (OS, IDE, logs, temp)
├── assets/
│   └── images/
│       ├── about-quran-study.jpg    # About section Quran stand image
│       ├── hero-quran-academy.jpg   # Hero visual banner image
│       ├── logo.jpg                 # Official Academy emblem logo
│       ├── teacher-1.jpg            # Sheikh Ahmad Al-Mansoor portrait
│       ├── teacher-2.jpg            # Ustadhaa Fatima Al-Zahra portrait
│       ├── teacher-3.jpg            # Avatar image 3
│       └── teacher-4.jpg            # Avatar image 4
├── css/
│   └── style.css              # Main comprehensive stylesheet (2,500+ lines, clean & purged)
├── js/
│   └── script.js              # Core interactive scripts (AOS, Audio, Pricing, Form, Toasts)
├── index.html                 # Production Single-Page Landing Page
├── vercel.json                # Vercel deployment & routing configuration
└── HANDOFF.md                 # Complete project handoff & memory preservation document
`

---

## 🛠️ 5. GIT & LIVE DEPLOYMENT COMMANDS

* **MinGit Executable on System**:
  `powershell
   = C:\Users\X COMPUTER\mingit\cmd\git.exe
  `
* **One-Step Auto Commit & Push to GitHub (Triggers Instant Live Vercel Deploy)**:
  `powershell
  & C:\Users\X COMPUTER\mingit\cmd\git.exe add -A; & C:\Users\X COMPUTER\mingit\cmd\git.exe commit -m Update message; & C:\Users\X COMPUTER\mingit\cmd\git.exe push origin main
  `

---

## 🔮 6. FUTURE ENHANCEMENT ROADMAP (IF REQUESTED BY USER)

1. **Custom Domain**: Connect a custom domain (e.g. ohanquranacademy.com) in Vercel DNS settings.
2. **Student Testimonial Video Clips**: Add short video recitation clips or student reviews if the academy records them.
3. **Multi-Language Switcher (Urdu / Arabic)**: Add multi-language UI translation toggle if the academy targets non-English speaking demographics in the future.

---
*End of Handoff Document. All changes, memory, and directives are completely preserved.*
