import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { testimonials } from '../../data/portfolioData';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-description">
            Feedback from collaborators, mentors, and peers.
          </p>
        </motion.div>

        {testimonials.length === 1 && testimonials[0].name === "Coming Soon" ? (
          <motion.div
            className="placeholder-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="placeholder-icon">
              <FiMessageCircle />
            </div>
            <h3 className="placeholder-title">Coming Soon</h3>
            <p className="placeholder-text">
              Testimonials from colleagues and mentors will be showcased here. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                className="testimonials__card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <p className="testimonials__text">"{t.text}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="testimonials__name">{t.name}</h4>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
