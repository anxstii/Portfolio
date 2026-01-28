import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Arts', path: '/arts' },
        { name: 'Curator', path: '/curator' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="layout">
            <header style={styles.header}>
                <nav>
                    <ul style={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    style={{
                                        ...styles.link,
                                        color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text)'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main style={styles.main}>
                {children}
            </main>
            <footer style={styles.footer}>
                <p style={styles.copyright}>© 2024 Portfolio. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    header: {
        padding: '2rem 5%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    navList: {
        display: 'flex',
        gap: '2rem',
    },
    link: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    main: {
        padding: '0 5%',
        minHeight: '80vh',
    },
    footer: {
        padding: '2rem 5%',
        marginTop: '4rem',
        borderTop: '1px solid #1a3d5c',
        textAlign: 'center',
    },
    copyright: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        color: 'var(--color-text-muted)',
    }
};

export default Layout;
