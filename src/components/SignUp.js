import React, { useState } from 'react';
import { Container, Form, Button, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';

function SignUp({ onToggle }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [agree, setAgree] = useState(false);
    const [profileImage, setProfileImage] = useState(''); // State for profile image

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Save user details and profile image to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('secondName', secondName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('dob', dob);
        localStorage.setItem('gender', gender);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('agree', agree);
        localStorage.setItem('profileImage', profileImage); // Save profile image to localStorage
        alert('Signup successful!');
        navigate('/lms-portal'); // Redirect to home page after signup
    };

    return (
        <div>
            <div className='mt-5' style={{ height: '100px' }}></div>
            <Navbar />
            <Container
                className="mt-5 p-4 border rounded shadow"
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/86/46/13/240_F_586461382_JQfHWO7Izj1RzdbZVx6rMhoWcwY9HpDO.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white' // Optional: to ensure text is visible against the background
                }}
            >
                <h2 className="text-center" style={{ textDecoration: 'underline', color: '#f39c12' }}>Sign Up</h2> {/* Change color here */}
                <Form onSubmit={handleSignup}>
                    <Form.Group controlId="formProfileImage" className="mb-3 text-center">
                        <Form.Label style={{ textAlign: 'left' }}>Profile Image</Form.Label>
                        <div className="mb-3">
                            {profileImage && <Image src={profileImage} roundedCircle width={80} height={80} />}
                        </div>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formUsername">
                                <Form.Label style={{ textAlign: 'left' }}>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formFirstName">
                                <Form.Label style={{ textAlign: 'left' }}>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formSecondName">
                                <Form.Label style={{ textAlign: 'left' }}>Second Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter second name"
                                    value={secondName}
                                    onChange={(e) => setSecondName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formEmail">
                                <Form.Label style={{ textAlign: 'left' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formPassword">
                                <Form.Label style={{ textAlign: 'left' }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formDob">
                                <Form.Label style={{ textAlign: 'left' }}>Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formGender">
                                <Form.Label style={{ textAlign: 'left' }}>Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="formMobile">
                                <Form.Label style={{ textAlign: 'left' }}>Mobile Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formAgree" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Agree to terms and conditions"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }}>
                        Sign Up
                    </Button>
                </Form>
                <div className="mt-4 text-start">
                    <p>Already have an account?</p>
                    <Button variant="secondary" onClick={() => navigate('/login')} style={{ width: '100%' }}>
                        Login
                    </Button>
                </div>
            </Container>
            <div className='mt-5' style={{ height: '100px' }}></div>
            <HomeFooter />
        </div>
    );
}

export default SignUp;
