import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, gpa: 0 });
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );
  const sectionRef = useRef(null);
  const countStartedRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!countStartedRef.current) {
            countStartedRef.current = true;
            const duration = 1600;
            const startTime = performance.now();

            const targetYears = 4;
            const targetProjects = 10;
            const targetGPA = 2.59;

            const updateCounts = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);

              setCounts({
                years: Math.floor(easeProgress * targetYears),
                projects: Math.floor(easeProgress * targetProjects),
                gpa: (easeProgress * targetGPA).toFixed(2),
              });

              if (progress < 1) {
                requestAnimationFrame(updateCounts);
              } else {
                setCounts({
                  years: targetYears,
                  projects: targetProjects,
                  gpa: targetGPA.toFixed(2),
                });
              }
            };

            requestAnimationFrame(updateCounts);
          }
        }
      },
      { threshold: 0.15 }
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

  const coursework = [
    'Web Application Development',
    'Mobile Application Development',
    'AI-Machine Learning',
    'Image Processing',
    'Cybersecurity',
    'Computer Network Systems & Data Communication',
    'Database Systems',
    'Software Engineering',
    'Microcontroller Systems',
    'Linux OS & Administration',
  ];

  const strengths = [
    'ผสาน Hardware & Software เข้าด้วยกันจากโปรเจกต์จริง',
    'ออกแบบระบบฝังตัว ESP32-S3, Sensors & Microcontroller',
    'เชื่อมต่อระบบเครือข่าย Network และ IoT สู่ Cloud',
    'ประยุกต์ใช้ AI / Computer Vision (YOLOv11, OpenCV)',
    'มีความสามารถในการแก้ปัญหาเฉพาะหน้าและเรียนรู้เร็ว',
    'ทำงานร่วมกับผู้อื่นได้ดี มีทักษะการทำงานเป็นทีม',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: '#f8f9fc',
        color: '#1a202c',
        padding: isMobile ? '80px 24px' : '120px 48px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        fontFamily: "'Inter', 'Kanit', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}>
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
            Get to know me
          </div>
          <h2
            style={{
              fontSize: isMobile ? '2.2rem' : '2.8rem',
              fontWeight: 800,
              color: '#0a0a1a',
              margin: '0 0 12px',
            }}
          >
            เกี่ยวกับฉัน (About Me)
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* 2-Column Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr',
            gap: isMobile ? '40px' : '56px',
            alignItems: 'center',
            marginBottom: '60px',
          }}
        >
          {/* Left Column: Avatar Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                padding: '3px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.25)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '22px',
                  padding: '40px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.35)',
                    color: '#ffffff',
                    fontSize: '3rem',
                    fontWeight: 800,
                  }}
                >
                  ส
                </div>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#0a0a1a',
                    margin: '0 0 6px',
                  }}
                >
                  นายสิรภพ กฤษณภักดิ์
                </h3>
                <div
                  style={{
                    fontSize: '0.95rem',
                    color: '#667eea',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Siraphop Kritsanaphak
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '16px',
                    width: '100%',
                  }}
                >
                  📍 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800<br />
                  ✉️ siraphop.ksp@gmail.com<br />
                  📞 095-260-1648
                </div>
              </div>
            </div>

            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-15px',
                backgroundColor: '#ffffff',
                padding: '10px 20px',
                borderRadius: '14px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#1a202c',
              }}
            >
              <span style={{ color: '#10b981', fontSize: '1.1rem' }}>●</span>
              <span>พร้อมเริ่มฝึกงานทันที (Seeking Internship)</span>
            </div>
          </div>

          {/* Right Column: Bio & Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3
              style={{
                fontSize: isMobile ? '1.3rem' : '1.55rem',
                fontWeight: 800,
                lineHeight: 1.4,
                color: '#0a0a1a',
                margin: 0,
              }}
            >
              นักศึกษาวิศวกรรมคอมพิวเตอร์/อิเล็กทรอนิกส์ ที่ผสานความรู้ Hardware และ Software
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#4a5568', margin: 0 }}>
              ผมเป็นนักศึกษาที่มีความหลงใหลในการเชื่อมโยงโลกกายภาพเข้ากับซอฟต์แวร์ ผ่านโปรเจกต์จริงตั้งแต่การออกแบบระบบฝังตัวบน <strong>ESP32-S3</strong> ไปจนถึงการเชื่อมต่อ <strong>Network, IoT และ AI</strong> เข้ากับระบบฮาร์ดแวร์
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#4a5568', margin: 0 }}>
              มีความสามารถในการแก้ปัญหาเฉพาะหน้า ทำงานร่วมกับผู้อื่นได้ดี และกระตือรือร้นในการเรียนรู้เทคโนโลยีใหม่อย่างรวดเร็ว <strong>ต้องการฝึกงานในสายงาน Hardware และ Software</strong> เพื่อพัฒนาทักษะทางเทคนิคควบคู่กับการทำงานเป็นทีมในโครงการจริง
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '12px',
                marginTop: '10px',
              }}
            >
              {strengths.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#2d3748',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#667eea',
                      flexShrink: 0,
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div style={{ marginBottom: '60px' }}>
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#0a0a1a',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            🎓 ประวัติการศึกษา (Education)
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '24px',
            }}
          >
            {/* KMUTNB */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '28px',
                border: '1px solid rgba(102, 126, 234, 0.25)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                2023 - ปัจจุบัน (Present)
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a1a', margin: '0 0 6px' }}>
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
              </h4>
              <p style={{ color: '#4a5568', fontSize: '0.95rem', margin: '0 0 6px', fontWeight: 500 }}>
                คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์
              </p>
              <div style={{ fontWeight: 700, color: '#764ba2', fontSize: '1.05rem', marginBottom: '14px' }}>
                GPA: 2.59
              </div>

              <div style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 600, marginBottom: '8px' }}>
                รายวิชาสำคัญที่เรียน:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {coursework.map((course, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '8px',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Trang Technical College */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '28px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(118, 75, 162, 0.1)',
                  color: '#764ba2',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                2020 - 2022
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a1a', margin: '0 0 6px' }}>
                วิทยาลัยเทคนิคตรัง (Trang Technical College)
              </h4>
              <p style={{ color: '#4a5568', fontSize: '0.95rem', margin: '0 0 16px', fontWeight: 500 }}>
                ประกาศนียบัตรวิชาชีพ (ปวช.) : ช่างอิเล็กทรอนิกส์
              </p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                ปูพื้นฐานวงจรอิเล็กทรอนิกส์, การวัดและวิเคราะห์วงจร, การประกอบและซ่อมบำรุงอุปกรณ์ฮาร์ดแวร์ ก่อนต่อยอดสู่สายวิศวกรรมคอมพิวเตอร์และระบบสมองกลฝังตัว
              </p>
            </div>
          </div>
        </div>

        {/* 3 Stat Counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '2.4rem' : '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              {counts.years}+ ปี
            </div>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4a5568', margin: 0 }}>
              ประสบการณ์เรียนรู้ด้านอิเล็กทรอนิกส์ & คอมพิวเตอร์
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '2.4rem' : '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              {counts.projects}+
            </div>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4a5568', margin: 0 }}>
              โปรเจกต์ Hardware & Software
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '2.4rem' : '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              {counts.gpa}
            </div>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4a5568', margin: 0 }}>
              เกรดเฉลี่ยสะสม (GPA มจพ.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
