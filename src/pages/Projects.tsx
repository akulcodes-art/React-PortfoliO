import Card from '../components/Card';

export default function Projects() {
  return (
    <div className="container animate-fade-in">
      <h1 className="page-title gradient-text">My Projects</h1>
      
      <Card 
        title="CrickInformer" 
        subtitle="Full Stack Web Application"
        tags={['MongoDB', 'Express.js', 'React', 'Node.js', 'API Integration']}
      >
        <p>A comprehensive web application providing live cricket updates, match data, and statistics in real-time. Built with a robust backend to handle live scoring endpoints.</p>
      </Card>

      <Card 
        title="Air Quality (AQI) Forecaster" 
        subtitle="Machine Learning Model"
        tags={['Python', 'Machine Learning', 'Data Science', 'Pandas']}
      >
        <p>A machine learning model designed to predict and forecast the Air Quality Index based on historical environmental data to help track pollution trends.</p>
      </Card>
    </div>
  );
}