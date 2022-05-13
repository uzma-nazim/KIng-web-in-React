import React from "react"
import presale from "../src/image/Presale.jpg"

import "../src/styles/navbar.css"
import Navbar from "./navbar"
const Preslae = () => {
    return (
        <>
            <div id="presale" className="PRESALEBG">

                <img className="img1" src={presale} width="100%" alt="" />
            </div>
        </>


    )

}
export default Preslae