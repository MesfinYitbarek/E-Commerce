import React from "react";
import { ReactDOM } from "react";
import "./Search.css";
const Search = () =>{
    window.addEventListener("scroll", function() {
        const search = document.querySelector(".search")
        search.classList.toggle("active". window.scrollY > 100)
    })
    return(
        <div className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <h2>Bonik</h2>
                </div>
            
            <div className="search-box f_flex">
                <i className="fa fa-search" style={{}}></i>
                <input type="text" placeholder="Search and hit enter..."/>
                <span>ALL Category</span>
            </div>

            <div className="icon f_flex width">
                <i className="fa fa-user icon_circle"></i>
                <div className="cart">
                    
                    <i className="fa fa-shopping-bag icon_circle"></i>
                        <span>0</span>
                    
                </div>
            </div>
         </div>
      </div>

    );


}
export default Search