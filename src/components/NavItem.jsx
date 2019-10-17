import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class NavItem extends Component {

    render() {

        return (
            <div style={this.navItemContainer()}>
                <div>
                    <NavLink onClick={() => this.props.clicked(this.props.index)} to={this.props.to} style={this.props.active ? this.navItemStyleActive() : this.navItemStyle()}>{this.props.text}</NavLink>
                </div>
            </div>
        )
    }

     //STYLES
     noClick(){
         return{
             'pointer-events': 'none',
         }
     }

     navItemContainer = () => {
        return {
            width: '100vh',
            textAlign: 'center',
        }
    };
    
    navItemStyleActive = () => {
        return {
            color: '#000',
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
}
