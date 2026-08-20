import { motion } from "motion/react";
import { useLanguage } from "./Layout.js";

import grid1 from "../assets/IMG_5010.jpeg";

export default function AboutIntro() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      // background-attachment: fixed is broken on most mobile browsers
      // (iOS Safari especially) — it repaints against the wrong viewport as
      // the browser chrome resizes, causing stretching/jumping. Keep it
      // scroll on phones, fixed (the parallax look) from sm: up.
      className="scroll-mt-24 py-24 border-t border-border bg-scroll sm:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.13)), url(${grid1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8 sm:p-10 border border-border"
          style={{ background: "var(--background)" }}
        >
          <h2
            className="font-serif text-4xl sm:text-5xl leading-tight mb-10"
            style={{ color: "var(--font-color)", textShadow: "0 1px 24px rgba(255, 255, 255, 0.8)" }}
          >
            {t("aboutTitle")}
          </h2>
          <div className="space-y-4">
            {t("aboutBody")
              .split("\n\n")
              .map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
