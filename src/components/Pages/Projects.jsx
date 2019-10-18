import React, { Component } from 'react';
import Card from '../ProjectCard';
import Fade from 'react-reveal/Fade';
import '../../styles/projects.css';
import next from '../../resources/next.png';
import prev from '../../resources/prev.png';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {   
                    title: "Magic Leap Fire and Smoke Simulation", 
                    src: 'https://www.youtube.com/embed/FAsff4sQhVA',
                    description: 'This was one of my favorite projects I worked on as an inter at NextThought. The goal to be able to train firefighters with Mixed Reality on the Magic Leap One. '
                },
                {   
                    title: "VR Basketball", 
                    src: 'https://www.youtube.com/embed/Fk8ASZspExE',
                    description: 'this is my description lllllllllllllllooooooooooooooooossssssssssssssssseeeeeeeeeeeeeeeeeerrrrrrrrrrrrrr'
                },
                {   
                    title: "Out of Time", 
                    src: 'https://www.youtube.com/embed/etH7VxiP1Ig',
                    description: 'this is my description lllllllllllllllooooooooooooooooossssssssssssssssseeeeeeeeeeeeeeeeeerrrrrrrrrrrrrr'
                },
                {
                    title: "Zombie Survival Game", 
                    src: 'https://www.youtube.com/embed/5qFOywGbokM', 
                    description: 'this is my description lllllllllllllllooooooooooooooooossssssssssssssssseeeeeeeeeeeeeeeeeerrrrrrrrrrrrrr'
                },
            ],
            cardIndex: localStorage.getItem('cardIndex') || 0, 
        };
    }

    render() {
        return (
            <div className="projectContainer">
                <div className="cardContainer">
                    <Fade right>
                        <Card project={this.state.projects[this.state.cardIndex]} />
                    </Fade>
                </div>
                <div className="arrow-1">
                    <input className="arrowImage" type="image" alt="previous project" src={prev} />
                </div>
                <div className="arrow-2">
                    <input className="arrowImage" type="image" alt="next project" src={next} />
                </div>
                <div className="pageIndicatorContainer">
                    {this.state.projects.map((p, i) => (
                        <span className={parseInt(i) === parseInt(this.state.cardIndex) ? "pageIndicatorActive" : "pageIndicator"}></span>
                    ))}
                </div>
            </div>
        )
    }
}
