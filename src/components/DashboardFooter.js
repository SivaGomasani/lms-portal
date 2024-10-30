import React from 'react';

const DashboardFooter = () => {
    return (
        <footer style={styles.footer} className='mt-5'>
            <div style={styles.links}>
                <a href="/terms" style={styles.link}>Terms and Conditions</a>
                <a href="/legal" style={styles.link}>Legal</a>
                <a href="/privacy" style={styles.link}>Privacy</a>
            </div>
            <div style={styles.copyright}>
                &copy; {new Date().getFullYear()} LMS-portal All rights reserved.
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
        width: '100%',
        bottom: '0',
    },
    links: {
        display: 'flex',
        gap: '15px',
        marginBottom: '10px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    copyright: {
        fontSize: '14px',
    },
};

export default DashboardFooter;
