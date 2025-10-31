import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Coffee, Zap } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '8+' },
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Coffee, label: 'Projects Done', value: '300+' },
  { icon: Zap, label: 'Awards Won', value: '12' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎨</div>
                  <p className="text-2xl text-gray-300 font-semibold">Creative Designer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Bringing Ideas to Life Through Design
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate graphic designer with over 8 years of experience in creating
              compelling visual identities and memorable brand experiences. My approach combines
              creativity with strategic thinking to deliver designs that not only look great but
              also achieve business goals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From brand identity to digital design, I specialize in crafting unique visual
              solutions that help businesses stand out in a crowded marketplace. Every project
              is an opportunity to push creative boundaries and exceed expectations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 mb-4"
              >
                <stat.icon className="text-white" size={24} />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
