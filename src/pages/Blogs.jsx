import React from 'react';

const Blogs = () => {
    const posts = [
        {
            title: "The use of bias and its role in driving down the loss of a Neural Network",
            date: "Jan 12, 2025",
            description: "A deep dive into the role of bias in neural networks.",
            link: "https://www.notion.so/The-use-of-bias-and-its-role-in-driving-down-the-loss-of-a-Neural-Network-1e64ec07e06280e395b8f31689c89396"
        },
    ];

    return (
        <div className="page-blogs">
            <h1 className="section-title">Blogs</h1>
            <ul style={{ listStyle: 'none' }}>
                {posts.map((post, index) => (
                    <li key={index} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 400 }}>
                                <a href={post.link}>{post.title}</a>
                            </h3>
                        </div>
                        <span className="text-muted" style={{ fontSize: '0.8rem', minWidth: '100px', textAlign: 'right' }}>{post.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
