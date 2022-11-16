import { Button } from '@mui/material';
import React from 'react';
import '../Styles/Home.css';
import {Link} from 'react-router-dom'
import broombackground from '../assest/Broombackground.jpg'

function Home() {
    return (
        <div className='home' style={{backgroundImage:`url(${broombackground})`}}>
            <div className='headerContainer' >
                <h1>DHANU BROOM</h1>
                <h2>Manufacturer & supplier of all type of High Class Brooms</h2>
                <p>Contact us for Retail and Wholesale</p>
                <Link to="/Product">
                <Button> Order Now</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home