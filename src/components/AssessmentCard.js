import React, { useState } from 'react';
import { Button, Card, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AssessmentCard() {
    const [activeTab, setActiveTab] = useState('#active');

    const cardContent = {
        '#active': [
            { title: 'Week -8 Problem 1', text: 'Ongoing assessment covering array manipulations.', date: 'Oct 28, 2024', instructor: 'Dr. Jane Doe', difficulty: 'Medium', duration: '45 mins' },
            { title: 'Week -8 Problem 2', text: 'Coding challenge on data structures.', date: 'Oct 29, 2024', instructor: 'Mr. John Smith', difficulty: 'Hard', duration: '60 mins' },
            { title: 'Week -8 Problem 3', text: 'Logical reasoning and algorithms.', date: 'Oct 30, 2024', instructor: 'Ms. Anna Lee', difficulty: 'Medium', duration: '50 mins' }
        ],
        '#inactive': [
            { title: 'Week 2 Assessment', text: 'Expired assessment on basic JavaScript.', date: 'Sep 15, 2024', instructor: 'Mr. Jake', difficulty: 'Easy', duration: '30 mins' },
            { title: 'Week 5 Assessment', text: 'Expired SQL assessment.', date: 'Oct 5, 2024', instructor: 'Dr. Alice', difficulty: 'Medium', duration: '45 mins' },
            { title: 'Week 6 Assessment', text: 'Expired problem-solving assessment.', date: 'Oct 12, 2024', instructor: 'Ms. Emily', difficulty: 'Hard', duration: '55 mins' }
        ],
        '#completed': [
            { title: 'Week 1 Submission', text: 'Thank you for submitting!', date: 'Aug 28, 2024', instructor: 'Dr. Lee', difficulty: 'Easy', duration: '25 mins' },
            { title: 'Week 3 Submission', text: 'Submission received and reviewed.', date: 'Sep 10, 2024', instructor: 'Mr. Brown', difficulty: 'Medium', duration: '40 mins' },
            { title: 'Week 4 Submission', text: 'Thank you for completing the assessment!', date: 'Sep 17, 2024', instructor: 'Dr. Green', difficulty: 'Medium', duration: '35 mins' }
        ],
        '#upcoming': [
            { title: 'Week 9 Problem 1', text: 'Upcoming assessment on recursion.', date: 'Nov 5, 2024', instructor: 'Ms. Taylor', difficulty: 'Medium', duration: '50 mins' },
            { title: 'Week 9 Problem 2', text: 'Prepare for advanced sorting algorithms.', date: 'Nov 7, 2024', instructor: 'Mr. Oliver', difficulty: 'Hard', duration: '65 mins' },
            { title: 'Week 9 Bonus', text: 'Extra credit problem on dynamic programming.', date: 'Nov 9, 2024', instructor: 'Dr. White', difficulty: 'Advanced', duration: '70 mins' }
        ],
    };

    const combinedContent = Object.values(cardContent).flat();
    const displayContent = activeTab === '#' ? combinedContent : cardContent[activeTab];

    return (
        <Card className='m-3'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#active" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                    <Nav.Item><Nav.Link eventKey="#active">Active</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#inactive">Inactive</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#completed">Completed</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#upcoming">Upcoming</Nav.Link></Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Row>
                    {displayContent && displayContent.length > 0 ? displayContent.map((content, index) => (
                        <Col md={4} key={index}>
                            <Card className='mb-3' style={{ minHeight: '300px', boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.1)' }}>
                                <Card.Body>
                                    <Card.Title>{content.title}</Card.Title>
                                    <Card.Text>{content.text}</Card.Text>
                                    <p><strong>Date:</strong> {content.date}</p>
                                    <p><strong>Instructor:</strong> {content.instructor}</p>
                                    <p><strong>Difficulty:</strong> {content.difficulty}</p>
                                    <p><strong>Duration:</strong> {content.duration}</p>
                                    <div>
                                        {activeTab === '#active' && <Button variant="primary">Join Now</Button>}
                                        {activeTab === '#upcoming' && <Button variant="warning">Get Ready</Button>}
                                        {activeTab === '#completed' && <Button variant="success" disabled>Completed</Button>}
                                        {activeTab === '#inactive' && <Button variant="secondary" disabled>Expired</Button>}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : <p>No content available</p>}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default AssessmentCard;
