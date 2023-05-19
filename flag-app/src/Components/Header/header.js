import "./header.css";
import React from "react";
import DarkMode from "../DarkMode/darkmode.js";

function Header () {
    return (
        <div className="header">
        <h1>Where in the world?</h1>
        <DarkMode />
        </div>
    );
}

export default Header;