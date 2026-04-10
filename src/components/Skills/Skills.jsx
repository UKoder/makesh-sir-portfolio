import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const categoryLabels = {
  languages: "Languages",
  ai_ml: "AI & Machine Learning",
  cloud_devops: "Cloud & DevOps",
  tools: "Tools & Environments",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">My Skills</span>
          <h2 className="section-title">Tech Stack & Tools</h2>
          <p className="section-description">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="skills__categories">
          {Object.entries(skills).map(([key, items]) => (
            <motion.div
              key={key}
              className="skills__category"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              <h3 className="skills__category-title">{categoryLabels[key]}</h3>
              <div className="skills__grid">
                {items.map((skill) => {
                  const IconComp = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className={`skills__card card ${skill.proficient ? 'skills__card--proficient' : ''}`}
                      variants={cardVariants}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skills__icon">
                        <IconComp />
                      </div>
                      <span className="skills__name">{skill.name}</span>
                      {skill.proficient && (
                        <span className="skills__badge">Proficient</span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
