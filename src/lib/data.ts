// Portfolio Data — sourced exclusively from CV (Ilham Rafiqin, 28/04/2026)
// Projects are from CV only. GitHub links are grabbed directly.

export const personalInfo = {
  name: "Ilham Rafiqin",
  title: "Computer Engineering Student (GPA 3.79) • Data Engineering • LLMs • Cloud",
  email: "rafiqinilhambusship10@gmail.com",
  location: "Malang, Indonesia",
  bio: "Final-year Computer Engineering student (GPA 3.79/4.0) specializing in robust data ecosystems and Large Language Model (LLM) architectures. Currently executing national digital initiatives at the Ministry of Communication and Digital Affairs (AITF), applying analytical thinking to optimize technical workflows and solve complex architectural challenges. A systematic problem solver recognized as 4th Place in the Budaya GO! competition out of 627 applicants.",
  website: "https://lalalostcode.vercel.app",
  github: "https://github.com/lalalostcode",
  linkedin: "https://www.linkedin.com/in/ilham-rafiqin-969455289/",
  cv: "https://drive.google.com/file/d/1K1IZQ1xiSg_Hjc7_cvEuW-dnB8Jgccpy/view?usp=sharing",
}

export const skills = {
  programmingLanguages: [
    { name: "Python", icon: "python" },
    { name: "C++", icon: "code" },
    { name: "SQL", icon: "database" },
    { name: "Bash", icon: "terminal" },
  ],
  dataEngineering: [
    { name: "Apache Airflow", icon: "airflow" },
    { name: "dlt", icon: "pipeline" },
    { name: "Apache Kafka", icon: "kafka" },
    { name: "PySpark", icon: "spark" },
    { name: "MySQL", icon: "database" },
    { name: "MongoDB", icon: "mongodb" },
  ],
  aiAndLlm: [
    { name: "PyTorch", icon: "cpu" },
    { name: "Unsloth", icon: "sliders" },
    { name: "Hugging Face", icon: "bot" },
    { name: "NumPy", icon: "sigma" },
    { name: "Pandas", icon: "pandas" },
    { name: "Scikit-Learn", icon: "brain" },
  ],
  cloudAndDevOps: [
    { name: "AWS", icon: "cloud" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "boxes" },
    { name: "GitHub Actions", icon: "workflow" },
  ],
  cybersecurity: [
    { name: "SOC Analysis", icon: "shield" },
    { name: "Network Security", icon: "network" },
    { name: "IT Governance", icon: "check" },
  ],
  humanLanguages: [
    { name: "English (EFSET C1)", icon: "globe", link: "https://cert.efset.org/en/yhwXpX" },
    {
      name: "Indonesian (UKBI Istimewa)",
      icon: "globe",
      link: "https://www.linkedin.com/in/ilham-rafiqin-969455289/overlay/Certifications/1157245937/treasury/?profileId=ACoAAEYC_CEBmdRLKKrzEEpAPG60mq-uIueN3q0",
    },
    { name: "Sign Language (Basic BISINDO)", icon: "hand" },
  ],
}

