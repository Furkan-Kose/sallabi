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
    <section id="about" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-px bg-white mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎨</div>
                  <p className="text-2xl text-gray-400 font-medium">Creative Designer</p>
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
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Bringing Ideas to Life Through Design
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              I'm a passionate graphic designer with over 8 years of experience in creating
              compelling visual identities and memorable brand experiences. My approach combines
              creativity with strategic thinking to deliver designs that not only look great but
              also achieve business goals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
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
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4"
              >
                <stat.icon className="text-black" size={24} />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
