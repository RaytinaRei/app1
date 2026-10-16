import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'หน้าแรก (Home)', href: '#home' },
    { name: 'เกี่ยวกับฉัน (About)', href: '#about' },
    { name: 'ทักษะ (Skills)', href: '#skills' },
    { name: 'ผลงาน (Projects)', href: '#projects' },
    { name: 'ติดต่อ (Contact)', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/RaytinaRei' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Email', icon: '📧', url: 'mailto:siraphop.ksp@gmail.com' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#050510',
        color: '#94a3b8',
        padding: '60px 24px 30px',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: "'Inter', 'Kanit', sans-serif",
      }}
    >
      {/* Decorative top gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #667eea, #764ba2, transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Brand / Logo */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              fontSize: '1.8rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px',
              display: 'inline-block',
            }}
          >
            สิรภพ กฤษณภักดิ์ (Siraphop K.)
          </a>
          <p
            style={{
              margin: '8px 0 0',
              fontSize: '0.9rem',
              color: '#64748b',
            }}
          >
            Computer & Electronics Engineering @ King Mongkut's University of Technology North Bangkok
          </p>
        </div>

        {/* Quick Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#667eea')}
              onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            marginTop: '8px',
          }}
        />

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.85rem',
            color: '#64748b',
            textAlign: 'center',
          }}
        >
          © {currentYear} สิรภพ กฤษณภักดิ์. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
