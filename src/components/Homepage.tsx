import { Link } from "react-router-dom";
import { FileText, Github, Mail, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { allLists } from "./list-data";
import myImage1 from "../assets/IMG_5190.jpg"
import myImage2 from "../assets/IMG_5274.jpeg"
import myImage3 from "../assets/IMG_4934.jpeg"
import myImage4 from "../assets/IMG_4651.jpeg"
import cv from "../assets/cv_march26.pdf"
import { useLanguage } from "./Layout";
import { BouncyAvatar } from "./BouncyAvatar";



export default function Home() {

  const PROFILE_IMAGE = [myImage1, myImage2, myImage3, myImage4]
  
  const { t } = useLanguage();
  const openPdfInNewWindow = (e: any, url: string) => {
    e?.preventDefault();
    const w = window.open("", "_blank");
    if (!w) return;
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Vårin</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>html,body{height:100%;margin:0}iframe{border:0;width:100%;height:100vh}</style>
        </head>
        <body>
          <iframe src="${url}"></iframe>
        </body>
      </html>
    `;
    w.document.open();
    w.document.write(html);
    w.document.close();
  };
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">

        <div className="max-w-xl w-full">
         <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center max-w-xl"
      >
          
                
        <h1
          className="text-[3rem] mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t("greeting")}
        </h1>

        <p className="text-muted-foreground italic mb-10">
           {t("intro")}
        </p>

      {/* Images */}
      <div className="flex justify-center gap-6 mb-16 h-[120px] items-end">
        {PROFILE_IMAGE.map((src, i) => (
          <BouncyAvatar key={i} src={src} />
        ))}
      </div>
      </motion.div>



      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="border-t border-border pt-5 mb-5 text-center">
        </div>
        <p className="text-left text-muted-foreground text-[0.8rem] mb-8 tracking-widest uppercase mb-2">
          {t("curatedLists")}
        </p>
      </motion.div>
    


      {/* RECENT POSTS */}
      <div className="w-full max-w-5xl">
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">

          {allLists.map((list) => (
            <Link
              key={list.slug}
              to={`/${list.slug}`}
              className="group min-w-[200px] rounded-2xl border border-border p-4 hover:shadow-md transition"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-3">
              <img
                src={list.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

              <h3 className="text-sm mb-1">{list.title}</h3>

              <p className="text-xs text-muted-foreground">
                {list.items.length} picks
              </p>

              <span className="inline-block mt-3 text-xl">
                {list.emoji}
              </span>
            </Link>
          ))}

        </div>
      </div>


         
     {/* Quick Links */}
       <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-5 mb-16 pt-5 justify-center"
          >
            {[
              { label: t("Github"), icon: Github, href: "https://github.com/varinsorlie" },
              { label: t("Linkedin"), icon: Linkedin, href: "https://www.linkedin.com/in/vårin-sørlie" },
              { label: t("Email"), icon: Mail, href: "mailto:vaarinso@uio.no" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) =>
                  link.label === "Resume" ? openPdfInNewWindow(e, String(link.href)) : undefined
                }
                target={link.label === "Resume" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-[0.8rem] tracking-wide text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </motion.div>
          {/* Fun sign-off */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 p-6 rounded-xl border border-dashed border-border"
          >
            <p className="text-[0.85rem] text-muted-foreground italic" style={{ lineHeight: 1.7 }}>
              "The best way to know a city is to eat, walk, read, and swim your way through it."
            </p>
            <p className="text-[0.75rem] text-muted-foreground mt-2">
              — Me, justifying my hobbies
            </p>
          </motion.div> */}
        </div>
      {/* </section> */}

      {/* Footer */}
       <footer className="px-6 py-8 text-center">
        <p className="text-[0.75rem] text-muted-foreground">
          {t("footer")}
        </p>
      </footer>

    </div>
  );
}
