import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, Award, Target, Handshake, Briefcase } from 'lucide-react';

const collaborations = [
  {
    title: 'Design Summit 2024',
    type: 'Event Organizer',
    description: 'Led visual identity and marketing materials for international design conference',
    icon: Calendar,
    date: '2024',
  },
  {
    title: 'Creative Collective',
    type: 'Founding Member',
    description: 'Co-founded a community of designers focused on collaborative projects',
    icon: Users,
    date: '2022 - Present',
  },
  {
    title: 'Design Awards Jury',
    type: 'Judge',
    description: 'Served as jury member for regional graphic design competition',
    icon: Award,
    date: '2023',
  },
  {
    title: 'Tech Startup Week',
    type: 'Partnership',
    description: 'Brand partner providing design services for emerging startups',
    icon: Handshake,
    date: '2023',
  },
  {
    title: 'Art & Design Workshop Series',
    type: 'Workshop Leader',
    description: 'Monthly workshops teaching brand identity and visual storytelling',
    icon: Target,
    date: '2023 - Present',
  },
  {
    title: 'Freelance Alliance',
    type: 'Member',
    description: 'Active member of professional network connecting creative professionals',
    icon: Briefcase,
    date: '2021 - Present',
  },
];

export default function Organizations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="organizations" className="py-20 relative overflow-hidden">
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
              Organizations & Collaborations
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Events, partnerships, and community initiatives I've been part of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0"
                  >
                    <collab.icon className="text-white" size={28} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{collab.title}</h3>
                      <span className="text-cyan-400 text-sm font-medium whitespace-nowrap ml-2">
                        {collab.date}
                      </span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
                      {collab.type}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {collab.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
