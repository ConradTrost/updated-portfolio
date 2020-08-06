import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'

class Projects extends Component {
    render() {

        const projects = [
            {
                name: 'NEOO',
                link: 'https://github.com/retro1967/NEOO'
            },
            {
                name: 'Motor Services',
                link: 'https://github.com/retro1967/motor-services'
            }
        ];

        return (
            <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                <Row >
                    <Col lg={true}>
                        <div className="project-box featured">
                            <img src={featured} alt={featured} className="project-img" />
                            <h4>NEOO</h4>
                        </div>
                    </Col>

                    <Col lg={true}>
                        <div className="project-box">
                            <img src={car} alt={car} className="project-img" />
                        </div>
                        <div className="project-box">
                            <img src={car} alt={car} className="project-img" />
                        </div>
                    </Col>
                    
                    <Col lg={true}>
                        <div className="project-box">
                            <img src={car} alt={car} className="project-img" />
                        </div>
                        <div className="project-box">
                            <img src={car} alt={car} className="project-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects
