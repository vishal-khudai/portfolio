import { motion } from "motion/react";
import { TOOLS } from "../constants";
import { Sparkles, Box, Image as ImageIcon, Brush, Spline, Sparkles as SparklesIcon, Briefcase, Users, Target, Linkedin, Mail } from "lucide-react";

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
    <section id="about" className="py-24 px-6 bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: About / The Story */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4 font-mono"
            >
              <Sparkles className="w-4 h-4" />
              <span>The Story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8"
            >
              Technical Artistry <br />
              <span className="text-gradient">& Creative Vision</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-ink/70 text-lg leading-relaxed"
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

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Briefcase className="w-5 h-5" />, label: "Leadership", desc: "Studio Lead" },
                { icon: <Users className="w-5 h-5" />, label: "Collaboration", desc: "Cross-functional" },
                { icon: <Target className="w-5 h-5" />, label: "Results", desc: "High-quality" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(250, 204, 21, 0.05)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl glass border-accent/20 cursor-default hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="text-accent mb-3">{item.icon}</div>
                  <div className="font-bold text-white mb-1 font-display tracking-wider">{item.label}</div>
                  <div className="text-xs text-accent-light uppercase tracking-widest font-mono">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Arsenal / Technical Proficiency */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />
            
            <div className="relative grid grid-cols-2 gap-6">
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0]
                  }}
                  transition={{ 
                    duration: 4 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="p-8 rounded-2xl glass border-accent/20 flex flex-col items-center justify-center text-center hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="mb-4">
                    {getToolIcon(tool.icon, tool.color || "#fff")}
                  </div>
                  <div className="font-display font-bold text-white mb-1 tracking-wider">{tool.name}</div>
                  <div className="text-[10px] text-accent uppercase tracking-widest font-mono">Expert</div>
                </motion.div>
              ))}
              
              {/* Extra floating element for visual balance */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-24 h-24 glass rounded-2xl flex items-center justify-center border-accent-light/30 hidden lg:flex shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-accent-light" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
