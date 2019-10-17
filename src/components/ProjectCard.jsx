import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {
        return (
            <div  style={this.projectTitle()}>
                <h1>{this.props.project.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.project.embedLink }}/>
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
