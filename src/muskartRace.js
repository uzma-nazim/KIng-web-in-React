import React from "react"
import MusKarts from "../src/image/MusKarts Race.jpg"

import "../src/styles/navbar.css"
import Navbar from "./navbar"
const MuskartRace = () => {
    return (
        <>
            <div id="presale" className="PRESALEBG">

                <img className="img1" src={MusKarts} width="100%" alt="" />
            </div>
        </>


    )

}
export default MuskartRace