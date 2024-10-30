import React from 'react';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';
import ReviewCards from './ReviewCards';
import HiringSteps from './HiringSteps';
import TechnologieSkills from './TechnologySkills';
import TechruitHead from './TechruitHead';
import TechruitPromo from './TechruitPromo';
import TechruitBanner from './TechruitBanners';

const banner1 = {
    backgroundImage: 'https://t4.ftcdn.net/jpg/04/18/12/21/240_F_418122150_BSLIV33qMrdJvM5dSr01vMky0EG0BTCC.jpg',
    points: [
        "“Recruitment made easy with our innovative solutions.”",
        "“Find the right talent effortlessly with our platform.”",
        "“Streamline your hiring process in just a few clicks.”"
    ]
};

const banner2 = {
    backgroundImage: 'https://t3.ftcdn.net/jpg/02/10/55/60/240_F_210556027_pNmg4EUFwrn2W25SDdWayPakVIztTSe8.jpg',
    points: [
        "“Empowering teams to build their dream workforce.”",
        "“Evaluate skills accurately and fairly.”",
        "“Enhance your candidate experience with our tools.”"
    ]
};
const banner4 = {
    backgroundImage: 'https://t4.ftcdn.net/jpg/03/92/76/55/240_F_392765556_c6QicoSHKnF01IjVEOwlWl6gmp6LDIWf.jpg',
    points: [
        "“Recruitment technology that adapts to your needs.”",
        "“Innovative solutions for modern recruitment challenges.”",
        "“Revolutionize your hiring process with our platform.”"
    ]
};

const banner5 = {
    backgroundImage: 'https://t3.ftcdn.net/jpg/02/44/56/70/240_F_244567019_SRb5i27LHFzblS6dpOhDUu8nsdRgmgh5.jpg',
    points: [
        "“Elevate your recruitment strategy with data-driven insights.”",
        "“Achieve excellence in hiring with our cutting-edge tools.”",
        "“Transforming recruitment, one hire at a time.”"
    ]
};

function Techruit() {
    return (
        <div>
            <Navbar />
            <div style={{ height: '50px' }}></div>
            <TechruitHead />
            <TechruitBanner {...banner1} />
            <TechruitPromo />
            <TechruitBanner {...banner5} />
            <HiringSteps />
            <TechruitBanner {...banner4} />
            <TechnologieSkills />
            <TechruitBanner {...banner2} />
            <ReviewCards />
            <div style={{ height: '50px' }}></div>
            <HomeFooter />
        </div>
    );
}

export default Techruit;
