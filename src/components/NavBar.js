import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const navStyle = {
        color: 'black'
    }
    return (
        <nav>
            <input class = "menu-btn" type = "checkbox" id = "menu-btn" />
            <label class = "menu-icon" for = "menu-btn">
                <span class = "nav-icon"></span>
            </label>
            
            <ul class = "menu">
                <li><a href = "/">Portfolio</a></li>
            </ul>

            <ul className = "menu">
                <Link style = {navStyle} to = "/">
                    <li><a href = "/">Home</a></li>
                </Link>
                <Link style = {navStyle} to = "/projects">
                    <li><a href = "/">Projects</a></li>
                </Link>
                <Link style = {navStyle} to = "/experiences">
                    <li><a href = "/">Experiences</a></li>
                </Link>
            </ul>

            <a href = "/" class = "hey">Kevin Arellano</a>
        </nav>
    )
}

export default NavigationBar;