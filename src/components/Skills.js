import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [columns, setColumns] = useState(3);
  const sectionRef = useRef(null);

  const skillsData = [
    // Programming Languages
    { name: 'Python', icon: '🐍', level: 90, category: 'programming', desc: 'AI, OpenCV, Data & Scripting' },
    { name: 'C / C++ (Arduino)', icon: '⚙️', level: 92, category: 'embedded', desc: 'ESP32-S3, Microcontrollers, Firmware' },
    { name: 'Java', icon: '☕', level: 85, category: 'programming', desc: 'OOP, Application Architecture' },
    { name: 'JavaScript / HTML / CSS', icon: '🌐', level: 88, category: 'programming', desc: 'Web App & Dashboard Controls' },

    // Hardware & Embedded
    { name: 'ESP32-S3 & IoT', icon: '📟', level: 94, category: 'embedded', desc: 'Embedded Design, Wireless, Protocols' },
    { name: 'Robotics & LQR Control', icon: '🤖', level: 86, category: 'embedded', desc: 'Balance Control, Servo Motors, Actuators' },

    // AI & Vision
    { name: 'YOLOv11 & AI Detection', icon: '🎯', level: 89, category: 'ai', desc: 'Target Tracking, Classification, Inference' },
    { name: 'OpenCV', icon: '👁️', level: 90, category: 'ai', desc: 'Image Processing, Real-time Camera Feeds' },

    // Tools & Infrastructure
    { name: 'Git & GitHub', icon: '🌿', level: 88, category: 'tools', desc: 'Version Control, Collaborative Coding' },
    { name: 'Docker', icon: '🐳', level: 82, category: 'tools', desc: 'Containerization, Microservices' },
    { name: 'Cisco & Computer Networks', icon: '🌐', level: 85, category: 'tools', desc: 'Network Systems & Data Communication' },
    { name: 'Linux OS & Administration', icon: '🐧', level: 84, category: 'tools', desc: 'System Config, Bash, Embedded Linux' },

    // Languages
    { name: 'Thai (Native)', icon: '🇹🇭', level: 100, category: 'language', desc: 'ภาษาไทย (เจ้าของภาษา)' },
    { name: 'English (B1 Level)', icon: '🇬🇧', level: 75, category: 'language', desc: 'Technical reading, writing & communication' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(1);
      } else if (width < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'ทั้งหมด (All)' },
    { id: 'embedded', label: 'Hardware & IoT' },
    { id: 'programming', label: 'Programming' },
    { id: 'ai', label: 'AI & OpenCV' },
    { id: 'tools', label: 'Tools & Network' },
    { id: 'language', label: 'Languages' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0a1a',
        color: '#e2e8f0',
        padding: columns === 1 ? '80px 24px' : '120px 48px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        fontFamily: "'Inter', 'Kanit', sans-serif",
      }}
    >
      {/* Background Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            Capabilities & Technical Stack
          </div>
          <h2
            style={{
              fontSize: columns === 1 ? '2.2rem' : '2.8rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 16px',
            }}
          >
            ทักษะและความสามารถ (Skills)
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            ผสานทักษะด้าน Hardware, Microcontroller (ESP32-S3), การเขียนโปรแกรม C/C++, Python, ระบบเครือข่าย Cisco ตลอดจนเทคโนโลยี AI & Computer Vision
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: isActive ? '1px solid #667eea' : '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: isActive ? 'rgba(102, 126, 234, 0.25)' : 'rgba(255,255,255,0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: "'Inter', 'Kanit', sans-serif",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '24px',
          }}
        >
          {filteredSkills.map((skill, index) => {
            const isHovered = hoveredCard === index;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: isHovered
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 255, 255, 0.035)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: isHovered
                    ? '1px solid rgba(102, 126, 234, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? '0 16px 36px rgba(102, 126, 234, 0.28)'
                    : '0 8px 24px rgba(0, 0, 0, 0.2)',
                  transform: isVisible
                    ? isHovered
                      ? 'translateY(-6px)'
                      : 'translateY(0)'
                    : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(102, 126, 234, 0.15)',
                      border: '1px solid rgba(102, 126, 234, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#667eea',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 6px',
                  }}
                >
                  {skill.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    margin: '0 0 14px',
                    minHeight: '38px',
                    lineHeight: 1.4,
                  }}
                >
                  {skill.desc}
                </p>

                <div
                  style={{
                    width: '100%',
                    height: '7px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '8px',
                      transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
