import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.35s ease',
      backgroundColor: isScrolled
        ? 'rgba(10, 10, 26, 0.92)'
        : 'rgba(10, 10, 26, 0.65)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: isScrolled
        ? '1px solid rgba(255, 255, 255, 0.08)'
        : '1px solid rgba(255, 255, 255, 0.03)',
      boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
      boxSizing: 'border-box',
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isScrolled ? '14px 24px' : '20px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'padding 0.35s ease',
      boxSizing: 'border-box',
    },
    logo: {
      fontSize: '1.65rem',
      fontWeight: 800,
      textDecoration: 'none',
      letterSpacing: '-0.5px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      userSelect: 'none',
    },
    logoDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#667eea',
      display: 'inline-block',
      boxShadow: '0 0 10px #667eea',
    },
    navLinksList: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '28px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
    },
    navLink: (isActive, isHovered) => ({
      color: isActive || isHovered ? '#ffffff' : '#a0aec0',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: '8px',
      transition: 'all 0.25s ease',
      display: 'inline-block',
      position: 'relative',
      backgroundColor: isHovered
        ? 'rgba(102, 126, 234, 0.12)'
        : isActive
        ? 'rgba(102, 126, 234, 0.08)'
        : 'transparent',
    }),
    activeIndicator: {
      position: 'absolute',
      bottom: '-2px',
      left: '14px',
      right: '14px',
      height: '2px',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      borderRadius: '2px',
    },
    ctaButton: {
      display: isMobile ? 'none' : 'inline-block',
      padding: '9px 20px',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#ffffff',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      borderRadius: '8px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      boxShadow: '0 4px 14px rgba(102, 126, 234, 0.35)',
    },
    hamburgerButton: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '28px',
      height: '24px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      zIndex: 1001,
    },
    hamburgerLine: (index) => {
      let transform = 'none';
      let opacity = 1;
      if (mobileMenuOpen) {
        if (index === 0) transform = 'rotate(45deg) translate(5px, 6px)';
        if (index === 1) opacity = 0;
        if (index === 2) transform = 'rotate(-45deg) translate(5px, -6px)';
      }
      return {
        width: '100%',
        height: '2.5px',
        backgroundColor: '#e2e8f0',
        borderRadius: '2px',
        transition: 'all 0.3s ease',
        transform,
        opacity,
      };
    },
    mobileDrawer: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '78%',
      maxWidth: '320px',
      height: '100vh',
      backgroundColor: 'rgba(10, 10, 26, 0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '80px 24px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: 1000,
      boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)',
      boxSizing: 'border-box',
    },
    mobileOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(4px)',
      display: mobileMenuOpen ? 'block' : 'none',
      zIndex: 999,
    },
    mobileNavLink: (isActive) => ({
      color: isActive ? '#ffffff' : '#cbd5e1',
      fontSize: '1.15rem',
      fontWeight: 600,
      textDecoration: 'none',
      padding: '12px 16px',
      borderRadius: '8px',
      backgroundColor: isActive ? 'rgba(102, 126, 234, 0.15)' : 'transparent',
      borderLeft: isActive ? '3px solid #667eea' : '3px solid transparent',
      transition: 'all 0.2s ease',
      display: 'block',
    }),
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <a
            href="#home"
            style={styles.logo}
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            Siraphop.K
            <span style={styles.logoDot} />
          </a>

          {/* Desktop Nav Links */}
          <ul style={styles.navLinksList}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;
              return (
                <li key={link.id} style={styles.navItem}>
                  <a
                    href={link.href}
                    style={styles.navLink(isActive, isHovered)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span style={styles.activeIndicator} />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            style={styles.ctaButton}
            onClick={(e) => handleLinkClick(e, '#contact')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 6px 18px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 14px rgba(102, 126, 234, 0.35)';
            }}
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            style={styles.hamburgerButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div style={styles.hamburgerLine(0)} />
            <div style={styles.hamburgerLine(1)} />
            <div style={styles.hamburgerLine(2)} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop Overlay */}
      <div
        style={styles.mobileOverlay}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div style={styles.mobileDrawer}>
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Raytina.
          </span>
          <p style={{ color: '#718096', fontSize: '0.85rem', marginTop: '4px' }}>
            Full Stack Developer
          </p>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            style={styles.mobileNavLink(activeSection === link.id)}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            marginTop: '20px',
            padding: '12px 20px',
            textAlign: 'center',
            color: '#fff',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Get in Touch
        </a>
      </div>
    </>
  );
};

export default Navbar;
