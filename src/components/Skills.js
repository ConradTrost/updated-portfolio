import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as YourSvg } from '../assets/images/myself_seo.svg';

class Project2 extends Component {
    render() {

        return (
            <Container className="skill-container" fluid>
                <Row className="skill-row">
                    <Col className="display-3 skill-header">My Skills</Col>
                </Row>
                <Row className="skill-rows">
                    <Col md={3}>
                        <YourSvg className="skill-svg" />
                    </Col>

                    <Col md={8}>
                        <h4 className="display-4" >React</h4>
                        <div className="lead">I am mainly focused in React.js as I find this framework to be the quickest and most reliable in terms of interchangeability.</div>
                    </Col>
                </Row>
                <Row className="skill-rows">
                    <Col md={3}>
                        <YourSvg className="skill-svg" />
                    </Col>

                    <Col md={8}>
                        <h4 className="display-4" >React</h4>
                        <div className="lead">I am mainly focused in React.js as I find this framework to be the quickest and most reliable in terms of interchangeability.</div>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default Project2
