import React from "react";

function Techintro(props) {
    return (
        <p>
            <i className={props.icon}></i>
            {props.p}
        </p>
    )
}
export default Techintro;
