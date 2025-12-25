import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

const Hero = () => {
   const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              // FIX: Changed text color to white to be visible on the dark background
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-blue-400"
              >
                Ojasv Dixit
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Frontend Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              I create responsive, and full-stack web applications using modern technologies. Passionate about clean code, seamless user experiences, and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              {/* FIX: Refactored to motion.a and made responsive */}
              <motion.a
                href="/Ojasv_Dixit_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg"
              >
                <FiDownload />
                View Resume
              </motion.a>

              {/* FIX: Made responsive */}
              <motion.a
                onClick={() => navigate("/contact")}
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-400 hover:text-black transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Ojasvdixit', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ojasv-dixit-a1410b230/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:ojasvdixit1@gmail.com', label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all text-white hover:text-blue-400 hover:bg-white/20"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              {/* FIX: Made image size responsive */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/passport photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
