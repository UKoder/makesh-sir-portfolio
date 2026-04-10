import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Hero.css';

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = personalInfo.roles[roleIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    instagram: FiInstagram,
    facebook: FiFacebook,
  };


  return (
    <section className="hero section" id="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.p
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className="hero__role-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="hero__role gradient-text">
                {text}
                <span className="hero__cursor">|</span>
              </span>
            </motion.div>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              Specializing in Gen AI, Java, and Machine Learning to build intelligent automation and scalable software solutions.
              Committed to engineering excellence and innovative problem-solving.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <button className="btn btn-primary" id="hero-view-projects">
                  View Projects
                  <FiArrowDown />
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <button className="btn btn-secondary" id="hero-contact-me">
                  Contact Me
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="hero__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {socialLinks.filter(s => s.icon !== 'email').map((link) => {
                const IconComp = socialIcons[link.icon];
                return IconComp ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={link.name}
                  >
                    <IconComp />
                  </a>
                ) : null;
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero__avatar-ring">
              <div className="hero__avatar-img">
                <img src={personalInfo.profilePic} alt={personalInfo.name} />
              </div>
            </div>
            <div className="hero__avatar-badge">
              <span>🚀</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-wheel" />
            </div>
            <span>Scroll Down</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
