import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import { Sparkles, ArrowRight, Spline, Box, Brush, Image as ImageIcon, Sparkles as SparklesIcon } from "lucide-react";
import { cn } from "../lib/utils";

const CATEGORIES = ["All", "Merge", "Puzzle & Sort", "Tower Defense", "Idle & Tycoon", "Arcade", "UI/Logos"] as const;

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [shuffledProjects, setShuffledProjects] = useState(PROJECTS);

  useEffect(() => {
    const shuffleArray = (array: typeof PROJECTS) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    
    const lastProjectIds = ["pinball-smash", "idle-cityscape"];
    const regularProjects = PROJECTS.filter(p => !lastProjectIds.includes(p.id));
    const lastProjects = PROJECTS.filter(p => lastProjectIds.includes(p.id));
    
    setShuffledProjects([...shuffleArray(regularProjects), ...lastProjects]);
  }, []);

  const filteredProjects = shuffledProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const getToolIcon = (tool: string) => {
    switch (tool.toLowerCase()) {
      case "blender 3d":
      case "blender": return <Box className="w-3 h-3" />;
      case "adobe photoshop":
      case "photoshop": return <ImageIcon className="w-3 h-3" />;
      case "procreate": return <Brush className="w-3 h-3" />;
      case "affinity designer": return <Spline className="w-3 h-3" />;
      case "generative ai": return <SparklesIcon className="w-3 h-3" />;
      default: return <SparklesIcon className="w-3 h-3" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Game Art Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black leading-tight mb-12"
          >
            Featured <span className="text-accent">Work</span>
          </motion.h2>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold transition-all border uppercase tracking-widest",
                  activeCategory === category
                    ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                    : "bg-transparent border-white/10 text-ink/40 hover:border-white/30 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid (using standard grid for simplicity, but with varying heights if images allow) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden glass border-white/5 hover:border-accent/50 hover:shadow-lg transition-all"
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={`View ${project.title}`}
                  />
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 pointer-events-none z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30 font-mono"
                      >
                        {getToolIcon(tool)}
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors font-display">{project.title}</h3>
                  <p className="text-ink/60 text-sm mb-6 font-mono uppercase tracking-widest">{project.category}</p>
                  {project.link ? (
                    <div className="flex items-center gap-2 text-accent font-bold text-sm transition-colors uppercase tracking-wider font-mono">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <button className="flex items-center gap-2 text-accent font-bold text-sm hover:text-white transition-colors uppercase tracking-wider font-mono pointer-events-auto">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
