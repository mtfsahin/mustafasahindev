import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="yellow"> ABOUT ME </span>
            </h1>
            <p className="home-about-body">
            I have been working as a freelance software developer for more than 1 year. As a freelance software developer, I gained experience in various programming languages such as
            React Native , JavaScript(frontend) , Rest-API (php) and 3D modeling in Blender environment. Lately, I've been experiencing React Js , Node Js and Angulartechnologies. I gained experience
            in python - iGraph and text processing in the works I did for my graduation project. I am passionate about research, education and training.
             
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Social Media</h1>
            <p>
             Aşağıdaki kanallardan benimle <span className="yellow">bağlantı </span>kurabilirsiniz.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mtfsahin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Mustafamtu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mustafa-%C5%9Fahin-6a86b5193/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mustafamtu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
