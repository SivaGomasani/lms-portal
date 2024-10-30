import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FaTasks, FaClipboardList } from 'react-icons/fa';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const TaskCards = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'blue' }} className='mb-4'>Your Dashboard</h1>
            <Container className="mt-4 px-4">
                <Row className="g-4 justify-content-center"> {/* Add justify-content-center for centering */}
                    {/* Assessments Card */}
                    <Col lg={4} md={6} xs={12}>
                        <Card border="success" className="h-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                            <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#28a745', color: 'white' }}>
                                <FaTasks size={24} className="me-2" />
                                <span>Assessments</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Slip Tests</Card.Title>
                                <p className="text-muted">Complete your active slip tests and monitor your assessment progress.</p>
                                <ul className="list-unstyled">
                                    {["Slip Test 1", "Slip Test 2", "Slip Test 3", "Slip Test 4", "Slip Test 5", "Slip Test 6"].map((test, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                                            <span>{test} - Active</span>
                                            <Button variant="primary" size="sm" onClick={() => navigate('/assessment')}>Start</Button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center mt-3">
                                    <Button variant="outline-success" onClick={() => navigate('/assessment')}>View More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Practice Packages Card */}
                    <Col lg={4} md={6} xs={12}>
                        <Card border="primary" className="h-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                            <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <FaClipboardList size={24} className="me-2" />
                                <span>Practice Packages</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Skill Packages</Card.Title>
                                <p className="text-muted">Track your progress in different practice packages to boost your skills.</p>
                                {["Advanced C++", "Advanced C", "Advanced Python", "Advanced .NET", "Advanced Java"].map((course, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>{course}</span>
                                            <Button variant="secondary" size="sm" onClick={() => navigate('/practice')}>View</Button>
                                        </div>
                                        <ProgressBar now={80} label={`${80}%`} className="mt-2" style={{ width: '100%' }} />
                                    </div>
                                ))}
                                <div className="text-center mt-3">
                                    <Button variant="outline-primary" onClick={() => navigate('/practice')}>View More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TaskCards;
