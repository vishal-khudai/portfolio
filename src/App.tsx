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
    <div className="relative min-h-screen selection:bg-accent selection:text-bg transition-colors duration-500 bg-bg">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 origin-left z-[60] shadow-2xl bg-accent"
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

      <footer className="py-24 px-6 transition-all relative overflow-hidden border-t border-white/5 bg-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-8 group cursor-default">
            <div className="flex items-center gap-4">
              <div className="bg-accent rounded-xl shadow-accent/20 w-20 h-20 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-2xl">
                <Gamepad2 className="w-12 h-12 text-bg" />
              </div>
              <div className="font-display font-black text-5xl tracking-widest italic text-white">
                <span className="text-accent">VK</span> Studio
              </div>
            </div>
            <p className="text-xl md:text-2xl max-w-sm text-center md:text-left leading-relaxed text-ink/60">
              Elevating the visual standard of casual mobile gaming through 
              artistic vision and technical mastery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 text-sm font-black uppercase tracking-widest text-ink/80">
            {["Home", "Projects", "Gallery", "About", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="transition-all hover:scale-110 relative group/foot hover:text-accent"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="text-xs font-black uppercase tracking-widest px-8 py-4 rounded-2xl text-accent">
              © 2026 VK Studio. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
