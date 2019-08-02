/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import Zoom from "react-reveal/Zoom";
import { Container } from "./common/styles/containers";
import { Section, SectionTitle } from "./common/styles/sections";
import { Card, CardContent } from "./common/styles/cards";
import { text_uppercase, text_center } from "./common/styles/overrides";
import Modal from "./common/modal";
import BookImg from "../images/icons/book.png";
import resume from "../data/resume.json";

const Education = styled.div`
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
      height: 77.1%;
      opacity: 0.4;
      background: #06a763;
    }
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
    width: 58px;
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
  @media only screen and (min-width: 768px) {
    margin: 0;
    width: 44%;
  }
`;

const TimeLineBlock = styled.div`
  position: relative;
  :after {
    /*timeline block after*/
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
    :nth-child(even) .timeline-content-emotion {
      float: right;
    }
    :nth-child(even) .timeline-content-emotion:before {
      top: 25px;
      left: auto;
      right: 101.2%;
      z-index: -2;
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

const TimelineDot = styled.div`
    background: #06A763;
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
    };
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

}
`;

const TimelineTitle = styled.h6`
  max-width: 84%;
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

const TimelineInfo = styled.div`
  h6 {
    line-height: 12px;
    small {
      color: inherit;
    }
  }
`;

export default () => {
  return (
    <Section id="education">
      <Container>
        <SectionTitle>
          <h4
            css={css`
              ${text_uppercase} ${text_center}
            `}
          >
            <img src={BookImg} alt="demo" />
            Education
          </h4>
        </SectionTitle>
        <Education>
          {resume.education.map(timeline => {
            return (
              <TimeLineBlock>
                <Zoom>
                  <TimelineDot>
                    <h6>{timeline.title.substring(0, 1)}</h6>
                  </TimelineDot>
                </Zoom>
                <TimelineCard className="timeline-content-emotion">
                  <Zoom>
                    <TimelineCardContent>
                      <TimelineTitle>{timeline.title}</TimelineTitle>
                      <TimelineInfo>
                        <h6>
                          <small>{timeline.institute}</small>
                        </h6>
                        <h6>
                          <small>{timeline.year}</small>
                        </h6>
                      </TimelineInfo>
                      <p>{timeline.shortDesc}</p>
                      {timeline.longDesc ? <Modal /> : null}
                    </TimelineCardContent>
                  </Zoom>
                </TimelineCard>
              </TimeLineBlock>
            );
          })}
        </Education>
      </Container>
    </Section>
  );
};
