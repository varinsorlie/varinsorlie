import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "no";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navBlog: "Blog",
    navContact: "Contact",

    // Hero
    greeting: "Vårin Sørlie",
    heroStatus: "Open to roles in Oslo",
    subtitle: "Data Scientist | ML | Full-Stack Developer ",
    heroLocation: "Oslo, Norway",
    heroEducation: "MSc Informatics, University of Oslo",
    heroRole: "Data Analyst & Full-Stack Developer",
    intro:
      "I'm a full-stack developer completing an MSc in Informatics (Programming and System Architecture) at the University of Oslo. With experience across development and data science, I'm looking for a data science role where I can combine data analysis with programming skills.",
    heroCtaPrimary: "See my work",
    heroCtaSecondary: "Get in touch",

    // About
    aboutEyebrow: "About",
    aboutTitle: "A little about me",
    aboutBody:
      "Hi, I'm Vårin! I'm currently doing my Master's in Informatics: Programming and System Architecture at the University of Oslo, after finishing my Bachelor's in Informatics: Design, Use and Interaction, also at UiO. I've spent my summers building full-stack products and, most recently, a data science internship at Bane NOR.\n\nThis is my personal website, and I'll be posting both career-related things and plenty of random things I find interesting and fun! Enjoy!",

    // Experience
    experienceEyebrow: "CV",
    experienceTitle: "Experience & education",
    skillsLabel: "Tools & technologies",
    filterAll: "All",
    filterWork: "Work",
    filterEdu: "Education",

    exp1Date: "Jun 2026 — Aug 2026",
    exp1Role: "Data Scientist (Internship)",
    exp1Org: "Bane NOR",
    exp1Desc: "Built a track-incident prediction feature for Oslo S.",

    exp2Date: "Dec 2025 — Present",
    exp2Role: "Co-Founder & Technical Lead",
    exp2Org: "PastPort · Part-time",
    exp2Desc: "Sole technical lead for a 3-person founding team, from UI and database design to the live product.",

    exp3Date: "Aug 2025 — Present",
    exp3Role: "MSc Informatics: Programming and System Architecture",
    exp3Org: "University of Oslo",
    exp3Desc: "Master's degree focused on software architecture and systems programming.",

    exp4Date: "Jun 2025 — Aug 2025",
    exp4Role: "Software Engineer (Internship)",
    exp4Org: "University of Oslo",
    exp4Desc: "Built an award-winning (Utdanningsprisen 2025) interactive educational game, now used by over 600 students annually at UiO.",

    exp5Date: "Aug 2024 — Dec 2024",
    exp5Role: "Exchange Semester",
    exp5Org: "Korea University",
    exp5Desc: "One semester abroad as part of the Bachelor's degree.",

    exp6Date: "Aug 2022 — Jun 2025",
    exp6Role: "BSc Informatics: Design, Use and Interaction",
    exp6Org: "University of Oslo",
    exp6Desc: "Bachelor's degree focused on human-computer interaction and UX design.",

    exp7Date: "Aug 2021 — Jun 2022",
    exp7Role: "History, 1-year course",
    exp7Org: "University of Oslo",
    exp7Desc: "",

    // Projects
    projectsEyebrow: "Projects",
    projectsTitle: "Selected work",

    proj1Title: "PastPort",
    proj1Desc:
      "Co-founded and lead the technical side of PastPort, a cultural-heritage platform, as the team's sole technical member — owning all technical decisions and architecture. Designed the UI in Figma and the database structure, built the React prototype, and built and maintain the organization's website, pastport.no.",

    proj2Title: "UiO Educational Game",
    proj2Desc:
      "An award-winning (Utdanningsprisen 2025) interactive educational game, now used by over 600 students annually at UiO. Designed the UI in Figma, built the full stack with React and Python, created an adaptive task-collector algorithm, and tested against WCAG accessibility principles.",

    proj3Title: "Track-Incident Prediction",
    proj3Desc:
      "A track-incident prediction feature built for Oslo S during a data science internship at Bane NOR, correctly locating 93% of track incidents, using PySpark and Databricks. Analyzed data from multiple sources to surface new patterns for optimizing railway infrastructure, using AI coding assistants to speed up development.",

    viewProject: "Visit site",

    // Contact
    contactEyebrow: "Contact",
    contactTitle: "Let's talk",
    contactBody: "Feel free to reach out about roles, collaborations, or just to say hi.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    footer: "Made with care & caffeine",
  },
  no: {
    // Nav
    navAbout: "Om",
    navExperience: "Erfaring",
    navProjects: "Prosjekter",
    navBlog: "Blogg",
    navContact: "Kontakt",

    // Hero
    greeting: "Vårin Sørlie",
    heroStatus: "Åpen for roller i Oslo",
    subtitle: "Data Scientist | ML | Fullstack-utvikler ",
    heroLocation: "Oslo, Norge",
    heroEducation: "Master i informatikk, Universitetet i Oslo",
    heroRole: "Data Scientist/ML engineer & Fullstack-utvikler",
    intro:
      "Jeg er en fullstack-utvikler som fullfører en mastergrad i informatikk (programmering og systemarkitektur) ved Universitetet i Oslo. Med erfaring fra både utvikling og dataanalyse ønsker jeg meg en rolle innen data science hvor jeg kan kombinere dataanalyse med programmeringskunnskaper.",
    heroCtaPrimary: "Se prosjektene mine",
    heroCtaSecondary: "Ta kontakt",

    // About
    aboutEyebrow: "Om meg",
    aboutTitle: "Litt om meg",
    aboutBody:
      "Hei, jeg heter Vårin! Jeg går for tiden mastergraden i informatikk: programmering og systemarkitektur ved Universitetet i Oslo, etter å ha fullført bachelorgraden min i informatikk: design, bruk og interaksjon, også ved UiO. Somrene mine har gått med til å bygge fullstack-produkter, og sist en sommerjobb som data scientist hos Bane NOR.\n\nDette er min personlige nettside, og jeg kommer til å poste både karriererelevante ting, samt mange tilfeldige ting som jeg synes er interessante og morsomme! Kos deg!",

    // Experience
    experienceEyebrow: "CV",
    experienceTitle: "Erfaring og utdanning",
    skillsLabel: "Verktøy og teknologier",
    filterAll: "Alle",
    filterWork: "Arbeid",
    filterEdu: "Utdanning",

    exp1Date: "Jun 2026 — Aug 2026",
    exp1Role: "Data Scientist (sommerjobb)",
    exp1Org: "Bane NOR",
    exp1Desc: "Bygde en prediksjonsfunksjon for sporhendelser på Oslo S.",

    exp2Date: "Des 2025 — Nå",
    exp2Role: "Medgründer og teknisk leder",
    exp2Org: "PastPort · Deltid",
    exp2Desc: "Teknisk leder i et gründerteam på tre, fra design og database til ferdig produkt.",

    exp3Date: "Aug 2025 — Nå",
    exp3Role: "Master i informatikk: programmering og systemarkitektur",
    exp3Org: "Universitetet i Oslo",
    exp3Desc: "Mastergrad med fokus på systemarkitektur og programmering.",

    exp4Date: "Jun 2025 — Aug 2025",
    exp4Role: "Software Engineer (sommerjobb)",
    exp4Org: "Universitetet i Oslo",
    exp4Desc: "Bygde et prisvinnende (Utdanningsprisen 2025) interaktivt læringsspill, som nå brukes av over 600 studenter årlig ved UiO.",

    exp5Date: "Aug 2024 — Des 2024",
    exp5Role: "Utvekslingssemester",
    exp5Org: "Korea University",
    exp5Desc: "Ett semester i utlandet som del av bachelorgraden.",

    exp6Date: "Aug 2022 — Jun 2025",
    exp6Role: "Bachelor i informatikk: design, bruk og interaksjon",
    exp6Org: "Universitetet i Oslo",
    exp6Desc: "Bachelorgrad med fokus på menneske-maskin-interaksjon og UX-design.",

    exp7Date: "Aug 2021 — Jun 2022",
    exp7Role: "Historie, årsstudium",
    exp7Org: "Universitetet i Oslo",
    exp7Desc: "",

    // Projects
    projectsEyebrow: "Prosjekter",
    projectsTitle: "Utvalgte prosjekter",

    proj1Title: "PastPort",
    proj1Desc:
      "Medgründer og teknisk ansvarlig for PastPort, en plattform for kulturarv, som teamets eneste tekniske medlem — med ansvar for alle tekniske beslutninger og arkitektur. Designet brukergrensesnittet i Figma og databasestrukturen, bygger React-prototypen, og har bygget og vedlikeholder organisasjonens nettside, pastport.no.",

    proj2Title: "Læringsspill for UiO",
    proj2Desc:
      "Et prisvinnende (Utdanningsprisen 2025) interaktivt læringsspill, som nå brukes av over 600 studenter årlig ved UiO. Designet brukergrensesnittet i Figma, bygget hele løsningen med React og Python, laget en adaptiv oppgavesamler-algoritme, og testet mot WCAG-retningslinjer.",

    proj3Title: "Prediksjon av sporhendelser",
    proj3Desc:
      "En prediksjonsfunksjon bygget for Oslo S under en sommerjobb som data scientist hos Bane NOR, som lokaliserte 93 % av sporvekselshendelser korrekt, ved bruk av PySpark og Databricks. Analyserte data fra flere kilder for å finne nye mønstre for å optimalisere jernbaneinfrastrukturen, og brukte KI-verktøy for å øke utviklingshastigheten.",

    viewProject: "Besøk siden",

    // Contact
    contactEyebrow: "Kontakt",
    contactTitle: "La oss ta en prat",
    contactBody: "Ta gjerne kontakt om roller, samarbeid, eller bare for å si hei.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-post",
    footer: "Laget med kjærlighet & espresso",
  },
};

type LanguageContextValue = {
  language: Locale;
  setLanguage: (l: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "no",
  setLanguage: () => {},
  t: (k) => k,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isBirthday = location.pathname === "/birthdayPage";
  const [language, setLanguage] = useState<Locale>(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("language");
    return (stored as Locale) || "no";
  });

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);

  const t = (key: string) => translations[language]?.[key] ?? key;

  return (
   <LanguageContext.Provider value={{ language, setLanguage, t }}>

     {/* BACK BUTTON — only on MapPage */}
     {isBirthday && (
       <div className="fixed top-4 left-4 z-50">
         <Link
           to="/"
           className="flex items-center gap-2 px-4 py-2 bg-background backdrop-blur-sm rounded-full border border-border hover:bg-foreground hover:text-background transition-all"
         >
           <ArrowLeft className="w-4 h-4" />
           <span className="text-sm">Back</span>
         </Link>
       </div>
     )}

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={!isHome ? "pt-16" : ""}
        >
          <Outlet />
        </motion.main>
    </LanguageContext.Provider>
  );
}
