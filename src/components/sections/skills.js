/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import { Container, Row } from "../common/containers";
import { Section, SectionTitle } from "../common/sections";
import { Card, CardContent } from "../common/cards";
import { text_uppercase, text_center } from "../common/overrides";
import MixerImg from "../../images/icons/mixer.png";
import resume from "../../data/resume";

const SkillsCard = styled(Card)`
  background: #06a763;
`;

const SkillsTitle = styled.div`
  margin: 15px 0;
  h6 {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
`;

const SkillBar = styled.div`
  position: relative;
  display: block;
  margin-bottom: 17px;
  margin-top: 45px;
  width: 100%;
  padding: 0 0;
  background: #05985a;
  height: 4px;
  -webkit-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  transition-property: width, background-color;
`;

const SkillBarTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
  span {
    display: block;
    padding: 3px 0;
    margin-top: -25px;
    line-height: 15px;
    color: #fff;
  }
`;

const SkillBarBar = styled.div`
  height: 4px;
  background: #fff;
  width: ${({ percent }) => `${percent}%`};
`;

const SkillBarPercent = styled.div`
  position: absolute;
  right: 1px;
  top: -20px;
  font-size: 0.8em;
  line-height: 15px;
  color: #fff;
`;

export default () => {
  return (
    <Zoom>
      <Section id="skills">
        <Container>
          <SectionTitle>
            <h4 css={css`${text_uppercase}${text_center} `}>
              <img src={MixerImg} alt="demo" />
              Skills
            </h4>
          </SectionTitle>
          <Row>
            <Col xs={12}>
              <SkillsCard id="skills-card">
                <CardContent>
                  <Row>
                    {Object.keys(resume.skills).map((key, index) => {
                      return (
                        <Col xs={12} sm={4} md={4} key={index}>
                          <SkillsTitle>
                            <h6
                              css={css`
                                ${text_center}
                              `}
                            >
                              {key}
                            </h6>
                          </SkillsTitle>
                          {resume.skills[key].map((skill, index) => {
                            return (
                              <SkillBar key={index}>
                                <SkillBarTitle>
                                  <span>{skill.name}</span>
                                </SkillBarTitle>
                                <Zoom>
                                  <SkillBarBar percent={skill.rating} />
                                </Zoom>
                                <SkillBarPercent>
                                  {skill.rating}
                                </SkillBarPercent>
                              </SkillBar>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </CardContent>
              </SkillsCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </Zoom>
  );
};
