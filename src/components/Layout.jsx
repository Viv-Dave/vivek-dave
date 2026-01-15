import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/research', label: 'Research' },
    { path: '/blogs', label: 'Blogs' },
  ];

  return (
    <div className="layout">
      <header style={{ padding: '2rem 0', marginBottom: '3rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
            <Link to="/">Vivek Dave</Link>
          </div>
          <nav>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    style={{ 
                      color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container" style={{ minHeight: 'calc(100vh - 250px)' }}>
        {children}
      </main>

      <footer style={{ padding: '3rem 0', marginTop: '5rem', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          <div>© {new Date().getFullYear()} Vivek Dave</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
