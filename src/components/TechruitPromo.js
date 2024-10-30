import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const techruitPoints = [
    {
        title: "Accurate Assessments",
        description: "Techruit uses AI-based scoring to ensure accurate and unbiased assessment of candidates' skills.",
        logo: "https://img.icons8.com/color/48/000000/assessment.png" // Example icon
    },
    {
        title: "Seamless Integration",
        description: "Integrate Techruit seamlessly with your existing HR tools and platforms for a smooth workflow.",
        logo: "https://img.icons8.com/color/48/000000/integration.png" // Example icon
    },
    {
        title: "Anti-Cheating Measures",
        description: "Our platform includes robust anti-cheating measures to ensure the integrity of the assessment process.",
        logo: "https://img.icons8.com/color/48/000000/stop.png" // Example icon
    },
    {
        title: "Detailed Analytics",
        description: "Get in-depth insights and analytics on candidate performance to make informed hiring decisions.",
        logo: "https://img.icons8.com/color/48/000000/analytics.png" // Example icon
    },
    {
        title: "Remote Testing",
        description: "Conduct assessments remotely, saving time and resources, and increasing candidate participation.",
        logo: "https://img.icons8.com/color/48/000000/remote-desktop.png" // Example icon
    }
];

function TechruitPromo() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Why is Techruit Preferred for Pre-Employment Testing?</h2>
            <Row className="g-4 justify-content-center">
                {techruitPoints.map((point, index) => (
                    <Col key={index} md={4} className="d-flex">
                        <Card className="flex-fill" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                            <Card.Body className="text-center">
                                <div className="step-number" style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>{index + 1}</div>
                                <img src={point.logo} alt={point.title} className="mb-3" style={{ width: '60px', height: '60px' }} />
                                <Card.Title>{point.title}</Card.Title>
                                <Card.Text>{point.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TechruitPromo;
