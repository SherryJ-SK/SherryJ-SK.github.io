import React from "react";

function Contact() {
    return (
        <div id="contacts" style={{ display: "none" }}>
            {/* <p>
                <i className="fa fa-phone-square"></i>+61 405067787
        </p> */}
            <p>
                <i className="fa fa-linkedin-square"></i><a id="linkedin"
                    href="https://www.linkedin.com/in/sherry-jin-988429171/">
                    https://www.linkedin.com/in/sherry-jin-988429171/</a>
            </p>
            <p>
                <i className="fa fa-github-square"></i><a id="resume"
                    href="https://github.com/SherryJ-SK">https://github.com/SherryJ-SK</a>
            </p>
            <p>
                <i className="fa fa-envelope"></i>a-sherry@live.com
        </p>
            <p>
                <i className="fa fa-weixin"></i>a-sherry
        </p>
            <p>
                <i className="fa fa-file-text-o"></i><a id="resume" href="assets/documents/resume.pdf">Resume</a>
            </p>
        </div>

    )
}

export default Contact;
