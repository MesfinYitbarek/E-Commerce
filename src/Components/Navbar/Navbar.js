import React from "react";
import { ReactDOM } from "react";
import "./Navbar.css"
const Navbar = () =>{
  const [MobileMenu, setMobileMenu] =React.useState(false);
  function toggleMenu(){
    setMobileMenu(!MobileMenu)
  }
 return(
  
<header className="header">
    <div className="container d_flex">
      <div className="catagories d_flex">
        <span className='fa-solid fa-border-all' ></span>
        <h4>Catagories <i className="fa fa-chevron-down"></i></h4>
      </div>
    
    <nav className="navlink">
      <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
         <li><a href="#">Home</a></li>
         <li><a href="#">Pages</a></li>
         <li><a href="#">User Account</a></li>
         <li><a href="#">Vendour Account</a></li>
         <li><a href="#">Track My Order</a></li>
         <li><a href="#">Contact</a></li>
      </ul>
      <button className="toggle" onClick={toggleMenu}>
        {
          MobileMenu? <i className="fas fa-times close home-bth"></i> :
          <i className="fa fa-bars open"></i>
        }
      </button>
    </nav>
  </div>
</header>
 );


}
export default Navbar