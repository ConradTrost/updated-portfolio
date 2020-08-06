import React, { Component } from 'react'
import Projects from '../Projects';
import Navbar from '../Navbar';

export class ProjectPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Projects />
            </div>
        )
    }
}

export default ProjectPage
