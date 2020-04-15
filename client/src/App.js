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
import techOne from "./techOne.json";
import techTwo from "./techTwo.json";
import techThr from "./techThr.json";
import TechintroColTwo from "./components/Techintro/TechintroColTwo";
import TechintroColOne from "./components/Techintro/TechintroColOne";

class App extends Component {

    state = {
        project: project,
        techOne: techOne,
        techTwo: techTwo,
        techThr: techThr,
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

        const techColOne = this.state.techOne.map(techOne => (
            <TechintroColOne
                key={techOne.id}
                icon={techOne.icon}
                p={techOne.p}
            />
        ));

        const techColTwo = this.state.techTwo.map(techTwo => (
            <TechintroColTwo
                key={techTwo.id}
                image={techTwo.image}
                p={techTwo.p}
                class={techTwo.class}
            />
        ));

        const techColThr = this.state.techThr.map(techThr => (
            <TechintroColTwo
                key={techThr.id}
                image={techThr.image}
                p={techThr.p}
                class={techThr.class}
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
                                    {projectData}
                                </div>
                                <div id="technologies" style={{ display: "none" }} className="row">
                                    <div className="tech col-md-4" id="col1">
                                        {techColOne}
                                    </div>
                                    <div className="tech col-md-4" id="col2">
                                        {techColTwo}
                                    </div>
                                    <div className="tech col-md-4" id="col3">
                                        {techColThr}
                                    </div>
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
