import React, { Component } from 'react'
import NavItem from './NavItem'

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                {text: "Home", to: "/"},
                {text: "Projects", to: "/projects"},
                {text: "Resume", to: "/resume"},
                {text: "Contact", to: "/contact"}
            ],
            selectedIndex: 0,
        };
        this.clicked = this.clicked.bind(this);
      }

    //FUNCTIONS
    clicked(e) {
        this.setState({selectedIndex: e})
    }
    
    render() {
        return (
            <div style={this.navBarContainer()}>
                {this.state.links.map((link, i) => (
                    <NavItem index={i} clicked={this.clicked} active={this.state.selectedIndex === i} text={link.text} to={link.to}/>
                ))}
            </div>
        )
    }

    //STYLES
    navBarContainer = () => {
        return {
            display: 'flex',
            marginTop: '1vh',
            marginBottom: '1vh',
        }
    };
}
