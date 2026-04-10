import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import './Experience.css';

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            My professional journey and contributions in the software industry.
          </p>
        </motion.div>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="experience__item card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="experience__dot" />
              <div className="experience__icon">
                <FiBriefcase />
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__company gradient-text">{exp.company}</span>
                </div>
                
                <div className="experience__meta">
                  <span className="experience__location">
                    <FiMapPin />
                    {exp.location}
                  </span>
                  <span className="experience__duration">
                    <FiCalendar />
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="experience__description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
