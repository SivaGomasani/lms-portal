import React from 'react';
import Card from 'react-bootstrap/Card';

function AssessmentHead() {
    const cardStyle = {
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/08/21/52/40/240_F_821524091_rrNAoS8KA0OYHHhG4ZAHA7oKbEMDtrwg.jpg)',
        backgroundSize: 'cover', // Cover the entire card
        backgroundPosition: 'center', // Center the image
        color: 'white', // Set text color to white for contrast
        position: 'relative',
        maxHeight: '150px',
        boxShadow: '0 0 10px black',
        borderRadius: '10px',
        overflow: 'hidden', // Prevent content overflow
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
        zIndex: 1, // Ensure the overlay is below the text
    };

    return (
        <Card style={cardStyle} className="m-4">
            <div style={overlayStyle}></div> {/* Overlay */}
            <Card.Body style={{ position: 'relative', zIndex: 2 }}> {/* Card Body with higher z-index */}
                <Card.Title className="text-center">Assessment</Card.Title>
                <Card.Text className="text-center">
                    Try our daily contests, hackathons, company-specific mock tests. With Aptitude, Coding, Written tests, and 6 other modules on a single platform, we've got you covered.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AssessmentHead;
