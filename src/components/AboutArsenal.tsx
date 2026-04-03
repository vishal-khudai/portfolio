import { motion } from "motion/react";
import { TOOLS } from "../constants";
import { Sparkles, Box, Image as ImageIcon, Brush, Spline, Sparkles as SparklesIcon, Briefcase, Users, Target, Linkedin, Mail } from "lucide-react";
import { cn } from "../lib/utils";

export function AboutArsenal() {
  const getToolIcon = (iconName: string, color: string) => {
    const props = { className: "w-8 h-8", style: { color } };
    switch (iconName) {
      case "Box": return <Box {...props} />;
      case "Image": return <ImageIcon {...props} />;
      case "Brush": return <Brush {...props} />;
      case "Spline": return <Spline {...props} />;
      case "Sparkles": return <SparklesIcon {...props} />;
      default: return <SparklesIcon {...props} />;
    }
  };

  return (
    <section id="about" className="py-32 px-6 transition-colors duration-500 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left: About / The Story */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 font-black uppercase tracking-widest text-base mb-8 text-accent"
            >
              <Sparkles className="w-6 h-6" />
              <span>The Story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-tight mb-12 italic text-white"
            >
              Technical Artistry <br />
              <span className="text-gradient">& Creative Vision</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-2xl md:text-3xl leading-relaxed text-ink/70"
            >
              <p>
                I'm <span className="text-white font-bold">Vishal Khudai</span>, a passionate Game Artist and Computer Engineer, 
                specializing in both 2D and 3D art at <span className="text-white font-black">The AppGuruz</span>. 
                Since joining in June 2020, I've grown from a Junior Artist into my current role as a <span className="text-accent font-bold">Senior Artist</span>.
              </p>
              <p>
                My background in computer engineering complements my creative work, helping me approach game art 
                with both technical skill and artistic vision. I enjoy collaborating with talented teams, 
                tackling new challenges, and pushing the limits of game design to create captivating visuals.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Briefcase className="w-8 h-8" />, label: "Leadership", desc: "Studio Lead", xp: 95 },
                { icon: <Users className="w-8 h-8" />, label: "Collaboration", desc: "Cross-functional", xp: 90 },
                { icon: <Target className="w-8 h-8" />, label: "Results", desc: "High-quality", xp: 98 },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  className="p-10 cursor-default transition-all rounded-2xl glass border-accent/20 hover:border-accent hover:shadow-lg"
                >
                  <div className="mb-6 p-4 rounded-2xl inline-block text-accent">{item.icon}</div>
                  <div className="font-display font-black mb-3 tracking-widest text-2xl italic text-white">{item.label}</div>
                  <div className="text-sm uppercase tracking-widest font-black mb-6 text-accent-light">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-[120px] rounded-full bg-accent/5" />
            
            <div className="relative grid grid-cols-2 gap-8">
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, index % 2 === 0 ? 3 : -3, 0]
                  }}
                  transition={{ 
                    duration: 5 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="p-12 flex flex-col items-center justify-center text-center transition-all group rounded-2xl glass border-accent/20 hover:border-accent hover:shadow-lg"
                >
                  <div className="mb-8 transform group-hover:scale-125 transition-transform duration-500">
                    {getToolIcon(tool.icon, tool.color || "#fff")}
                  </div>
                  <div className="font-display font-black mb-3 tracking-widest text-3xl italic text-white">{tool.name}</div>
                  <div className="text-sm uppercase tracking-widest font-black text-accent">Mastery</div>
                </motion.div>
              ))}
              
              {/* Extra floating element for visual balance */}
              <motion.div
                animate={{ 
                  y: [0, 30, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -top-16 -right-16 w-32 h-32 flex items-center justify-center hidden lg:flex shadow-2xl transition-all z-10 glass rounded-2xl border-accent-light/30 text-accent-light"
              >
                <Sparkles className="w-14 h-14 text-accent-light" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
