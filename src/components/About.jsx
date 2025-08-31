import { motion } from 'framer-motion';

// Inlined SVG components to resolve import error
const FiBriefcase = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const FiAward = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const FiHeart = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);


const About = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A passionate developer with a knack for creating engaging and user-friendly web experiences. Here's a little more about my journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-300 space-y-6"
          >
            <p>
              Hello! I'm Ojasv Dixit, a Full Stack Developer based in Noida City. My passion for web development started back in college when I built my first static website. Since then, I've been hooked on the process of turning complex problems into beautiful, intuitive, and efficient web applications.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) but I'm always eager to learn new technologies and frameworks to broaden my skillset. My goal is to not only write clean and maintainable code but also to create seamless user experiences that leave a lasting impression.
            </p>
          </motion.div>
          
          {/* Info Cards */}
          <motion.div 
            className="space-y-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.div variants={cardVariants} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg flex items-start gap-4">
              <FiBriefcase className="text-blue-400 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <p className="text-gray-400">1+ Years of professional experience in web development, working with startups and established companies to deliver high-quality products.</p>
              </div>
            </motion.div>
            
            <motion.div variants={cardVariants} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg flex items-start gap-4">
              <FiAward className="text-blue-400 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <p className="text-gray-400">B.Tech. in Computer Science from the Sagar Institute of Science Technology and Engineering, where I graduated with honors and focused on software engineering principles.</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg flex items-start gap-4">
              <FiHeart className="text-blue-400 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-white">Hobbies</h3>
                <p className="text-gray-400">Beyond the screen, I enjoy playing Table Tennis, Volleyball, listening to music and watching movies.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

