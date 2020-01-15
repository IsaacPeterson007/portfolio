import React, { Component } from 'react';
import Card from '../ProjectCard';
import * as Reveal from 'react-reveal';
import '../../styles/projects.css';
import next from '../../resources/next.png';
import prev from '../../resources/prev.png';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title:"Genesis Trailer",
                    src:"https://www.youtube.com/embed/CYZknrQGX94",
                    description:"In Game Programming II, this was our final project made in Unreal Engine 4. The maps came from an asset pack and the Characters and Animations from Mixamo. "
                },
                {   
                    title: "Magic Leap Fire and Smoke Simulation", 
                    src: 'https://www.youtube.com/embed/FAsff4sQhVA',
                    description: "As an Intern at NextThought, this was my favorite project to research and develop. The goal was to train firefighters for limited visibility scenarios with Magic Leap One's mixed reality headset. Using Unity, I created a smoke-like particle system that interacts with the 3D mesh of the real world created by Magic Leap's sensors. Using the controller, users can place fire down in the environment which produces smoke that will eventually fill the room and block their vision."
                },
                {   
                    title: "Out of Time", 
                    src: 'https://www.youtube.com/embed/etH7VxiP1Ig',
                    description: "During my Team Game Production course at Oklahoma Christian, I worked with 4 artists to create a vertical slice of this game. I programmed the game and created the scenes with assets produced by the artists. Using the provided character model, I used Mixamo to rig and animate the character. With Unity's blend tree I created fluid transitions between animations for the player character and NPCs."
                },
                {
                    title: "Zombie Survival Game", 
                    src: 'https://www.youtube.com/embed/5qFOywGbokM', 
                    description: "My friend and fellow game programmer Adam Libby built a VR gun range for a class project. Using his gun mechanics, we decided to make a VR zombie survival game. I worked on the zombie animations and AI while Adam continued to refine the gun mechanics. Out of all the games I've worked on, this has been my favorite because of how fun and frightening the gameplay turned out to be. We used Unity for this project and built out to the Oculus Rift."
                },
                {   
                    title: "VR Basketball", 
                    src: 'https://www.youtube.com/embed/Fk8ASZspExE',
                    description: "Working with a small team of artists, our objective was to create a VR basketball game in the OKC Thunder's Chesapeake Energy Arena. Using blueprints in Unreal Engine 4 I created the gameplay mechanics for a half court shot contest as seen during halftime at many basketball games. The biggest challenge was getting the ball to realistically interact with the environment. "
                },
                {
                    title: "Martian Bandits Game", 
                    src: 'https://www.youtube.com/embed/IWa59Fz5BPU', 
                    description: "This was my first game I made with a team of artists during my sophomore year at Oklahoma Christian. The game is a stylized western set on Mars where you must defend your fortress against endless swarms of aliens. I learned some very valuable lessons working with a team and making my first shooter game in Unity. "
                },
            ],
            cardIndex: parseInt(localStorage.getItem('cardIndex')) || 0, 
            swappedCards: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        localStorage.setItem('cardIndex', i);
        this.setState({cardIndex: i});
    }

    prev = () => {
        var temp;
        if(this.state.cardIndex === 0){
            temp = this.state.projects.length - 1;
        }
        else {
            temp = this.state.cardIndex - 1;
        }

        localStorage.setItem('cardIndex', temp);
        this.setState({cardIndex: temp});
    }

    next = () => {

        this.setState({swappedCards: false});

        var temp;
        if(this.state.cardIndex === this.state.projects.length - 1){
            temp = 0;
        }
        else {
            temp = this.state.cardIndex + 1;
        }

        localStorage.setItem('cardIndex', temp);
        this.setState({cardIndex: temp});

        this.setState({swappedCards: true});
    }

    getCard(){      
        return 
    }

    render() {

        const revealStyle = {
            position: 'absolute',
        }

        return (
            <Reveal.Fade clear opposite>
                <div className="projectContainer">
                    <div className="cardContainer">
                        <Card project={this.state.projects[this.state.cardIndex]} />
                    </div>
                    <div className="arrow-1">
                        <input onClick={this.prev} className="arrowImage" type="image" alt="previous project" src={prev} />
                    </div>
                    <div className="arrow-2">
                        <input onClick={this.next} className="arrowImage" type="image" alt="next project" src={next} />
                    </div>
                    <div className="pageIndicatorContainer">
                        {this.state.projects.map((p, i) => (
                            <span key={i} onClick={() => this.handleClick(i)} className={parseInt(i) === parseInt(this.state.cardIndex) ? "pageIndicatorActive" : "pageIndicator"}></span>
                        ))}
                    </div>
                </div>
            </Reveal.Fade>
        )
    }
}
