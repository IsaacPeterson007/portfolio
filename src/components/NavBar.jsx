import React, { Component } from 'react';
import NavItem from './NavItem';
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
            selectedIndex: localStorage.getItem('selectedIndex') || 0,
        };
        this.clicked = this.clicked.bind(this);
    };

    componentDidMount(){
        if(this.props.location.pathname.toString() !== this.state.links[this.state.selectedIndex].to.toString()){
            var tempIndex = this.state.links.findIndex(x => x.to.toString() === this.props.location.pathname);
            localStorage.setItem('selectedIndex', tempIndex);
            this.setState({selectedIndex: tempIndex});
        }
    }

    //FUNCTIONS
    clicked(e) {
        localStorage.setItem('selectedIndex', e);
        this.setState({selectedIndex: e})
    }
    
    render() {
        return (
            <div style={this.navBarContainer()}>
                <div style={this.navBarPlaceholder()}></div>
                {this.state.links.map((link, i) => (
                    <NavItem key={i} index={i} clicked={this.clicked} active={parseInt(this.state.selectedIndex) === parseInt(i)} text={link.text} to={link.to}/>
                ))}
                <div style={this.navBarPlaceholder()}></div>
            </div>
        )
    }

    //STYLES
    navBarContainer = () => {
        return {
            display: 'flex',
            marginTop: '2vh',
            marginBottom: '1vh',
        }
    };

    navBarPlaceholder = () => {
        return {
            width: '100vh',
        }
    }
}

export default withRouter(NavBar);