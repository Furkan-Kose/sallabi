import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { "name": "yüzyüzeyken konuşuruz", "image": "/references/1.webp" },
  { "name": "damat tween", "image": "/references/2.webp" },
  { "name": "inventist", "image": "/references/3.webp" },
  { "name": "mimar sinan", "image": "/references/4.webp" },
  { "name": "ilhan doğan", "image": "/references/5.webp" },
  { "name": "cahide", "image": "/references/6.webp" },
  { "name": "ogb", "image": "/references/7.webp" },
  { "name": "revy", "image": "/references/8.webp" },
  { "name": "porsche", "image": "/references/9.webp" },
  { "name": "ritmika", "image": "/references/10.webp" },
  { "name": "altum", "image": "/references/11.webp" },
  { "name": "pekin", "image": "/references/12.webp" }
];

export default function BrandReferences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="brands" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Marka Referansları
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Farklı markalar ve yenilikçi şirketler tarafından güvenilmektedir
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/30 group"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-40 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg font-light">
              "Farklı markalarla çalışmak, yaratıcı sürecimi zenginleştirdi ve sektörler arasında çok yönlü tasarım çözümleri geliştirmemi sağladı."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}