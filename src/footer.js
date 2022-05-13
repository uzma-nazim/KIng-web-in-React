import React from "react"
import presale from "../src/image/Presale.jpg"

import "../src/styles/navbar.css"
import Navbar from "./navbar"
const Footer = () => {
    return (
        <>
        
            <div className="linkfooter">
                <h1>Social Links</h1>
                <br/>
                <br/>

            <span className="planepaper"><i className="fa-solid fa-paper-plane"></i></span>
            <span className="twiiter"><i className="fa-brands fa-twitter"></i></span>
            <span className="discord"><i className="fa-brands fa-discord"></i></span>
            <span className="facebook"><i className="fa-brands fa-facebook-f"></i></span>

            <br/>
            <br/>
            <br/>
            <p> &copy;  2022 King Elon Metaverse</p>
            </div>
        </>


    )

}
export default Footer