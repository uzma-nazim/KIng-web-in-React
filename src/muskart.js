import React from "react"
import muskart from "../src/image/muskart.jpg"

import "../src/styles/navbar.css"
import Navbar from "./navbar"
const Muskart = () => {
    return (
        <>
            <div id="presale" className="PRESALEBG">

                <img className="img1" src={muskart} width="100%" alt="" />
            </div>
        </>


    )

}
export default Muskart