import React from 'react';

const Home = () => {
    return (
        <div className="page-home" style={{ maxWidth: '650px' }}>
            <h1 className="section-title">About</h1>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                I am a machine learning and deep learning researcher passionate about building intelligent systems.
                My work focuses on neural architectures, representation learning, and applying AI to solve complex problems.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
                Welcome to my digital garden. Here you'll find my projects, research papers, and thoughts on AI.
            </p>
        </div>
    );
};

export default Home;
