import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = Array.from({ length: 12 }, (_, i) => ({
  name: `Brand ${i + 1}`,
  image: `/references/${i + 1}.webp`,
}));

export default function BrandReferences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/30"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-40 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>


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