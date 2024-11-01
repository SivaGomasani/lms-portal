import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const linkStyles = (isHovered) => ({
        backgroundColor: isHovered ? '#007bff' : 'transparent', 
        color: '#ffffff',
        padding: '5px 10px',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    });

    return (
        <div className="home-page">
            <Navbar bg="primary" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white fw-bold">
                        <img 
                            src="https://t3.ftcdn.net/jpg/05/39/30/60/240_F_539306072_yjryDhkJv3orOtpe4AJx4SvdS2YkIrLr.jpg" 
                            alt="Logo" 
                            className="logo-img" 
                            style={{ height: '40px', marginRight: '10px' }} // Adjust height and margin
                        />
                        LMS-Portal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="bg-dark text-white"
                    >
                        <Offcanvas.Header closeButton closeVariant="white">
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">LMS-Portal</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={`align-items-center ${isLargeScreen ? 'flex-row justify-content-end w-100' : 'flex-column'}`}>
                                {/* Menu links */}
                                {['Home', 'Courses', 'Bootcamp', 'Techruit'].map((link, index) => (
                                    <Nav.Link
                                        key={link}
                                        href="#"
                                        className="text-white"
                                        onClick={() => navigate(link === 'Home' ? '/lms-portal' : `/${link.toLowerCase()}`)}
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                        style={linkStyles(hoverIndex === index)}
                                    >
                                        <span>{link}</span>
                                        {!isLargeScreen && <span style={{ marginLeft: "auto" }}>→</span>} 
                                    </Nav.Link>
                                ))}
                                <div className={`d-flex ${isLargeScreen ? 'align-items-center ms-2' : 'flex-column mt-3 w-100'}`}>
                                    {isLargeScreen ? (
                                        <>
                                            <Button 
                                                variant="danger" 
                                                className={`me-2`} 
                                                onClick={() => navigate('/signup')} 
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                Get Started
                                            </Button>
                                            <Button 
                                                variant="success" 
                                                onClick={() => navigate('/login')}
                                            >
                                                Login
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <label className="text-white mb-2">Create New Account</label>
                                            <Button 
                                                variant="outline-danger" 
                                                className={`mb-2`} 
                                                onClick={() => navigate('/signup')}
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                Get Started
                                            </Button>
                                            <label className="text-white mb-2">I Already Have an Account</label>
                                            <Button 
                                                variant="success" 
                                                onClick={() => navigate('/login')}
                                            >
                                                Login
                                            </Button>
                                        </>
                                    )}
                                </div>
                                <select className={`form-select text-dark ${isLargeScreen ? 'ms-2' : 'w-100 mt-3'}`} style={{ width: "200px" }}>
                                    <option>Change Language</option>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Home;
