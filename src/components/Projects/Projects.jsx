import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of projects I've built to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="projects__card card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="projects__card-header">
                <div className="projects__card-icon">
                  <FiFolder />
                </div>
                <div className="projects__card-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub />
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>

              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="projects__tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
