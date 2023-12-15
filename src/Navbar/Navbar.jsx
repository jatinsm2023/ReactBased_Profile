import React, { useState, useEffect } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';
// import {
//     Link,
// } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nleft">
                    <a href="/">meetme</a>
                </div>
                {/* <div id="toggle-nav">
                    <GiHamburgerMenu />
                </div>
                <div className="nright">
                    <li>
                        <Link to="/" rel="noreferrer" >Home</Link>
                    </li>
                    <li>
                        <Link to="/Skills" href="#1" rel="noreferrer" >Skills</Link>
                    </li>
                    <li>
                        <Link href="/" rel="noreferrer" >pors</Link>
                    </li>
                    <li>
                        <Link href="/" rel="noreferrer" >Contact</Link>
                    </li>
                </div> */}
            </div>
        </>
    );
}

export default Navbar;
