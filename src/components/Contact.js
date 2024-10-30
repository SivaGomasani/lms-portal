import React from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const changeBg = {
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:sivagomasani01@gmail.com?subject=Book a Call&body=Hi, I would like to book a call.';
    };

    return (
        <Container style={changeBg} fluid className='mt-5 mb-5'>
            <Row>
                <Col lg={6} xs={12} className="mb-4">
                    <Card className='bg-primary text-white h-100' style={{boxShadow:'0 0 10px black'}}>
                        <Card.Body className='p-lg-5 p-4 text-start'>
                            <h3 className='mt-lg-5 mb-lg-5 mt-3 mb-3'>GET STARTED</h3>
                            <h1 className='mt-lg-5 mb-lg-5 mt-3 mb-3'>Ready to become the next success story?</h1>
                            <ul className="list-unstyled">
                                <li className='mt-lg-5 mt-3'><FaCheck className='me-2' />Discover new courses & preparatory materials</li>
                                <li className='mt-lg-5 mt-3'><FaCheck className='me-2' />Practice with our company-specific mock tests</li>
                                <li className='mt-lg-5 mt-3'><FaCheck className='me-2' />Improve your performance using our Advanced Analytics</li>
                                <li className='mt-lg-5 mt-3'><FaCheck className='me-2' />Ace the interviews and launch your career</li>
                                <li className='mt-lg-5 mt-3'><FaCheck className='me-2' />Get access to special courses and programs</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12} className="mb-4">
                    <Card className='h-100' style={{boxShadow:'0 0 10px',background:'grey'}}>
                        <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/05/89/92/50/240_F_589925063_ecQvtkwNAEnB7Nd9ad3hM7GOP0lae694.jpg" />
                        <Card.Body className='p-lg-5 p-4'>
                            <p>Drop your details below</p>
                            <input type='text' placeholder='Your name' className='form-control mb-3'></input>
                            <input type='text' placeholder='Contact number' className='form-control mb-3'></input>
                            <input type='email' placeholder='Email' className='form-control mb-3'></input>
                            <Card.Text>
                                By clicking "Book a Call," you accept our terms and will also receive exclusive offers, updates about new courses, and packages.
                            </Card.Text>
                            <Button variant="primary" onClick={handleEmailClick}>Book a Call</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
