import React from 'react';

const Research = () => {
    const papers = [
        {
            title: "Work in Progress :-D",
            venue: "TBA",
            description: "",
            link: "#"
        }

    ];

    return (
        <div className="page-research">
            <h1 className="section-title">Research</h1>
            <ul style={{ listStyle: 'none' }}>
                {papers.map((paper, index) => (
                    <li key={index} style={{ marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 500 }}>{paper.title}</h3>
                            <span className="text-muted" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{paper.venue}</span>
                        </div>
                        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{paper.description}</p>
                        <a href={paper.link} style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>Read Paper</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Research;
