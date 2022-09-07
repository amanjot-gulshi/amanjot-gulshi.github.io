import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return (

        <footer className="footer" id="footer">
            <a className="footer-link" href="https://www.linkedin.com/in/amanjot-gulshi/"><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a className="footer-link" href="https://github.com/AmanjotG"><i className="fa-brands fa-github fa-xl"></i></a>
            <p>&copy;{year} Amanjot Gulshi</p>
        </footer>


    )
}

export default Footer; 