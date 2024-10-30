import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFooter from './HomeFooter';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Bootcamp() {

    const navigate = useNavigate();
    const bootcampDetails = {
        title: 'Full-Stack Web Development Bootcamp',
        description: 'Our Full-Stack Web Development Bootcamp is designed to transform you into a proficient full-stack developer. Learn everything from front-end to back-end development, including HTML, CSS, JavaScript, React, Node.js, and databases.',
        startDate: 'January 15, 2024',
        duration: '12 Weeks',
        schedule: 'Monday to Friday, 9:00 AM to 5:00 PM',
        price: '$3,500',
        curriculum: [
            'HTML, CSS, and JavaScript Basics',
            'Responsive Web Design',
            'Advanced JavaScript and ES6',
            'React.js for Front-End Development',
            'Node.js and Express for Back-End Development',
            'Working with Databases (MongoDB, SQL)',
            'RESTful API Development',
            'Version Control with Git and GitHub',
            'Deployment and CI/CD',
            'Capstone Project'
        ],
        benefits: [
            'Hands-on Learning Experience',
            'Experienced Instructors',
            'Job Assistance and Career Services',
            'Access to Exclusive Learning Materials',
            'Certification upon Completion'
        ]
    };

    return (
        <div>
            <Navbar />
            <div style={{ height: '50px' }}></div>
            <Container className="mt-5 mb-5">
                <Row className="mb-4 text-center">
                    <Col>
                        <h1 style={{color:'blue'}}>{bootcampDetails.title}</h1>
                        <p>{bootcampDetails.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} className="mb-4">
                        <Card border="info" style={{ boxShadow: '0 0 10px' }}>
                            <Card.Header>Bootcamp Details</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><strong>Start Date:</strong> {bootcampDetails.startDate}</ListGroup.Item>
                                    <ListGroup.Item><strong>Duration:</strong> {bootcampDetails.duration}</ListGroup.Item>
                                    <ListGroup.Item><strong>Schedule:</strong> {bootcampDetails.schedule}</ListGroup.Item>
                                    <ListGroup.Item><strong>Price:</strong> {bootcampDetails.price}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} className="mb-4">
                        <Card border="primary" style={{ boxShadow: '0 0 10px' }}>
                            <Card.Header>Curriculum</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    {bootcampDetails.curriculum.map((item, index) => (
                                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card border="success" className="mb-4" style={{ boxShadow: '0 0 10px' }}>
                            <Card.Header>Bootcamp Benefits</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    {bootcampDetails.benefits.map((benefit, index) => (
                                        <ListGroup.Item key={index}>{benefit}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="primary" size="lg" onClick={()=>navigate('/')}>Enroll Now</Button>
                    </Col>
                </Row>
            </Container>
            <HomeFooter />
        </div>
    );
}

export default Bootcamp;
