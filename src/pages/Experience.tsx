import Card from '../components/Card';

export default function Experience() {
  return (
    <div className="container animate-fade-in">
      <h1 className="page-title gradient-text">Experience</h1>
      
      <Card title="Frontend Development Intern" subtitle="One-Stop AI | July 2025 – August 2025">
        <p>Developed and optimized frontend components, ensuring high performance and a seamless user experience while collaborating with the core engineering team.</p>
      </Card>

      <Card title="Mentor" subtitle="Desh Ke Mentor">
        <p>Mentored 4 students on a weekly basis, providing guidance on academic and career development.</p>
      </Card>
    </div>
  );
}