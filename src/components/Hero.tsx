import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Gamepad2, Download, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useRef } from "react";
import { useResumeDownload } from "../hooks/useResumeDownload";
import { ResumeTemplate } from "./ResumeTemplate";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resumeRef, downloadResume, isDownloading } = useResumeDownload();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36"
    >
      <ResumeTemplate ref={resumeRef} />
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[150px] rounded-full opacity-20 bg-accent/10" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 blur-[120px] rounded-full opacity-10 bg-accent-light/10" />
      </div>

      {/* Floating Art Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Top Left - Garden */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[15%] left-[5%] w-64 h-80 hidden xl:block"
        >
          <motion.div
            animate={{ 
              x: [0, 15, -10, 0],
              y: [0, -20, 10, 0],
              rotate: [-12, -10, -14, -12]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            <img src="https://play-lh.googleusercontent.com/BTxW1F_ZMAgKN47e2wTZW--h6_OwgiVNS0yKP2N3oRWSu-fvzUQozidaI2Z7gAOcxfdFgF0WRNQevFEIyVhHqw" alt="Merge HomeTown" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        {/* Top Right - Pear Tree */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[20%] right-[5%] w-72 h-56 hidden xl:block"
        >
          <motion.div
            animate={{ 
              x: [0, -15, 10, 0],
              y: [0, 20, -10, 0],
              rotate: [12, 14, 10, 12]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            <img src="https://play-lh.googleusercontent.com/sYzYwjDiL5IgsbyCXLQrNzDOpS3-K5EcO3WKtODu_XRUpLXhwpDXFFrfJBFM6d9JDVCG" alt="Candy Sort" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        {/* Bottom Left - Monk */}
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[15%] left-[8%] w-64 h-80 hidden xl:block"
        >
          <motion.div
            animate={{ 
              x: [0, 10, -15, 0],
              y: [0, -15, 20, 0],
              rotate: [-8, -6, -10, -8]
            }}
            transition={{ 
              duration: 14, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            <img src="https://play-lh.googleusercontent.com/BFQMMEHdWaLcD44XKbJ41yJpERoX70av01lmNt6HGpThyw7jIu6WEgrCLQ5VYj99tMw" alt="Wizard World" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        {/* Bottom Right - Sandwich */}
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-[10%] right-[8%] w-80 h-60 hidden xl:block"
        >
          <motion.div
            animate={{ 
              x: [0, -10, 15, 0],
              y: [0, 15, -20, 0],
              rotate: [15, 13, 17, 15]
            }}
            transition={{ 
              duration: 11, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            <img src="https://play-lh.googleusercontent.com/-FrcJNYIXaoMIMZaFEEBUoYyIIgH8RceoMIiXg1zWDuWJWG-g9gC3_JYy_VldTj_Og" alt="Tales & Dragons" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/40 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-[0.25em] mb-12 shadow-[0_0_20px_rgba(250,204,21,0.1)]"
        >
          <Sparkles className="w-3 h-3" />
          <span>Crafting Immersive Digital Worlds</span>
        </motion.div>

        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter"
          >
            <span className="block text-white">VISHAL</span>
            <span className="block text-accent">KHUDAI</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-accent mt-8 tracking-tight"
          >
            2D & 3D Game Artist
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-ink/60"
        >
          Senior Game Artist at <span className="font-bold text-white">The AppGuruz</span>. Blending technical engineering with artistic vision to build immersive digital worlds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <a
            href="#contact"
            className="px-10 py-5 bg-accent hover:bg-white text-black rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 group shadow-2xl shadow-accent/20"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={downloadResume}
            disabled={isDownloading}
            className="px-10 py-5 bg-white/5 border border-white/10 hover:border-accent/50 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all backdrop-blur-md flex items-center gap-2 disabled:opacity-50"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download Resume
              </>
            )}
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-24 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div className="text-5xl font-display font-black text-white mb-1">10+</div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/40">Games Launched</div>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-5xl font-display font-black text-white mb-1">500+</div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/40">Assets Created</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
