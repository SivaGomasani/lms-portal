import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image,Carousel,ExampleCarouselImage} from 'react-bootstrap';
function SkillsFloat() {
    return (
        <Container className='mt-5 mb-4' >

            <h1 style={{color:'orange'}}><span style={{color:'blue'}}>#LMS </span>makes a difference at</h1>
            <h5>Tech Unicornd,Soonicorns, and MNCs..</h5>
            <Carousel fade>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default SkillsFloat;
