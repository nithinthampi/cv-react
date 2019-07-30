import React from "react";
import styled from "@emotion/styled";
import {Container, Row} from "./common";

const About = styled.div`
  transition: all 1s;
`;

const Actions = styled.div`
  height: auto;
  margin-right: auto;
  margin-left: auto;
  animation-delay: 1s;
  text-align: center;
`;

const AboutButton = styled.a`
  margin: 7px 7px;
  background: #06a763;
  color: #fff;
  width: 180px;
  border-radius: 2px;
  :hover {
    background: #05985a;
  }
`;

export default () => {
  return (
    <About id="about" className="section">
      <Container>
        <Row>
          <div className="col-md-12">
            <div id="about-card" className="card">
              <div className="card-content">
                <p>
                  Hello! I’m John Doe. Senior Web Developer with over 13 years
                  of experience specializing in front end development.
                  Experienced with all stages of the development cycle for
                  dynamic web projects.Having an in-depth knowledge including
                  advanced HTML5, CSS, CSS3, SASS, LESS, JSON, XML, Java,
                  JavaScript, JQuery, Angular JS. Strong background in
                  management and leadership.
                </p>
              </div>

              <Actions id="about-btn" className="card-action">
                <div className="about-btn">
                  <AboutButton href="#" className="btn">
                    Download CV
                  </AboutButton>
                  <AboutButton href="#contact" className="btn">
                    Contact Me
                  </AboutButton>
                </div>
              </Actions>
            </div>
          </div>
        </Row>
      </Container>
    </About>
  );
};
