import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectGallery } from "./components/ProjectGallery";
import { Gallery } from "./components/Gallery";
import { AboutArsenal } from "./components/AboutArsenal";
import { Contact } from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";
import { Gamepad2 } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-bg">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <ProjectGallery />
        <Gallery />
        <AboutArsenal />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 group cursor-default">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
                <Gamepad2 className="text-bg w-6 h-6" />
              </div>
              <div className="font-display font-bold text-2xl tracking-tight">
                <span className="text-accent">VK</span> <span className="text-white">Studio</span>
              </div>
            </div>
            <p className="text-ink/60 text-sm max-w-xs text-center md:text-left">
              Elevating the visual standard of casual mobile gaming through 
              artistic vision and technical mastery.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-ink/80">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="text-accent text-xs font-mono uppercase tracking-widest">
            © 2026 VK Studio. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
