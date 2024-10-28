import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { AiFillGithub, AiFillInstagram, AiOutlineMail , AiFillFile} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              As a Determined Developer with{" "}
              <i className="primary-header">4 years </i>of experience in a
              fast-paced department, I have honed my skills in multilingual
              communication and collaboration with people of different
              backgrounds and personalities. My{" "}
              <i className="primary-header"></i>optimism, punctuality, and
              teamplayer attitude have helped me to deliver quality work and
              meet deadlines
            </p>
          </Col>
        </Row>
       
        <Row>
          <>
            <h1 data-aos="fade-right">
              <span className="primary-header">Skillset</span> I Work With
            </h1>

            <div data-aos="fade-up">
              <Techstack />
            </div>

            <h1 data-aos="fade-right">
              <span className="primary-header">Tools</span> I use
            </h1>
            <div data-aos="fade-up">
              <Toolstack data-aos="fade-up" />
            </div>
          </>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/kapil-156"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:bsr.kapil@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/b-sai-raghavendra-kapil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kapil_bsr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="kapil.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="resume"
                >
                  <AiFillFile />
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
