import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Styles/nav.scss";
const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>M</span>ohit
            <span>B</span>andari
          </h2>
        </div>
        <div className="list-item">
          <ul className={showMenu ? "mobile-items" : "ul-item"}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
          <div className="hamburger-menu">
           <a href="#" onClick={()=> setShowMenu(!showMenu)}>
           {showMenu ? <IoClose/> : <IoMenu/>}
           </a>
            {/* <a href="#" onClick={()=> setShowMediaIcon(!showMediaIcon)}> */}
            {/* {showMediaIcon ? <IoClose /> : <IoMenu/>} */}
            {/* </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
