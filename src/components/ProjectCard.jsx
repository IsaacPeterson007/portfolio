import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {
        return (
            <div  style={this.projectTitle()}>
                <h1>{this.props.project.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.project.embedLink }}/>
                <p>{this.props.project.description}</p>
            </div>
        )
    }

    //STYLES
    projectTitle = () => {
        return{
            margin: 'auto',
            textAlign: 'center',
            marginTop: '40px',
        }
    }
}

//src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5qFOywGbokM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 

