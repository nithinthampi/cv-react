import React from "react";
import styled from "@emotion/styled";
import {Container, Row} from "../common/containers";
import {Section} from "../common/sections";
import {Card, CardContent} from "../common/cards";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Zoom from "react-reveal/Zoom";
import resume from "../../data/resume.json";

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
                  {resume.about.description}
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
