import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function TechruitHead() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                background: 'url(https://t3.ftcdn.net/jpg/02/61/53/06/240_F_261530621_GSo6USr4tNJc1670c0moKXI0x6bThcPn.jpg)',
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // No repeat in any direction
                color: '#fff',
                padding: '50px 0',
                textAlign: 'center',
                minHeight: '400px', // Ensures the div has a minimum height
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1>Recruit Candidates In Minutes</h1>
                        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                            With LMS-Portal, conduct assessments in under 60 seconds.
                            Make your recruitment process faster and more efficient.
                        </p>
                        <Button variant="primary" className="m-2" size="lg" onClick={() => navigate('/courses')}>
                            Explore Courses
                        </Button>
                        <Button variant="outline-danger" className="m-2" size="lg">
                            Use LMS-Portal for Recruitment
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={4}>
                        <img
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Candidate 1"
                            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                        />
                    </Col>
                    <Col md={4}>
                        <img
                            src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Candidate 2"
                            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                        />
                    </Col>
                    <Col md={4}>
                        <img
                            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Candidate 3"
                            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TechruitHead;
