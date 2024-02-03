import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";
import "./Header.css";
const Header = () =>{
   return(

    <div className="header"> 
     
      <Router>
            <Head/>
            <Search/>
            <Navbar/>
            <Switch>
              { /*<Route path="/" exact >
                <About />
              </Route>
              */}
           </Switch>
      </Router>
      
    </div>

   );
    


}
export default Header