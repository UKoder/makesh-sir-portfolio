import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiInstagram, FiCheck, FiAlertCircle, FiFacebook } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Contact.css';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  facebook: FiFacebook,
  email: FiMail,
};


function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // To make this work:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create a service, template, and get your public key
    // 3. Replace the placeholder strings below with your actual IDs

    import('@emailjs/browser').then((emailjs) => {
      emailjs.sendForm(
        'service_0vizhat', // e.g., 'service_abc123'
        'template_uo01nfm', // e.g., 'template_xyz456'
        formRef.current,
        'PwIHAw4h4bkhP0ZO2' // e.g., 'user_789...'
      )
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setIsSending(false);
          setTimeout(() => setStatus(null), 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setIsSending(false);
          setTimeout(() => setStatus(null), 5000);
        });
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact__info-card card">
              <h3 className="contact__info-title">
                Let's connect <span className="gradient-text">✦</span>
              </h3>
              <p className="contact__info-text">
                Whether it's a collaboration, job opportunity, or just a conversation about tech —
                feel free to reach out. I'm always open to connecting with fellow developers
                and technology enthusiasts.
              </p>

              <div className="contact__social-links">
                {socialLinks.map((link) => {
                  const IconComp = socialIcons[link.icon];
                  return IconComp ? (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-item"
                    >
                      <div className="contact__social-icon">
                        <IconComp />
                      </div>
                      <div className="contact__social-details">
                        <span className="contact__social-name">{link.name}</span>
                        <span className="contact__social-handle">
                          {link.icon === 'email' ? personalInfo.email : link.url.split('/').pop()}
                        </span>
                      </div>
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              ref={formRef}
              className="contact__form card"
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <div className="contact__field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                id="contact-submit-btn"
                disabled={isSending}
              >
                {isSending ? (
                  <>Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

              {status && (
                <motion.div
                  className={`contact__status contact__status--${status}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status === 'success' ? (
                    <><FiCheck /> Message sent successfully!</>
                  ) : (
                    <><FiAlertCircle /> Something went wrong. Please try again.</>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
