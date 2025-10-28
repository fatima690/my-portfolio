import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={contactInfoStyle}>
          <h3 style={headingStyle}>Contactez-moi</h3>
          <p style={textStyle}>
            <FaEnvelope style={iconStyle} />
            <a href="mailto:moujahidfatima838@gmail.com" style={linkStyle}>
              moujahidfatima838@gmail.com
            </a>
          </p>
          <p style={textStyle}>
            <FaPhone style={iconStyle} />
            <a href="tel:+212 690042191" style={linkStyle}>
              +212 6 90 04 21 91
            </a>
          </p>
        </div>
        
        <div style={socialLinksStyle}>
          <a 
            href="https://www.linkedin.com/in/fatima-moujahid-58847a240/"
            target="_blank" 
            rel="noopener noreferrer"
            style={socialLinkStyle}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/fatima690" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialLinkStyle}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
        
        <p style={copyrightStyle}>
          © {new Date().getFullYear()} MOUJAHID Fatima. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: '#4B3832',
  color: '#F5F5F5',
  padding: '3rem 1rem',
  marginTop: '3rem',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
};

const contactInfoStyle = {
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '1.8rem',
  marginBottom: '1.5rem',
  color: '#D2B48C',
  fontWeight: '600',
};

const textStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  margin: '1rem 0',
  fontSize: '1.1rem',
};

const iconStyle = {
  color: '#D2B48C',
};

const linkStyle = {
  color: '#F5F5F5',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  ':hover': {
    color: '#D2B48C',
  },
};

const socialLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
  marginTop: '1rem',
};

const socialLinkStyle = {
  color: '#F5F5F5',
  transition: 'color 0.3s ease',
  ':hover': {
    color: '#D2B48C',
  },
};

const copyrightStyle = {
  marginTop: '2rem',
  fontSize: '0.9rem',
  color: '#D2B48C',
  textAlign: 'center',
};

export default Footer;
