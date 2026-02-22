import Card from '../components/Card';

export default function Experience() {
  return (
    <div className="container">
      <h1 className="page-title">Experience & Education</h1>
      
      <Card title="Frontend Development Intern" subtitle="One-Stop AI | July 2025 – August 2025">
        <p>Developed and optimized frontend components, ensuring high performance and a seamless user experience while collaborating with the core engineering team.</p>
      </Card>

      <Card title="Mentor" subtitle="Desh Ke Mentor">
        <p>Mentored 4 students on a weekly basis, providing guidance on academic and career development.</p>
      </Card>

      <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Education</h2>
      <Card title="B.Tech - Mathematics and Computing Engineering" subtitle="Delhi Technological University (DTU) | Expected 2026">
        <p>CGPA: 7.94</p>
      </Card>
    </div>
  );
}