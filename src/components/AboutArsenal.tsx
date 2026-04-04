import { motion } from "motion/react";
import { TOOLS } from "../constants";
import { Sparkles, Box, Image as ImageIcon, Brush, Spline, Sparkles as SparklesIcon, Briefcase, Users, Target, Linkedin, Mail } from "lucide-react";
import { cn } from "../lib/utils";

export function AboutArsenal() {
  const getToolIcon = (icon: string, color: string) => {
    if (icon.startsWith("http")) {
      return (
        <img 
          src={icon} 
          alt="Tool logo" 
          className="w-12 h-12 object-contain" 
          referrerPolicy="no-referrer"
        />
      );
    }

    const props = { className: "w-8 h-8", style: { color } };
    switch (icon) {
      case "Box": return <Box {...props} />;
      case "Image": return <ImageIcon {...props} />;
      case "Brush": return <Brush {...props} />;
      case "Spline": return <Spline {...props} />;
      case "Sparkles": return <SparklesIcon {...props} />;
      default: return <SparklesIcon {...props} />;
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: About / The Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>The Story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black leading-tight mb-12 text-white"
            >
              Technical Artistry <br />
              <span className="text-accent">& Creative Vision</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg md:text-xl leading-relaxed text-ink/60 mb-16"
            >
              <p>
                I'm <span className="text-white font-bold">Vishal Khudai</span>, a passionate Game Artist and Computer Engineer, 
                specializing in both 2D and 3D art at <span className="text-white font-bold">The AppGuruz</span>. 
                Since joining in June 2020, I've grown from a Junior Artist into my current role as a <span className="text-accent font-bold">Senior Artist</span>.
              </p>
              <p>
                My background in computer engineering complements my creative work, helping me approach game art 
                with both technical skill and artistic vision. I enjoy collaborating with talented teams, 
                tackling new challenges, and pushing the limits of game design to create captivating visuals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Briefcase className="w-6 h-6" />, label: "Leadership", desc: "Studio Lead" },
                { icon: <Users className="w-6 h-6" />, label: "Collaboration", desc: "Cross-functional" },
                { icon: <Target className="w-6 h-6" />, label: "Results", desc: "High-quality" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all group backdrop-blur-sm"
                >
                  <div className="mb-6 text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="font-display font-bold text-xl text-white mb-1">{item.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent/60">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Tools Grid */}
          <div className="grid grid-cols-2 gap-6">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all flex flex-col items-center text-center group backdrop-blur-sm"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                  {getToolIcon(tool.icon, tool.color || "#fff")}
                </div>
                <div className="font-display font-bold text-xl text-white mb-1">{tool.name}</div>
                {tool.description && (
                  <div className="text-[10px] text-ink/60 mb-2 px-4">{tool.description}</div>
                )}
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent">Expert</div>
              </motion.div>
            ))}
            
            {/* Floating Sparkle Element */}
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="w-24 h-24 flex items-center justify-center bg-white/5 border border-accent/20 rounded-2xl text-accent shadow-2xl shadow-accent/10 backdrop-blur-sm"
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
