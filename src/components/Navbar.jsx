import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
const Navbar=()=>{
    const [showmenu, setShowmenu]=useState(false)
    return(
        <nav className="nav">
        <div className={`${showmenu?'nav__menu show-menu':"nav__menu"}`}>
            <ul className="nav__list">
                {
                    links.map(({name,icon,path},index)=>{
                        return(
                            <NavLink to={path} className={({isActive})=>isActive?'nav__link active-nav':'nav__link'} onClick={()=>setShowmenu(!showmenu)}>
                                {icon}
                                <h3 className="nav__name">{name}</h3>
                                
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
        <div className={`${showmenu ?'nav__toggle animate-toggle':'nav__toggle'}`} onClick={()=>setShowmenu(!showmenu)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </nav>
    )
}
export default Navbar;