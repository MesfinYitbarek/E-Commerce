import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
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
        <li>
         <Link to='#'>Home</Link>
        </li>
        <li>
         <Link to="#">Pages</Link>
        </li>
        <li>
         <Link to= "#">User Account </Link>
        </li>
        <li>
         <Link to='#' >Vendour Account</Link>
        </li>
        <li>
         <Link to='#'>Track My Order</Link>
        </li>
        <li>
         <Link to='#'>Contact</Link>
        </li>
      </ul>
      <button className="toggle" onClick={toggleMenu}>
        {
          MobileMenu? <i className="fas fa-times close home-bth"></i> :
          <i className="fa-solid fa-bars open "></i>

        }
      </button>
    </nav>
  </div>
</header>
 );


}
export default Navbar