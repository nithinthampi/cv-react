import React from "react";
import styled from "@emotion/styled";
import {Container, Row, Section, Card, CardContent} from "./common";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Zoom from "react-reveal/Zoom";

const About = styled(Section)`
  transition: all 1s;
`;

const Actions = styled.div`
  height: auto;
  margin-right: auto;
  margin-left: auto;
  animation-delay: 1s;
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  height: auto;
  margin-right: auto;
  margin-left: auto;
  animation-delay: 1s;
  text-align: center;
`;

const AboutButton = styled(Button)`
  margin: 7px 7px;
  background: #06a763;
  color: #fff;
  width: 180px;
  border-radius: 2px;
  padding-top: 8px;
  :hover {
    background: #05985a;
  }
`;

export default () => {
  return (
    <Zoom>
    <About id="about">
      <Container>
        <Row>
          <Col xs={12}>
            <Card id="about-card">
              <CardContent>
                <p>
                  Hello! I’m Nithin Thampi. Senior Web Developer with over 13 years
                  of experience specializing in front end development.
                  Experienced with all stages of the development cycle for
                  dynamic web projects.Having an in-depth knowledge including
                  advanced HTML5, CSS, CSS3, SASS, LESS, JSON, XML, Java,
                  JavaScript, JQuery, Angular JS. Strong background in
                  management and leadership.
                </p>
              </CardContent>
              <Actions id="about-btn">
                  <AboutButton href="#">
                    Download CV
                  </AboutButton>
                  <AboutButton href="#contact">
                    Contact Me
                  </AboutButton>
              </Actions>

            </Card>
          </Col>
        </Row>
      </Container>
    </About>
    </Zoom>
  );
};
