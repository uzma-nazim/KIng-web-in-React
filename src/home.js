import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import { fetchDataM } from "./redux/data/dataActions";
import "./image/hero.gif";
import './styles/home.css';
import { Image } from "./data"
import Navbar from './navbar';
import Kingweb from './website';

const home = () => {
  return (
    <>
       
       <Kingweb/>
    </>
    // <div className="homeContainer">
    // <div className="intro">
    // <img src="https://i.ibb.co/dpGjR2C/KINGemoji.png" alt="" className="KING" />
    // <p className="h1">KINGGang NFT</p>
    // </div>
    // <div className="hero">
    // <div className="svgcont">
    //     <img src="https://i.ibb.co/TbQfXX0/manvect-removebg-preview.png" alt="" className="heroimg" />
    // </div>
    // <div className="herotext">

    // <p className="h2">Mint and Stake KINGGang to earn KING Tokens</p>
    // <div className="text">
    // <p>Mint KINGGang at a price of 0.1 BNB</p>
    // <p>Stake your KINGGang NFT to earn passive income earn cool KING Tokens</p>
    // </div>
    // <Link className="button" to="/mint"><p className="h3">Join The Gang</p></Link>
    // </div>
    // </div>
    // <div>
    // <h1 className="container">Mint KINGGang</h1>
    //     <div className="carousel">
    //     <div className="image-list">
    //             {Image.map ((item) => (
    //             <img key={item.id} src={item.img} className="caroimg" />
    //             ))}
    //         </div>
    //     </div>
    // </div>
    // <div className="link">
    // <Link className="stake" to="/stake">Stake</Link>
    // <Link className="mint" to="/mint">Mint</Link>
    // </div>
    // <div className="footer">Made with  <img src="https://i.ibb.co/44ZjM2B/pngwing-com.png" alt="pngwing-com" className="love"/> By KINGGang Team</div>
    //     {/* <li className="mintbox" onClick={(e) => {
    //                 e.preventDefault();
    //                 dispatch(connectM());
    //             }}>
    //             <Link to="/mint">MINT</Link>
    //             </li> */}

    // </div>
  )
}

export default home