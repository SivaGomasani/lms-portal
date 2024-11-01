import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeCard() {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/16/91/28/240_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '50px 0', 
    border: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100%', 
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Card style={cardStyle}>
        <Row>
          <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
            <h1 style={{ color: 'red' }}>Be Future-Proof</h1>
            <h3>Master the skills and build your career in tech</h3>
            <Button
              style={{ 
                background: 'linear-gradient(45deg, blue, orange)', 
                color: 'aqua', 
                width: '150px', 
                marginLeft: '100px', 
              }} 
              className="mt-2"
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </Button>
          </Col>
          
          {/* Image Section */}
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
            <Card.Img
              variant="top"
              src="https://terv.pro/static/media/Banner-img.83743109.png"
              style={{ maxHeight: '300px', objectFit: 'contain', width: '80%', margin: '0 auto' }} // Centered image
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default HomeCard;
