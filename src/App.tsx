import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectGallery } from "./components/ProjectGallery";
import { Gallery } from "./components/Gallery";
import { AboutArsenal } from "./components/AboutArsenal";
import { Contact } from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";
import { Gamepad2 } from "lucide-react";
import { cn } from "./lib/utils";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-bg transition-colors duration-500">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] shadow-2xl bg-accent"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative">
        <Hero />
        <ProjectGallery />
        <Gallery />
        <AboutArsenal />
        <Contact />
      </main>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-accent rounded-lg w-10 h-10 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-black" />
              </div>
              <div className="font-display font-black text-xl text-white tracking-tight">
                VK Studio
              </div>
            </div>
            <p className="text-sm max-w-xs text-center md:text-left text-ink/40 leading-relaxed">
              Elevating the visual standard of casual mobile gaming through 
              artistic vision and technical mastery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-white">
            {["Home", "Projects", "Gallery", "About", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="transition-all hover:text-accent"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            © 2026 VK STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
