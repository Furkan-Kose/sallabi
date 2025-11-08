import { Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0 font-light">
            © 2025 Sallabi. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://tr.linkedin.com/in/msalihyildirim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:msalihyildirim@rangemedia.com.tr"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="tel:+905423406557"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Phone size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
