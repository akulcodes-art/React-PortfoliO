import Card from '../components/Card';

export default function About() {
  return (
    <div className="container" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h1 className="page-title">About Me</h1>
      <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
        Hi, I'm Akul Chauhan, a tech enthusiast and final-year student pursuing my B.Tech in Mathematics and Computing Engineering. I have a strong foundation in software development and a deep interest in building scalable, efficient systems.
      </p>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
        Whether it is architecting a full-stack web application, diving into data science and machine learning models, or optimizing backend infrastructure, I am driven by the challenge of solving complex technical problems. I enjoy continuously learning and applying my skills to real-world scenarios.
      </p>

      <h2>Technical Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <Card title="Languages">
          <p><strong>C++</strong>, C, Python, Java, TypeScript, JavaScript</p>
        </Card>
        <Card title="Web Technologies">
          <p>React.js, Node.js, Express, MongoDB, HTML/CSS</p>
        </Card>
        <Card title="Core Domains">
          <p>Object-Oriented Programming (OOPs), System Design, Machine Learning, Data Science</p>
        </Card>
      </div>
    </div>
  );
}