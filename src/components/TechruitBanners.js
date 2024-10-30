import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TechruitBanner({ backgroundImage, points }) {
    return (
        <div className='mt-4'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                padding: '100px 0',
                textAlign: 'center',
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {points.map((point, idx) => (
                            <p key={idx} style={{ fontSize: '20px', margin: '20px 0' }}>
                                {point}
                            </p>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TechruitBanner;
