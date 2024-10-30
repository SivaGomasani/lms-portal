import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        // Retrieve user details from localStorage
        setFirstName(localStorage.getItem('firstName') || '');
        setSecondName(localStorage.getItem('secondName') || '');
        setEmail(localStorage.getItem('email') || '');
        setDob(localStorage.getItem('dob') || '');
        setGender(localStorage.getItem('gender') || '');
        setMobile(localStorage.getItem('mobile') || '');
        setProfileImage(localStorage.getItem('profileImage') || 'default_profile_image_url.png'); // Fallback to a default image
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResetImage = () => {
        // Reset to default profile image
        setProfileImage('default_profile_image_url.png'); // Change this to your default image URL
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Save updated details to localStorage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('secondName', secondName);
        localStorage.setItem('email', email);
        localStorage.setItem('dob', dob);
        localStorage.setItem('gender', gender);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('profileImage', profileImage);
        alert('Profile updated successfully!');
    };

    return (
        <Container className="mt-5 p-4 border" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="text-center mb-4">Edit Profile</h2>
            <Form onSubmit={handleSave}>
                <Form.Group controlId="formProfileImage" className="mb-3 text-center">
                    <Form.Label>Profile Image</Form.Label>
                    <div className="mb-3">
                        <Image src={profileImage} roundedCircle width={80} height={80} />
                    </div>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {profileImage !== 'default_profile_image_url.png' && (
                        <Button variant="secondary" onClick={handleResetImage} className="mt-2">
                            Reset Image
                        </Button>
                    )}
                </Form.Group>
                <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formSecondName" className="mb-3">
                    <Form.Label>Second Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={secondName}
                        onChange={(e) => setSecondName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formDob" className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formGender" className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formMobile" className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">Save Changes</Button>
                </div>
            </Form>
        </Container>
    );
};

export default EditProfile;
