import React from 'react';

const Curator = () => {
    return (
        <div className="fade-in" style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>The Curator</h1>
            </header>

            <section style={styles.narrative}>
                <p style={styles.paragraph}>
                    My journey into computer science began not with code, but with a question about the nature of thought itself.
                    As I navigated the rigid structures of logic and algorithms, I found myself increasingly drawn to the spaces
                    where these systems falter—ambiguity, creativity, and the nuanced spectrum of human emotion.
                </p>

                <p style={styles.paragraph}>
                    I view technology not as a toolkit for efficiency, but as a philosophical instrument. In my research,
                    I explore how machine learning models construct internal representations of the world, and how these
                    representations diverge from our own cognitive maps. This work requires a dual mindset: the rigor of a
                    mathematician and the curiosity of a humanist.
                </p>

                <p style={styles.paragraph}>
                    My approach to building is deliberately slow. I believe in software that respects the user's attention
                    and intellect. In an era of infinite scroll and algorithmic curation, I strive to create digital artifacts
                    that encourage pause, reflection, and deep engagement.
                </p>
            </section>

            <div style={styles.signature}>
                <p>Currently researching at the intersection of Generative AI and Cognitive Science.</p>
                <p>Based in the digital ether, grounded in rigorous inquiry.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '6rem 0',
        maxWidth: '800px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '4rem',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        borderBottom: '2px solid var(--color-accent)',
        display: 'inline-block',
        paddingBottom: '1rem',
    },
    narrative: {
        marginBottom: '6rem',
    },
    paragraph: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.4rem',
        lineHeight: '1.8',
        marginBottom: '2rem',
        textAlign: 'justify',
    },
    signature: {
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'var(--color-text-muted)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem',
        fontStyle: 'italic',
    }
};

export default Curator;
