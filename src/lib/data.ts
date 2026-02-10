// Portfolio Data - Update this file with your information

export const personalInfo = {
  name: "Ilham Rafiqin",
  title: "Data Engineer & AWS Cloud Specialist",
  email: "ilhamrafiqin@gmail.com",
  location: "Malang, East Java, Indonesia",
  bio: "Passionate Data Engineer with expertise in building scalable data pipelines, ETL processes, and cloud-native architectures on AWS. I transform raw data into actionable insights.",
  github: "https://github.com/lalalostcode",
  linkedin: "https://www.linkedin.com/in/ilham-rafiqin-969455289/",
  cv: "https://drive.google.com/file/d/1zkc-nb36sbXQB7SkuXe_RfpG5o3_bhZV/view?usp=sharing",
}

export const skills = {
  languages: [
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "database" },
    { name: "Bash", icon: "terminal" },
    { name: "TypeScript", icon: "typescript" },
  ],
  dataEngineering: [
    { name: "Apache Spark", icon: "spark" },
    { name: "Apache Airflow", icon: "airflow" },
    { name: "Apache Kafka", icon: "kafka" },
    { name: "dbt", icon: "dbt" },
    { name: "Pandas", icon: "pandas" },
  ],
  aws: [
    { name: "AWS Lambda", icon: "lambda" },
    { name: "AWS Glue", icon: "glue" },
    { name: "Amazon S3", icon: "s3" },
    { name: "Amazon Redshift", icon: "redshift" },
    { name: "Amazon Athena", icon: "athena" },
    { name: "AWS Step Functions", icon: "stepfunctions" },
    { name: "Amazon EMR", icon: "emr" },
    { name: "Amazon Kinesis", icon: "kinesis" },
  ],
  tools: [
    { name: "Docker", icon: "docker" },
    { name: "Terraform", icon: "terraform" },
    { name: "Git", icon: "git" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
  ],
}

export const projects = [
  {
    id: "real-time-pipeline",
    title: "Real-Time Data Pipeline",
    description: "Built a real-time streaming pipeline using Kafka, Spark Streaming, and AWS services to process 1M+ events per day.",
    longDescription: "A comprehensive real-time data processing system that ingests events from multiple sources, processes them in near real-time, and delivers insights to downstream applications.",
    image: "/projects/pipeline.png",
    tags: ["Kafka", "Spark", "AWS Kinesis", "Python"],
    github: "https://github.com/yourusername/realtime-pipeline",
    demo: "",
    featured: true,
  },
  {
    id: "etl-framework",
    title: "Scalable ETL Framework",
    description: "Developed a reusable ETL framework with Airflow and AWS Glue, reducing development time by 60%.",
    longDescription: "A modular ETL framework that standardizes data transformation workflows across the organization.",
    image: "/projects/etl.png",
    tags: ["Airflow", "AWS Glue", "Python", "dbt"],
    github: "https://github.com/yourusername/etl-framework",
    demo: "",
    featured: true,
  },
  {
    id: "data-lakehouse",
    title: "Data Lakehouse on AWS",
    description: "Architected a data lakehouse solution using S3, Glue, and Athena for cost-effective analytics.",
    longDescription: "A modern data lakehouse architecture combining the best of data lakes and data warehouses.",
    image: "/projects/lakehouse.png",
    tags: ["S3", "Glue", "Athena", "Terraform"],
    github: "https://github.com/yourusername/data-lakehouse",
    demo: "",
    featured: true,
  },
  {
    id: "ml-pipeline",
    title: "ML Feature Pipeline",
    description: "Built an automated ML feature engineering pipeline using AWS SageMaker and Step Functions.",
    longDescription: "End-to-end machine learning feature pipeline with automated data validation and monitoring.",
    image: "/projects/ml-pipeline.png",
    tags: ["SageMaker", "Step Functions", "Python"],
    github: "https://github.com/yourusername/ml-pipeline",
    demo: "",
    featured: false,
  },
]

export const experience = [
  {
    company: "Ministry of Communication and Digital Affairs",
    role: "AI Division - Artificial Intelligence Talent Factory",
    period: "Feb 2026 - Present",
    description: "Selected to develop AI solutions for national government programs, contributing to data-driven policymaking and public service optimization.",
    achievements: [
      "Government AI Initiatives: Developing AI solutions for 'Sekolah Rakyat' education project and public service optimization",
      "Poverty & Coastal Mapping: Developing predictive models for poverty mapping in East Java and coastal data analytics for KKP",
      "Evidence-Based Policymaking: Collaborating with Komdigi to integrate cross-sectoral data for strategic regional development",
    ],
  },
  {
    company: "POROS Organization of Open Source, FILKOM UB",
    role: "Cyber Security Division",
    period: "Feb 2025 - Dec 2026",
    description: "Building cybersecurity expertise through peer-led study sessions and managing organizational relations.",
    achievements: [
      "Actively building cybersecurity expertise through peer-led study sessions",
      "Experience and conducted internal CTF competition",
      "Managed relations with other organizations as public relations",
    ],
  },
  {
    company: "Kelompok Riset Mahasiswa (K-RISMA), FILKOM UB",
    role: "Vice Chairperson",
    period: "Mar 2024 - Dec 2024",
    description: "Led research bootcamp initiatives and coordinated academic writing programs for students.",
    achievements: [
      "Led K-RISMA Bootcamp 2025 with 71 participants",
      "Facilitated submission of 4 extended abstracts to CODE International 2024",
      "Contributed to Competition & Development Division conducting internal events",
    ],
  },
]

export const certifications = [
  {
    name: "AWS certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "/certs/aws-sap.png",
  },
  {
    name: "AWS Data Engineering Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "/certs/aws-des.png",
  },
  {
    name: "Databricks Certified Data Engineer",
    issuer: "Databricks",
    date: "2023",
    badge: "/certs/databricks.png",
  },
]


export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]
