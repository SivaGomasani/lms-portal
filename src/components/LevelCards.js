import React from 'react';
import { Col, Card, Button, Container, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { FaChartLine, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const gaugeData = {
    datasets: [{
        data: [50, 50], // Level progress data
        value: 50,
        backgroundColor: ['#28a745', '#dc3545'], // Green for completed, red for remaining
        borderWidth: 0,
    }]
};

const gaugeOptions = {
    rotation: -90,
    circumference: 180,
    cutout: '80%',
    plugins: {
        tooltip: { enabled: false },
        datalabels: {
            display: true,
            align: 'center',
            backgroundColor: '#fff',
            borderRadius: 3,
            font: { size: 18 },
            formatter: (value, context) => `${context.chart.data.datasets[0].value}%`,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
};

function LevelCards() {
    const cardStyle = { 
        height: '300px', 
        boxShadow: '0 0 15px rgba(0,0,0,0.2)', 
        borderRadius: '8px',
        overflow: 'hidden'
    };

    const chartContainerStyle = { 
        width: '100%', 
        maxWidth: '160px', 
        height: '130px', 
        margin: '0 auto' 
    };
    const navigate = useNavigate();
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Progress & Promotions</h2>
            <Row className="justify-content-center g-4">
                <Col md={6} xs={12}>
                    <Card border="info" style={cardStyle} className="text-center">
                        <Card.Header className="bg-info text-white">
                            <FaChartLine size={20} className="me-2" />
                            Current Level
                        </Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted text-center mb-3">
                                Track your current progress level. Higher levels unlock more opportunities!
                            </p>
                            <div style={chartContainerStyle}>
                                <Doughnut data={gaugeData} options={gaugeOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xs={12}>
                    <Card border="danger" style={cardStyle} className="text-center">
                        <Card.Header className="bg-danger text-white">
                            <FaBookOpen size={20} className="me-2" />
                            Promotions
                        </Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted text-center mb-3">
                                Improve your expertise by exploring our skill packages. Unlock new achievements with each level.
                            </p>
                            <Button variant="danger" onClick={()=>navigate('/practice')}>
                                Buy Packages
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LevelCards;
