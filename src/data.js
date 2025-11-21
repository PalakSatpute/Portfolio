import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const personalInfo = {
  name: "Palak Satpute",
  role: "2025 B.Tech Graduate in Aerospace Engineering",
  institution: "IIT Bombay",
  bio: "A 2025 B.Tech graduate from IIT Bombay with a passion for Data Science, Machine Learning, and Analytics. Experienced in building ML models, conducting extensive data analysis, and creating impactful dashboards.",
  email: "satputepalak@gmail.com",
  phone: "+91 6266349667",
  linkedin: "https://www.linkedin.com/in/palaksatputeiitb/",
  github: "https://github.com/Palaksatpute",
  location: "Mumbai, India",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
  education: [
    {
      degree: "B.Tech Aerospace Engineering",
      institution: "IIT Bombay",
      year: "2025",
      details: "99.23 Percentile JEE Mains | Medhavi Scholarship"
    }
  ]
};

export const skills = {
  languages: ["Python", "C++", "SQL", "R"],
  libraries: ["Pandas", "NumPy", "Matplotlib", "scikit-learn"],
  tools: ["Power BI", "Tableau", "Excel", "MySQL", "Jupyter Notebook", "Google Sheets", "LaTeX"],
  aiTools: ["Cursor", "Gemini CLI", "Gemini", "Claude", "Code-Codex", "Framer", "Antigravity"],
  other: ["EDA", "Statistics for ML", "Hypothesis Testing", "Time Series Analysis", "Financial Modeling"]
};

export const experience = [
  {
    role: "AI Marketing Intern",
    company: "Kotak Securities",
    period: "Oct 2025 – Present",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFcSCrA1iIJwA/company-logo_200_200/company-logo_200_200/0/1673509308711/kotaksecurities_logo?e=1765411200&v=beta&t=ZPRVms56P0ZTQ-mFURpWJGpg1F-h84w1_dbwa_4R1Og",
    description: [
      "Building n8n automations for marketing workflows like email writing & lead enrichment reducing manual workload.",
      "Performing LLM grounding with real marketing data & brand guidelines for consistency of AI-generated content.",
      "Conducting Generative Engine Optimization to improve brand visibility in LLMs like Perplexity and ChatGPT."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Symbion Life Science",
    period: "Jun 2024 – Aug 2024",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQElW3rulNoqJQ/company-logo_200_200/company-logo_200_200/0/1701667475452?e=1765411200&v=beta&t=VITurUtPgnwxnLTThr7stHkrGAsIsx3qkKV_XM_w_uE",
    description: [
      "Conducted extensive sector analysis on Indian Oncology Market Value chain scoping landscape for startup needs.",
      "Curated 20k+ latest data points from NFHS, PMJAY, NCRP mapping demographics, geography & cancer types.",
      "Performed Exploratory Data Analysis to uncover insights, identify patterns & inform data-driven decision-making.",
      "Delivered comprehensive data dashboards using Power BI & Tableau for strategic insight into oncology pharma."
    ]
  }
];

export const projects = [
  {
    title: "Python-Based Fraud Detection System",
    tech: ["Python", "Scikit-learn", "SMOTE", "XGBoost"],
    description: "Built ML model to identify fraudulent transactions. Utilized SMOTE to address class imbalance. Deployed Logistic Regression & XGBoost model, achieving 88% recall & 79% precision."
  },
  {
    title: "Geospatial Risk Modelling for Drought Assessment",
    tech: ["Python", "QGIS", "Pandas", "Geopandas", "Rasterio"],
    description: "Conducted district-level drought risk assessment in Rajasthan. Processed and analyzed geospatial datasets. Generated & classified risk maps supporting data-driven disaster management."
  },
  {
    title: "Data-Driven Forecasting of Tesla Stock Prices",
    tech: ["Python", "ARIMA", "Time Series Analysis"],
    description: "Implemented ARIMA model for stock prediction using Trends, Seasonality, Stationarity & Autocorrelation features. Predicted opening price with less than 5% MAPE."
  },
  {
    title: "Netflix Content Analytics and Insights",
    tech: ["SQL", "Data Analysis"],
    description: "Analyzed Netflix’s content across 10,000+ datapoints. Developed SQL queries to rank content production by country, identify niche content, & evaluate actor performances."
  }
];

export const responsibilities = [
  {
    role: "Summer of Science Mentor",
    organization: "Maths & Physics Club, IIT Bombay",
    period: "May-Jul’23, May-Jul’24",
    description: "Mentored students on Aerodynamics, Mechanics & Control Theory, tracked progress via reports & presentations."
  },
  {
    role: "Media Coordinator",
    organization: "E-Cell, IIT Bombay",
    period: "Nov 2022 – Jan 2023",
    description: "Led partnerships with 10+ Instagram influencers and negotiated with 20+ media houses for digital marketing."
  },
  {
    role: "Events and Cultural Coordinator",
    organization: "52nd Mood Indigo, IIT Bombay",
    period: "Sep 2022 - Dec 2022",
    description: "Coordinated workshops with 5+ artists and managed 70+ vendors to enhance the experience of 100K+ visitors."
  }
];

export const achievements = [
  "99.23 Percentile JEE Mains | Medhavi Scholarship",
  "RC Plane Innovation Award (Top 1% out of 400+) | Boeing Techfest Zonal Finalist",
  "NCC 'A', 'B', 'C' Certificate holder | Selected pilot for 2 Mah Engr Regt | Attained 3 Annual Training Camps"
];
