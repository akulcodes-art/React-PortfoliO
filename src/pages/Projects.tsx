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
        
        <a 
          href="https://github.com/akulcodes-art/Crick-Fullstack" 
          target="_blank" 
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </Card>

      <Card 
        title="Full Stack Food Delivery App" 
        subtitle="MERN Stack Application"
        tags={['React.js', 'Node.js', 'Express', 'MongoDB']}
      >
        <p>A complete food ordering platform featuring user authentication, dynamic menu rendering, and seamless cart management built entirely on the MERN stack.</p>
        
        <a 
          href="https://github.com/akulcodes-art/food_app" 
          target="_blank" 
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </Card>

      <Card 
        title="Gold Rate Prediction Model" 
        subtitle="Machine Learning Regressor"
        tags={['Python', 'Machine Learning', 'Random Forest', 'Data Science']}
      >
        <p>A predictive machine learning model utilizing a Random Forest Regressor algorithm to analyze and forecast gold prices based on historical market trends and financial data.</p>
        
        <a 
          href="https://github.com/akulcodes-art/Gold_price_predictor_random_forest_regressor" 
          target="_blank" 
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </Card>

      <Card 
        title="Air Quality (AQI) Forecaster" 
        subtitle="Machine Learning Model"
        tags={['Python', 'Machine Learning', 'Data Science', 'Pandas']}
      >
        <p>A machine learning model designed to predict and forecast the Air Quality Index based on historical environmental data to help track pollution trends.</p>
        
        <a 
          href="https://github.com/akulcodes-art/AQI-forecaster" 
          target="_blank" 
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </Card>

      <Card 
        title="Linked List Visualizer" 
        subtitle="DSA Interactive Tool"
        tags={['JavaScript', 'HTML/CSS', 'Data Structures', 'Algorithms']}
      >
        <p>An interactive educational tool that visualizes the inner workings of a Linked List, allowing users to see node insertion, deletion, and traversal algorithms in real-time.</p>
        
        <a 
          href="https://github.com/akulcodes-art/linkedlist-visualizer" 
          target="_blank" 
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </Card>
    </div>
  );
}