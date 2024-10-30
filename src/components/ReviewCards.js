import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'; // Star icon for ratings

const reviews = [
    {
        title: "TechCorp's Preferred Campus Hiring Partner",
        review: "We used TechCorp for conducting tests during our recent campus recruitment drive. The platform is user-friendly and extremely efficient. The session recording feature was invaluable. Overall, an excellent choice for remote online assessments.",
        reviewer: "Harsha Vardhan, Head of Recruitment",
        company: "TechCorp",
        rating: 4.8,
        logo: "https://t3.ftcdn.net/jpg/03/85/62/50/240_F_385625051_A7Wh9rznURWAfdDqu5p3XSZgJtvRWqCX.jpg" // Replace with actual logo URL
    },
    {
        title: "RetailCo's Trusted Campus Hiring Solution",
        review: "RetailCo ensures fair and precise candidate evaluation across a wide variety of skill assessments. A great partner for our hiring needs.",
        reviewer: "Malli Karjun, Senior Recruiter",
        company: "RetailCo",
        rating: 4.5,
        logo: "https://t4.ftcdn.net/jpg/02/08/91/15/240_F_208911586_Db3URtBNqOGZ8eb8rFODfFaIGB3LTMyW.jpg" // Replace with actual logo URL
    },
    {
        title: "An Exceptional Platform for IT Hiring",
        review: "This platform is easy to navigate and delivers outstanding results. The support team is incredibly helpful, always ready to assist. It has streamlined our hiring process, allowing us to focus on qualified candidates. I highly recommend this service to all recruiters.",
        reviewer: "Arjith, Talent Acquisition Manager",
        company: "CodeSolutions",
        rating: 4.9,
        logo: "https://t3.ftcdn.net/jpg/02/81/05/32/240_F_281053200_4S5CdTa86xCZx7OXA0XOENrrKAyQS7vN.jpg" // Replace with actual logo URL
    }
];

function ReviewCards() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">What Our Partners Say</h2> {/* Added Header */}
            <Row className="g-4">
                {reviews.map((review, index) => (
                    <Col key={index} md={4}>
                        <Card className="h-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                            <Card.Header className="d-flex align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
                                <img src={review.logo} alt={review.company} className="me-2" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                <div>
                                    <h5 className="mb-0">{review.company}</h5>
                                    <small>{review.reviewer}</small>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{review.title}</Card.Title>
                                <Card.Text>{review.review}</Card.Text>
                                <div className="d-flex align-items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color={i < review.rating ? '#FFD700' : '#e4e5e9'} />
                                    ))}
                                    <span className="ms-2">{review.rating}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ReviewCards;
