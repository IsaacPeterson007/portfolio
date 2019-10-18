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
                    title: "Magic Leap Fire and Smoke Simulation", 
                    src: 'https://www.youtube.com/embed/FAsff4sQhVA',
                    description: 'this is my description'
                },
                {   
                    title: "VR Basketball", 
                    src: 'https://www.youtube.com/embed/Fk8ASZspExE',
                    description: 'this is my description'
                },
                {   
                    title: "Out of Time", 
                    src: 'https://www.youtube.com/embed/etH7VxiP1Ig',
                    description: 'this is my description'
                },
                {
                    title: "Zombie Survival Game", 
                    src: 'https://www.youtube.com/embed/5qFOywGbokM', 
                    description: 'this is my description'
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
            <Reveal.Fade clear>
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
