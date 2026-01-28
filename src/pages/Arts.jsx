import React from 'react';

const Arts = () => {
    const projects = [
        {
            id: 1,
            title: "Generative Syntax",
            period: "2024",
            problem: "Traditional language models struggle with long-form structural coherence in creative writing tasks.",
            insight: "Implementing a hierarchical attention mechanism that preserves narrative arcs across extended context windows."
        },
        {
            id: 2,
            title: "Neural Cartography",
            period: "2023",
            problem: "High-dimensional latent spaces are opaque and difficult to navigate for interpretability researchers.",
            insight: "Developed a manifold projection technique that maps activation clusters to semantic concepts in 3D space."
        },
        {
            id: 3,
            title: "Silent Symphony",
            period: "2023",
            problem: "Music generation models often lack emotional dynamism and micro-timing nuances.",
            insight: "Trained a diffusion model on raw spectral data, conditioning generation on emotional valence rather than discrete notes."
        },
        {
            id: 4,
            title: "Cognitive Mirrors",
            period: "2022",
            problem: "Bias in AI systems is often treated as a data problem rather than a systemic alignment issue.",
            insight: "Proposed a 'mirroring' framework where agents explicitly model their own uncertainty and bias before outputting decisions."
        }
    ];

    return (
        <div className="fade-in" style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.pageTitle}>Selected Works</h1>
                <p style={styles.pageSubtitle}>A curation of technical inquiries and creative experiments.</p>
            </header>

            <div style={styles.projectList}>
                {projects.map((project) => (
                    <article key={project.id} style={styles.projectItem}>
                        <div style={styles.projectMeta}>
                            <span style={styles.projectNumber}>{String(project.id).padStart(2, '0')}</span>
                            <span style={styles.projectPeriod}>{project.period}</span>
                        </div>

                        <div style={styles.projectContent}>
                            <h2 style={styles.projectTitle}>{project.title}</h2>

                            <div style={styles.projectDetail}>
                                <span style={styles.label}>Problem Space</span>
                                <p style={styles.text}>{project.problem}</p>
                            </div>

                            <div style={styles.projectDetail}>
                                <span style={styles.label}>Core Insight</span>
                                <p style={styles.text}>{project.insight}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '4rem 0',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '6rem',
        borderBottom: '1px solid var(--color-text)',
        paddingBottom: '2rem',
    },
    pageTitle: {
        fontSize: '4rem',
        marginBottom: '1rem',
    },
    pageSubtitle: {
        fontFamily: 'var(--font-body)',
        fontSize: '1.2rem',
        color: 'var(--color-text-muted)',
    },
    projectList: {
        display: 'flex',
        flexDirection: 'column',
    },
    projectItem: {
        display: 'grid',
        gridTemplateColumns: '100px 1fr',
        padding: '4rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        gap: '2rem',
    },
    projectMeta: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-accent)',
    },
    projectNumber: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
    },
    projectPeriod: {
        fontSize: '0.9rem',
        opacity: 0.8,
    },
    projectContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    projectTitle: {
        fontSize: '2.5rem',
        lineHeight: '1',
    },
    projectDetail: {
        display: 'grid',
        gridTemplateColumns: '150px 1fr',
        gap: '1rem',
        alignItems: 'baseline',
    },
    label: {
        fontFamily: 'var(--font-heading)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--color-text-muted)',
    },
    text: {
        fontFamily: 'var(--font-body)',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        maxWidth: '600px',
    }
};

export default Arts;
