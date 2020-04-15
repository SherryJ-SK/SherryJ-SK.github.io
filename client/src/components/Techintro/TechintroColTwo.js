
import React from "react";

function TechintroColTwo(props) {
    return (
        <p>
            <img src={props.image} className={props.class} alt={props.p} />
            {props.p}
        </p>
    )
}

export default TechintroColTwo;

