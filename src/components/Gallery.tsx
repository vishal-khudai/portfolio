import { motion } from "motion/react";

const ARTWORKS = [
  { id: 1, src: "https://drive.google.com/thumbnail?id=1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c&sz=w1000" },
  { id: 2, src: "https://drive.google.com/thumbnail?id=1B8y197hGo_LJcJp-0mSEuWpTvTqq0Yru&sz=w1000" },
  { id: 3, src: "https://drive.google.com/thumbnail?id=1SnKpDuZtMR4qo_A2cEZyju6jBz5RNVsg&sz=w1000" },
  { id: 4, src: "https://drive.google.com/thumbnail?id=1nWparle7udiWNgJ-ljz2hZQVdyLktHzu&sz=w1000" },
  { id: 5, src: "https://drive.google.com/thumbnail?id=1-Ftv9Yf-sHJmmHjypG-LRREdwyxew1dw&sz=w1000" },
  { id: 6, src: "https://drive.google.com/thumbnail?id=1HGgfa6edtU3HAfEC4aZpAqYiI1dHtMIT&sz=w1000" },
  { id: 7, src: "https://drive.google.com/thumbnail?id=1gSHeb-U4qkmmQ8dKGy2cjm5RsJQgKtYC&sz=w1000" },
  { id: 8, src: "https://drive.google.com/thumbnail?id=1MXMTU3-kHoW47auWvWYbNr4xN96iKyTI&sz=w1000" },
  { id: 9, src: "https://drive.google.com/thumbnail?id=1qMRSqNTlGMZkc6TxZ-41v4LdsyY-IrNC&sz=w1000" },
  { id: 10, src: "https://drive.google.com/thumbnail?id=1ZhFftHm3tg07sNx_a_aKfIe0AXel_QrY&sz=w1000" },
  { id: 11, src: "https://drive.google.com/thumbnail?id=14AZ37JPTEmnEXvBY9J8NOylI1p3ECGxm&sz=w1000" },
  { id: 12, src: "https://drive.google.com/thumbnail?id=1WEIczLDjrBGeQp8Yac85BVSfA15OO_xP&sz=w1000" },
  { id: 13, src: "https://drive.google.com/thumbnail?id=1wiT-ZObrqX1HNKrW4Jo1jMcB7_XXm37A&sz=w1000" },
  { id: 14, src: "https://drive.google.com/thumbnail?id=1a2Qnfzc3h9fiBptMcvYAx9brshmIes5d&sz=w1000" },
  { id: 15, src: "https://drive.google.com/thumbnail?id=167OlBYEAHowgiihYLRX5Df4x1ShagEdk&sz=w1000" },
  { id: 16, src: "https://drive.google.com/thumbnail?id=1fkM1JEUM9NH7jeegl7yY7sQ0OP8SlA__&sz=w1000" },
  { id: 17, src: "https://drive.google.com/thumbnail?id=15WPs9H1Ttmlwn69qJ2LA_Z6FvoVvRzd0&sz=w1000" },
  { id: 18, src: "https://drive.google.com/thumbnail?id=1IklgtfAeUSaltRxNk8MyUvv8VvRsBeiK&sz=w1000" },
  { id: 19, src: "https://drive.google.com/thumbnail?id=1RJ_mRlDgM60zDepU-tkLLNlig_CSkWvi&sz=w1000" },
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
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5"
            >
              <img
                src={art.src}
                alt={`Artwork ${art.id}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
