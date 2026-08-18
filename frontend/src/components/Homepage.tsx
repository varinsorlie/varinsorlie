import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "motion/react";

import { useLanguage } from "./Layout.js";
import { BouncyAvatar } from "./BouncyAvatar.js";

import myImage1 from "../assets/IMG_5190.jpg";
import myImage2 from "../assets/IMG_5274.jpeg";
import myImage3 from "../assets/IMG_4934.jpeg";
import myImage4 from "../assets/IMG_4651.jpeg";

import ExperienceSection from "./Experiencesection.js";
import ProjectsSection from "./Projectsection.js";
import NavBar from "./Navbar.js";
import HeroSection from "./Herosection.js";
import AboutIntro from "./Aboutintro.js";

export default function Home() {
  const { t } = useLanguage();

  const PROFILE_IMAGES = [myImage1, myImage2, myImage3, myImage4];

  const links = [
    { label: t("github"), icon: Github, href: "https://github.com/varinsorlie" },
    { label: t("linkedin"), icon: Linkedin, href: "https://www.linkedin.com/in/v%C3%A5rin-s%C3%B8rlie" },
    { label: t("email"), icon: Mail, href: "mailto:vaarinsor@me.com" },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutIntro />
      <ExperienceSection />
      <ProjectsSection />

      {/* IMAGES */}
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // className="rounded-2xl p-8 sm:p-10 border border-border flex items-center justify-center"
          style={{ background: "var(--background)" }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {PROFILE_IMAGES.map((src, i) => (
              <BouncyAvatar key={i} src={src} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-sm tracking-widest uppercase mb-2"
              style={{ color: "var(--font-color)" }}
            >
              {t("contactEyebrow")}
            </p>
            <h2
              className="font-serif text-3xl mb-4"
              style={{ color: "var(--font-color)" }}
            >
              {t("contactTitle")}
            </h2>
            <p className="text-base text-muted-foreground mb-10">{t("contactBody")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-5 justify-center"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-white items-center gap-2 px-4 py-2.5 border border-border rounded-full text-[0.8rem] tracking-wide text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-muted-foreground">
        {t("footer")}
      </footer>
    </div>
  );
}
