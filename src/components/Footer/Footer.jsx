import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp, FiFacebook } from 'react-icons/fi';
import { personalInfo, socialLinks, navLinks } from '../../data/portfolioData';
import './Footer.css';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  facebook: FiFacebook,
  email: FiMail,
};


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="navbar__logo-bracket">&lt;</span>
              <span className="navbar__logo-name">{personalInfo.firstName}</span>
              <span className="navbar__logo-bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">{personalInfo.title}</p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="footer__nav-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__nav-title">Connect</h4>
            <div className="footer__social-icons">
              {socialLinks.map((link) => {
                const IconComp = socialIcons[link.icon];
                return IconComp ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={link.name}
                  >
                    <IconComp />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {personalInfo.name} — Built with <FiHeart className="footer__heart" /> and React
          </p>

          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="footer__back-to-top"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
