import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaAngular, FaPhp, FaGitAlt } from 'react-icons/fa'; // Importing icons for the skills

const skills = [
    {
        title: "Python",
        description: "A versatile programming language used for web development, data science, and automation.",
        icon: <FaPython size={50} color="#306998" />,
    },
    {
        title: "Java",
        description: "A robust and widely-used programming language for building enterprise-level applications.",
        icon: <FaJava size={50} color="#007396" />,
    },
    {
        title: "React",
        description: "A JavaScript library for building user interfaces, especially single-page applications.",
        icon: <FaReact size={50} color="#61DBFB" />,
    },
    {
        title: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, ideal for server-side applications.",
        icon: <FaNodeJs size={50} color="#8CC84B" />,
    },
    {
        title: "Databases",
        description: "Experience with various databases including SQL, NoSQL, and data modeling.",
        icon: <FaDatabase size={50} color="#D53B32" />,
    },
    {
        title: "HTML5",
        description: "The standard markup language for creating web pages and web applications.",
        icon: <FaHtml5 size={50} color="#E34F26" />,
    },
    {
        title: "CSS3",
        description: "A style sheet language used for describing the presentation of a document written in HTML.",
        icon: <FaCss3 size={50} color="#1572B6" />,
    },
    {
        title: "Angular",
        description: "A platform and framework for building single-page client applications using HTML and TypeScript.",
        icon: <FaAngular size={50} color="#E23237" />,
    },
    {
        title: "PHP",
        description: "A popular general-purpose scripting language that is especially suited to web development.",
        icon: <FaPhp size={50} color="#787CB5" />,
    },
    {
        title: "Git",
        description: "A distributed version-control system for tracking changes in source code during software development.",
        icon: <FaGitAlt size={50} color="#F34F29" />,
    },
];

function TechnologiesSkills() {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center mb-4">Technologies & Skills</h2>
            <Carousel interval={3000} // Set the interval to 3000ms (3 seconds) for auto slideshow
                controls={true} // Show carousel controls (prev/next)
                indicators={true} // Show indicators (dots)
            >
                {Array.from({ length: Math.ceil(skills.length / 3) }).map((_, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                            {skills.slice(index * 3, index * 3 + 3).map((skill, skillIndex) => (
                                <Card key={skillIndex} className="mx-3" style={{ width: '18rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                                    <Card.Body className="text-center">
                                        {skill.icon}
                                        <Card.Title className="mt-3">{skill.title}</Card.Title>
                                        <Card.Text>{skill.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default TechnologiesSkills;
