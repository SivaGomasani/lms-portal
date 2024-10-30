import React from 'react';
import { Container, Row, Col, Card, Button, Image, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';
import { useNavigate } from 'react-router-dom';

function CourseCards() {
    const navigate = useNavigate();
    const cardStyle = {
        height: '500px',
        width: '350px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        border: 'none',
    };

    const courses = [
        {
            title: 'JAVA',
            text: 'Master the fundamentals of Java programming.',
            img: 'https://t4.ftcdn.net/jpg/02/92/83/57/240_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg',
            type: 'paid', // paid course
        },
        {
            title: 'MYSQL',
            text: 'Learn MySQL for efficient database management.',
            img: 'https://t4.ftcdn.net/jpg/04/85/28/63/240_F_485286363_D0kQmC7mT4yNEClUWzMiQ0EOHe6ssSNp.jpg',
            type: 'free', // free course
        },
        {
            title: 'PYTHON',
            text: 'Become proficient in Python programming.',
            img: 'https://t3.ftcdn.net/jpg/09/02/92/76/240_F_902927667_mPq9uHwLeRZ0fn5iWzhcP7e87ScBY5aV.jpg',
            type: 'enrolled', // enrolled course
        },
        {
            title: 'HTML/CSS',
            text: 'Design stunning websites with HTML and CSS.',
            img: 'https://t4.ftcdn.net/jpg/04/17/60/27/240_F_417602794_saSMN8zoAAOOBqr71XjY3YrNVFsP0htj.jpg',
            type: 'paid', // paid course
        },
        {
            title: 'MERN',
            text: 'Full-stack development with MongoDB, Express, React, and Node.js.',
            img: 'https://t3.ftcdn.net/jpg/09/27/05/76/240_F_927057640_TScsVj2j699rmQdNaIP3VEMFN7d6ktaX.jpg',
            type: 'free', // free course
        },
        {
            title: '.NET',
            text: 'Develop robust applications with the .NET framework.',
            img: 'https://t3.ftcdn.net/jpg/07/89/02/60/240_F_789026034_dyVsZVtBpZXFHlXvwyhY6rLlYWgd2bU0.jpg',
            type: 'enrolled', // enrolled course
        },
    ];

    return (
        <div>
            <Navbar />
            <div style={{height:'70px'}}></div>
            <Container className="mt-5">
                <Card className='mb-5 p-3' style={{boxShadow:'0 0 10px'}}>
                <h1 className="mb-4" style={{color:'blue'}}>Explore Our Courses</h1>
                <p className="mb-5">
                    Our comprehensive courses are designed to help you master the skills needed in today's competitive job market. Whether you're looking to learn a new programming language, get certified, or improve your existing skills, we have something for everyone. Explore our courses and take the next step in your career today!
                </p>
                </Card>
                <Row className="g-5">
                    {courses.map((course, index) => (
                        <Col key={index} lg={4} md={6} xs={12}>
                            <Card style={cardStyle} className="me-2">
                                <Image src={course.img} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} alt={course.title} />
                                <Card.Body>
                                    <Badge bg="success" className="mb-2">Offer</Badge>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.text}</Card.Text>
                                    {course.type === 'free' && <Button variant="success">Free</Button>}
                                    {course.type === 'enrolled' && <Button variant="secondary">Continue</Button>}
                                    {course.type === 'paid' && <Button variant="primary" onClick={() => navigate('/payment')}>Buy Course</Button>}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className='mt-5' style={{ height: '100px' }}></div>
            <HomeFooter />
        </div>
    );
}

export default CourseCards;
