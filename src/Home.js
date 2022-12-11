import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./Assets/home-main.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                                {" "}Merhabaa!
                            </h1>

                            <h1 className="heading-name">
                                Ben{" "}
                                <strong className="main-name">Mustafa Şahin</strong>
                            </h1>
                            <div className="main-name" style={{ padding: 50, textAlign: "left" ,fontSize: 36}}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "React Native",
                                            "Javascrpit",
                                            "React js",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>

            </Container>
        </section>

    );
}

export default Home;