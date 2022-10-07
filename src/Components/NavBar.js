import React from "react";
import { NavLink } from "react-router-dom";


function NavBar (){
    return (
    <div className="navbar">
        <h1><em>Enigma</em></h1>
        <nav>
            <NavLink exact to ="/">Home</NavLink>
            <NavLink to ="/blog">Blog</NavLink>
            <NavLink to ="/events">Events</NavLink>
            <NavLink to ="/loginform">Login</NavLink>
        </nav>
    </div>
    )
}
export default NavBar;