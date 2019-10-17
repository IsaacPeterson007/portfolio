import React, { Component } from 'react';
import profile from '../../resources/Profile.jpg';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1 style={this.contactStyle()}>Contact Me</h1>
                <div style={{display: 'block'}}>
                    <div style={this.left()}>
                        <img alt="my profile image, your not missing much..." src={profile} style={this.imageStyle()}></img>
                        <h1>Isaac Peterson</h1>
                        <h2>Computer Science with Gaming and Animation</h2>
                        <a>Email:</a> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brud.icp@gmail.com">brud.icp@gmail.com</a>
                    </div>
                    <div style={this.right()}>
                        <form> 
                            <input style={this.input()} type="text" placeholder=" First Name"></input><br></br>
                            <input style={this.input()} type="text" placeholder=" Last Name"></input><br></br>
                            <input style={this.input()} type="text" placeholder=" Email"></input><br></br>
                            <textarea style={this.input()} type="textbox" maxLength="2500" rows="10" placeholder=" Message"></textarea><br></br>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    //STYLES
    contactStyle = () => {
        return {
            marginTop: '50px',
            marginBottom: '50px',
            textAlign: 'center',
            fontSize: '60px',
        }
    }

    input = () => {
        return {
            width: '250px',
            height: '25px',
            borderRadius: '10px',
            border: '1px solid black',
            WebkitAppearance: 'none',
            outline: 'none',
            margin: 'auto',
            
        }
    }

    imageStyle = () => {
        return {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
        }
    }

    left = () => {
        return{
            display: 'block',
            width: '50%',
            float: 'left',
            margin: 'auto',
            textAlign: 'center',
        }
    }

    right = () => {
        return{
            display: 'block',
            width: '50%',
            float: 'right',
            margin: 'auto',
        }
    }
}
