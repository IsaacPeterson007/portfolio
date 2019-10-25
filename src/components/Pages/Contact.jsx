import React, { Component } from 'react';
import profile from '../../resources/Profile.jpg';
import '../../styles/contact.css'
import * as Reveal from 'react-reveal';
import linkedinImage from '../../resources/LinkedIn-Logos/LI-In-Bug.png';

export default class Contact extends Component {
    render() {
        return (
            <Reveal.Fade clear opposite>
                <div>
                    <h1 className="contact">Contact Me</h1>
                    <div className="contactContainer">
                        <div className="block">
                            <img alt="my profile image, your not missing much..." src={profile} className="image"></img>
                            <p className="name">Isaac Peterson</p>
                            <p className="email">brud.icp@gmail.com</p>
                            <p className="number">253.205.1645</p>
                            <a href="https://www.linkedin.com/in/isaac-peterson-7967a6131" target="_blank"><img className="linkedin" src={linkedinImage}></img></a>
                        </div>
                        <div className="block">
                            <form className="form" action="https://formspree.io/xeybjobx" method="POST"> 
                                <input type="text" placeholder="First Name" name="firstName"></input><br></br>
                                <input type="text" placeholder="Last Name" name="lastName"></input><br></br>
                                <input type="text" placeholder="Email" name="_replyto"></input><br></br>
                                <textarea type="text" placeholder="Message" name="message"></textarea><br></br>
                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </Reveal.Fade>
        )
    }
}
