import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setTimeout(() => buttonRef.current?.focus(), 0);
    }
  };

  const handleLinkClick = (section, event) => {
    if (isMobile) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
    setActiveLink(section);
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `#${section}`);
    }
  };

  const navContainerStyle = {
    width: "100%",
    backgroundColor: "#D2B48C",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  };

  const navbarStyle = {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#D2B48C",
    color: "#4B3832",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box"
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#4B3832",
    letterSpacing: "1px",
  };

  const linksContainer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    gap: "25px",
    '@media (max-width: 768px)': {
      display: 'none'
    }
  };

  const getLinkStyle = (section) => ({
    textDecoration: "none",
    color: activeLink === section ? "#2F1B12" : "#4B3832",
    fontWeight: activeLink === section ? "800" : "bold",
    fontSize: isMobile ? "18px" : "16px",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
    padding: isMobile ? "12px 20px" : "8px 12px",
    borderRadius: "4px",
    position: "relative",
    ':hover': {
      backgroundColor: "rgba(75, 56, 50, 0.1)",
      transform: isMobile ? 'translateX(5px)' : 'translateY(-2px)'
    },
    ':active': {
      transform: 'scale(0.98)'
    },
    ':focus-visible': {
      outline: '2px solid #4B3832',
      outlineOffset: '2px'
    },
    '::after': activeLink === section ? {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '20%',
      width: '60%',
      height: '2px',
      backgroundColor: '#2F1B12',
      borderRadius: '2px',
      transform: isMobile ? 'scaleX(1.5)' : 'scaleX(1)'
    } : {}
  });

  const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(210, 180, 140, 0.98)',
    padding: isMenuOpen ? '30px 20px' : '0 20px',
    maxHeight: isMenuOpen ? 'calc(100vh - 70px)' : '0',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    zIndex: 999,
    gap: '20px',
    backdropFilter: 'blur(5px)',
    '@media (min-width: 769px)': {
      display: 'flex',
      position: 'static',
      flexDirection: 'row',
      boxShadow: 'none',
      padding: 0,
      maxHeight: 'none',
      overflow: 'visible'
    }
  };

  const burgerButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '15px',
    zIndex: 1001,
    '&:focus': {
      outline: '2px solid #4B3832',
      outlineOffset: '2px',
      borderRadius: '4px'
    }
  };

  const burgerLineStyle = {
    display: 'block',
    width: '25px',
    height: '2px',
    backgroundColor: '#4B3832',
    margin: '4px 0',
    transition: 'all 0.3s ease-in-out',
    transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 5px)' : 'none',
    '&:nth-child(2)': {
      opacity: isMenuOpen ? '0' : '1',
      transform: isMenuOpen ? 'translateX(20px)' : 'none'
    },
    '&:nth-child(3)': {
      transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -5px)' : 'none'
    }
  };

  return (
    <div style={navContainerStyle}>
      <nav style={navbarStyle}>
        <div style={logoStyle}>MOUJAHID Fatima</div>
        
        <button 
          ref={buttonRef}
          style={burgerButtonStyle} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-haspopup="true"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span style={burgerLineStyle}></span>
          <span style={burgerLineStyle}></span>
          <span style={burgerLineStyle}></span>
        </button>

        <div 
          ref={menuRef}
          style={isMobile ? mobileMenuStyle : linksContainer}
          role="navigation"
          aria-label="Menu principal"
        >
          {['accueil', 'apropos', 'competences', 'projets', 'experiences', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              style={getLinkStyle(section)}
              onClick={(e) => handleLinkClick(section, e)}
              aria-current={activeLink === section ? 'page' : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;