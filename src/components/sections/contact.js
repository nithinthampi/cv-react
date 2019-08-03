/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import GoogleMapReact from "google-map-react";
import { Row, Container } from "../common/containers";
import { Card, CardContent } from "../common/cards";
import { Section, SectionTitle } from "../common/sections";
import { text_uppercase, text_center } from "../common/overrides";
import EnvelopeImg from "../../images/icons/envelope.png";
import resume from "../../data/resume.json";

const InputFieldWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 12px;
  label {
    left: 0;
    font-weight: normal;
    top: ${({ active }) => {
      return active ? "-1rem" : "0.5rem";
    }};
    position: absolute;
    font-size: 1rem;
    transition: all 0.5s;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gainsboro;
    border-radius: 0;
    outline: none;
    height: 2rem;
    width: 100%;
    font-size: 1rem;
    margin: 6px 0 6px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    transition: all 0.5s;
    :focus {
      border-bottom: 1px solid #1976d2;
      box-shadow: 0 1px 0 0 #1976d2;
    }
    :focus + label {
      color: #1976d2;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #06a763;
  width: 115px;
  color: #fff;
  border-radius: 2px;
  margin-top: 7px;
  :hover {
    background: #05985a;
  }
`;

const Progress = styled.div`
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #1976d2;
  border-radius: 0;
  margin: -4px 0 0;
`;

const Indeterminate = styled.div`
  background-color: #fff;
`;

const MyMap = styled.div`
  width: 100%;
  height: 417px;
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

const TextArea = styled.textarea`
  overflow-y: hidden;
  resize: none;
  min-height: 5rem;
`;

const Marker = styled.div`
  color: white;
  background: #06a763;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
`;

export default () => {
  const [inputFields, setInputFields] = useState({
    first_name: {
      active: false,
      value: ""
    },
    subject: {
      active: false,
      value: ""
    },
    email: {
      active: false,
      value: ""
    },
    message: {
      active: false,
      value: ""
    }
  });
  console.log(inputFields);
  return (
    <Section id="contact">
      <Container>
        <SectionTitle>
          <h4
            css={css`
              ${text_uppercase} ${text_center}
            `}
          >
            <img src={EnvelopeImg} alt="demo" />
            Contact
          </h4>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={12} md={5} id="contact-card">
            <Card>
              <CardContent>
                <form id="contact-form" name="c-form">
                  <Zoom>
                    <InputFieldWrapper
                      fieldKey="first_name"
                      active={inputFields["first_name"].active}
                    >
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        onChange={e => {
                          setInputFields({
                            ...inputFields,
                            first_name: {
                              active: true,
                              value: e.target.value
                            }
                          });
                        }}
                        onFocus={() => {
                          setInputFields({
                            ...inputFields,
                            first_name: {
                              active: true,
                              value: inputFields["first_name"].value
                            }
                          });
                        }}
                        onBlur={() => {
                          if (!inputFields["first_name"].value) {
                            setInputFields({
                              ...inputFields,
                              first_name: {
                                active: true,
                                value: inputFields["first_name"].value
                              }
                            });
                          }
                        }}
                        required
                      />
                      <label htmlFor="first_name">Name</label>
                    </InputFieldWrapper>
                  </Zoom>
                  <Zoom>
                    <InputFieldWrapper
                      fieldKey="subject"
                      active={inputFields["subject"].active}
                    >
                      <input
                        id="subject"
                        type="text"
                        name="sub"
                        onChange={e => {
                          setInputFields({
                            ...inputFields,
                            subject: { active: true, value: e.target.value }
                          });
                        }}
                        onFocus={() => {
                          setInputFields({
                            ...inputFields,
                            subject: {
                              active: true,
                              value: inputFields["subject"].value
                            }
                          });
                        }}
                        onBlur={() => {
                          if (!inputFields["subject"].value) {
                            setInputFields({
                              ...inputFields,
                              subject: {
                                active: true,
                                value: inputFields["subject"].value
                              }
                            });
                          }
                        }}
                      />
                      <label htmlFor="subject">Subject</label>
                    </InputFieldWrapper>
                  </Zoom>
                  <Zoom>
                    <InputFieldWrapper
                      fieldKey="email"
                      active={inputFields["email"].active}
                    >
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        onChange={e => {
                          setInputFields({
                            ...inputFields,
                            email: {
                              active: true,
                              value: e.target.value
                            }
                          });
                        }}
                        onFocus={() => {
                          setInputFields({
                            ...inputFields,
                            email: {
                              active: true,
                              value: inputFields["email"].value
                            }
                          });
                        }}
                        onBlur={() => {
                          if (!inputFields["email"].value) {
                            setInputFields({
                              ...inputFields,
                              email: {
                                active: true,
                                value: inputFields["email"].value
                              }
                            });
                          }
                        }}
                      />
                      <label htmlFor="email">Email</label>
                    </InputFieldWrapper>
                  </Zoom>
                  <Zoom>
                    <InputFieldWrapper
                      fieldKey="message"
                      active={inputFields["message"].active}
                    >
                      <TextArea
                        id="textarea1"
                        className="materialize-textarea"
                        name="message"
                        required
                        onChange={e => {
                          setInputFields({
                            ...inputFields,
                            message: { active: true, value: e.target.value }
                          });
                        }}
                        onFocus={() => {
                          setInputFields({
                            ...inputFields,
                            message: {
                              active: true,
                              value: inputFields["message"].value
                            }
                          });
                        }}
                        onBlur={() => {
                          if (!inputFields["message"].value) {
                            setInputFields({
                              ...inputFields,
                              message: {
                                active: true,
                                value: inputFields["message"].value
                              }
                            });
                          }
                        }}
                      />
                      <label htmlFor="textarea1">Message</label>
                    </InputFieldWrapper>
                  </Zoom>
                  <Zoom>
                    <div className="contact-send">
                      <SubmitButton
                        id="submit"
                        name="contactSubmit"
                        type="submit"
                        value="Submit"
                        className="btn"
                      >
                        Send
                      </SubmitButton>
                    </div>
                  </Zoom>
                </form>
              </CardContent>
              <Progress id="form-loader" className="progress is-hidden">
                <Indeterminate className="indeterminate" />
              </Progress>
            </Card>
          </Col>
          <Zoom>
            <Col xs={12} sm={12} md={7}>
              <Card id="map-card">
                <MyMap id="myMap">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAOrMsWj_JlLLaSh4VOOMPTQxqr43KSMjY"
                    }}
                    defaultCenter={resume.location}
                    defaultZoom={11}
                  >
                    <Marker>NT</Marker>
                  </GoogleMapReact>
                </MyMap>
              </Card>
            </Col>
          </Zoom>
        </Row>
      </Container>
    </Section>
  );
};
