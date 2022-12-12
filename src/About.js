import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={ 12 }
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="yellow"> ABOUT ME </span>
            </h1>
            <p className="home-about-body">
            I have been working as a freelance software developer for more than 1 year. As a freelance software developer, I gained experience in various programming languages such as
            React Native , JavaScript(frontend) , Rest-API (php) and 3D modeling in Blender environment. Lately, I've been experiencing React Js , Node Js and Angulartechnologies. I gained experience
            in python - iGraph and text processing in the works I did for my graduation project. I am passionate about research, education and training.
             
            </p>
    
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="yellow">Skillset </strong>
        </h1>
        <Techstack/>
   

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
