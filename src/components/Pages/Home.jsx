import React, { Component } from 'react'
import * as Reveal from 'react-reveal';
import BwProfile from '../../resources/BwProfile.jpg';
import '../../styles/home.css';

export default class Home extends Component {
    render() {
        return (
            <Reveal.Fade clear opposite>
                <div className="homeContainer">
                    <div className="homeWordsContainer">
                        <h1 className="homeName">Isaac Peterson</h1>
                        <h2 className="homeDegree">Computer Science with Gaming and Animation</h2>
                        <p className="homeTitles">Game Programmer.</p>
                        <p className="homeTitles">Software Engineer.</p>
                        <p className="homeTitles">Web Developer.</p>
                    </div>
                    <div className="homeProfileContainer">
                        <img src={BwProfile} className="homeProfile"></img>
                    </div>
                </div>
            </Reveal.Fade>
        )
    }
}
