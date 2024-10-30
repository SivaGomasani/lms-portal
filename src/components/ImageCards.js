import React from 'react';
import { Card, Image, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageCards() {
    const imageStyle = {
        width: '100%',
        height: '100%', // Ensure the image takes full height
        objectFit: 'cover',
    };

    const textStyle = {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // Ensure the text div takes full height
    };
    const textColor = {
        color : 'orange',
    }



    return (
        <Container className='mt-5 mb-5'>
            <div className='mt-5 mb-3' style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 20px black'}}>
                <Image src="https://terv.pro/static/media/Desktop-2.480fe8c4.png" fluid className='' />
            </div>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 20px black'}}>
                <Row className="g-0">
                    <Col md={6} xs={12} className="order-md-2 order-xs-2 d-flex align-items-center">
                        
                        <Card.Body style={textStyle} className='mb-5'>
                            <div>
                                <h1 style={textColor} className='mb-5'>Learn by Doing</h1>
                                <Card.Text style={{color:'aqua'}}>
                                    Become a Super-Hero with a fully integrated, new age learning platform with multi-lingual programming features in a seamless execution environment bringing you close to the real world with assistance to solve every question with hints, test cases, video explanations, and solutions. All in one workspace with no installation or setup time.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col md={6} xs={12} className="order-md-1 order-xs-1">
                        <Image src='https://terv.pro/static/media/Frame2.d2941aa0.png' style={imageStyle} />
                    </Col>
                </Row>
            </Card>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 20px black'}}>
                <Card.Body>
                    <h1 style={{color:'white'}} className='mb-5'>Learn by Visualization</h1>
                    <Card.Text style={{color:'aqua'}}>
                        Learn in a fun & faster way with our highly engaging visual videos connecting to real world problem statements providing an in-depth conceptual understanding. Step-by-step code walkthrough helps you visualize what happens in the computer memory with each and every line of code execution.
                    </Card.Text >
                    <video className="card-video" autoPlay loop style={imageStyle}>
                        <source src="https://terv.pro/project.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Card.Body>
            </Card>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 20px black'}}>
                <Row className="g-0">
                    <Col md={6} xs={12} className="order-md-1 order-xs-2 d-flex align-items-center">
                        <Card.Body style={textStyle}>
                            <div>
                                <h1 style={{color:'orange'}}>Time - Space Complexity Analysis</h1>
                                <Card.Text style={{color:'aqua'}}>
                                    Become a Super-Hero with a fully integrated, new age learning platform with multi-lingual programming features in a seamless execution environment bringing you close to the real world with assistance to solve every question with hints, test cases, video explanations, and solutions. All in one workspace with no installation or setup time.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col md={6} xs={12} className="order-md-2 order-xs-1">
                        <Image src='https://terv.pro/static/media/Frame%204.1d35bbe2.png' style={imageStyle} />
                    </Col>
                </Row>
            </Card>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 20px black'}}>
                <Row className="g-0">
                    <Col md={6} xs={12} className="order-md-1 order-xs-1">
                        <Image src='https://t3.ftcdn.net/jpg/08/37/75/18/240_F_837751834_hFNH2jlU6pRhraSvZWt2x1hZ2gkrtljF.jpg' style={imageStyle} />
                    </Col>
                    <Col md={6} xs={12} className="order-md-2 order-xs-2 d-flex align-items-center">
                        <Card.Body style={textStyle}>
                            <div>
                                <h1 style={{color:'white'}}>Rich performance analytics</h1>
                                <Card.Text style={{color:'aqua'}}>
                                    With performance analytics, you can see the strengths, weaknesses, and progress with unmatched clarity. Individual and topic-level insights help you discover the areas of improvement time to time. Get awarded with points, badges, and rank up against the other candidates.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 15px black'}}>
                <Row className="g-0">
                    <Col md={6} xs={12} className="order-md-1 order-xs-2 d-flex align-items-center">
                        <Card.Body style={textStyle}>
                            <div>
                                <h1 style={{color:'orange'}}>Industry recognized certification</h1>
                                <Card.Text style={{color:'aqua'}}>
                                    Accelerate your career by earning an industry-recognized professional certification. With over 100,000+ professionals empowered, TERV certifications are recognized by the industry’s top employers. Certifications are awarded upon completion of our hand-picked courses.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col md={6} xs={12} className="order-md-2 order-xs-1">
                        <Image src='https://t4.ftcdn.net/jpg/02/18/00/89/240_F_218008955_sJ3BcGk6GdlFsIHkTG7w3FFkTrMFL8l3.jpg' style={imageStyle} />
                    </Col>
                </Row>
            </Card>
            <Card className="mb-5 mt-5 p-2" style={{backgroundColor:'rgba(50,50,50,1)',boxShadow:'0 0 15px black'}}>
                <Row className="g-0">
                    <Col md={6} xs={12} className="order-md-1 order-xs-1">
                        <Image src='https://t4.ftcdn.net/jpg/02/83/41/37/240_F_283413758_TSrbjopJBCuOJfGuHHYp1oTtMwBTgPy0.jpg' style={imageStyle} />
                    </Col>
                    <Col md={6} xs={12} className="order-md-2 order-xs-2 d-flex align-items-center">
                        <Card.Body style={textStyle} className='mb-5'>
                            <div>
                                <h1 style={{color:'white'}} className='mb-5'>Job Support & vast employer network</h1>
                                <Card.Text style={{color:'aqua'}}>
                                    Don't settle. Our global community of hiring partners includes the best companies across a range of hot industries. You get to engage with potential employer ahead of completion through 1-1 mock interview with feedback session and frequent networking sessions.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            
        </Container>
    );
}

export default ImageCards;
