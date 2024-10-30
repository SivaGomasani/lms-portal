import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const hiringSteps = [
    {
        title: "Step 1: Job Posting",
        description: "Create and publish job postings on various platforms to attract candidates.",
        logo: "https://img.icons8.com/color/48/000000/job.png" 
    },
    {
        title: "Step 2: Resume Screening",
        description: "Screen resumes to shortlist candidates who meet the requirements.",
        logo: "https://img.icons8.com/color/48/000000/resume.png" 
    },
    {
        title: "Step 3: Initial Interview",
        description: "Conduct initial interviews to assess candidates' skills and fit.",
        logo: "https://img.icons8.com/color/48/000000/interview.png" 
    },
    {
        title: "Step 4: Technical Assessment",
        description: "Evaluate candidates through technical assessments or coding challenges.",
        logo: "https://img.icons8.com/color/48/000000/assessment.png" 
    },
    {
        title: "Step 5: Final Interview",
        description: "Conduct final interviews to make the final selection.",
        logo: "https://img.icons8.com/color/48/000000/approval.png" 
    },
    {
        title: "Step 6: Offer Letter",
        description: "Send offer letters to selected candidates and initiate onboarding.",
        logo: "https://img.icons8.com/color/48/000000/offer.png" 
    }
];

function HiringSteps() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Hiring Process Steps</h2>
            <Row className="g-4 justify-content-center">
                {hiringSteps.map((step, index) => (
                    <Col key={index} md={4} className="d-flex">
                        <Card className="flex-fill" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                            <Card.Body className="text-center">
                                <div className="step-number" style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>{index + 1}</div>
                                <img src={step.logo} alt={step.title} className="mb-3" style={{ width: '60px', height: '60px' }} />
                                <Card.Title>{step.title}</Card.Title>
                                <Card.Text>{step.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HiringSteps;
