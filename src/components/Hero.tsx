import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white"
    >

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-24 pt-32 md:py-32 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Sallabi
          </h1>
          <div className="w-24 h-px bg-white mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 
                            flex flex-col items-center justify-center text-center 
                            h-60 md:h-[340px] p-8 md:p-14">
              <div className="text-6xl md:text-7xl mb-3">🎨</div>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Creative Designer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ben Kimim?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Merhaba, ben Muhammet Salih Yıldırım. Doğuş Üniversitesi Grafik tasarım mezunuyum ve uzun süredir tasarım, video ve sosyal medya içerikleri üretiyorum. Üretmeyi, bir şeyleri ortaya çıkarmayı ve görsel olarak iyi hissettiren işler yapmayı seviyorum.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-white/50" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
