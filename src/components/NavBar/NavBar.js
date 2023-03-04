import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import CartWidget from "../CartWidget/CardWidget";
import { Link } from "react-router-dom";

function NavBar() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__content-logo">
                    <Link to="/">
                        <img src="./img/logo-frigo-app-blanco-60.png" alt="Logo App" />
                    </Link> 
                </div>
                <div className="header__content-menu">
                    <nav ref={ navRef }>
                        <Link to="/">
                            <button className="nav-link">Home</button>
                        </Link>
                        <Link to="/category/ternera">
                            <button className="nav-link">Ternera</button>
                        </Link>
                        <Link to="/category/cerdo">
                            <button className="nav-link">Cerdo</button>
                        </Link>
                        <Link to="/category/ave">
                            <button className="nav-link">Ave</button>
                        </Link>
                        <button className='nav-btn nav-close-btn' onClick={ showNavBar }>
                            <FaTimes />
                        </button>
                    </nav>
                    <div className='cart'>
                        <button className='nav-btn' onClick={ showNavBar }>
                            <FaBars />
                        </button>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </div>
    );
}

export default NavBar;