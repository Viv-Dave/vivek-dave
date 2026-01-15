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
    <div className="layout-container">
      {/* Sidebar */}
      <header className="sidebar">
        <div>
          <div className="logo">
            <Link to="/">Vivek Dave</Link>
          </div>

          <nav>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="nav-link"
                    style={{
                      color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: location.pathname === item.path ? 500 : 400,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vivek-dave-/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/Viv_Dave_" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div style={{ opacity: 0.5 }}>© {new Date().getFullYear()}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
