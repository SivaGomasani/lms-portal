import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user details from localStorage
        const storedDetails = {
            firstName: localStorage.getItem('firstName') || 'Siva',
            secondName: localStorage.getItem('secondName') || 'Gomasani',
            email: localStorage.getItem('email') || 'siva.gomasani@example.com',
            dob: localStorage.getItem('dob') || 'Not provided',
            gender: localStorage.getItem('gender') || 'Not provided',
            mobile: localStorage.getItem('mobile') || 'Not provided',
            profileImage: localStorage.getItem('profileImage') || 'default_profile_image_url.png' // Fallback to a default image
        };
        setUserDetails(storedDetails);
    }, []);

    return (
        <Container className="mt-5 p-4 border" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="text-center mb-4">My Profile</h2>
            <div className="text-center mb-3">
                <img
                    src={userDetails.profileImage}
                    alt="Profile"
                    style={{ width: 80, height: 80, borderRadius: '50%' }}
                />
            </div>
            <h5>Name: {userDetails.firstName} {userDetails.secondName}</h5>
            <p>Email: {userDetails.email}</p>
            <p>Date of Birth: {userDetails.dob}</p>
            <p>Gender: {userDetails.gender}</p>
            <p>Mobile Number: {userDetails.mobile}</p>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={() => navigate('/edit-profile')}>Edit Profile</Button>
            </div>
        </Container>
    );
};

export default Profile;
