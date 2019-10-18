import React, { Component } from 'react';
import '../styles/projectCard.css';

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="card">
                <h1 className="title" >{this.props.project.title}</h1>
                <div>
                    <iframe className="video" src={this.props.project.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
                <p className="description">{this.props.project.description}</p>
            </div>
        )
    }
}

//src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5qFOywGbokM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 

