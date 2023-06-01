import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear();
    const content = <footer><p>Copyright@{currentYear}</p></footer>
    return content
}

export default Footer;