// ─── PROJECTS (CV-sourced only) ───
// User will update later; GitHub links grabbed directly from CV
export const projects = [
  {
    id: "sekolah-rakyat-llm",
    title: "Sekolah Rakyat — Indonesian Education Expert LLM",
    category: "AI",
    description: "200M+ token data curation + CPT/SFT pipelines for an education expert LLM initiative (AITF, Komdigi).",
    longDescription:
      "Contributed to the end-to-end workflow from data ingestion to inference for an Indonesia education expert LLM: web scraping, cleaning, filtering, continual pre-training (CPT), and collaboration across multiple stakeholder teams.",
    image: "",
    tags: ["Crawl4AI", "Playwright", "Qwen 3.5 (9B)", "Unsloth", "QLoRA", "SFT", "DPO/GRPO"],
    github: "",
    demo: "https://drive.google.com/file/d/1-fqx9AFPYVMPVlPDVtrWBJ604Jc_kR3G/view",
    featured: true,
    star: {
      situation: "Education domain knowledge is fragmented across sources and needs a structured, curriculum-aligned foundation for an expert assistant.",
      task: "Curate high-quality training data and support training/alignment workflows for an Indonesian education expert LLM.",
      action:
        "Built scraping pipelines (Crawl4AI + Playwright), applied filtering/noise reduction for CPT, and supported fine-tuning (Qwen 3.5 9B) with Unsloth + QLoRA and alignment (SFT + DPO/GRPO) in a cross-team workflow.",
      result: "Delivered a scalable data-to-training workflow and enabled iteration across data ingestion, training, and inference with multiple stakeholders.",
    },
  },
  {
    id: "maltopia",
    title: "Maltopia — Cultural Preservation RAG Platform",
    category: "AI",
    description: "RAG system + full-stack integration (Next.js + Three.js) for Topeng Malangan / Nusantara preservation (Budaya GO!).",
    longDescription:
      "Engineered a RAG system using Gemini API and Supabase to digitize oral traditions into a queryable knowledge base, integrated into a Next.js app with Three.js mask renderings for interactive cultural learning.",
    image: "",
    tags: ["RAG", "Gemini API", "Supabase", "Next.js", "Three.js"],
    github: "",
    demo: "https://www.maltopia.app/id",
    featured: true,
    star: {
      situation: "Local cultural knowledge and oral traditions were difficult to access and preserve in a structured digital format.",
      task: "Build an interactive cultural preservation platform with an AI assistant backed by a reliable knowledge base.",
      action:
        "Implemented a RAG pipeline (Gemini API + Supabase) and integrated it into a Next.js experience with Three.js 3D mask renderings for immersive exploration.",
      result: "Achieved 4th place (joint awardee) out of 627 teams in Budaya GO! and received recognition for technical implementation from the Ministry of Culture.",
    },
  },
  {
    id: "smart-harvest",
    title: "Smart Harvest — Dockerized ETL + Yield Prediction",
    category: "Data Engineering",
    description: "Multi-commodity yield prediction system with Dockerized ETL orchestrated by Apache Airflow and a Star Schema warehouse.",
    longDescription:
      "Built a Docker-based ETL pipeline orchestrated by Apache Airflow for ingestion/transformation, designed a Star Schema warehouse for analytics, and implemented regression-based forecasting to support yield prediction.",
    image: "",
    tags: ["Apache Airflow", "Docker", "ETL", "Star Schema", "Regression"],
    github: "https://github.com/lalalostcode/pid_smart_harvest",
    demo: "",
    featured: true,
    star: {
      situation: "Agriculture datasets require repeatable pipelines and analytics-ready modeling to support forecasting and reporting.",
      task: "Create an automated ETL workflow and a prediction pipeline for multi-commodity yield forecasting.",
      action:
        "Built a Dockerized ETL pipeline orchestrated by Airflow, designed a Star Schema warehouse for query performance, and implemented regression-based forecasting.",
      result: "Delivered an end-to-end data pipeline that supports repeatable ingestion/transformation and analytics-oriented forecasting.",
    },
  },
  {
    id: "scancer",
    title: "Scancer — Skin Disease Detection (MobileNetV4)",
    category: "AI",
    description: "Mobile-ready skin disease detection app using MobileNetV4.",
    longDescription:
      "Built a skin disease detection application leveraging MobileNetV4 for efficient on-device inference and practical deployment constraints.",
    image: "",
    tags: ["Computer Vision", "MobileNetV4", "On-device ML"],
    github: "https://github.com/lalalostcode/Scancer-Skin-Desease-Detection-App-Using-MobileNetV4",
    demo: "",
    featured: false,
    star: {
      situation: "On-device computer vision models must balance accuracy and efficiency for real-world usability.",
      task: "Build a practical skin disease detection prototype using a lightweight architecture.",
      action: "Implemented a MobileNetV4-based detection workflow and packaged it into an application structure suitable for mobile constraints.",
      result: "Delivered a working prototype demonstrating efficient image-based classification for skin disease detection.",
    },
  },
  {
    id: "tinytorch",
    title: "TinyTorch — Deep Learning Framework",
    category: "AI",
    description: "A minimal deep learning framework exploring framework internals (private).",
    longDescription:
      "A personal learning project exploring deep learning fundamentals and framework internals. The repository is currently private.",
    image: "",
    tags: ["Deep Learning", "Autograd", "Framework"],
    github: "",
    demo: "",
    featured: false,
    star: {
      situation: "Wanted a deeper, hands-on understanding of deep learning framework internals.",
      task: "Build a minimal deep learning framework as a learning exercise.",
      action: "Implemented and iterated on core ideas (tensors, ops, and training loops) in a small, exploratory codebase.",
      result: "Built a working learning project to understand how deep learning frameworks are structured.",
    },
  },
]

