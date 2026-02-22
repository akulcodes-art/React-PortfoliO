import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  children: ReactNode;
}

export default function Card({ title, subtitle, tags, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      
      <div style={{ color: 'var(--text-muted)' }}>
        {children}
      </div>

      {/* Render Tags if they exist */}
      {tags && tags.length > 0 && (
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}