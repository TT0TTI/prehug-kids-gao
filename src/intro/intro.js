import React from "react";
import "./intro.css";

const Intro = () => {
    return(
        <header id="intro">
            
            <div className="introWrap">
                <div className="logo"></div>
                <div className="lion"></div>
                <div className="rabbit"></div>
                <div className="bear"></div>
                <div className="monkey"></div>
            </div>

            <div className="cloudWrap">
                <div className="leftCloud"></div>
                <div className="rightCloud"></div>
                <div className="dragonfly"></div>
            </div>

        </header>
    );
};

export default Intro;