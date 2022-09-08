import React from "react";

function Intro() {

    return (
        <div className="intro-info" id="intro">
            <h1 className="info-title">Hi I'm Amanjot,</h1>
            <h2 className="info-subtitle">a programmer/engineer.</h2>
            <img className="intro-image" src="https://gitportfoliobucket.s3.us-east-2.amazonaws.com/sketch.jpg" alt="sketch"></img>
            <p className="info-description">
                I'm a mechatronics engineer turned web developer. 
            </p>
            <p className="info-description">
                This website is my gateway into the world of web development
            </p>
            <p className="info-description">
                and I hope to make this a great place to showcase my work!
            </p>
            <a className="footer-link" href="https://www.linkedin.com/in/amanjot-gulshi/"><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a className="footer-link" href="https://github.com/AmanjotG"><i className="fa-brands fa-github fa-xl"></i></a>
            
            <hr/>
        </div>

    );
}

export default Intro;