import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const InsideNav = () => {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();

    const handleProfileToggle = () => {
        setShowProfile(!showProfile);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const firstName = localStorage.getItem('firstName') || 'First Name';
    const secondName = localStorage.getItem('secondName') || 'Second Name';
    const email = localStorage.getItem('email') || 'Email not provided';
    const profileImage = localStorage.getItem('profileImage') || 'default_profile_image_url.png';

    return (
        <div className="home-page mb-5">
            <style>
                {`
                    .profile-img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 2px solid black; /* Added border */
                    }
                    .profile-img-large {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        border: 2px solid white; /* Added border */
                    }
                    .nav-link-custom {
                        padding: 12px 20px;
                        transition: background-color 0.3s ease;
                        background-color: transparent;
                        border: none;
                        border-radius: 5px;
                        width: auto;
                    }
                    .nav-link-custom:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                    .logo-img {
                        height: 40px; /* Adjust height as needed */
                        margin-right: 10px; /* Space between logo and text */
                    }
                `}
            </style>
            <Navbar bg="primary" expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white">
                        <img 
                            src="https://t3.ftcdn.net/jpg/05/39/30/60/240_F_539306072_yjryDhkJv3orOtpe4AJx4SvdS2YkIrLr.jpg" 
                            alt="Logo" 
                            className="logo-img" 
                        />
                        LMS-Portal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="bg-info"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">My Profile</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="d-flex flex-column flex-lg-row align-items-start w-100">
                                {/* Links Section - Centered on Large Screens, Stacked on Small Screens */}
                                <div className="d-flex justify-content-center flex-grow-1 flex-column flex-lg-row">
                                    {['Dashboard', 'Practice', 'Assessment'].map((link) => (
                                        <Nav.Link
                                            key={link}
                                            className="text-white nav-link-custom mb-3 mb-lg-0 mx-2" // Added mx-2 for horizontal spacing
                                            onClick={() => navigate(`/${link.toLowerCase()}`)}
                                        >
                                            <span>{link}</span>
                                        </Nav.Link>
                                    ))}
                                </div>

                                {/* Profile Image Section - aligned to the right on large screens */}
                                <Nav.Link 
                                    className="text-white mb-3 mb-lg-0 ms-lg-auto order-first order-lg-last" 
                                    onClick={handleProfileToggle}
                                >
                                    <img 
                                        src={profileImage} 
                                        alt="Profile" 
                                        className="profile-img"
                                    />
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* Profile Offcanvas */}
            <Offcanvas show={showProfile} onHide={handleProfileToggle} placement="end" className="bg-light">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>User Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="text-center mb-3">
                        <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="profile-img-large"
                        />
                    </div>
                    <h5 className="text-center">Name: {firstName} {secondName}</h5>
                    <p className="text-center">Email: {email}</p>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" onClick={() => navigate('/profile')}>View Profile</Button>
                        <Button variant="danger" className="ms-2" onClick={handleLogout}>Logout</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default InsideNav;
