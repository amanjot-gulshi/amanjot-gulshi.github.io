import React from "react";

function About() {

    return (
        <div className="about-info" id="about">
            <h1 className="info-title">Hi I'm Amanjot,</h1>
            <h2 className="info-subtitle">a programmer/engineer.</h2>
            <p className="info-intro">
                I'm a mechatronics engineer turned web developer. This website is my gateway into the world of web development and
                I hope to make this a great place to showcase my work.
            </p>
            <img className="about-image" src={require('./sketch.jpg')} alt="sketch"></img>
            <hr />
        </div>

    );
}

export default About;