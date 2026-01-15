import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Transformer from Scratch",
            description: "A PyTorch implementation of the original Transformer-decoder only architecture heavily inspired by Andrej Karpathy's GPT re-implementation.",
            link: "https://www.kaggle.com/code/narutokurosaki/gptspeare"
        },
        {
            title: "AlBERT: Implemented BERT from scratch.",
            description: "Implementation of the original BERT architecture albeit smaller in size refering to the Paper BERT, Devlin et. al. (2018)",
            link: "https://www.kaggle.com/code/narutokurosaki/albert"
        },
        {
            title: "Visual Transformer",
            description: "Implementation of the original Visual Transformer architecture refering to the Paper Visual Transformer, Dosovitskiy et. al. (2020)",
            link: "https://www.kaggle.com/code/narutokurosaki/visual-transformer"
        },
        {
            title: "BLIP-1",
            description: "Implementation of the original blip-1 architecture refering to the Paper blip-1, J Li et. al. (202)",
            link: "https://www.kaggle.com/code/narutokurosaki/blip-1"
        },
        {
            title: "ConvAutoEncoder",
            description: "Implementation of the original ConvAutoEncoder, a variation of the Auto-Encoder using convolution to reconstruct images. Trained on a small sample of MNIST Data",
            link: "https://www.kaggle.com/code/narutokurosaki/convautoencoder"
        },

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
