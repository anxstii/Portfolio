import React from 'react';

const Home = () => {
    return (
        <div className="fade-in" style={styles.container}>
            <section style={styles.hero}>
                <h1 style={styles.heroText}>
                    Constructing <br />
                    <span style={{ color: 'var(--color-accent)' }}>Intelligence</span>
                </h1>
                <p style={styles.subtitle}>
                    Investigating the boundaries between computational logic and human cognition.
                </p>
            </section>

            <div style={styles.divider}></div>

            <section style={styles.bioSection}>
                <div style={styles.bioLabel}>About the Curator</div>
                <div style={styles.bioContent}>
                    <p>
                        I am a Computer Science student and researcher dedicated to understanding the
                        foundations of artificial intelligence. My work is driven by a desire to
                        synthesize theoretical frameworks with practical applications, creating systems
                        that are not only powerful but also interpretable and aligned with human values.
                    </p>
                </div>
            </section>

            <section style={styles.focusSection}>
                <div style={styles.focusHeader}>Research Vectors</div>
                <div style={styles.focusGrid}>
                    <div style={styles.focusItem}>
                        <span style={styles.focusNumber}>01</span>
                        <h3 style={styles.focusTitle}>Machine Learning</h3>
                        <p style={styles.focusDesc}>Deep learning architectures and optimization dynamics.</p>
                    </div>
                    <div style={styles.focusItem}>
                        <span style={styles.focusNumber}>02</span>
                        <h3 style={styles.focusTitle}>Natural Language</h3>
                        <p style={styles.focusDesc}>Semantic understanding and generative models.</p>
                    </div>
                    <div style={styles.focusItem}>
                        <span style={styles.focusNumber}>03</span>
                        <h3 style={styles.focusTitle}>Human-AI Interaction</h3>
                        <p style={styles.focusDesc}>Interface design for collaborative intelligence.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        padding: '4rem 0',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    hero: {
        marginBottom: '6rem',
    },
    heroText: {
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        marginBottom: '2rem',
    },
    subtitle: {
        fontFamily: 'var(--font-body)',
        fontSize: '1.2rem',
        maxWidth: '600px',
        color: 'var(--color-text-muted)',
        borderLeft: '2px solid var(--color-accent)',
        paddingLeft: '1.5rem',
    },
    divider: {
        height: '1px',
        backgroundColor: 'var(--color-text)',
        opacity: 0.2,
        margin: '4rem 0',
    },
    bioSection: {
        display: 'grid',
        gridTemplateColumns: 'minmax(150px, 1fr) 3fr',
        gap: '2rem',
        marginBottom: '6rem',
    },
    bioLabel: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--color-text-muted)',
        paddingTop: '0.5rem',
    },
    bioContent: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-heading)',
        lineHeight: '1.4',
    },
    focusSection: {
        marginTop: '4rem',
    },
    focusHeader: {
        fontFamily: 'var(--font-heading)',
        fontSize: '2rem',
        marginBottom: '3rem',
        borderBottom: '1px solid rgba(238, 0, 90, 0.3)',
        paddingBottom: '1rem',
        display: 'inline-block',
    },
    focusGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
    },
    focusItem: {
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '1.5rem',
    },
    focusNumber: {
        display: 'block',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-accent)',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
    },
    focusTitle: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
    },
    focusDesc: {
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text-muted)',
        fontSize: '1rem',
    }
};

export default Home;
