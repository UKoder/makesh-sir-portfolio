import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import './Education.css';

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-description">
            My educational journey in technology and computer science.
          </p>
        </motion.div>

        <div className="education__timeline">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="education__item card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="education__dot" />
              <div className="education__icon">
                <FiBookOpen />
              </div>
              <div className="education__content">
                <h3 className="education__degree">{edu.degree}</h3>
                <div className="education__meta">
                  <span className="education__institution">
                    <FiMapPin />
                    {edu.institution}
                  </span>
                  <span className="education__duration">
                    <FiCalendar />
                    {edu.duration}
                  </span>
                </div>
                <p className="education__description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
