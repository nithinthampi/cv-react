import React from "react";
import styled from "@emotion/styled";
import {Container, Row} from "./common"

const SkillsCard = styled.div`
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
    <section id="skills" className="section">
      <Container>
        <div className="section-title">
          <h4 className="text-uppercase text-center">
            <img src="images/icons/mixer.png" alt="demo" />
            Skills
          </h4>
        </div>
        <Row>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <SkillsCard id="skills-card" className="card">
              <div className="card-content">
                <Row>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <SkillsTitle className="skills-title">
                      <h6 className="text-center">Professional</h6>
                    </SkillsTitle>
                    <SkillBar className="skillbar" data-percent="90%">
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
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <SkillsTitle>
                      <h6 className="text-center">Personal</h6>
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
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <SkillsTitle>
                      <h6 className="text-center">Software</h6>
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
                  </div>
                </Row>
              </div>
            </SkillsCard>
          </div>
        </Row>
      </Container>
    </section>
  );
};
