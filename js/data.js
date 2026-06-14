/* ╔══════════════════════════════════════════════════════════════════════╗
   ║                                                                        ║
   ║   ★★★  YOUR CONTENT LIVES HERE — THIS IS THE ONLY FILE TO EDIT  ★★★    ║
   ║                                                                        ║
   ║   HOW IT WORKS                                                         ║
   ║   1. Change any text between "quotes", save, refresh the browser.     ║
   ║   2. ADD an entry    → copy the TEMPLATE block above each list and    ║
   ║                        paste it inside the [ ] brackets.               ║
   ║   3. REMOVE an entry → delete its whole { ... }, block.                ║
   ║   4. HIDE a section  → leave its list empty, e.g.                     ║
   ║         publications: [],                                              ║
   ║      …and the section AND its menu link disappear automatically.      ║
   ║                                                                        ║
   ╚══════════════════════════════════════════════════════════════════════╝ */

const PROFILE_DATA = {
  profile: {
    name: "Peter Wu",
    tagline: "Software Engineer · Builder of Things",
    intro:
      "REPLACE ME — write two or three friendly sentences about who you are, " +
      "what you love building, and what gets you excited. This is the first " +
      "thing visitors read, so keep it human.",

    // ── Your photo ──────────────────────────────────────────────────────
    // Drop a square photo into the assets/ folder (e.g. assets/profile.jpg)
    // then change the line below to:  image: "assets/profile.jpg",
    image: "assets/profile-placeholder.svg",

    // ── Contact links (shown as icons in the hero and footer) ──────────
    email: "you@example.com",
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  },

  /* ╔════════════════════════════════════════════════════════════════════╗
     ║  ✏️  EDIT 2 — EDUCATION  (simple section, no cards)                  ║
     ║                                                                     ║
     ║  One school is typical; you can still add more entries —            ║
     ║  TEMPLATE:                                                          ║
     ║  {                                                                  ║
     ║    school: "School Name",                                           ║
     ║    degree: "Degree, Major",                                         ║
     ║    period: "2018 – 2023",                                           ║
     ║    note: "Optional: honours, clubs, thesis… (or leave \"\")",       ║
     ║  },                                                                 ║
     ║                                                                     ║
     ║  🪿 Tip: any school containing "Waterloo" gets a goose badge.       ║
     ╚════════════════════════════════════════════════════════════════════╝ */
  education: [
    {
      school: "University of Waterloo",
      degree:
        "Bachelor of Computer Science, Artificial Intelligence Specialization",
      period: "20XX – 20XX",
      note: 'REPLACE ME — honours, co-op terms, clubs… or leave "" to hide.',
    },
  ],

  /* ╔════════════════════════════════════════════════════════════════════╗
     ║  ✏️  EDIT 3 — EXPERIENCE  (vertical timeline, newest job first)     ║
     ║                                                                     ║
     ║  TEMPLATE — copy & paste inside the [ ] below to add a job:         ║
     ║  {                                                                  ║
     ║    company: "Company Name",                                         ║
     ║    logo: "assets/logos/company.png",  // "" = auto letter avatar    ║
     ║    title: "Job Title",                                              ║
     ║    period: "Jan 2024 – Present",                                    ║
     ║    points: [                                                        ║
     ║      "What you built or achieved…",                                 ║
     ║      "Another highlight…",                                         ║
     ║    ],                                                               ║
     ║  },                                                                 ║
     ║                                                                     ║
     ║  Logo: drop the image in assets/ (square works best) and put its    ║
     ║  path in logo. Leave "" and a letter avatar is shown instead.       ║
     ╚════════════════════════════════════════════════════════════════════╝ */
  experience: [
    {
      company: "REPLACE ME — Current Company",
      logo: "", // ← e.g. "assets/logos/current-company.png"
      title: "REPLACE ME — Job Title",
      period: "Jan 20XX – Present",
      points: [
        "REPLACE ME — something impressive you shipped or owned.",
        "REPLACE ME — a measurable impact (faster, cheaper, bigger…).",
        "REPLACE ME — a technology or skill you grew into.",
      ],
    },
    {
      company: "REPLACE ME — Previous Company",
      logo: "",
      title: "REPLACE ME — Job Title",
      period: "May 20XX – Dec 20XX",
      points: [
        "REPLACE ME — what you did there.",
        "REPLACE ME — another highlight.",
      ],
    },
    {
      company: "REPLACE ME — Internship / Co-op (delete block if not needed)",
      logo: "",
      title: "REPLACE ME — Intern Title",
      period: "Summer 20XX",
      points: ["REPLACE ME — what you learned or built."],
    },
  ],

  /* ╔════════════════════════════════════════════════════════════════════╗
     ║  ✏️  EDIT 4 — PROJECTS  (cards, 2 per row on desktop)               ║
     ║                                                                     ║
     ║  TEMPLATE — copy & paste inside the [ ] below to add a project:     ║
     ║  {                                                                  ║
     ║    name: "Project Name",                                            ║
     ║    description: "One or two sentences on what it does and why.",    ║
     ║    images: ["assets/projects/shot-1.png"],  // 0, 1 or 2 images     ║
     ║    tech: ["Python", "React", "…"],                                  ║
     ║    github: "https://github.com/you/repo",   // "" hides the button  ║
     ║    demo: "https://your-live-demo.com",      // "" hides the button  ║
     ║  },                                                                 ║
     ║                                                                     ║
     ║  Images: drop screenshots in assets/ and list 1 or 2 paths.         ║
     ║  [] = no image area. 1 image = full width, 2 = side by side.        ║
     ╚════════════════════════════════════════════════════════════════════╝ */
  projects: [
    {
      name: "REPLACE ME — Project One",
      description:
        "REPLACE ME — a short, punchy description of what this project does, " +
        "the problem it solves, and what's interesting about it.",
      images: ["assets/project-placeholder.svg"], // ← replace with a real screenshot, or use []
      tech: ["Python", "FastAPI", "Docker"],
      github: "https://github.com/your-handle/project-one",
      demo: "https://project-one-demo.example.com",
    },
    {
      name: "REPLACE ME — Project Two",
      description: "REPLACE ME — what it does and why it's cool.",
      images: [
        "assets/project-placeholder.svg",
        "assets/project-placeholder.svg",
      ], // ← two images, side by side
      tech: ["TypeScript", "React"],
      github: "https://github.com/your-handle/project-two",
      demo: "", // ← empty string = no Live Demo button
    },
    {
      name: "REPLACE ME — Project Three",
      description: "REPLACE ME — what it does and why it's cool.",
      images: [], // ← no images, the card is text-only
      tech: ["Go", "PostgreSQL"],
      github: "https://github.com/your-handle/project-three",
      demo: "https://project-three.example.com",
    },
    {
      name: "REPLACE ME — Project Four (delete block if not needed)",
      description: "REPLACE ME — what it does and why it's cool.",
      images: [],
      tech: ["C++"],
      github: "",
      demo: "",
    },
  ],

  /* ╔════════════════════════════════════════════════════════════════════╗
     ║  ✏️  EDIT 5 — PUBLICATIONS                                          ║
     ║                                                                     ║
     ║  TEMPLATE — copy & paste inside the [ ] below to add a paper:       ║
     ║  {                                                                  ║
     ║    title: "Paper Title",                                            ║
     ║    authors: "A. Author, B. Author, You",                            ║
     ║    venue: "Conference / Journal Name",                              ║
     ║    year: "2025",                                                    ║
     ║    link: "https://doi.org/…",        // "" hides the link           ║
     ║  },                                                                 ║
     ║                                                                     ║
     ║  No publications? Make it:  publications: [],                       ║
     ╚════════════════════════════════════════════════════════════════════╝ */
  publications: [
    {
      title: "REPLACE ME — An Important-Sounding Paper Title",
      authors: "Your Name, A. Collaborator, B. Collaborator",
      venue: "REPLACE ME — Conference or Journal Name",
      year: "20XX",
      link: "https://example.com/your-paper",
    },
    {
      title: "REPLACE ME — Another Paper (delete block if not needed)",
      authors: "A. Collaborator, Your Name",
      venue: "REPLACE ME — Workshop Name",
      year: "20XX",
      link: "",
    },
  ],

  /* ╔════════════════════════════════════════════════════════════════════╗
     ║  ✏️  EDIT 6 — INTERESTS  (casual corner: a few lines + photos)      ║
     ║                                                                     ║
     ║  text   → a relaxed paragraph about life outside work.              ║
     ║  photos → snapshots shown as tilted polaroids with a caption.       ║
     ║           Drop pics in assets/ — you, your cat, your hobbies…       ║
     ║                                                                     ║
     ║  PHOTO TEMPLATE — copy & paste inside the [ ]:                      ║
     ║  { src: "assets/cat.jpg", caption: "my cat" },                      ║
     ║                                                                     ║
     ║  Hide this whole section with:  text: "", photos: [],               ║
     ╚════════════════════════════════════════════════════════════════════╝ */
  interests: {
    text:
      "REPLACE ME — keep it casual! e.g. When I'm not coding you'll find me " +
      "on the badminton court, being bossed around by my cat, or hunting " +
      "down the city's best bowl of noodles. Honk if you see a goose.",
    photos: [
      {
        src: "assets/photo-placeholder.svg",
        caption: "me playing sports (replace me)",
      },
      { src: "assets/photo-placeholder.svg", caption: "my cat (replace me)" },
      {
        src: "assets/photo-placeholder.svg",
        caption: "add more, or delete me",
      },
    ],
  },
};
