import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';

function Login({ onToggle }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            navigate('/dashboard'); // Navigate to dashboard upon successful login
        } else {
            alert('Invalid username or password');
        }
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', rememberMe);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='mt-5 mb-5' style={{ height: '100px' }}></div>
            <Container className="mt-5 border p-4" style={{
                maxWidth: '400px', 
                margin: '0 auto',
                backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/94/52/66/240_F_294526635_8Fc9IbBHWOC83JsiFNRNx5VivafEjiyi.jpg)', // Set the background image
                backgroundSize: 'cover', // Cover the entire container
                backgroundPosition: 'center', // Center the background image
                borderRadius: '10px', // Optional: round the corners

                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Optional shadow for depth
                color: '#ffffff', // Set text color to white for better contrast
            }}>
                <h2 className="text-center mb-4">Welcome to LMS-Portal</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formUsername" className="mb-3 text-start">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mb-3 text-start">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="mb-3 text-start">
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <a href="#forgot-password" style={{color:'red'}}>Forgot password?</a>
                    </Form.Text>
                    <br />
                    <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }}>
                        Login
                    </Button>
                </Form>
                <div className="mt-4 text-start">
                    <p>New to Portal?</p>
                    <Button variant="secondary" onClick={() => navigate('/signup')} style={{ width: '100%' }}>
                        Signup
                    </Button>
                </div>
            </Container>
            <div className='mt-5' style={{ height: '100px' }}></div>
            <HomeFooter />
        </div>
    );
}

export default Login;
