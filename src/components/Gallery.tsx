import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";

const ART_CATEGORIES = ["All", "Assets", "Map", "UI"] as const;

const ARTWORKS = [
  // Assets
  { id: 20, category: "Assets", src: "https://lh3.googleusercontent.com/d/1pHWAlAbLdD6XROSMgyVmCw3p8FGrEC9a" },
  { id: 21, category: "Assets", src: "https://lh3.googleusercontent.com/d/1H3MG5Dw0HVstKNcUWUpZKVGUNiQnFtqY" },
  { id: 22, category: "Assets", src: "https://lh3.googleusercontent.com/d/1_1d9yP7qYycTE5cJS9y9PO757kP0kx93" },
  { id: 23, category: "Assets", src: "https://lh3.googleusercontent.com/d/1kZGW_ZQrYkCpIwa0gvhND73jIwN-ggJ-" },
  { id: 24, category: "Assets", src: "https://lh3.googleusercontent.com/d/1JgZhRrr5k8YuxAFQGajI1-aL-iDHcGlN" },
  { id: 25, category: "Assets", src: "https://lh3.googleusercontent.com/d/1Lb06SMrYl0P-dI9pU9IqI23G8ZFsa_Ul" },
  { id: 26, category: "Assets", src: "https://lh3.googleusercontent.com/d/1WBhoB_ZUHKrpiYmrrkr9KaBX6MEIC2aM" },
  { id: 27, category: "Assets", src: "https://lh3.googleusercontent.com/d/1HH9gPluVI-zG9y-lgE6Zd9VT7t6VX8E8" },
  { id: 28, category: "Assets", src: "https://lh3.googleusercontent.com/d/1QKkWyCPWT3RETpxWdjcK6xcBD--xE8JZ" },
  { id: 29, category: "Assets", src: "https://lh3.googleusercontent.com/d/136mtl88hfmqSdYZpcbr83KvHpGBp6ze-" },
  
  // Map
  { id: 30, category: "Map", src: "https://lh3.googleusercontent.com/d/1gSHeb-U4qkmmQ8dKGy2cjm5RsJQgKtYC" },
  { id: 31, category: "Map", src: "https://lh3.googleusercontent.com/d/1AL6-R6B8Lwsx_dGwSKgN5cxXBPGK2WvZ" },
  { id: 32, category: "Map", src: "https://lh3.googleusercontent.com/d/1MXMTU3-kHoW47auWvWYbNr4xN96iKyTI" },
  { id: 33, category: "Map", src: "https://lh3.googleusercontent.com/d/1qMRSqNTlGMZkc6TxZ-41v4LdsyY-IrNC" },
  { id: 34, category: "Map", src: "https://lh3.googleusercontent.com/d/1ZhFftHm3tg07sNx_a_aKfIe0AXel_QrY" },
  { id: 35, category: "Map", src: "https://lh3.googleusercontent.com/d/14AZ37JPTEmnEXvBY9J8NOylI1p3ECGxm" },
  { id: 36, category: "Map", src: "https://lh3.googleusercontent.com/d/1WEIczLDjrBGeQp8Yac85BVSfA15OO_xP" },
  { id: 37, category: "Map", src: "https://lh3.googleusercontent.com/d/1wiT-ZObrqX1HNKrW4Jo1jMcB7_XXm37A" },
  { id: 38, category: "Map", src: "https://lh3.googleusercontent.com/d/1a2Qnfzc3h9fiBptMcvYAx9brshmIes5d" },
  { id: 39, category: "Map", src: "https://lh3.googleusercontent.com/d/167OlBYEAHowgiihYLRX5Df4x1ShagEdk" },
  { id: 40, category: "Map", src: "https://lh3.googleusercontent.com/d/1fkM1JEUM9NH7jeegl7yY7sQ0OP8SlA__" },
  { id: 42, category: "Map", src: "https://lh3.googleusercontent.com/d/1IklgtfAeUSaltRxNk8MyUvv8VvRsBeiK" },
  { id: 43, category: "Map", src: "https://lh3.googleusercontent.com/d/1RJ_mRlDgM60zDepU-tkLLNlig_CSkWvi" },
  { id: 44, category: "Map", src: "https://lh3.googleusercontent.com/d/1OxO1nLmw3cJz9S7-5kN5NPQ6yrlCrZb0" },
  { id: 45, category: "Map", src: "https://lh3.googleusercontent.com/d/1iKTnFGZo4kkA831CTLeq1rpOcWvzNRMq" },
  { id: 46, category: "Map", src: "https://lh3.googleusercontent.com/d/1MtvF9-LIn9Jlr4fLxn5YQGgBu0L1FiCG" },
  { id: 47, category: "Map", src: "https://lh3.googleusercontent.com/d/1ZnLybGfFed-cibDHBfTDA2Yons6uNN02" },
  { id: 48, category: "Map", src: "https://lh3.googleusercontent.com/d/1mz6jl4B1JHl5D_lUoaKysRpWAA3SCyAQ" },
  { id: 49, category: "Map", src: "https://lh3.googleusercontent.com/d/1jwBhTNS16kT9qrM281O9F4HmBoQXBZGt" },
  { id: 50, category: "Map", src: "https://lh3.googleusercontent.com/d/1gd2McyhbelBJ2znI6Nm6iY6gtVTr-oD7" },
  { id: 51, category: "Map", src: "https://lh3.googleusercontent.com/d/1npKkC4cEmRp_0OU3ZyU_yeoTjG6SMuVv" },
  { id: 52, category: "Map", src: "https://lh3.googleusercontent.com/d/1OKLtdtq1u0wer0LlCb7kX3Y15_xog941" },
  { id: 53, category: "Map", src: "https://lh3.googleusercontent.com/d/11Ud3vnRZwSzp55HhNr27KG7Lct-33y72" },
  { id: 54, category: "Map", src: "https://lh3.googleusercontent.com/d/1-u8mN8c_cANv60z01cNhtAVJCZQm99do" },
  { id: 55, category: "Map", src: "https://lh3.googleusercontent.com/d/1wrK0QbNumI5RkFi1Yr2hneryUaztrwBO" },
  { id: 56, category: "Map", src: "https://lh3.googleusercontent.com/d/1hTDSE-JKk_ukEOcWH-QpX3gmrj8lB7VC" },
  { id: 57, category: "Map", src: "https://lh3.googleusercontent.com/d/1sUlUEfwVKqtK5G7x3cTO4Ce2mTH-xgE4" },
  { id: 58, category: "Map", src: "https://lh3.googleusercontent.com/d/18HPglsFOJNJrOSUdQ-sUIsm7yR1LU5sL" },
  { id: 59, category: "Map", src: "https://lh3.googleusercontent.com/d/1I-gYLx10cKbcL7ee1QtmRcd9VNLy2jhD" },
  { id: 60, category: "Map", src: "https://lh3.googleusercontent.com/d/1A6tjoKI0nmBaioc4nwgNrKmxNoVe5s_r" },
  { id: 61, category: "Map", src: "https://lh3.googleusercontent.com/d/1K4SLPiFdcvmOe-59n94xaQnW2T6opV98" },
  { id: 62, category: "Map", src: "https://lh3.googleusercontent.com/d/1cCqjrlS5jh4nA6HHruYKvSVc2lYJ4SP9" },
  { id: 63, category: "Map", src: "https://lh3.googleusercontent.com/d/1xPV0H_hsYaF185NsebLaWyqyrgfNll3D" },
  { id: 64, category: "Map", src: "https://lh3.googleusercontent.com/d/1rURQwOxFPS1r6ZWA9h-GJQeSbS7eS0NM" },
  { id: 65, category: "Map", src: "https://lh3.googleusercontent.com/d/1OlWJrGUvYzZ05tsekxSo7U555cmTLqVV" },
  { id: 66, category: "Map", src: "https://lh3.googleusercontent.com/d/1kCnM1m2ELdHCnLhIZgNVWrQUXNQfUT5U" },
  { id: 67, category: "Map", src: "https://lh3.googleusercontent.com/d/1Mo-IFlF5d6595trdXvm0PNi0ZfsBGaqJ" },

  // UI
  { id: 69, category: "UI", src: "https://lh3.googleusercontent.com/d/1_vQxVX7SNcqRVoPnKXYIdBG_aydPA0Y1" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<typeof ART_CATEGORIES[number]>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const filteredArt = ARTWORKS.filter(
    (art) => activeCategory === "All" || art.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
            Artwork <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg mb-12">
            A collection of my 2D and 3D artwork, concept designs, and illustrations.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {ART_CATEGORIES.map((category) => (
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
        </motion.div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArt.map((art, index) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 cursor-pointer"
                onClick={() => setSelectedImage(art.src)}
              >
                <img
                  src={art.src}
                  alt={`Artwork ${art.id}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 select-none pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Invisible overlay to prevent right-click/drag on the image itself */}
              <div 
                className="absolute inset-0 z-20 cursor-default" 
                onContextMenu={(e) => e.preventDefault()}
              />
              
              <img
                src={selectedImage}
                alt="Selected Artwork"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none pointer-events-none touch-none"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
