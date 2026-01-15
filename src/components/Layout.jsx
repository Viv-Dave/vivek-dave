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
    <div className="layout" style={{ display: 'flex', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Sidebar */}
      <header style={{
        width: '250px',
        padding: '3rem 2rem',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        alignSelf: 'flex-start',
        borderRight: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <div className="logo" style={{ marginBottom: '3rem', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
            <Link to="/">Vivek Dave</Link>
          </div>

          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontSize: '1rem',
                      fontWeight: location.pathname === item.path ? 500 : 400,
                      fontStyle: 'italic',
                      display: 'block'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div style={{ opacity: 0.5 }}>© {new Date().getFullYear()}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ flex: 1, padding: '4rem 5rem', maxWidth: '900px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
