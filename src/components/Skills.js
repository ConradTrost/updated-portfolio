import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as YourSVG } from '../assets/images/myself_seo.svg';

class Project2 extends Component {
    render() {

        return (
            <Container className="skill-container" fluid>
                <Row className="skill-row">
                    <Col className="display-3 skill-header">My Skills</Col>
                </Row>
                <Row className="skill-rows">
                    <Col md={4}>
                        <YourSVG className="skill-svg" />
                    </Col>

                    <Col md={8}>
                        <h4 className="display-4" >React</h4>
                        <div className="lead">I am mainly focused in React.js as I find this framework to be the quickest and most reliable in terms of interchangeability.</div>
                    </Col>
                </Row>
                <Row className="skill-rows">
                <Col md={8}>
                        <p>Full-stack web developer specialized in Javascript and Node.js.</p>
                        <p>Experienced front-end designer. I use Figma to create prototypes before developing the design in <span className="highlighted">CSS</span> and <span className="highlighted">React</span>.</p>
                        <p>Back-end architect with an established understanding of <span className="highlighted">Node.js, Express.js, SQL</span> and <span className="highlighted">server-side APIs.</span></p>
                        <p>My main focus is quick loading times and minimal data usage. My main skill trait is my ability to learn quickly, efficiently, and well.</p>
                        <p>I have always been a self-learner and I am proud to say that I have a developed ability to grasp new concepts and retain new information.</p>
                    </Col>

                    <Col md={4}>
                        <img alt="Animated self in front of whiteboard" className="skill-svg" src={require('../assets/images/myself_wb.svg')} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Project2
