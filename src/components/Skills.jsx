import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiVite, SiWebpack 
} from "react-icons/si";

const skills = [
  { name: 'JavaScript (ES6+)', icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-500" /> },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-400" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: 'Sass', icon: <FaSass size={40} className="text-pink-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-500" /> },
  { name: 'Redux', icon: <SiRedux size={40} className="text-purple-600" /> },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub size={40} className="text-white" /> },
  { name: 'Docker', icon: <FaDocker size={40} className="text-blue-500" /> },
  { name: 'Vite', icon: <SiVite size={40} className="text-purple-400" /> },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                My Tech <span className="text-blue-400">Stack</span>
            </h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                A collection of technologies and tools I use to bring ideas to life, from frontend design to backend logic and deployment.
            </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center text-center group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-sm md:text-base font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
