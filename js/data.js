const PROFILE_DATA = {
  profile: {
    name: "Peter Wu",
    tagline: "Software Engineer · Builder of Things",
    intro: "Blah Blah.",

    // ── photo ──────────────────────────────────────────────────────
    image: "assets/profile-placeholder.svg",

    // ── Contact links (shown as icons in the hero and footer) ──────────
    email: "y226wu@uwaterloo.ca",
    linkedin: "https://www.linkedin.com/in/peter-wu6/",
    github: "https://github.com/PeterWuCs",
  },

  education: [
    {
      school: "University of Waterloo",
      logo: "assets/uwaterloo_logo.png",
      degree:
        "Bachelor of Computer Science, Artificial Intelligence Specialization",
      note: 'REPLACE ME — honours, co-op terms, clubs… or leave "" to hide.',
    },
  ],
  experience: [
    {
      company: "TrendAI (formerly Trend Micro) ",
      logo: "assets/trendai_logo.jpg",
      title: "Machine Learning Engineer Intern",
      period: "May 2026 – Present",
      points: [
        "Developing a domain-specific large language model (LLM) for email classification.",
      ],
    },
    {
      company: "Ericsson",
      logo: "assets/ericsson_logo.jpg",
      title: "Software Engineering Intern",
      period: "Sep 2025 – Dec 2025",
      points: [
        "Developed a 5G baseband performance log analysis tool in Python.",
      ],
    },
    {
      company: "McMaster University",
      logo: "assets/mac_logo.jpg",
      title: "Human-Centered AI Researcher",
      period: "May 2025 - Aug 2025",
      points: [
        "Designed and developed an AR maze-solving programming game with an integrated AI assistant with Unity (C#).",
      ],
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
