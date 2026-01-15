import React from 'react';

const Blogs = () => {
    const posts = [
        {
            title: "Understanding Backpropagation: A Visual Guide",
            date: "Jan 12, 2025",
            description: "A deep dive into the calculus behind neural network training.",
            link: "#"
        },
        {
            title: "The State of AGI in 2025",
            date: "Dec 20, 2024",
            description: "Thoughts on current progress and future directions in artificial general intelligence.",
            link: "#"
        },
        {
            title: "Why I Switched from TensorFlow to PyTorch",
            date: "Nov 05, 2024",
            description: "My personal journey and reasons for prefering PyTorch's dynamic computational graph.",
            link: "#"
        }
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
