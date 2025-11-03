import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'msalihyildirim@rangemedia.com.tr', href: 'mailto:msalihyildirim@rangemedia.com.tr' },
  { icon: Phone, label: 'Telefon', value: '+90 542 340 65 57', href: 'tel:+905423406557' },
  { icon: MapPin, label: 'Konum', value: 'İstanbul, Türkiye', href: '#' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            İletişime Geçin
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Bir projeniz mi var? Hadi işbirliği yapalım ve birlikte harika bir şey yaratalım
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">İletişim Bilgileri</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <info.icon className="text-black" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">Neden Benimle Çalışmalısınız?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2 font-light">
                  <CheckCircle className="text-white mt-1 shrink-0" size={18} />
                  <span>Hızlı geri dönüş ve güvenilir iletişim</span>
                </li>
                <li className="flex items-start gap-2 font-light">
                  <CheckCircle className="text-white mt-1 shrink-0" size={18} />
                  <span>Markanıza özel tasarımlar</span>
                </li>
                <li className="flex items-start gap-2 font-light">
                  <CheckCircle className="text-white mt-1 shrink-0" size={18} />
                  <span>Sonsuz revizyon, memnun kalana kadar</span>
                </li>
                <li className="flex items-start gap-2 font-light">
                  <CheckCircle className="text-white mt-1 shrink-0" size={18} />
                  <span>Profesyonel ve yaratıcı yaklaşım</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  formSubmitted
                    ? 'bg-white text-black'
                    : 'bg-white text-black'
                }`}
              >
                {formSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Mesaj Gönderildi!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Mesaj Gönder
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
