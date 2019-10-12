import React, { Component } from 'react'
import NavItem from './NavItem'
import { withRouter } from "react-router";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                {text: "Home", to: "/"},
                {text: "Projects", to: "/projects"},
                {text: "Resume", to: "/resume"},
                {text: "Contact", to: "/contact"}
            ],
            selectedIndex: null,
        };
        this.clicked = this.clicked.bind(this);
      }

      componentWillMount() {
        this.setState({selectedIndex: this.state.links.indexOf(l => l.to === this.props.location.pathname)})
    }
    


    //FUNCTIONS
    clicked(e) {
        this.setState({selectedIndex: e})
    }
    
    render() {
        return (
            <div style={this.navBarContainer()}>
                <div style={this.navBarPlaceholded()}></div>
                {this.state.links.map((link, i) => (
                    <NavItem key={i} index={i} clicked={this.clicked} active={this.state.selectedIndex === i} text={link.text} to={link.to}/>
                ))}
                <div style={this.navBarPlaceholded()}></div>
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

    navBarPlaceholded = () => {
        return {
            width: '100vh',
        }
    }
}

export default withRouter(NavBar);