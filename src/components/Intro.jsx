import React from "react";

function Intro() {

    return (
        <div className="intro-info" id="intro">
            <h1 className="info-title">Hi I'm Amanjot,</h1>
            <h2 className="info-subtitle">a programmer/engineer.</h2>
            <p className="info-description">
                I'm a mechatronics engineer turned web developer. 
            </p>
            <p className="info-description">
                This website is my gateway into the world of web development
            </p>
            <p className="info-description">
                and I hope to make this a great place to showcase my work.
            </p>
            <img className="intro-image" src={require('../images/sketch.jpg')} alt="sketch"></img>
            <hr/>
        </div>

    );
}

export default Intro;