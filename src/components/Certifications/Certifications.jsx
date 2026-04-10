import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications, personalInfo } from '../../data/portfolioData';
import './Certifications.css';

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Certifications</span>
          <h2 className="section-title">Achievements & Credentials</h2>
          <p className="section-description">
            Professional certifications and achievements earned along the way.
          </p>
        </motion.div>

        {certifications.length === 0 ? (
          <div className="certifications__empty">
            <motion.div
              className="placeholder-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="placeholder-icon">
                <FiAward />
              </div>
              <h3 className="placeholder-title">Professional Certificates</h3>
              <p className="placeholder-text">
                I've earned various certifications in development, AI, and problem solving. You can view my complete collection of certificates in my Google Drive.
              </p>
              
              {personalInfo.certificatesGDriveLink && (
                <a 
                  href={personalInfo.certificatesGDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary certifications__view-all"
                >
                  <FiExternalLink /> View All Certificates
                </a>
              )}
            </motion.div>
          </div>
        ) : (
          <div className="certifications__grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="certifications__card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <FiAward className="certifications__icon" />
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
