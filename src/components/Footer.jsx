import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return (

        <footer className="footer" id="footer">
            <a className="footer-link" href="https://www.linkedin.com/">LinkedIn </a>
            <a className="footer-link" href="https://github.com/">Github</a>
            <p>Copyright &copy; {year}</p>
        </footer>


    )
}

export default Footer; 