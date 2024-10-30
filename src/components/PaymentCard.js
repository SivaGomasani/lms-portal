import React, { useState } from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';
import { FaGooglePay, FaPhone } from 'react-icons/fa';
import { SiPaytm, SiAmazonpay } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';

function PaymentCard() {
    const [selectedOption, setSelectedOption] = useState('');
    const [showCodeField, setShowCodeField] = useState(false);
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePay = () => {
        setShowCodeField(true);
    };

    const handleSubmitCode = () => {
        alert('Payment Successful');
        navigate(-1); // Go back to the previous page
    };

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className="m-3" style={{ width: '300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)', height: '400px' }}>
                    <Card.Header style={{ fontWeight: 'bold' }}>Select Payment Method</Card.Header>
                    <Card.Body>
                        <Form>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label={<><FaGooglePay size={24} /> Google Pay</>}
                                        name="paymentOptions"
                                        value="Google Pay"
                                        onChange={handleSelect}
                                        checked={selectedOption === 'Google Pay'}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label={<><FaPhone size={24} /> PhonePe</>}
                                        name="paymentOptions"
                                        value="PhonePe"
                                        onChange={handleSelect}
                                        checked={selectedOption === 'PhonePe'}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label={<><SiPaytm size={24} /> Paytm</>}
                                        name="paymentOptions"
                                        value="Paytm"
                                        onChange={handleSelect}
                                        checked={selectedOption === 'Paytm'}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label={<><SiAmazonpay size={24} /> Amazon Pay</>}
                                        name="paymentOptions"
                                        value="Amazon Pay"
                                        onChange={handleSelect}
                                        checked={selectedOption === 'Amazon Pay'}
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                            {showCodeField && (
                                <Form.Group className="mt-3">
                                    <Form.Label>Enter Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="Enter your payment code"
                                    />
                                    <Button variant="success" className="mt-3" onClick={handleSubmitCode} block>Submit Code</Button>
                                </Form.Group>
                            )}
                        </Form>
                        {!showCodeField && (
                            <Button variant="primary" className="mt-3" onClick={handlePay} block>Proceed to Pay</Button>
                        )}
                    </Card.Body>
                </Card>
            </div>
            <HomeFooter />
        </div>
    );
}

export default PaymentCard;
