import React from 'react';

const Home = () => {
    return (
        <div className="page-home" style={{ maxWidth: '650px' }}>
            <h1 className="section-title">About</h1>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                I am an aspiring machine learning and deep learning researcher passionate about building intelligent models.
                I focus primarily on models that embodies vision and language models together, I also focus on light-weight architectures
                such that they can run on low-end devices.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
                I am pursuing my engineering in Electronics and Telecommunication Engineering from Thakur College of Engineering and Technology. I am currently in my third year.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
                I am currently working on my final year project on "City Development Index". It aggregates information from various domains and produces an index relative to other cities.
            </p>
        </div>
    );
};


export default Home;
