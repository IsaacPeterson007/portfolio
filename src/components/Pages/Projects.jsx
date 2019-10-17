import React, { Component } from 'react';
import Card from '../ProjectCard';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {title: "Magic Leap Fire and Smoke Simulation", embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FAsff4sQhVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
                {title: "VR Basketball", embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fk8ASZspExE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
                {title: "Out of Time", embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/etH7VxiP1Ig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
                {title: "Zombie Survival Game", embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5qFOywGbokM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
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
