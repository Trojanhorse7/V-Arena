import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiFillCloseSquare} from "react-icons/ai";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  const openMenuHandler = () => {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 90) {
        setIsOpened(true);
				setIsScroll(true);
			} else {
        setIsScroll(false);
        setIsOpened(true);
			}
		});
	}, []);

  return (
    <div className={`navbar ${isScroll ? "sticky" : ""}`}>
      <div className="wrapper">
        <div className='navbar-1'>
          <Link to="/"> <img src={logoImg} alt="logo" /></Link>
        </div>

        <div className={`navbar-2 ${!isOpened ? "active" : ""}`}>
          <div className='navbar-2-1'>
            <AiFillCloseSquare onClick={openMenuHandler} className="navbar-close" />
            <ul>
              <li><a href="#/">How to Play</a></li>
              <li><a href="#/">Tournament</a></li>
              <li><a href="#/">Leaderboard</a></li>
              <li><a href="#/">About</a></li>
            </ul>
          </div>
        </div>
        <div className='navbar-3'>
            <GiHamburgerMenu  onClick={openMenuHandler} className='navbar-open'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar