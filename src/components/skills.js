/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import {Container, Row, Section, SectionTitle, Card, CardContent, text_center, text_uppercase} from "./common"

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
  width: 0;
  background: #fff;
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
              <img src="images/icons/mixer.png" alt="demo" />
              Skills
            </h4>
          </SectionTitle>
          <Row>
            <Col xs={12}>
              <SkillsCard id="skills-card">
                <CardContent>
                  <Row>
                    <Col xs={12} sm={4} md={4}>
                      <SkillsTitle>
                        <h6
                          css={css`
                            ${text_center}
                          `}
                        >
                          Professional
                        </h6>
                      </SkillsTitle>
                      <SkillBar data-percent="90%">
                        <SkillBarTitle>
                          <span>HTML5</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>90%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="90%">
                        <SkillBarTitle>
                          <span>CSS3</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>90%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="70%">
                        <SkillBarTitle>
                          <span>jQuery</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>70%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="68%">
                        <SkillBarTitle>
                          <span>PHP</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>68%</SkillBarPercent>
                      </SkillBar>
                    </Col>

                    <Col xs={12} sm={4} md={4}>
                      <SkillsTitle>
                        <h6
                          css={css`
                            ${text_center}
                          `}
                        >
                          Personal
                        </h6>
                      </SkillsTitle>
                      <SkillBar data-percent="80%">
                        <SkillBarTitle>
                          <span>Communication</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>80%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="60%">
                        <SkillBarTitle>
                          <span>Teamwork</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>60%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="70%">
                        <SkillBarTitle>
                          <span>Creativity</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>70%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="70%">
                        <SkillBarTitle>
                          <span>Dedication</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>70%</SkillBarPercent>
                      </SkillBar>
                    </Col>

                    <Col xs={12} sm={4} md={4}>
                      <SkillsTitle>
                        <h6
                          css={css`
                            ${text_center}
                          `}
                        >
                          Software
                        </h6>
                      </SkillsTitle>
                      <SkillBar data-percent="80%">
                        <SkillBarTitle>
                          <span>Adobe Illustrator</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>80%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="70%">
                        <SkillBarTitle>
                          <span>Adobe InDesign</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>70%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="60%">
                        <SkillBarTitle>
                          <span>PHP Storm</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>60%</SkillBarPercent>
                      </SkillBar>
                      <SkillBar data-percent="80%">
                        <SkillBarTitle>
                          <span>Dev Console</span>
                        </SkillBarTitle>
                        <SkillBarBar />
                        <SkillBarPercent>80%</SkillBarPercent>
                      </SkillBar>
                    </Col>
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
