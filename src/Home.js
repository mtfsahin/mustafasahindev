import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./Assets/mustafa_sahin.jpg";
import Typewriter from "typewriter-effect";
import Home2 from "./Home2";


const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                {" "}Hello!
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                            I'M{" "}
                                <strong className="main-name">MUSTAFA ŞAHİN</strong>
                            </h1>
                            <div className="main-name" style={{ padding: 50, textAlign: "left" ,fontSize: 36}}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "React Native",
                                            "JavaScript",
                                            "React js",
                                            "Java",
                                            "Python",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 70,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                      
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "350px",borderRadius:350/2,borderWidth:1,borderColor:"red",marginTop:40,}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>

    );
}

export default Home;