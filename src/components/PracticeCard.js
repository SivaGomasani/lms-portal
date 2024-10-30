import React, { useState } from 'react';
import { Button, Card, Nav, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PracticeCard() {
    const [activeTab, setActiveTab] = useState('#all');

    const cardContent = {
        '#all': [
            { title: 'JavaScript', text: 'A powerful language for web development.', img: 'https://t3.ftcdn.net/jpg/03/90/71/10/240_F_390711002_zFcHIFdJ03BKUTXJ9yrwXRT23RqDmPZc.jpg', status: 'free', price: 'Free' },
            { title: '.NET', text: 'Ideal for enterprise applications.', img: 'https://t4.ftcdn.net/jpg/00/32/71/61/240_F_32716141_OS0p7YfbsMs8xRRP3MgkmDvNJ2JeTYRh.jpg', status: 'paid', price: '$19.99' },
            { title: 'C++', text: 'An essential language for system programming.', img: 'https://t4.ftcdn.net/jpg/03/62/33/65/240_F_362336576_p9B6TtSeEfNPfgNirlMt7xe7Jd09AE5q.jpg', status: 'premium', price: '$29.99' }
        ],
        '#free': [
            { title: 'PHP', text: 'A popular choice for server-side scripting.', img: 'https://t4.ftcdn.net/jpg/02/94/13/51/240_F_294135112_biYo5rsBTqWQlzWdC53jCQnivASOz5xQ.jpg', status: 'free', price: 'Free' },
            { title: 'HTML/CSS', text: 'Fundamentals for building web layouts.', img: 'https://t4.ftcdn.net/jpg/05/08/59/73/240_F_508597378_uTMYsSdqRB9l6mJqLURsUlQMv95SJoXW.jpg', status: 'free', price: 'Free' },
        ],
        '#paid': [
            { title: 'Java', text: 'A versatile language used globally.', img: 'https://t4.ftcdn.net/jpg/04/42/21/91/240_F_442219135_kbXNuz82DCCxgEOt2GGAxyo2EvNCA7Q3.jpg', status: 'paid', price: '$19.99' },
            { title: 'Python', text: 'Great for data science and machine learning.', img: 'https://t4.ftcdn.net/jpg/03/16/16/79/240_F_316167997_mZRA3nERj6eLVXE41f8DwcIZhOXWbOoE.jpg', status: 'paid', price: '$19.99' }
        ],
        '#enrolled': [
            { title: 'React.js', text: 'A JavaScript library for building UIs.', img: 'https://t3.ftcdn.net/jpg/02/18/15/40/240_F_218154074_DtkUgqkC2SKy64I0NpC9qjNd3U6RJNtM.jpg', status: 'enrolled', price: '$14.99' }
        ],
        '#premium': [
            { title: 'Java Full Stack', text: 'Comprehensive full-stack Java development.', img: 'https://t4.ftcdn.net/jpg/07/60/53/41/240_F_760534146_C1bVoGKWLqTl5fy1o1tKkyR2giGEyfJP.jpg', status: 'premium', price: '$29.99' }
        ],
        '#public': [
            { title: 'Web Technologies', text: 'Overview of essential web development skills.', img: 'https://t3.ftcdn.net/jpg/08/34/50/38/240_F_834503863_LPuzvK1AcXl1ff5HXeGdsBmGaANZFxu1.jpg', status: 'public', price: 'Free' }
        ]
    };

    const combinedContent = Object.values(cardContent).flat();
    const displayContent = activeTab === '#all' ? combinedContent : cardContent[activeTab];

    return (
        <Card className='m-5 '>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#all" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                    <Nav.Item><Nav.Link eventKey="#all">All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#free">Free</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#paid">Paid</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#enrolled">Enrolled</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#premium">Premium</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="#public">Public</Nav.Link></Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Row>
                    {displayContent.map((content, index) => (
                        <Col md={4} key={index}>
                            <Card className='mb-3' style={{ minHeight: '350px', boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={content.img} className="card-img-top" alt={content.title} style={{ maxHeight: '150px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{content.title}</Card.Title>
                                    <Card.Text>{content.text}</Card.Text>
                                    <p><strong>Price: {content.price}</strong></p>
                                    <div>
                                        {content.status === 'free' && <Button variant="success">Free</Button>}
                                        {content.status === 'enrolled' && <Button variant="primary">Continue</Button>}
                                        {content.status === 'paid' && <Button variant="warning">Buy Now</Button>}
                                        {content.status === 'premium' && <Button variant="danger">Special Offer</Button>}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PracticeCard;
