import React from "react";
import styled from "@emotion/styled";
import {Container} from "./common";

const Experience = styled.div`
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
  };
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  };

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

const CardContent = styled.div`
  padding: 20px;
  p.description {
    margin-top: 13px;
    text-align: left;
  }
`;

const ModalDot = styled.div`
  outline: 0;
  font-size: 20px;
  :hover,
  focus {
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

const TimelineContent = styled.div`
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
  };
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
    margin:0;
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

export default () => {
  return (
    <section id="experience" className="section">
      <Container>
        <div className="section-title">
          <h4 className="text-uppercase text-center">
            <img src="images/icons/layers.png" alt="demo" />
            Experience
          </h4>
        </div>

        <Experience>
          <TimelineBlock>
            <TimelineDot>
              <h6>D</h6>
            </TimelineDot>
            <TimelineContent className="card timeline-content-emotion">
              <CardContent className="card-content">
                <TimelineTitle className="timeline-title">Designer</TimelineTitle>
                <TimelineInfo className="timeline-info">
                  <h6>
                    <small>RulerSoft</small>
                  </h6>
                  <h6>
                    <small>Jan 2010 - Mar 2012</small>
                  </h6>
                </TimelineInfo>
                <p className="description">
                  I started my designing carrier here, spent tow years learning
                  and working in various designing aspects..
                </p>
                <ModalDot
                  href="#"
                  className="modal-dot"
                  data-toggle="modal"
                  data-target="#myModal-4"
                >
                  <i className="fa fa-ellipsis-h" aria-hidden="true" />
                </ModalDot>
              </CardContent>
            </TimelineContent>
          </TimelineBlock>

          <TimelineBlock>
            <TimelineDot>
              <h6>F</h6>
            </TimelineDot>
            <TimelineContent className="card timeline-content-emotion">
              <CardContent className="card-content">
                <TimelineTitle className="timeline-title">
                  Frontend Developer
                </TimelineTitle>
                <TimelineInfo className="timeline-info">
                  <h6>
                    <small>Micro IT</small>
                  </h6>
                  <h6>
                    <small>Jan 2012 - Mar 2014</small>
                  </h6>
                </TimelineInfo>
                <p className="description">
                  I started my frontend carrier here, spent tow years learning
                  and working in various frontend aspects. I worked on about 40+
                  projects local and online.
                </p>
              </CardContent>
            </TimelineContent>
          </TimelineBlock>

          <TimelineBlock>
            <TimelineDot>
              <h6>U</h6>
            </TimelineDot>
            <TimelineContent className="card timeline-content-emotion">
              <CardContent className="card-content">
                <TimelineTitle className="timeline-title">
                  UI/UX Expert
                </TimelineTitle>
                <TimelineInfo className="timeline-info">
                  <h6>
                    <small>Libra IT Solutions</small>
                  </h6>
                  <h6>
                    <small>Jan 2014 - Mar 2015</small>
                  </h6>
                </TimelineInfo>
                <p className="description">
                  I started my expertise carrier here, spent tow years learning
                  and working in various UX/UI aspects. I worked on about 70+
                  projects local and online.
                </p>
              </CardContent>
            </TimelineContent>
          </TimelineBlock>

          <TimelineBlock>
            <TimelineDot>
              <h6>S</h6>
            </TimelineDot>
            <TimelineContent className="card timeline-content-emotion">
              <CardContent className="card-content">
                <TimelineTitle className="timeline-title">
                  Senior Developer
                </TimelineTitle>
                <TimelineInfo className="timeline-info">
                  <h6>
                    <small>WebStyle Technologies</small>
                  </h6>
                  <h6>
                    <small>Jan 2016 - Continue..</small>
                  </h6>
                </TimelineInfo>
                <p className="description">
                  I recently joined here, currently working on various
                  development aspects. I already worked on about..
                </p>
                <ModalDot
                  href="#"
                  className="modal-dot"
                  data-toggle="modal"
                  data-target="#myModal-5"
                >
                  <i className="fa fa-ellipsis-h" aria-hidden="true" />
                </ModalDot>
              </CardContent>
            </TimelineContent>
          </TimelineBlock>
        </Experience>
      </Container>
    </section>
  );
};
