import React, { Component } from 'react';
import Card from '../ProjectCard';

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
        };
    }

    render() {
        return (
            <div>
                {this.state.projects.map((p, i) => (
                    <Card key={i} project={p} />
                ))}
            </div>
        )
    }
}
