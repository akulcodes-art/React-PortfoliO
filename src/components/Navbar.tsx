import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navStyle = {
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 5%',
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--card-border)',
    zIndex: 1000,
  };

  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? 'var(--accent)' : 'var(--text-main)',
    fontWeight: location.pathname === path ? 700 : 500,
    fontSize: '0.95rem'
  });

  return (
    <nav style={navStyle}>
      <Link to="/" className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
        Akul.
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={getLinkStyle('/')}>About</Link>
        <Link to="/experience" style={getLinkStyle('/experience')}>Experience</Link>
        <Link to="/projects" style={getLinkStyle('/projects')}>Projects</Link>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          style={{ 
            padding: '0.5rem', 
            borderRadius: '50%', 
            width: '40px', 
            height: '40px',
            cursor: 'pointer', 
            background: 'var(--bg-color)', 
            color: 'var(--text-main)', 
            border: '1px solid var(--card-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.2s ease'
          }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}