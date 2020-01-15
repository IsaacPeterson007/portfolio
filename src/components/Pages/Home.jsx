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
                        <p className="homeDescription">
                             Born and raised in the greater Seattle area, I have always had a passion for games. 
                             I discovered my passion for game development while attending Oklahoma Christian University and knew it was what I wanted to do. 
                             I love learning new technologies and developing for virtual, augmented, and mixed reality systems.
                        </p>
                    </div>
                    <div className="homeProfileContainer">
                        <img src={BwProfile} alt="my profile picture" className="homeProfile"></img>
                    </div>
                </div>
            </Reveal.Fade>
        )
    }
}
