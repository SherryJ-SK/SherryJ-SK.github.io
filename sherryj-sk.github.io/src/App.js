import React, { Component } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Row from "./components/Row/Row";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profilephoto from "./components/Profilephoto/Profilephoto";
import Wrapper from "./components/Wrapper/Wrapper";
import Selfintro from "./components/Selfintro/Selfintro";
import Projectintro from "./components/Projectintro/Projectintro";
import Contact from "./components/Contact/Contact";
import project from "./project.json";

class App extends Component {

    state = {
        project: project,
    };

    render() {
        const projectData = this.state.project.map(project => (
            <Projectintro
                key={project.title}
                image={project.image}
                title={project.title}
                text={project.text}
                href={project.href}
            />
        ));

        return (
            <div>
                <Container>
                    <Row>
                        <Header />
                        <Navbar />
                    </Row>
                    <Row>
                        <Profilephoto />
                        <Wrapper>
                            <div>
                                <p className="welcome" id="hello">Hello,</p>
                                <p id="aboutMe">a bit about me:</p>
                            </div>
                            <Row id="base">
                                <Selfintro />
                                {/* <Projectintro /> */}
                                <div className="col-xs-12 col-md-12" id="projects" style={{ display: "none" }}>
                                    <div className="row">
                                        {projectData}
                                    </div>
                                </div>
                                <div id="technologies" style={{ display: "none" }}>
                                    <h5>
                                        Tools
                                    </h5>
                                    <p>
                                        MS Visual Studio, Postman, Robo 3T
                                    </p>
                                    <h5>
                                        Languages
                                    </h5>
                                    <p>
                                        HTML, CSS, JavaScript
                                    </p>
                                    <h5>
                                        JS Library
                                    </h5>
                                    <p>
                                        JQuery, Node.JS, Express.JS, React, Redux, handlebars
                                    </p>
                                    <h5>
                                        CSS Frameworks
                                    </h5>
                                    <p>
                                        Bootstrap, Materialize
                                    </p>
                                    <h5>
                                        Database Management
                                    </h5>
                                    <p>
                                        MySQL, MongoDB
                                    </p>
                                </div>
                                <Contact />
                            </Row>
                        </Wrapper>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
};

export default App;
