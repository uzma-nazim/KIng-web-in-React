import React, { useRef } from "react"

import presale from "../src/image/Presale.png"
import Tokenomics from "../src/image/Tokenomics.png"
import menber1 from "../src/image/Gabin.png"
import menber2 from "../src/image/Jan.jpg"
import menber3 from "../src/image/Jess.png"
import menber4 from "../src/image/Lawliet.png"
import menber5 from "../src/image/Sandra.png"
import menber6 from "../src/image/SD.png"
import logo from "../src/image/logo.png"
import "../src/styles/navbar.css"
import Navbar from "./navbar"
import Preslae from "./presale"
import Tokincsm from "./tokinicm"
import Introduction from "./intorduction"
import Roadmap from "./roodmap"
import Team from "./team"
import Header from "../src/image/Header.jpg"
import { Link } from "react-router-dom"
import MemeHistroy from "./memehistrory"
import Staking from "./stakingg"
import Muskart from "./muskart"
import MuskartRace from "./muskartRace"
import MusKartsRaceMoves from "./muskmove"
import Footer from "./footer"

const Kingweb = () => {
    const memehistory = useRef(null)
    const presale= useRef(null)
    const Tokincsmscrooll = useRef(null)
    const Roadmapscrool= useRef(null)
    const Teamscroll = useRef(null)

    const memehistroy = (element) => {

        window.scrollTo({
            top: element.current.offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="content">
                <nav className="navbar navbar-expand-lg navbar-light  background sticky-top">
                    <a className="navbar-brand" href="#"> <img src="./images/logo.png " width="80px" alt="" /> </a>
                    <button className="navbar-toggler ICON" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                        <span><i className="fa-solid fa-bars-staggered"></i></span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item     ">
                                <a className="nav-link hoverEffect " onClick={(e)=> {e.preventDefault();memehistroy(memehistory)}} id="parmenthover" href="">MemeHistory
                                    <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link "  onClick={(e)=>{e.preventDefault();memehistroy(presale)}} href="">Presale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link "  onClick={(e)=>{e.preventDefault();memehistroy(Tokincsmscrooll)}} href="">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hoverEffect" onClick={(e)=>{e.preventDefault();memehistroy(Roadmapscrool)}} href="">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hoverEffect"  onClick={(e)=>{e.preventDefault();memehistroy(Teamscroll)}} href="  roadmap">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hoverEffect" href="  roadmap"> <Navbar /></a>
                            </li>


                        </ul>
                    </div>
                </nav>


                <div className="intoduction">
                    <div className="">

                        <img src={logo} width="250px" />
                        <br />
                        <br />
                        <p>Born as a Meme ended-up as the King</p>
                    </div>
                    <br />

                    <h1 className="animate__animated animate__fadeInUp">King Elon <br />Metaverse</h1>
                </div>


            </div>


            {/* <Navbar /> */}
            {/* <Introduction /> */}
            <div ref={memehistory}>
                <MemeHistroy />
            </div>

            <Staking />
            <Muskart />
            <MuskartRace />
            <MusKartsRaceMoves />

            <div ref={Tokincsmscrooll}>
            <Tokincsm />
            </div>
            <div ref={presale}>
            <Preslae />
            </div>
            <div ref={Roadmapscrool}>
            <Roadmap />
            </div>

            <div ref={Teamscroll}>
            <Team />
            </div>
            <Footer />






        </>
    )

}



export default Kingweb