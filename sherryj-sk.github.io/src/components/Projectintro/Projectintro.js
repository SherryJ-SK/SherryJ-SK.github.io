import React from "react";

function Projectintro(props) {
    return (
        <div className="col-md-6">
            <div className="card">
                <img src={props.image} alt={props.title} className="card-img-top project_pic" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.text}
                    </p>
                    <a href={props.href} className="btn titles"
                        target="_blank" rel="noopener noreferrer">Heroku Link</a>
                </div>
            </div>
        </div>
    );
}

export default Projectintro;
