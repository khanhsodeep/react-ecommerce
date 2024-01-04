import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToogle, setMenutoggle] = useState(false);
  const [socialToggle, setSocialToogle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Add event listener

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* {header top start} */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* {Header bottom} */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* {logo} */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* {Menu area} */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToogle ? "active": ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
               {/* sign in & login */}
               <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                <Link to="/login"className="d-none d-md-block">Log In</Link>

              {/* menu toggler */}
              <div onClick={()=> setMenutoggle(!menuToogle)} className={`header-bar d-lg-none ${menuToogle ?"active":""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
