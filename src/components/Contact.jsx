import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Have a project in mind, a question, or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 p-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input type="text" name="name" id="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows="5" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg"
            >
              <FiSend />
              Send Message
            </motion.button>
          </motion.form>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 mt-8 lg:mt-0"
          >
            <div className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg">
              <FiMail size={24} className="text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Email</h4>
                <p className="text-gray-400">Reach out via email for a quick response.</p>
                <a href="mailto:johndoe@example.com" className="text-blue-400 hover:underline">johndoe@example.com</a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg">
              <FiPhone size={24} className="text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Phone</h4>
                <p className="text-gray-400">Available for calls during business hours.</p>
                <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg">
              <FiMapPin size={24} className="text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Location</h4>
                <p className="text-gray-400">Based in Tech City, USA.</p>
                <p className="text-blue-400">Open to remote opportunities worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
