import React from 'react';
import { Card } from 'react-bootstrap';

function DashboardHead({ userName }) {
    const cardStyle = {
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/88/62/32/240_F_288623293_iDK3bYl6ZMUUwQ7MhlqLynWg3LkuespD.jpg)',
        backgroundSize: 'cover', // Cover the entire card
        backgroundPosition: 'center', // Center the image
        color: 'white', // Set text color to white for contrast
        position: 'relative',
        padding: '20px',
        borderRadius: '8px', // Optional: for rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Optional: shadow effect
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
        borderRadius: '8px',
        zIndex: 1, // Ensure the overlay is below the text
    };

    return (
        <div className='m-5'>
            <Card style={cardStyle}>
                <div style={overlayStyle}></div> {/* Overlay */}
                <Card.Body style={{ position: 'relative', zIndex: 2 }}> {/* Card Body with higher z-index */}
                    <Card.Title className="text-center">
                        Hi {userName}, Welcome Back!
                    </Card.Title>
                    <Card.Text className="text-center">
                        <h2>Let's Prepare, Practice, and Perform!</h2>
                        <p>Your journey towards mastering skills starts here.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DashboardHead;
