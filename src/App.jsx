import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import Projects from './pages/Projects';
import Research from './pages/Research';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
