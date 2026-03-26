import { motion } from "motion/react";
import { ArrowRight, Sparkles, Gamepad2, Palette } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Floating Art Elements (Anti-gravity Showcase) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-64 h-80 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
        >
          <img src="https://picsum.photos/seed/art1/400/600" alt="Game Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[10%] w-72 h-56 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-30 hover:opacity-100 transition-opacity"
        >
          <img src="https://picsum.photos/seed/art2/600/400" alt="Game Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -50, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[15%] right-[5%] w-80 h-60 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
        >
          <img src="https://picsum.photos/seed/art3/600/400" alt="Game Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 35, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[15%] right-[8%] w-56 h-72 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-30 hover:opacity-100 transition-opacity"
        >
          <img src="https://picsum.photos/seed/art4/400/600" alt="Game Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 text-accent text-sm font-medium tracking-wide"
        >
          <Sparkles className="w-4 h-4" />
          <span>Crafting Immersive Digital Worlds</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] mb-12 tracking-tighter"
        >
          <span className="block text-white">VISHAL</span>
          <span className="text-gradient block">KHUDAI</span>
          <span className="block text-accent text-3xl md:text-5xl lg:text-6xl mt-6 tracking-tight font-display font-semibold opacity-90">
            2D & 3D Game Artist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-ink/60 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          Senior Game Artist at <span className="text-white font-medium">The AppGuruz</span>. 
          Blending technical engineering with artistic vision to build 
          immersive digital worlds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative bg-accent hover:bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full text-lg font-semibold text-white glass hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats / Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 gap-12 max-w-2xl mx-auto pb-20"
        >
          <div className="flex flex-col items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-accent" />
            <span className="text-3xl font-display font-bold text-white">10+</span>
            <span className="text-sm uppercase tracking-wider text-ink/60 font-medium">Games Launched</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Palette className="w-8 h-8 text-accent" />
            <span className="text-3xl font-display font-bold text-white">500+</span>
            <span className="text-sm uppercase tracking-wider text-ink/60 font-medium">Assets Created</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
