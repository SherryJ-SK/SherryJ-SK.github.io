import React from "react";

function Navbar() {
    return (
        <div className="col-xs-8 col-md-8 btngroup btn-group" role="group">
            <label className="btn color active" id="firsttab">
                Portfolio
        </label>
            <label className="btn color" id="secondtab">
                Projects
        </label>
            <label className="btn color" id="thirdtab">
                Technologies
        </label>
            <label className="btn color" id="fourthtab">
                Contacts
        </label>
        </div>
    );
};

export default Navbar;