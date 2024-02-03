import React from "react";
import { ReactDOM } from "react";
import "./Head.css";
const Head = () =>{
   return(
    <section className="head">
        <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label>+25175364420 </label>
                
                <i className="fa fa-envelope"></i>
                <label>mesfinyitbarek55@gmail.com</label>     
           </div>
           <div className="right row RText">
                <label>ThemeFaqs</label>
                <label>Need Helps</label>
                <i className="fa-solid fa-money-bill" ></i>
                <span>EN</span>
                <i className="fa-solid fa-money-bill" ></i>
                <span>USD</span>

            </div>
        </div>

    </section>
   );

}
export default Head