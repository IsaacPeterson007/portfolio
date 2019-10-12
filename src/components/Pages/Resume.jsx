import React, { Component } from 'react'
import pdf from '../../resources/IsaacPeterson2019Resume.pdf'

export default class Resume extends Component {
    render() {
        return (
            <div style={this.pdfStyle()}>
                <iframe style={this.pdfStyle()} src={pdf} title="resume frame">
                    <button>download resume here</button>
                </iframe>
            </div>
        )
    }

    pdfStyle = () => {
        return {
            width: '85%',
            height: '750px',
            margin: 'auto',
            display: 'block',
            border: '0',
        }
    }
}
