import React from 'react';
import { Carousel, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Courses() {
    const navigate = useNavigate();

    const handleBuyCourse = (courseName) => {
        navigate('/payment', { state: { course: courseName } });
    };

    return (
        <Carousel fade>
            <Carousel.Item>
                <Image
                    src="https://t3.ftcdn.net/jpg/02/01/05/22/240_F_201052212_M2wpoRcv9qpysoPtHB8ruwnRekrVkHEx.jpg"
                    alt="JAVA"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>JAVA</h3>
                    <p>Master the fundamentals of Java programming.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse("JAVA")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="https://t4.ftcdn.net/jpg/07/89/02/19/240_F_789021968_hL0tr4b8b3ht9jNUjDISZlqsAWFfM2lf.jpg"
                    alt="MYSQL"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>MYSQL</h3>
                    <p>Learn MySQL for efficient database management.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse("MYSQL")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="https://t3.ftcdn.net/jpg/09/02/92/76/240_F_902927667_mPq9uHwLeRZ0fn5iWzhcP7e87ScBY5aV.jpg"
                    alt="PYTHON"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>PYTHON</h3>
                    <p>Become proficient in Python programming.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse("PYTHON")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="https://t4.ftcdn.net/jpg/04/17/60/27/240_F_417602794_saSMN8zoAAOOBqr71XjY3YrNVFsP0htj.jpg"
                    alt="HTML/CSS"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>HTML/CSS</h3>
                    <p>Design stunning websites with HTML and CSS.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse("HTML/CSS")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="https://t3.ftcdn.net/jpg/09/27/05/76/240_F_927057640_TScsVj2j699rmQdNaIP3VEMFN7d6ktaX.jpg"
                    alt="MERN"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>MERN</h3>
                    <p>Full-stack development with MongoDB, Express, React, and Node.js.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse("MERN")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="https://t3.ftcdn.net/jpg/07/89/02/60/240_F_789026034_dyVsZVtBpZXFHlXvwyhY6rLlYWgd2bU0.jpg"
                    alt=".NET"
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>.NET</h3>
                    <p>Develop robust applications with the .NET framework.</p>
                    <Button variant="primary" onClick={() => handleBuyCourse(".NET")}>Buy Course</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Courses;
