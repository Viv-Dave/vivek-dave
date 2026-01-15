import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Transformer from Scratch",
            description: "A PyTorch implementation of the original Transformer architecture, focusing on clarity and reproducibility.",
            link: "#"
        },
        {
            title: "Generative Adversarial Networks",
            description: "Experiments with DCGANs and StyleGANs for high-resolution image synthesis on custom datasets.",
            link: "#"
        },
        {
            title: "RL Agent for Doom",
            description: "Deep Q-Learning agent trained to play Doom using visual inputs, achieving superhuman performance.",
            link: "#"
        }
    ];

    return (
        <div className="page-projects">
            <h1 className="section-title">Projects</h1>
            <div className="grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                            <a href={project.link} className='project-link'>{project.title}</a>
                        </h3>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
