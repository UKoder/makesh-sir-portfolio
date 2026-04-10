import { motion } from 'framer-motion';
import { FiZap, FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { hackathons } from '../../data/portfolioData';
import './Hackathons.css';

function Hackathons() {
  return (
    <section className="hackathons section" id="hackathons">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Hackathons</span>
          <h2 className="section-title">Competitions & Events</h2>
          <p className="section-description">
            Hackathons and coding competitions I've participated in.
          </p>
        </motion.div>

        {hackathons.length === 0 ? (
          <motion.div
            className="placeholder-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="placeholder-icon">
              <FiZap />
            </div>
            <h3 className="placeholder-title">Coming Soon</h3>
            <p className="placeholder-text">
              Hackathon experiences and achievements will be showcased here. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="hackathons__grid">
            {hackathons.map((hack, i) => (
              <motion.div
                key={i}
                className="hackathons__card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="hackathons__header">
                  <span className="hackathons__type">{hack.type}</span>
                  <span className="hackathons__date">
                    <FiCalendar /> {hack.date}
                  </span>
                </div>
                
                <h3 className="hackathons__name">{hack.name}</h3>
                <p className="hackathons__organizer">
                  <FiAward /> {hack.organizer}
                </p>
                
                <p className="hackathons__description">{hack.description}</p>
                
                {hack.certificate && (
                  <a 
                    href={hack.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hackathons__certificate-link"
                  >
                    View Certificate <FiExternalLink />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hackathons;
