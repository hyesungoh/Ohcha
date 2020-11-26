import React from "react";
import bg from "./img/bg.jpeg";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <h1>OH-</h1>
                <h1>CHA</h1>
                <span>practipowered by nomadcoders movie web api</span>
            </div>

            <img src={bg} alt="bg"></img>
        </div>
    );
}

export default Header;
