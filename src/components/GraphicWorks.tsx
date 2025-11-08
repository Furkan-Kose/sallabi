"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const works = [
  { image: "/works/13.jpg", video: "/videos/" },
  { image: "/works/15.jpg", video: "/videos/" },
  { image: "/works/17.jpg", video: "/videos/" },
  { image: "/works/19.jpg", video: "/videos/" },
  { image: "/works/21.jpg", video: "/videos/" },
  { image: "/works/22.jpg", video: "/videos/" },
  { image: "/works/24.jpg", video: "/videos/" },
];

export default function GraphicWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="works" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Grafik Çalışmalarım
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Bir dizi illüstrasyon, logo ve yaratıcı tasarım çalışması
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <motion.img
                    src={work.image}
                    alt={`Work ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-medium text-lg">İzle ▶</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          slides={works.map((work) => ({
            type: "video",
            sources: [{ src: work.video, type: "video/mp4" }],
            width: 1280,
            height: 720,
          }))}
          index={lightboxIndex}
          plugins={[Video]}
        />
      )}
    </section>
  );
}
