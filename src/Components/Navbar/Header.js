import React from "react";
import { ReactDOM } from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";
import "./Header.css";
const Header = () =>{
   return(

    <div className="header"> 
      <Head/>
      <Search/>
      <Navbar/>
    </div>

   );
    


}
export default Header