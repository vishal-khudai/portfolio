import { motion } from "motion/react";

const ARTWORKS = [
  { id: 1, title: "Fantasy Landscape", src: "https://picsum.photos/seed/art1/800/600" },
  { id: 2, title: "Character Concept", src: "https://picsum.photos/seed/art2/600/800" },
  { id: 3, title: "Sci-Fi Environment", src: "https://picsum.photos/seed/art3/800/800" },
  { id: 4, title: "Weapon Design", src: "https://picsum.photos/seed/art4/800/600" },
  { id: 5, title: "Creature Concept", src: "https://picsum.photos/seed/art5/600/800" },
  { id: 6, title: "UI Elements", src: "https://picsum.photos/seed/art6/800/800" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Artwork <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg">
            A collection of my 2D and 3D artwork, concept designs, and illustrations.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {ARTWORKS.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5"
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {art.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
