import React, { useState, useEffect, useRef } from 'react';

const projectsData = [
  {
    title: 'หุ่นยนต์สำรวจอาคาร (Building Exploration Robot)',
    period: 'เมษายน 2026 - ปัจจุบัน (April 2026 - Present)',
    subtitle: 'LQR Balance Control, Web Dashboard & Real-time Camera Stream',
    description:
      'หุ่นยนต์เคลื่อนที่เพื่อการสำรวจและตรวจสอบอาคาร ใช้ทฤษฎี LQR (Linear Quadratic Regulator) ในการควบคุมสมดุลและการทรงตัวอย่างแม่นยำ พร้อมพัฒนา Web Dashboard สำหรับสั่งการและบังคับหุ่นระยะไกล ติดตั้งโมดูลกล้องสำหรับดูภาพสดแบบ Real-time และบันทึกภาพสภาพแวดล้อม',
    highlights: [
      'ใช้ LQR ในการควบคุมการทรงตัวของหุ่นยนต์',
      'พัฒนา Web Dashboard ในการบังคับหุ่นให้เคลื่อนที่ระยะไกล',
      'ติดตั้งกล้องสำหรับดูภาพสดแบบ Real-time และบันทึกภาพวิดีโอ',
      'เชื่อมต่อ Microcontroller และสื่อสารผ่านระบบไร้สาย',
    ],
    techs: ['LQR Control', 'Robotics', 'Web Dashboard', 'ESP32 / MCU', 'Camera Stream', 'Python'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '🤖',
    badge: 'Latest Project',
  },
  {
    title: 'ป้อมปืน AI เลือกและติดตามเป้าหมาย (AI Target Tracking Turret)',
    period: 'มกราคม 2024 - มีนาคม 2024 (Jan 2024 - Mar 2024)',
    subtitle: 'YOLOv11 & OpenCV Object Detection with Servo Motor Control',
    description:
      'ระบบป้อมปืนอัจฉริยะที่ใช้เทคโนโลยี Computer Vision ด้วยโมเดลล่าสุด YOLOv11 ทำงานร่วมกับ OpenCV ในการตรวจจับและคัดแยกประเภทเป้าหมาย สามารถล็อคและติดตามเป้าหมายที่เลือกไว้ได้อย่างแม่นยำ พร้อมส่งสัญญาณพัลส์ควบคุม Servo motor เพื่อหันตามเป้าหมายแบบเรียลไทม์',
    highlights: [
      'ใช้โมเดล YOLOv11 ผ่าน OpenCV สำหรับตรวจจับและจำแนกเป้าหมาย',
      'ระบบ Object Tracking ติดตามเป้าหมายที่เลือกแบบ Real-time',
      'คำนวณพิกัดมุมองศาและสั่งการ Servo motor หันติดตามเป้าหมายอัตโนมัติ',
      'ผสานซอฟต์แวร์ Python เข้ากับอุปกรณ์ฮาร์ดแวร์ได้อย่างสมบูรณ์',
    ],
    techs: ['YOLOv11', 'OpenCV', 'Python', 'Servo Motor', 'Computer Vision', 'Hardware Integration'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '🎯',
    badge: 'AI & Hardware',
  },
  {
    title: 'ระบบฝังตัว ESP32-S3 และการเชื่อมต่อ Network IoT',
    period: '2023 - 2024',
    subtitle: 'ESP32-S3 Embedded System Design & Cloud IoT Integration',
    description:
      'การออกแบบและพัฒนาระบบสมองกลฝังตัว (Embedded System) บนชิป ESP32-S3 ผสานการเชื่อมต่อเครือข่าย Network และส่งถ่ายข้อมูลขึ้นระบบ Cloud/IoT เชื่อมต่อเซ็นเซอร์วัดค่าต่างๆ เพื่อตรวจวัดและสั่งการแบบอัตโนมัติ',
    highlights: [
      'ออกแบบวงจรและพัฒนาเฟิร์มแวร์ C/C++ บน ESP32-S3',
      'เชื่อมต่อระบบ Network, Wi-Fi และโพรโทคอลสื่อสาร IoT',
      'ประมวลผลข้อมูลจากเซ็นเซอร์และส่งข้อมูลสู่ Dashboard',
    ],
    techs: ['ESP32-S3', 'C/C++ (Arduino)', 'IoT Protocols', 'Sensors', 'Embedded System'],
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '⚡',
    badge: 'Embedded & IoT',
  },
  {
    title: 'Network & System Administration Infrastructure',
    period: '2023 - 2024',
    subtitle: 'Cisco Routing/Switching, Docker Container & Linux Management',
    description:
      'การจำลองและติดตั้งระบบเครือข่ายคอมพิวเตอร์ตามมาตรฐาน Cisco, การจัดการระบบปฏิบัติการ Linux OS สำหรับเซิร์ฟเวอร์, การทำ Containerization ด้วย Docker และการบริหารจัดการระบบฐานข้อมูล Database Systems',
    highlights: [
      'คอนฟิกูเรชันอุปกรณ์ Network ตามมาตรฐาน Cisco',
      'บริหารจัดการระบบและ Deploy บนสภาพแวดล้อม Linux OS',
      'จัดการสภาพแวดล้อมแอปพลิเคชันด้วย Docker',
    ],
    techs: ['Cisco', 'Docker', 'Linux OS', 'Computer Network', 'Database Systems'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: '🌐',
    badge: 'Infrastructure',
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: '#f8f9fc',
        padding: isMobile ? '80px 24px' : '120px 5%',
        minHeight: '100vh',
        fontFamily: "'Inter', 'Kanit', sans-serif",
      }}
    >
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
          Practical Engineering Work
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: '#1a202c',
            marginBottom: '12px',
          }}
        >
          ผลงานและโปรเจกต์ (Featured Projects)
        </h2>
        <div
          style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '2px',
            margin: '0 auto 16px',
          }}
        />
        <p style={{ color: '#718096', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
          ตัวอย่างโปรเจกต์จริงที่ผสานความรู้ด้าน Hardware, Microcontroller, Control Systems และ AI Computer Vision
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {projectsData.map((project, i) => {
          const isHovered = hoveredCard === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: '#fff',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: isHovered
                  ? '0 20px 50px rgba(0,0,0,0.12)'
                  : '0 8px 30px rgba(0,0,0,0.06)',
                transform: isVisible
                  ? isHovered
                    ? 'translateY(-8px) scale(1.015)'
                    : 'translateY(0) scale(1)'
                  : 'translateY(40px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(226, 232, 240, 0.9)',
              }}
            >
              {/* Image / Banner Area */}
              <div
                style={{
                  height: '180px',
                  background: project.gradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                  color: '#fff',
                }}
              >
                {project.icon}

                {/* Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    display: 'inline-block',
                    color: '#667eea',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  📅 {project.period}
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1a202c', marginBottom: '6px' }}>
                  {project.title}
                </h3>

                <div style={{ color: '#764ba2', fontSize: '0.88rem', fontWeight: 600, marginBottom: '14px' }}>
                  {project.subtitle}
                </div>

                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '18px' }}>
                  {project.description}
                </p>

                {/* Bullet highlights */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    marginBottom: '20px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                    จุดเด่นทางเทคนิค (Technical Highlights):
                  </div>
                  {project.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.84rem',
                        color: '#334155',
                        marginBottom: '4px',
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: '#667eea', fontWeight: 700 }}>•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', marginBottom: '20px' }}>
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#667eea',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href="#contact"
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: '#fff',
                      textAlign: 'center',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      border: 'none',
                    }}
                  >
                    💬 ติดต่อเพื่อสอบถามโปรเจกต์
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
