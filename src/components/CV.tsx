import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Download, Award, Code } from 'lucide-react';

const experience = [
  {
    title: 'Kurucu',
    company: 'Range Media',
    period: '2022 - Günümüz',
    description: '- Prodüksiyon ajansını kurup yönettim; marka kimliği, grafik tasarım, video prodüksiyon ve dijital içerik üretimi alanlarında hizmet verdim.\n- Sosyal medya kampanyaları, web tasarımı ve kurumsal kimlik projelerinde ekip liderliği yaptım.\n- Yerel ve ulusal markalarla kreatif projeler geliştirdim.',
  },
  {
    title: 'Grafik Tasarımcı',
    company: 'Freelance',
    period: '2019 - 2022',
    description: '- Logo tasarımı, tipografi, illüstrasyon ve UI/UX projelerinde bireysel ve kurumsal müşterilerle çalıştım.\n- Adobe Creative Cloud araçlarını aktif olarak kullandım.',
  },
];

const education = [
  {
    degree: 'Grafik Tasarım (Lisans)',
    school: 'Doğuş Üniversitesi – Sanat ve Tasarım Fakültesi',
    period: '2021 - 2025',
    description: '- Bitirme Projesi: Grafik Tasarım Uygulamaları ve Dijital Portfolyo\n- GNO: 2.77',
  },
];

const projects = [
  'Kurumsal Kimlik Tasarımları',
  'Video Prodüksiyonu',
  'UI/UX Tasarım',
];

const tools = [
  'Adobe Photoshop',
  'Illustrator',
  'Midjourney',
  'After Effects',
  'Premiere Pro',
  'Meta Business Suite ',
  'Google Veo3',
  'Kling',
  'Flux',
];

export default function CV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="cv" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Özgeçmiş
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 font-light">
            Mesleki geçmiş ve yeterlilikler
          </p>
          <motion.button
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transition-all"
          >
            <Download size={20} />
            CV İndir
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Briefcase className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Deneyim</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-white/20 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white" />
                  <div className="text-gray-300 text-sm font-medium mb-1">{exp.period}</div>
                  <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{exp.title}</h4>
                  <div className="text-gray-300 font-medium mb-2">{exp.company}</div>
                  <p className="text-gray-400 text-sm whitespace-pre-line font-light">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <GraduationCap className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Eğitim</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-white/20 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white" />
                  <div className="text-gray-300 text-sm font-medium mb-1">{edu.period}</div>
                  <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{edu.degree}</h4>
                  <div className="text-gray-300 font-medium mb-2">{edu.school}</div>
                  <p className="text-gray-400 text-sm whitespace-pre-line font-light">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Award className="text-black" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Projeler</h3>
            </div>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <motion.li
                  key={project}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-2 text-gray-300 font-light"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  {project}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Code className="text-black" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Araçlar</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
