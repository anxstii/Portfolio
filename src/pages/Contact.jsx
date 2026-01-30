import React, { useState } from 'react';
import contactImage from '../assets/images/contact_image.jpg';

const Contact = () => {
    return (
        <div className="fade-in" style={styles.container}>
            <div style={styles.layout}>
                {/* Left Side: Elongated Image */}
                <div style={styles.imageSection}>
                    <img src={contactImage} alt="" style={styles.image} />
                </div>

                {/* Right Side: content */}
                <div style={styles.contentSection}>
                    <header style={styles.header}>
                        <h1 style={styles.title}>Contact</h1>
                    </header>

                    <div style={styles.info}>
                        <p style={styles.text}>
                            I am always open to discussing new ideas, research collaborations, or simply sharing thoughts on the digital landscape.
                        </p>

                        <ul style={styles.links}>
                            <li style={styles.linkItem}>
                                <span style={styles.label}>Email</span>
                                <HoverLink href="mailto:anoodfatema@gmail.com">anoodfatema@gmail.com</HoverLink>
                            </li>
                            <li style={styles.linkItem}>
                                <span style={styles.label}>GitHub</span>
                                <HoverLink href="https://github.com/anxstii" target="_blank" rel="noopener noreferrer">github.com/anxstii</HoverLink>
                            </li>
                            <li style={styles.linkItem}>
                                <span style={styles.label}>LinkedIn</span>
                                <HoverLink href="https://www.linkedin.com/in/anood-f-k-5a10692b9/" target="_blank" rel="noopener noreferrer">linkedin.com/in/anoodfk</HoverLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HoverLink = ({ href, children, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            style={{
                ...styles.link,
                color: isHovered ? '#EE005A' : styles.link.color,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {children}
        </a>
    );
};

const styles = {
    container: {
        padding: '4rem 5%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '80vh', // Ensure it takes up space
        display: 'flex',
        alignItems: 'center',
    },
    layout: {
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
        gap: '4rem',
        alignItems: 'center',
        width: '100%',
    },
    imageSection: {
        height: '70vh',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'grayscale(20%) contrast(1.1)', // Slight aesthetic touch
    },
    contentSection: {
        padding: '2rem 0',
    },
    header: {
        marginBottom: '3rem',
    },
    title: {
        fontSize: 'clamp(3rem, 5vw, 4rem)',
        fontFamily: 'var(--font-heading)',
        borderBottom: '2px solid var(--color-accent)',
        display: 'inline-block',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
    },
    text: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        marginBottom: '3rem',
        maxWidth: '500px',
        lineHeight: '1.6',
    },
    links: {
        listStyle: 'none',
        padding: 0,
    },
    linkItem: {
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--color-text-muted)',
        marginBottom: '0.3rem',
    },
    link: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-text)',
        textDecoration: 'none',
        transition: 'color 0.2s',
        display: 'inline-block', // Ensure it respects typical box model stuff slightly better
        cursor: 'pointer',
    },
};

export default Contact;
