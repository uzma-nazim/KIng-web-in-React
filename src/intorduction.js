import React from "react"
import logo from "../src/image/logo.png"
import "../src/styles/navbar.css"

const Introduction = () => {
    return (
        <>

            <div className="about">
                <br />
                <br />
                <br />
                <br />
                <div className="aboutContent">

                <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active ACTIVE2" id="nav-intro-tab" data-toggle="tab" href="#nav-intro" role="tab" aria-controls="nav-intro" aria-selected="true">Introduction</a>
                    <a className="nav-link  " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">MuskArts</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">MuskT Move</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">MusKart Race </a>
                    <a className="nav-link" id="nav-blog-tab" data-toggle="tab" href="#nav-blog" role="tab" aria-controls="nav-blog" aria-selected="false">Staking</a>
                </div>
            </nav>
            <br/>
            <br/>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab"> <p> <h6>Introduction</h6>  A meme-token born in Binance Smart Chain that developed
                        it's own ecosystem to create <br /> utilities for
                        itself including Move-to-Earn, NFT Collection , Trailer release of NFT Game launch(Racing), staking and many more.
                </p></div>
                <div className="tab-pane fade " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> <p> <h6>MuskArts </h6>  NFT Collection is a collection of 3,333 Non-Fungible-tokens that is generated with 100+ different traits. MuskArts, as it's name suggest is inspired by King Elon Musk. Each NFT is unique with one another and has its own rarity base on the traits it got when it was generated.  <a href=" https://king-elon.com">See more</a>
                </p></div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">  <p> <h6>MuskT Move </h6>   Move-to-Earn is a decentralized application (dApp) where users can get massive rewards just by simply moving from one place to another. See more here..
                    <a href=" https://king-elon.com">See more</a>
                </p></div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">      <p> <h6> MusKart Race </h6> Play-to-Earn is a Racing-themed game that has a Play-to-Earn feature where players can prove themselves by challenging one another with our two initial game modes: Player vs Player (PVP / 5v5) and Player vs Environment (PVE). See more  <a href=" https://king-elon.com">See more</a>
                </p>
                </div>
                <div className="tab-pane fade" id="nav-blog" role="tabpanel" aria-labelledby="nav-blog-tab">      <p> <h6>Staking </h6>   Earn without doing anything! Multiply your KING Tokens by staking it here.
                        <a href=" https://king-elon.com">See  more</a>
                    </p>
                </div>
            </div>
                    {/* <p> <h6>MuskArts </h6>  NFT Collection is a collection of 3,333 Non-Fungible-tokens that is generated with 100+ different traits. MuskArts, as it's name suggest is inspired by King Elon Musk. Each NFT is unique with one another and has its own rarity base on the traits it got when it was generated.  <a href=" https://king-elon.com">See more</a>
                    </p>
                    <br />
                    <p> <h6> MusKart Race </h6> Play-to-Earn is a Racing-themed game that has a Play-to-Earn feature where players can prove themselves by challenging one another with our two initial game modes: Player vs Player (PVP / 5v5) and Player vs Environment (PVE). See more  <a href=" https://king-elon.com">See more</a>
                    </p>

                    <br />
                    <p> <h6>MuskT Move </h6>   Move-to-Earn is a decentralized application (dApp) where users can get massive rewards just by simply moving from one place to another. See more here..
                        <a href=" https://king-elon.com">See more</a>
                    </p>
                    <br />

                    <p> <h6>Staking </h6>   Earn without doing anything! Multiply your KING Tokens by staking it here.
                        <a href=" https://king-elon.com">See  more</a>
                    </p> */}
                </div>

                {/* <div className="aboutimg">
                    <img src={logo} width="350px" className="img-fluid" />

                </div> */}
                <br />
                <br />
                <br />
                <br />

            </div>
           

        </>


    )

}
export default Introduction