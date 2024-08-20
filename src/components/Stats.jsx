import React from "react";
import {stats} from "../data";
import parse from "html-react-parser"
// import "./stats.css"
const Stats =()=>{
    return(
        <>
        {stats.map(({no,title},index)=>{
            return(
                <li className="stats__box" key={index}>
                    <h3 className="stats__no" >{no}</h3>
                    <span className="stats__title">{parse(title)}</span>
                </li>
                
            )
        })}
        </>
    )
}
export default Stats;