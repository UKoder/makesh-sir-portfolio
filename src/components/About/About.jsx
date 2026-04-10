import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import { personalInfo, projects, skills } from '../../data/portfolioData';
import './About.css';

const stats = [
  { icon: <FiCode />, value: `${projects.length}+`, label: "Projects Built" },
  { icon: <FiCpu />, value: `${Object.values(skills).flat().length}+`, label: "Technologies" },
  { icon: <FiLayers />, value: "1+ Years", label: "Experience" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Get To Know Me</h2>
          <p className="section-description">
            A passionate developer who turns ideas into reality through code.
          </p>
        </motion.div>

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="about__bio card" variants={itemVariants}>
            <h3 className="about__bio-title">
              Who I Am <span className="gradient-text">✦</span>
            </h3>
            {personalInfo.bio.split('\n\n').map((para, i) => (
              <p key={i} className="about__bio-text">{para}</p>
            ))}

          </motion.div>

          <motion.div className="about__stats" variants={itemVariants}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat-card card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="about__stat-icon">{stat.icon}</div>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
