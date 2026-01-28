import React from 'react';

const Contact = () => {
    return (
        <div className="fade-in" style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Correspondence</h1>
                <p style={styles.intro}>
                    I am available for research collaborations and thoughtful discourse.
                </p>

                <ul style={styles.links}>
                    <li style={styles.linkItem}>
                        <span style={styles.label}>Email</span>
                        <a href="mailto:hello@example.com" style={styles.link}>hello@example.com</a>
                    </li>
                    <li style={styles.linkItem}>
                        <span style={styles.label}>GitHub</span>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/curator</a>
                    </li>
                    <li style={styles.linkItem}>
                        <span style={styles.label}>LinkedIn</span>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/curator</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        textAlign: 'center',
    },
    heading: {
        fontSize: '4rem',
        marginBottom: '1rem',
        color: 'var(--color-text)',
    },
    intro: {
        fontFamily: 'var(--font-body)',
        fontSize: '1.2rem',
        color: 'var(--color-text-muted)',
        marginBottom: '4rem',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
    },
    linkItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    label: {
        fontFamily: 'var(--font-heading)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--color-accent)',
        width: '100px',
        textAlign: 'right',
    },
    link: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-heading)',
        borderBottom: '1px solid transparent',
    }
};

export default Contact;
