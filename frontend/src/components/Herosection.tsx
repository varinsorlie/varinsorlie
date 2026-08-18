import { motion } from "motion/react";
import { ArrowRight, ChevronDown, MapPin, BookOpen, Code2 } from "lucide-react";
import { useLanguage } from "./Layout.js";

import heroPhoto from "../assets/IMG_4651.jpeg";
import grid1 from "../assets/IMG_5010.jpeg";
import grid4 from "../assets/sno.jpeg";

export default function HeroSection() {
  const { t } = useLanguage();

  // HashRouter owns the URL hash, so a plain href="#projects" would be read
  // as a route change to "/projects" instead of an in-page scroll — scroll
  // manually and keep the router out of it.
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="scroll-mt-24 pt-16 pb-20" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8FCBA6]" />
              <span className="text-sm text-muted-foreground">{t("heroStatus")}</span>
            </div>

            <h1
              className="text-left font-serif text-[2.75rem] sm:text-[3.75rem] leading-[1.05] mb-4"
              style={{ color: "var(--font-color)" }}
            >
              {t("greeting")}
            </h1>

            <p
              className="text-left text-lg sm:text-xl font-medium mb-6"
              style={{ color: "var(--font-color)" }}
            >
              {t("subtitle")}
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground">{t("heroLocation")}</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground">{t("heroEducation")}</p>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground">{t("heroRole")}</p>
              </div>
            </div>

            {/* <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
              {t("intro")}
            </p> */}

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToId(e, "projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition hover:opacity-90"
                style={{ background: "var(--font-color)", color: "var(--background)" }}
              >
                {t("heroCtaPrimary")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToId(e, "contact")}
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-border bg-white hover:bg-background transition"
              >
                {t("heroCtaSecondary")}
              </a>
            </div>
          </motion.div>

          {/* RIGHT: photo grid */}
          <div className="columns-2 gap-4 space-y-4">
            <div className="break-inside-avoid">
              <img src={grid1} alt="Jomfruslettfjell, Norway" className="w-full h-auto object-cover" />
              <p className="text-sm text-muted-foreground mt-2">Jomfruslettfjell, Norway</p>
            </div>

            <div className="break-inside-avoid">
              <img src={heroPhoto} alt="Vårin Sørlie" className="w-full h-auto object-cover" />
            </div>

            <div className="break-inside-avoid">
              <img src={grid4} alt="Gjøvik, Norway" className="w-full h-auto object-cover" />
              <p className="text-sm text-muted-foreground mt-2">Gjøvik, Norway</p>
            </div>
          </div>
        </div>

        <motion.a
          href="#about"
          onClick={(e) => scrollToId(e, "about")}
          aria-label="Scroll down"
          className="flex justify-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
}
