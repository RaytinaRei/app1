import React, { useState, useEffect } from 'react';
import profileImg from '../profile.jpg';

const TITLES = [
  'Hardware & Software Developer',
  'Embedded Systems & IoT Engineer',
  'AI & Robotics Enthusiast',
  'Computer & Electronics Engineering @ KMUTNB',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );

  // Typewriter effect
  useEffect(() => {
    let timer = setTimeout(() => {
      const current = loopNum % TITLES.length;
      const fullText = TITLES[current];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(110);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(250);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inject CSS Keyframes
  useEffect(() => {
    const styleId = 'hero-animations-style';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.innerHTML = `
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.15); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.2); }
        }
        @keyframes rotateHex {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes bounceDown {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(12px); }
          60% { transform: translateY(6px); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a1a',
      color: '#e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '120px 24px 80px' : '140px 48px 100px',
      overflow: 'hidden',
      boxSizing: 'border-box',
    },
    orb1: {
      position: 'absolute',
      top: '15%',
      left: '10%',
      width: isMobile ? '240px' : '420px',
      height: isMobile ? '240px' : '420px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(102, 126, 234, 0.35) 0%, rgba(102, 126, 234, 0) 70%)',
      filter: 'blur(60px)',
      animation: 'floatOrb1 14s ease-in-out infinite',
      pointerEvents: 'none',
      zIndex: 1,
    },
    orb2: {
      position: 'absolute',
      bottom: '15%',
      right: '8%',
      width: isMobile ? '260px' : '480px',
      height: isMobile ? '260px' : '480px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(118, 75, 162, 0.35) 0%, rgba(118, 75, 162, 0) 70%)',
      filter: 'blur(70px)',
      animation: 'floatOrb2 16s ease-in-out infinite',
      pointerEvents: 'none',
      zIndex: 1,
    },
    container: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
      alignItems: 'center',
      gap: isMobile ? '48px' : '64px',
    },
    leftContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left',
    },
    greetingBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      borderRadius: '20px',
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
      border: '1px solid rgba(102, 126, 234, 0.25)',
      color: '#667eea',
      fontSize: '0.9rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      marginBottom: '16px',
    },
    badgeDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      boxShadow: '0 0 8px #10b981',
    },
    heading: {
      fontSize: isMobile ? '2.8rem' : '4.2rem',
      fontWeight: 800,
      lineHeight: 1.1,
      margin: '0 0 16px',
      letterSpacing: '-1px',
    },
    gradientName: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    subtitleWrapper: {
      fontSize: isMobile ? '1.35rem' : '1.85rem',
      fontWeight: 600,
      color: '#cbd5e1',
      minHeight: '2.4rem',
      margin: '0 0 20px',
      display: 'flex',
      alignItems: 'center',
    },
    cursor: {
      display: 'inline-block',
      marginLeft: '4px',
      width: '3px',
      height: isMobile ? '1.35rem' : '1.85rem',
      backgroundColor: '#667eea',
      animation: 'blinkCursor 1s step-end infinite',
    },
    tagline: {
      fontSize: isMobile ? '1rem' : '1.15rem',
      lineHeight: 1.7,
      color: '#94a3b8',
      maxWidth: '540px',
      margin: '0 0 36px',
    },
    ctaContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    primaryBtn: {
      padding: '14px 32px',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#ffffff',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    secondaryBtn: {
      padding: '13px 30px',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#e2e8f0',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '2px solid rgba(102, 126, 234, 0.5)',
      borderRadius: '10px',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    rightContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    geometricContainer: {
      position: 'relative',
      width: isMobile ? '280px' : '380px',
      height: isMobile ? '280px' : '380px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    outerRing: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
      border: '2px dashed rgba(102, 126, 234, 0.4)',
      animation: 'rotateHex 24s linear infinite',
    },
    middleRing: {
      position: 'absolute',
      width: '84%',
      height: '84%',
      borderRadius: '50%',
      border: '2px solid transparent',
      background: 'linear-gradient(#0a0a1a, #0a0a1a) padding-box, linear-gradient(135deg, #667eea, #764ba2) border-box',
      animation: 'counterRotate 18s linear infinite',
      boxShadow: '0 0 35px rgba(102, 126, 234, 0.25)',
    },
    innerCore: {
      position: 'relative',
      width: '74%',
      height: '74%',
      borderRadius: '50%',
      backgroundColor: 'rgba(15, 15, 35, 0.85)',
      border: '3px solid rgba(102, 126, 234, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 35px rgba(102, 126, 234, 0.45)',
      overflow: 'hidden',
    },
    iconSymbol: {
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 800,
    },
    coreSubtext: {
      fontSize: '0.85rem',
      fontWeight: 600,
      color: '#94a3b8',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginTop: '6px',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      color: '#94a3b8',
      textDecoration: 'none',
      zIndex: 2,
      transition: 'color 0.2s ease',
    },
    scrollText: {
      fontSize: '0.75rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    arrowIcon: {
      animation: 'bounceDown 2s infinite',
      width: '24px',
      height: '24px',
      color: '#667eea',
    },
  };

  return (
    <section id="home" style={styles.section}>
      {/* Background Floating Orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.container}>
        {/* Left Column: Introductions & CTAs */}
        <div style={styles.leftContent}>
          <div style={styles.greetingBadge}>
            <span style={styles.badgeDot} />
            Seeking Internship: Hardware & Software
          </div>

          <h1 style={styles.heading}>
            สวัสดีครับ, ผม <br />
            <span style={styles.gradientName}>สิรภพ กฤษณภักดิ์</span>
          </h1>

          <div style={styles.subtitleWrapper}>
            <span>{displayText}</span>
            <span style={styles.cursor} />
          </div>

          <p style={styles.tagline}>
            นักศึกษาวิศวกรรมคอมพิวเตอร์/อิเล็กทรอนิกส์ (มจพ.) ที่ผสานความรู้ด้าน <strong>Hardware</strong> และ <strong>Software</strong> เข้าด้วยกันผ่านโปรเจกต์จริง ตั้งแต่ออกแบบระบบฝังตัวบน ESP32-S3 ไปจนถึงเชื่อมต่อ Network, IoT, LQR Robotics และ AI Computer Vision
          </p>

          <div style={styles.ctaContainer}>
            <a
              href="#projects"
              style={styles.primaryBtn}
              onClick={(e) => handleScrollTo(e, 'projects')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 28px rgba(102, 126, 234, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 8px 24px rgba(102, 126, 234, 0.4)';
              }}
            >
              <span>ดูผลงานโปรเจกต์</span>
              <span>→</span>
            </a>

            <a
              href="#contact"
              style={styles.secondaryBtn}
              onClick={(e) => handleScrollTo(e, 'contact')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.backgroundColor =
                  'rgba(102, 126, 234, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                e.currentTarget.style.backgroundColor =
                  'rgba(255, 255, 255, 0.03)';
              }}
            >
              ติดต่อสอบถาม / ติดต่องาน
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image with Decorative Rings */}
        <div style={styles.rightContent}>
          <div style={styles.geometricContainer}>
            <div style={styles.outerRing} />
            <div style={styles.middleRing} />
            <div style={styles.innerCore}>
              <img
                src={profileImg}
                alt="สิรภพ กฤษณภักดิ์"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing Scroll-down indicator */}
      <a
        href="#about"
        style={styles.scrollIndicator}
        onClick={(e) => handleScrollTo(e, 'about')}
        aria-label="Scroll to About section"
      >
        <span style={styles.scrollText}>Scroll</span>
        <svg
          style={styles.arrowIcon}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
