/** @jsx jsx */
import styled from "@emotion/styled";
import {jsx, css} from "@emotion/core";
import Zoom from "react-reveal/Zoom";
import { Container,Card, Section, SectionTitle, text_uppercase, text_center, CardContent } from "./common";

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

const ModalDot = styled.a`
  outline: 0;
  font-size: 20px;
  :hover,
  focus {
    color: #12579b;
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
    <Zoom>
      <Section id="education">
        <Container>
          <SectionTitle>
            <h4 css={css`${text_uppercase} ${text_center}`}>
              <img src="images/icons/book.png" alt="demo" />
              Education
            </h4>
          </SectionTitle>
          <Education>
            <TimeLineBlock>
              <TimelineDot>
                <h6>P</h6>
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>Preparatory Education</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>Fedrick School</small>
                    </h6>
                    <h6>
                      <small>Jan 1997 - Mar 2000</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed my preparatory education from this prestigious
                    institution. I successful completed all the credits without
                    any fallout and got A grade overall.
                  </p>
                  <ModalDot
                    href="#"
                    data-toggle="modal"
                    data-target="#myModal-1"
                  >
                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                  </ModalDot>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
            <TimeLineBlock>
              <TimelineDot>
                <h6>H</h6>
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>High School</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>RedStreet College</small>
                    </h6>
                    <h6>
                      <small>Jan 2000 - Mar 2005</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed my high school degree from this prestigious
                    institution. I successful completed all the credits without
                    any fallout and got A grade overall.
                  </p>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
            <TimeLineBlock>
              <TimelineDot>
                <h6>C</h6>
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>Computer Science</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>Down Street College</small>
                    </h6>
                    <h6>
                      <small>Jan 2006 - Mar 2008</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed my computer science degree from this prestigious
                    institution. I successful completed all the credits without
                    any fallout and got A grade overall.
                  </p>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
            <TimeLineBlock>
              <TimelineDot>
                <i className="fa fa-graduation-cap" />
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>Software Engineering</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>Oxford University</small>
                    </h6>
                    <h6>
                      <small>Jan 2009 - Mar 2010</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed this degree from this prestigious institution. I
                    successful completed all the credits without any fallout and
                    got A grade overall.
                  </p>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
            <TimeLineBlock>
              <TimelineDot>
                <h6>U</h6>
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>UI/UX Workshop</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>IT Next Academy</small>
                    </h6>
                    <h6>
                      <small>Jan 2010 - Mar 2011</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed this course from this prestigious institution. I
                    successful completed all the credits without any fallout and
                    got A grade overall.
                  </p>
                  <a href="#" data-toggle="modal" data-target="#myModal-2">
                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                  </a>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
            <TimeLineBlock>
              <TimelineDot>
                <i className="fa fa-globe" />
              </TimelineDot>
              <TimelineCard className="timeline-content-emotion">
                <TimelineCardContent>
                  <TimelineTitle>Web Development</TimelineTitle>
                  <TimelineInfo>
                    <h6>
                      <small>Lipro University</small>
                    </h6>
                    <h6>
                      <small>Jan 2011 - Mar 2012</small>
                    </h6>
                  </TimelineInfo>
                  <p>
                    I completed this course from this prestigious institution. I
                    successful completed all the credits without any fallout and
                    got A grade overall.
                  </p>
                  <a href="#" data-toggle="modal" data-target="#myModal-3">
                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                  </a>
                </TimelineCardContent>
              </TimelineCard>
            </TimeLineBlock>
          </Education>
        </Container>
      </Section>
    </Zoom>
  );
};
