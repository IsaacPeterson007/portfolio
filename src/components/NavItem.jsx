import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class NavItem extends Component {

    render() {

        return (
            <div style={this.navItemContainer()}>
                <div onClick={() => this.props.clicked(this.props.index)}>
                    <NavLink to={this.props.to} style={this.props.active ? this.navItemStyleActive() : this.navItemStyle()}>{this.props.text}</NavLink>
                    {/* <div style={this.props.active ? this.block() : null}></div> */}
                </div>
            </div>
        )
    }

     //STYLES
     navItemContainer = () => {
        return {
            width: '100vh',
            textAlign: 'center',
        }
    };
    
    navItemStyleActive = () => {
        return {
            color: '#000',
            textDecoration: 'none',
            fontWeight: 'bold',
            textDecoration: 'underline',
        }
    }

    navItemStyle = () => {
        return {
            color: '#000',
            textDecoration: 'none',
            fontWeight: 'normal',
        }
    }

    block = () => {
        return {
            width: '33vh',
            height: '5px',
            backgroundColor: 'black',
            margin: 'auto', 
            borderRadius: '1vh'
        }
    }
}
