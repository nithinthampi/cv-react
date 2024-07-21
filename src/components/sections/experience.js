/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Zoom } from "react-awesome-reveal";
import resume from "../../data/resume.json";
import LayersImg from "../../images/icons/layers.png";
import { Card, CardContent } from "../common/cards";
import { Container } from "../common/containers";
import { text_center, text_uppercase } from "../common/overrides";
import { Section, SectionTitle } from "../common/sections";

const ExperienceContainer = styled.div`
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 23px;
    left: 50%;
    height: 99.5%;
    width: 4px;
    opacity: 0.3;
    background: #06a763;
  }
  @media only screen and (min-width: 768px) {
    :before {
      left: 50%;
      margin-left: -2px;
      height: 69.1%;
      opacity: 0.4;
      background: #06a763;
    }
  }
`;

const TimelineBlock = styled.div`
  position: relative;
  :after {
    clear: both;
    content: "";
    display: table;
  }
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    margin: -5em 0;
    :nth-child(even) {
      .timeline-content-emotion {
        float: right;
        :before {
          top: 25px;
          left: auto;
          right: 101.2%;
          z-index: -2;
        }
      }
    }
  }
`;

const TimelineCardContent = styled(CardContent)`
  padding: 20px;
  p {
    margin-top: 13px;
    text-align: left;
  }
`;

const ModalDot = styled.div`
  outline: 0;
  font-size: 20px;
  cursor: pointer;
  :hover,
  :focus {
    color: #12579b;
  }
`;

const TimelineDot = styled.div`
  background: #06a763;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 2;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 2%;
  i {
    text-align: center;
    font-size: 24px;
    margin-top: 26%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
  h6 {
    padding: 0;
    font-size: 30px;
    font-weight: bold;
    margin-top: 8px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }

  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    left: 50%;
    top: 0;
    z-index: 2;
    margin-left: -24px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
`;

const TimelineCard = styled(Card)`
  position: relative;
  background: #fff;
  margin-right: 0;
  z-index: 1;
  margin-bottom: 5px;
  border-left: 5px solid #1976d2;
  :before {
    content: "";
    width: 43px;
    height: 4px;
    position: absolute;
    top: 26px;
    left: 100%;
    z-index: -2;
    opacity: 0.4;
    background: #06a763;
  }
  :after {
    clear: both;
    content: "";
    display: table;
  }
  @media screen and (max-width: 768px) {
    :before {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 44%;
  }
`;

const TimelineTitle = styled.h6`
  max-width: 84%;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

const TimelineInfo = styled.div`
  h6 {
    line-height: 12px;
    small {
      color: inherit;
    }
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle>
          <h4
            css={css`
              ${text_uppercase} ${text_center}
            `}
          >
            <img src={LayersImg} alt="demo" />
            Experience
          </h4>
        </SectionTitle>

        <ExperienceContainer>
          {resume.experience.map((timeline, index) => {
            return (
              <TimelineBlock key={index}>
                <Zoom>
                  <TimelineDot>
                    <h6>D</h6>
                  </TimelineDot>
                </Zoom>
                <TimelineCard className="timeline-content-emotion">
                  <Zoom>
                    <TimelineCardContent>
                      <TimelineTitle>{timeline.title}</TimelineTitle>
                      <TimelineInfo>
                        <h6>
                          <small>{timeline.instite}</small>
                        </h6>
                        <h6>
                          <small>{timeline.year}</small>
                        </h6>
                      </TimelineInfo>
                      <p>{timeline.shortDesc}</p>
                      <ModalDot
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal-4"
                      >
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </ModalDot>
                    </TimelineCardContent>
                  </Zoom>
                </TimelineCard>
              </TimelineBlock>
            );
          })}
        </ExperienceContainer>
      </Container>
    </Section>
  );
};

export default Experience;
