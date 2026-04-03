import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Gamepad2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-500 bg-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] rounded-full animate-pulse bg-accent/10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full animate-pulse delay-1000 bg-accent-light/10" />
      </div>

      {/* Floating Art Elements (Parallax Showcase) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-[10%] left-[5%] w-64 h-80 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
        >
          <img src="https://play-lh.googleusercontent.com/BTxW1F_ZMAgKN47e2wTZW--h6_OwgiVNS0yKP2N3oRWSu-fvzUQozidaI2Z7gAOcxfdFgF0WRNQevFEIyVhHqw" alt="Merge HomeTown" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[10%] left-[10%] w-72 h-56 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-30 hover:opacity-100 transition-opacity"
        >
          <img src="https://play-lh.googleusercontent.com/nz4cBSiLfZK_gndFVvh6TP_Oda_SXd6fBBgpCnhctOWW6gesfU2qtsxP5Zv3flAw3S0T1ABhwa1G8YnaUEJu" alt="Call of Legends" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          style={{ y: y3, rotate: -rotate }}
          className="absolute top-[15%] right-[5%] w-80 h-60 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-40 hover:opacity-100 transition-opacity"
        >
          <img src="https://play-lh.googleusercontent.com/-FrcJNYIXaoMIMZaFEEBUoYyIIgH8RceoMIiXg1zWDuWJWG-g9gC3_JYy_VldTj_Og" alt="Tales & Dragons" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-[15%] right-[8%] w-56 h-72 glass rounded-2xl overflow-hidden shadow-xl hidden lg:block opacity-30 hover:opacity-100 transition-opacity"
        >
          <img src="https://play-lh.googleusercontent.com/jnAdtgmG3F-HmhNmZnboA6HOqZKnyfa8T1Dxf1_lgworr5JEjR-NRWu1mq8JzWIDr5U" alt="Merge Fever" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border mb-10 text-sm font-black tracking-widest uppercase border-accent/30 bg-accent/10 text-accent"
        >
          <Sparkles className="w-5 h-5 text-accent" />
          <span>Crafting Immersive Digital Worlds</span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[14rem] font-display font-black leading-[0.75] mb-16 tracking-tighter"
          >
            <span className="block text-white">VISHAL</span>
            <span className="block relative text-gradient">
              KHUDAI
            </span>
          </motion.h1>
          <motion.span className="block text-3xl md:text-5xl lg:text-6xl mt-6 tracking-tight font-display font-semibold opacity-90 text-accent">
            2D & 3D Game Artist
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl max-w-4xl mx-auto mb-20 leading-relaxed text-ink/60 font-light"
        >
          Senior Game Artist at <span className="font-black text-white">The AppGuruz</span>. <br />
          Building <span className="text-white">high-polish</span> mobile game experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="#contact"
            className="game-btn px-14 py-7 text-3xl flex items-center gap-3 bg-accent hover:bg-white text-black rounded-full font-semibold"
          >
            Start Quest
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1QJIh-hRWU6A6aTlogyBje6COFJj-EPRR"
            className="game-btn px-14 py-7 text-3xl flex items-center gap-3 text-white border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-accent/50 shadow-lg rounded-full font-semibold"
          >
            Quest Log
          </a>
        </motion.div>
      </div>
    </section>
  );
}
