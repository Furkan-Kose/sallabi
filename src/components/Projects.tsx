import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Projeler
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Yaptığım işbirlikleri ve çalışmalar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:border-white/30 group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base font-light leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
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
              "Her proje, yeni bir hikaye ve farklı bir deneyim. Markalarla kurduğum işbirlikleri, yaratıcılığımı sürekli geliştirmeme olanak tanıyor."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


