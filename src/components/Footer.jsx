import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return (
        <div>
            <footer>
                <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
                <br/>
                <a class="footer-link" href="https://github.com/">Github</a>
                <p>Copyright &copy; {year}</p>
            </footer>
        </div>

    )
}

export default Footer; 