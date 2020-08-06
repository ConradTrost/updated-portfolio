import React, { Component } from 'react'
import Lottie from 'react-lottie';

import { Col, Row, Button } from 'react-bootstrap';
import FadeIn from "react-fade-in";

// Get compressed to load first?
import * as placeholder from '../../assets/images/placeholder.jpg';
import * as scrollData from '../../scrollLottie.json';
import Skills from '../Skills';

const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: scrollData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
  };

export class HomePage extends Component {
    render() {
        return (
            <div className="homeContain">
                <Row>
                    <div className="lottie1">
                            <Lottie className="lottie1" options={defaultOptions4} height={50} width={50} />
                    </div>
                    
                    <Col md={7} className="home-left">
                        <div className="inner-left">
                            <FadeIn delay="400">
                                <h1 className="display-1">I'm Conrad.<br></br> Nice to meet you.</h1>
                                <div class="subtext">
                                    <p className="lead">I am a full-stack web developer based in Dallas, Texas. 
                                    I find passion in creating things from lines of words and characters.</p>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="btn-holders">
                            <Button className="cta-btn" variant="outline-primary">Email</Button>
                            <Button className="cta-btn" variant="outline-primary">Resumé</Button>
                        </div>
                    </Col>
                    <Col md={5} className="home-right">
                        <FadeIn delay="200">
                            <img src={placeholder} alt={placeholder} />
                        </FadeIn>
                    </Col>
                </Row>
                <Skills  />
            </div>
        )
    }
}

export default HomePage;

