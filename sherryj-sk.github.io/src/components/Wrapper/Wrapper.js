import React from "react";

function Wrapper(props) {
    return (
        <div className="col-xs-10 col-md-8 btngroup1 wrapper" id="note">
            {props.children}
        </div>
    );
};

export default Wrapper;