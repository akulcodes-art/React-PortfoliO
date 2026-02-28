import Card from '../components/Card';

export default function Education() {
  return (
    <div className="container animate-fade-in">
      <h1 className="page-title gradient-text">Education</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card 
          title="B.Tech - Mathematics and Computing Engineering" 
          subtitle="Delhi Technological University (DTU)"
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>
            CGPA: <span style={{ color: 'var(--accent)' }}>7.94</span>
          </p>
        </Card>

        <Card 
          title="12th Grade (CBSE)" 
          subtitle="Nutan Vidya Mandir"
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>
            Percentage: <span style={{ color: 'var(--accent)' }}>92.6%</span>
          </p>
        </Card>

        <Card 
          title="10th Grade (CBSE)" 
          subtitle="Nutan Vidya Mandir"
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>
            Percentage: <span style={{ color: 'var(--accent)' }}>93.8%</span>
          </p>
        </Card>
      </div>
    </div>
  );
}