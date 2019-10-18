import React, { Component } from 'react'
import pdf from '../../resources/IsaacPeterson2019Resume.pdf'
import * as Reveal from 'react-reveal';

export default class Resume extends Component {
    render() {
        return (
            <Reveal.Fade clear>
                <div style={this.pdfStyle()}>
                    <object style={this.pdfStyle()} data={pdf} title="resume">
                        <h2 style={this.errorStyle()}>Sorry, can't render a PDF</h2>
                        <h3 style={this.downloadStyle()}><a href={pdf} download>Download Instead</a></h3>
                    </object>
                </div>
            </Reveal.Fade>
        )
    }

    //STYLE
    errorStyle = () => {
        return{
            color: 'darkred',
            fontSize: '30px',
            textAlign: 'center',
        }
    }

    downloadStyle = () => {
        return{
            fontSize: '20px',
            textAlign: 'center',
        }
    }

    pdfStyle = () => {
        return {
            width: '85%',
            height: '90vh',
            margin: 'auto',
            marginTop: '40px',
            display: 'block',
            border: '0',
            webkitOverflowScrolling: 'touch',
        }
    }
}
