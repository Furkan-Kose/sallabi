import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = Array.from({ length: 12 }, (_, i) => ({
  name: `Brand ${i + 1}`,
  image: `/references/${i + 1}.png`,
}));

export default function BrandReferences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="brands" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Marka Referansları
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
            <div
              key={brand.name}
              className="rounded-2xl overflow-hidden bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:border-cyan-500/50"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg">
              "Farklı markalarla çalışmak, yaratıcı sürecimi zenginleştirdi ve sektörler arasında çok yönlü tasarım çözümleri geliştirmemi sağladı."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
