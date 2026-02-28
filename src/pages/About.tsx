import Card from '../components/Card';
import profileImg from '../assets/profile.jpg'; 

export default function About() {
  return (
    <div className="page-wrapper animate-fade-in">

      {/* LEFT COLUMN: LeetCode Profile */}
      <div className="side-profile">
        <div className="profile-card leetcode">
          <h3 style={{ color: '#ffa116', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            LeetCode
          </h3>
          
          <div className="stat-row">
            <span>Problems Solved</span>
            <strong>500+</strong>
          </div>
          <div className="stat-row">
            <span>Solutions Published</span>
            <strong>60+</strong>
          </div>
          <div className="stat-row">
            <span>Solution Views</span>
            <strong>3k+</strong>
          </div>

          <a 
            href="https://leetcode.com/u/akulchauhan2009034/" 
            target="_blank" 
            rel="noreferrer" 
            className="profile-btn btn-leetcode"
          >
            View Profile
          </a>
        </div>
      </div>

      {/* CENTER COLUMN: Main Content */}
      <div className="center-content">
        <h1 className="page-title gradient-text" style={{ marginTop: 0 }}>About Me</h1>
        
        <div className="about-wrapper">
          <div className="about-text">
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              Hi, I'm <strong>Akul Chauhan</strong>, a tech enthusiast and final-year student pursuing my B.Tech in Mathematics and Computing Engineering at DTU. I have a strong foundation in software development and a deep interest in building scalable, efficient systems.
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              Whether it is architecting a full-stack web application (MERN), diving into data science and machine learning models with Python, or optimizing backend infrastructure, I am driven by the challenge of solving complex technical problems.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              I enjoy continuously learning and applying core concepts like OOPs and System Design to real-world scenarios to build robust software.
            </p>
          </div>

          {/* UPDATED: Image + Resume Button Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div className="about-image-container">
              <img 
                src={profileImg} 
                alt="Akul Chauhan" 
                className="profile-img" 
              />
            </div>
            
            {/* Resume Download Button */}
            <a 
              href="/Akul_Chauhan_Resume.pdf" 
              download="Akul_Chauhan_Resume.pdf" 
              className="resume-btn"
              style={{ textDecoration: 'none' }}
            >
              Download Resume
            </a>
          </div>
        </div>

        <h2 style={{ marginBottom: '1.5rem', marginTop: '2.5rem' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Card title="Languages" tags={['C++', 'C', 'Python', 'Java', 'TypeScript', 'JavaScript']}>
             Solid foundation in DSA and problem-solving.
          </Card>
          <Card title="Web Technologies" tags={['React.js', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'HTML/CSS', 'Vite']}>
             Building modern, responsive full-stack applications.
          </Card>
          <Card title="Core Domains" tags={['OOPs','Operating System', 'SDLC','System Design', 'Network Security','Machine Learning', 'Data Science', 'DBMS','Computer Networks']}>
             Understanding the architecture behind scalable software.
          </Card>
        </div>
      </div>

      {/* RIGHT COLUMN: GeeksforGeeks Profile */}
      <div className="side-profile">
        <div className="profile-card gfg">
          <h3 style={{ color: '#2f8d46', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            GeeksforGeeks
          </h3>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Actively practicing data structures and core computer science concepts.
          </p>

          <div className="stat-row" style={{ marginBottom: '1.5rem' }}>
            <span>Problems Solved</span>
            <strong>200+</strong>
          </div>

          <a 
            href="https://www.geeksforgeeks.org/profile/akulchauhalb4w" 
            target="_blank" 
            rel="noreferrer" 
            className="profile-btn btn-gfg"
          >
            View Profile
          </a>
        </div>
      </div>

    </div>
  );
}