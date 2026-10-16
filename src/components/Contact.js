import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto link
    const mailtoUrl = `mailto:siraphop.ksp@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact from ' + formData.name
    )}&body=${encodeURIComponent(
      `ชื่อผู้ติดต่อ: ${formData.name}\nอีเมล: ${formData.email}\n\nข้อความ:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email (อีเมล)',
      value: 'siraphop.ksp@gmail.com',
      action: 'mailto:siraphop.ksp@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone (เบอร์โทรศัพท์)',
      value: '+66 95 260 1648 (095-260-1648)',
      action: 'tel:+66952601648',
    },
    {
      icon: '📍',
      label: 'Location (ที่อยู่)',
      value: 'แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร 10800',
      action: 'https://maps.google.com/?q=Wongsawang+Bangsue+Bangkok',
    },
    {
      icon: '🎓',
      label: 'University (สถาบันการศึกษา)',
      value: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)',
      action: 'https://www.kmutnb.ac.th',
    },
  ];

  const socials = [
    { icon: '🐙', label: 'GitHub (RaytinaRei)', url: 'https://github.com/RaytinaRei' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '✉️', label: 'Email Direct', url: 'mailto:siraphop.ksp@gmail.com' },
  ];

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: focusedField === field
      ? '2px solid #667eea'
      : '2px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    fontFamily: "'Inter', 'Kanit', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: focusedField === field ? '0 0 20px rgba(102, 126, 234, 0.2)' : 'none',
    boxSizing: 'border-box',
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: '#0a0a1a',
        padding: isMobile ? '80px 24px' : '120px 5%',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Kanit', sans-serif",
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <div
            style={{
              color: '#667eea',
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '8px',
            }}
          >
            Let's Connect
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '12px',
            }}
          >
            ช่องทางการติดต่อ (Contact Me)
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            พร้อมสำหรับการสัมภาษณ์และเริ่มฝึกงานในตำแหน่ง <strong>Hardware / Embedded Systems & Software Engineer</strong> สามารถติดต่อได้ทุกช่องทางครับ
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'flex',
            gap: '50px',
            flexDirection: isMobile ? 'column' : 'row',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          {/* Left - Contact Info */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#e2e8f0', fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>
              ข้อมูลการติดต่อโดยตรง
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.6rem' }}>{info.icon}</span>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '3px' }}>
                      {info.label}
                    </div>
                    <div style={{ color: '#e2e8f0', fontSize: '0.92rem', fontWeight: 500, wordBreak: 'break-word' }}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>
              ลิงก์ผลงาน & เครือข่าย (Socials)
            </h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div style={{ flex: 1.2 }}>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: isMobile ? '24px' : '32px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3 style={{ color: '#e2e8f0', fontSize: '1.25rem', fontWeight: 700, marginBottom: '18px' }}>
                ส่งข้อความติดต่อ (Send Message)
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '18px', flexDirection: isMobile ? 'column' : 'row' }}>
                  <input
                    type="text"
                    placeholder="ชื่อของคุณ / บริษัท (Your Name)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('name')}
                    required
                  />
                  <input
                    type="email"
                    placeholder="อีเมลของคุณ (Your Email)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('email')}
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="หัวข้อ (Subject e.g. เสนอตำแหน่งฝึกงาน / ติดต่องาน)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle('subject')}
                  required
                />
                <textarea
                  placeholder="รายละเอียดข้อความ (Your Message)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  style={{
                    ...inputStyle('message'),
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: '16px 32px',
                    borderRadius: '14px',
                    border: 'none',
                    background: sent
                      ? 'linear-gradient(135deg, #43e97b, #38f9d7)'
                      : 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Inter', 'Kanit', sans-serif",
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    if (!sent) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  {sent ? '✓ เปิดระบบส่งอีเมลแล้ว!' : '🚀 ส่งข้อความ (Send Email)'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