// ─── EXPERIENCE (CV-sourced) ───
export const experience = [
  {
    company: "Artificial Intelligence Talent Factory (Komdigi)",
    role: "AI Engineer (Internship)",
    period: "Feb 2026 – Jun 2026 (Expected)",
    description:
      "Developing Indonesian education expert LLM workflows and supporting national digital initiatives with end-to-end data → training → inference collaboration.",
    achievements: [
      "Developed scraping pipelines (Crawl4AI + Playwright) to curate 200M+ tokens; implemented filtering/noise reduction for Continual Pre-Training (CPT)",
      "Fine-tuned Qwen 3.5 (9B) via Unsloth + QLoRA on 80GB VRAM GPUs; implemented SFT and DPO/GRPO for alignment",
      "Developing automated pipeline via OpenRouter for synthetic instruction-tuning datasets aligned with Indonesia educational curricula",
      "Collaborating across 5 cross-functional teams and multiple stakeholders (Komdigi, Kemensos, Sekolah Rakyat)",
    ],
  },
  {
    company: "Budaya GO! (Ministry of Culture, Indonesia)",
    role: "AI Developer (Project)",
    period: "Dec 2025",
    description:
      "Built Maltopia — a cultural preservation platform combining RAG and interactive experiences for Topeng Malangan / Nusantara.",
    achievements: [
      "Engineered a RAG system (Gemini API + Supabase) to digitize oral traditions into a queryable knowledge base",
      "Integrated AI features with Next.js + Three.js 3D mask renderings for interactive cultural access",
      "Ranked 4th out of 627 teams; recognized for technical implementation by the Ministry of Culture",
    ],
  },
  {
    company: "FILKOM, Universitas Brawijaya",
    role: "Data Engineer (Project)",
    period: "Nov 2025",
    description:
      "Built Smart Harvest — a dockerized ETL pipeline and yield prediction system for multi-commodity agricultural datasets.",
    achievements: [
      "Engineered a Docker-based ETL pipeline orchestrated by Apache Airflow",
      "Designed a Star Schema data warehouse for analytics performance",
      "Developed regression-based forecasting to predict harvest yields",
    ],
  },
  {
    company: "PSLD UB",
    role: "Volunteer Academic Assistant",
    period: "May 2026 – Present",
    description: "University center supporting accessibility for students with disabilities.",
    achievements: [
      "Provided 1-on-1 academic assistance and classroom accessibility support",
      "Used basic Indonesian Sign Language (BISINDO) to bridge communication",
    ],
  },
  {
    company: "K-RISMA Bootcamp (FILKOM UB)",
    role: "Vice Chairperson",
    period: "Mar 2024 – Dec 2024",
    description: "Research-focused student organization dedicated to academic innovation and competitions.",
    achievements: [
      "Led a research workshop for 70+ participants focusing on academic writing and sustainable innovation",
      "Facilitated submission of 4 extended abstracts to CODE International Conference 2024",
    ],
  },
  {
    company: "POROS (Organization of Open Source), FILKOM UB",
    role: "Cyber Security",
    period: "Mar 2025 – Dec 2025",
    description: "Open-source development and cybersecurity community in FILKOM UB.",
    achievements: [
      "Co-organized internal Capture The Flag (CTF) sessions and peer-led study groups",
      "Managed institutional relations as public relations to foster external collaborations",
    ],
  },
]

// ─── CERTIFICATIONS & CREDENTIALS (CV-sourced) ───
export const certifications = [
  {
    id: "ub-ce",
    name: "Computer Engineering (CGPA 3.79/4.0)",
    organizer: "Universitas Brawijaya",
    year: "2023–2027",
    date: "Aug 2023 – Aug 2027",
    link: "",
    type: "Education",
  },
  {
    id: "aitf",
    name: "Artificial Intelligence Talent Factory (AITF)",
    organizer: "Kementerian Komunikasi dan Digital (Komdigi)",
    year: "2026",
    date: "Feb 2026 – Jun 2026",
    link: "https://aitalent.id/",
    type: "Training",
  },
  {
    id: "budaya-go-award",
    name: "4th Place (Joint Awardee) — Budaya GO!",
    organizer: "Kementerian Kebudayaan Republik Indonesia",
    year: "2025",
    date: "Dec 2025",
    link: "https://www.budayago.id/",
    type: "Award",
  },
  {
    id: "gci-data-science",
    name: "Data Science Cohort",
    organizer: "GCI Global • Matsuo-Iwasawa Lab (U-Tokyo)",
    year: "2026",
    date: "Apr 2026 – Present",
    link: "https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/?utm_source=slack&utm_medium=social&utm_campaign=gci-2025",
    type: "Training",
  },
  {
    id: "digitalent-llm",
    name: "LLM & Deep Learning",
    organizer: "Digital Talent • Komdigi",
    year: "2025",
    date: "Mar 2025 – Present",
    link: "https://digitalent.komdigi.go.id/",
    type: "Training",
  },
  {
    id: "aws-restart",
    name: "Cloud Computing & Data Engineering — AWS re/Start",
    organizer: "Orbit Future Academy",
    year: "2025–2026",
    date: "Aug 2025 – Mar 2026",
    link: "https://aws.amazon.com/id/training/restart/",
    type: "Training",
  },
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    organizer: "Amazon Web Services",
    year: "2026",
    date: "2026",
    link: "https://www.credly.com/badges/8a165a17-556c-4048-ba18-090b8667a5fa/linked_in_profile",
    type: "Certification",
  },
  {
    id: "gccx-komdigi-cyber",
    name: "Google Cybersecurity Professional Certificate",
    organizer: "GCC x Komdigi",
    year: "2025",
    date: "Aug 2025 – Nov 2025",
    link: "https://www.credly.com/badges/c95bed14-1ec9-4f54-ad5d-31d425bb4904",
    type: "Certification",
  },
]

// ─── NAV (SPA sections, not pages) ───
export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
]
