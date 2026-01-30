import React from 'react';
import curatorImg1 from '../assets/images/curator_image_1.jpg';
import curatorImg2 from '../assets/images/curator_image_2.jpg';
import curatorImg3 from '../assets/images/curator_image_3.jpg';
import curatorBanner from '../assets/images/curator_image_4.jpg';

const Curator = () => {
    return (
        <div className="fade-in" style={styles.container}>
            {/* Top Header Line */}
            <div style={styles.topHeader}>
                <span style={styles.headerItem}>ART</span>
                <span style={styles.headerItem}>anoodfatema@gmail.com</span>
            </div>

            <div style={styles.divider}></div>

            {/* Banner Image */}
            <div style={styles.bannerContainer}>
                <img src={curatorBanner} alt="Curator Banner" style={styles.bannerImage} />
            </div>

            <div style={styles.divider}></div>

            {/* Main Title */}
            <h1 style={styles.mainTitle}>The Curator</h1>

            <div style={styles.divider}></div>

            {/* Text Columns */}
            <div style={styles.textGrid}>
                <p style={styles.paragraph}>
                    My interest in computer science began not with programming alone, but with questions about cognition and reasoning. As I studied formal logic, algorithms, and machine learning, I became increasingly attentive to the limits of these systems—where abstraction, ambiguity, and human judgment resist full formalization.
                </p>
                <p style={styles.paragraph}>
                    I approach technology as more than an instrument for efficiency. In my research, I examine how machine learning models form internal representations, how these structures shape decision-making, and where they diverge from human cognitive processes. This perspective draws equally from computational rigor and philosophical inquiry.
                </p>
                <p style={styles.paragraph}>
                    My approach to building is deliberately slow. I believe in software that respects the user's attention and intellect. In an era of infinite scroll and algorithmic curation, I strive to create digital artifacts that encourage pause, reflection, and deep engagement.
                </p>
            </div>

            {/* Bottom Images */}
            <div style={styles.imageGrid}>
                <div style={styles.imageWrapper}>
                    <img src={curatorImg1} alt="Curator 1" style={styles.gridImage} />
                    <span style={styles.imageCaption}>A Reader</span>
                </div>
                <div style={styles.imageWrapper}>
                    <img src={curatorImg2} alt="Curator 2" style={styles.gridImage} />
                    <span style={styles.imageCaption}>A Writer</span>
                </div>
                <div style={styles.imageWrapper}>
                    <img src={curatorImg3} alt="Curator 3" style={styles.gridImage} />
                    <span style={styles.imageCaption}>A Dreamer</span>
                </div>
            </div>

            {/* Signature Area (Optional based on new layout, but kept for content completeness if needed, or folded into the grids. I'll omit strictly as per reference unless I can fit it. The reference doesn't have it, but user asked for specific signature text earlier. I will put it as a footer line). */}
            <div style={styles.footer}>
                <p>Research interests at the intersection of generative AI and cognitive science.</p>
                <p>Grounded in rigorous inquiry and theoretical analysis.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem 5%',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f4f4f4', // Paper-like background for the magazine feel? Or stick to site theme?
        // Site theme is deep navy/dark. The reference image is white paper.
        // Requirement: "Magazine Portfolio Website... deep navy background".
        // I should adapt the LAYOUT of the reference but keep the COLOR PALETTE of the site.
        // So, no white background.
        color: 'var(--color-text)',
    },
    topHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-heading)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '0.9rem',
        opacity: 0.7,
        marginBottom: '0.5rem',
        color: '#222', // Darker color for visibility on light background
    },
    divider: {
        height: '1px',
        backgroundColor: 'var(--color-text)',
        opacity: 0.3,
        width: '100%',
        margin: '1rem 0',
    },
    bannerContainer: {
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        marginBottom: '1rem',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    mainTitle: {
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
        margin: '1rem 0',
        letterSpacing: '-0.02em',
        color: 'var(--color-accent)', // Keeping the accent color for the title
    },
    textGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem',
        textAlign: 'justify',
    },
    paragraph: {
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        lineHeight: '1.6',
        color: 'var(--color-text-muted)',
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem',
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gridImage: {
        width: '100%',
        height: '350px', // Uniform height
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    imageCaption: {
        fontFamily: 'var(--font-heading)',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: 'var(--color-text-muted)',
    },
    footer: {
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'var(--color-text-muted)',
        fontStyle: 'italic',
    }
};

export default Curator;
