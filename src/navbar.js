import { HashLink as Link } from 'react-router-hash-link'
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import { fetchDataM } from "./redux/data/dataActions";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./styles/navbar.css"
const Navbar = () => {
    
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchDataM(blockchain.account));
        }
    };

    getData();


    return (

                <li className="stakebox"><Link to="/staking">STAKE</Link></li>

    );
}

export default Navbar;
