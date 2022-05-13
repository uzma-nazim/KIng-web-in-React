import React from "react"
import menber1 from "../src/image/Gabin.png"
import menber2 from "../src/image/Jan.jpg"
import menber3 from "../src/image/Jess.png"
import menber4 from "../src/image/Lawliet.png"
import menber5 from "../src/image/Sandra.png"
import menber6 from "../src/image/SD.png"
import "../src/styles/navbar.css"
import Teampic from "../src/image/Team.jpg"


const Team = () => {
    return (
        <>

            <div id="presale" className="PRESALEBG">

                <img className="img1" src={Teampic} width="100%" alt="" />
            </div>
            {/* <div className="roadmap">
                <div className="teamsection container">
                    <br />
                    <br />

                    <br />

                    <div class="team">
                        <h1>Team</h1>


                    </div>
                    <br />
                    <br />



                    <div className="threeteam">
                        <div className="memeber1">
                            <img class="img1" src={menber1} width="270px" alt="" />
                            <h2>Gabin - CTO/Dev</h2>
                        </div>
                        <div className="memeber1">
                            <img class="img1" src={menber2} width="270px" alt="" />
                            <h2>Jan - CMO</h2>
                        </div>
                        <div className="memeber1">
                            <img class="img1" src={menber3} width="270px" alt="" />
                            <h2>Jess - Community Manager</h2>
                        </div>

                    </div>
                    <br />
                    <br />
                    <div className="threeteam">
                        <div className="memeber1">
                            <img class="img1" src={menber4} width="270px" alt="" />
                            <h2>Lawliet - CBDO/Co-Founder</h2>
                        </div>
                        <div className="memeber1">
                            <img class="img1" src={menber5} width="270px" alt="" />
                            <h2>Sandy - CCO</h2>
                        </div>
                        <div className="memeber1">
                            <img class="img1" src={menber6} width="270px" alt="" />
                            <h2>SD - CEO/Co-Founder</h2>
                        </div>

                    </div>


                </div>

            </div> */}
        </>
    )

}
export default Team