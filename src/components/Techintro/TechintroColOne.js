import React from "react";

function Techintro(props) {
    return (
        <li>
            <i className={props.icon}></i>
            {props.p}
        </li>
    )
}
export default Techintro;
