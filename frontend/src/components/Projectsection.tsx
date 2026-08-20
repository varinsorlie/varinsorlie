import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "./Layout.js";

import sunset from "../assets/IMG_0638.jpeg";

// Keys map onto matching projNTitle / projNDesc entries in the
// translations dictionary (Layout.tsx).
type Project = {
  key: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    key: "proj1",
    tags: ["React", "Figma", "Product design"],
    href: "https://pastport.no",
  },
  {
    key: "proj2",
    tags: ["React", "Python", "Accessibility"],
  },
  {
    key: "proj3",
    tags: ["Python", "PySpark", "Databricks"],
  },
];

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      // background-attachment: fixed is broken on most mobile browsers
      // (iOS Safari especially) — keep it scroll on phones, fixed from sm: up.
      className="scroll-mt-24 py-20 bg-scroll sm:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), url(${sunset})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: "var(--font-color)", textShadow: "0 1px 24px rgba(255, 255, 255, 0.8)" }}
          >
            {t("projectsEyebrow")}
          </p>
          <h2
            className="font-serif text-3xl mb-10"
            style={{ color: "var(--font-color)", textShadow: "0 1px 24px rgba(255, 255, 255, 0.8)" }}
          >
            {t("projectsTitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl bg-white p-5 border border-border hover:shadow-md transition flex flex-col"
            >
              <h3 className="text-base mb-2">{t(`${project.key}Title`)}</h3>
              <p className="text-xs text-muted-foreground mb-4 flex-grow">
                {t(`${project.key}Desc`)}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.href && (
                <div className="flex gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t("viewProject")}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
