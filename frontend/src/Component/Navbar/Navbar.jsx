import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const {getTotalCartAmount} = useContext(StoreContext);

  // Yeh useEffect window hash check karta hai aur state set karta hai
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#explore-menu') setMenu("menu");
      else if (hash === '#app-download') setMenu("mobile-app");
      else if (hash === '#footer') setMenu("contact us");
    };

    // Initial call
    handleHashChange();

    // Hash change listener
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0? "": "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

