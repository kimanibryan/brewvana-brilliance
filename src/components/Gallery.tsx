import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import grad1 from "@/assets/gallery/grad-1.jpeg";
import grad2 from "@/assets/gallery/grad-2.jpeg";
import grad3 from "@/assets/gallery/grad-3.jpeg";
import grad4 from "@/assets/gallery/grad-4.jpeg";
import grad5 from "@/assets/gallery/grad-5.jpeg";
import grad6 from "@/assets/gallery/grad-6.jpeg";
import grad7 from "@/assets/gallery/grad-7.jpeg";
import barista1 from "@/assets/gallery/barista-1.jpeg";
import barista2 from "@/assets/gallery/barista-2.jpeg";

const galleryImages = [
  { src: barista2, alt: "Student practicing at espresso machine", size: "large" },
  { src: grad1, alt: "Graduate holding diploma", size: "medium" },
  { src: barista1, alt: "Barista with latte art", size: "medium" },
  { src: grad6, alt: "Happy graduate", size: "small" },
  { src: grad3, alt: "Graduate with certificate", size: "small" },
  { src: grad4, alt: "Graduation ceremony", size: "medium" },
  { src: grad2, alt: "Graduate at ceremony", size: "large" },
  { src: grad5, alt: "Male graduate", size: "small" },
  { src: grad7, alt: "Graduate portrait", size: "small" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 bg-accent/10 text-accent">
            Our Community
          </span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Celebrating our graduates and the vibrant community of coffee
            enthusiasts who have trained with us.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bento-item ${
                image.size === "large"
                  ? "col-span-2 row-span-2"
                  : image.size === "medium"
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Gallery image enlarged"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
