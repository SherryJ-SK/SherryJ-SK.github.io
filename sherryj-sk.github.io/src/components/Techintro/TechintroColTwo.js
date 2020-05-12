
import React from "react";

function TechintroColTwo(props) {
    return (
        <li>
            <img src={props.image} className={props.class} alt={props.p} />
            {props.p}
        </li>
    )
}

export default TechintroColTwo;

