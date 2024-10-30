import React from 'react';
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';
import SkillsFloat from '../components/SkillsFloat';
import ImageCards from '../components/ImageCards';
import HomeFooter from '../components/HomeFooter';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import TechnologiesSkills from '../components/TechnologySkills';

function Home() {
    return (
        <div>
            <Navbar />
            <HomeCard />
            <SkillsFloat />
            <Courses />
            <TechnologiesSkills />
            <ImageCards />
            <Contact />
            <HomeFooter />
        </div>
    );
}

export default Home;
