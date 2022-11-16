import React, { useState  } from 'react';
import Logo from '../assest/Logo.jpg';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
   
    return (
        <div className='Navbar'>
            <div className='leftwindow' id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="vineet" />
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/Aboutus">About Us</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
            <div className='middlewindow'></div>
            <div className='rightwindow'>
                <Link to="/">Home</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Aboutus">About Us</Link>
                <Link to="/Contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>


        </div>
    )
}

export default Navbar;