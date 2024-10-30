import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

function HomeFooter() {
    return (
        <div style={styles.footerContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.footerSection}>
                    <h5 style={styles.header}>IMPORTANT LINKS</h5>
                    <ul style={styles.list}>
                        <li><a href="/blogs" style={styles.link}>Blogs</a></li>
                        <li><a href="/cheatsheets" style={styles.link}>Cheatsheets</a></li>
                        <li><a href="/podcasts" style={styles.link}>Podcasts</a></li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h5 style={styles.header}>FREE RESOURCES</h5>
                    <ul style={styles.list}>
                        <li><a href="/free-resources" style={styles.link}>Free question papers</a></li>
                        <li><a href="/free-courses" style={styles.link}>Free Courses</a></li>
                        <li><a href="/question-banks" style={styles.link}>Free Assessments</a></li>
                        <li><a href="/free-practice-packages" style={styles.link}>Free practice packages</a></li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h5 style={styles.header}>PREPARE RESOURCES</h5>
                    <ul style={styles.list}>
                        <li><a href="/tcs-question-paper" style={styles.link}>TCS question paper</a></li>
                        <li><a href="/infosys-question-bank" style={styles.link}>Infosys question bank</a></li>
                        <li><a href="/cts-question-banks" style={styles.link}>CTS latest question banks</a></li>
                        <li><a href="/tcs-coding-ninja-pack" style={styles.link}>TCS coding ninja pack</a></li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h5 style={styles.header}>PLANS</h5>
                    <ul style={styles.list}>
                        <li><a href="/institutions" style={styles.link}>For Institutions</a></li>
                        <li><a href="/students" style={styles.link}>For Students</a></li>
                        <li><a href="/board-of-advisors" style={styles.link}>Board of Advisors</a></li>
                    </ul>
                </div>
            </div>

            <div style={styles.contactSection}>
                <h5>CONTACT US</h5>
                <a href="https://facebook.com" style={styles.icon}><FaFacebook size={30} /></a>
                <a href="https://twitter.com" style={styles.icon}><FaTwitter size={30} /></a>
                <a href="https://instagram.com" style={styles.icon}><FaInstagram size={30} /></a>
                <a href="https://linkedin.com" style={styles.icon}><FaLinkedin size={30} /></a>
            </div>

            <div style={styles.bottomSection}>
                <p>2024 © LMS-portal. All rights reserved.</p>
                <p>Our accepted payment methods:</p>
                <FaCcVisa size={30} style={styles.icon} />
                <FaCcMastercard size={30} style={styles.icon} />
                <FaCcPaypal size={30} style={styles.icon} />
                <p>100% safe and secure payment</p>
            </div>
        </div>
    );
}

// Inline styles for the footer component
const styles = {
    footerContainer: {
        backgroundColor: '#28a745', // Bootstrap's success color
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
    },
    sectionContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    footerSection: {
        flex: '1 1 calc(25% - 20px)', // Adjusted to allow 4 sections
        margin: '10px',
        textAlign: 'left',
    },
    header: {
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease, background-color 0.3s ease',
        padding: '5px 0',
        display: 'block', // Makes the link occupy the full width
    },
    icon: {
        color: 'white',
        margin: '0 10px',
        transition: 'color 0.3s ease',
    },
    contactSection: {
        marginBottom: '20px',
    },
    bottomSection: {
        marginTop: '20px',
    },
};

// Hover effect for links
const linkHoverStyle = {
    ':hover': {
        color: '#ffc107', // Bootstrap's warning color for hover effect
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background on hover
    },
};

export default HomeFooter;
