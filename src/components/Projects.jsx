import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'MediTrack Platform',
      description: 'A comprehensive platform that allows patients to book appointments with doctors, featuring seamless video calling for remote consultations and an admin dashboard for efficient management.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
      liveUrl: 'https://meditrack-frontend.onrender.com/',
      githubUrl: 'https://github.com/Ojasvdixit/MediTrack'
    },
    {
      title: 'TextMania Website',
      description: 'A user-friendly website offering various tools to help students, writers, and professionals analyze, edit, and convert text efficiently.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ReactJS', 'Bootstrap'],
      liveUrl: 'https://textmania-clinet.onrender.com/',
      githubUrl: 'https://github.com/Ojasvdixit/TextMania'
    },
   {
  title: 'Rock Paper Scissors Game',
  description: 'An interactive Rock Paper Scissors game built with Javascript, featuring a sleek design and engaging gameplay.',
  image: 'https://via.placeholder.com/800x500?text=Rock+Paper+Scissors+Game', // ✅ dummy placeholder
  technologies: ['Javascript', 'CSS'],
  liveUrl: 'https://rock-paper-scissor-theta-pink.vercel.app/',
  githubUrl: 'https://github.com/Ojasvdixit/Rock_Paper_Scissor'
}

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* FIX: Adjusted grid columns for better responsiveness with 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10 hover:border-white/20 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                      <FiExternalLink size={20} />
                    </motion.a>
                    <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                      <FiGithub size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-4">
                  {/* FIX: Changed condition from '#1' to '#' for proper placeholder check */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#60a5fa' }}
                      className="text-gray-300 transition-colors"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                  
                  {/* FIX: Changed condition from '#1' to '#' for proper placeholder check */}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#60a5fa' }}
                      className="text-gray-300 transition-colors"
                    >
                      <FiGithub size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ojasvdixit" // You can link this to your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
          >
            <FiCode />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;