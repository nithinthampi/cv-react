/**@jsx jsx */
import {jsx, css} from "@emotion/core";
import {useState} from "react";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import GoogleMapReact from "google-map-react";
import {Row, Section, Container, SectionTitle, Card, CardContent, text_uppercase, text_center} from "./common";


const InputFieldWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 12px;
  label {
    left: 0;
    font-weight: normal;
    top: ${({ fieldKey, activeField }) => {
      console.log(fieldKey, activeField);
      return activeField === fieldKey ? "-1.5rem" : "0.5rem";
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

const SubmitButton =  styled.button`
    background-color: #06A763;
    width: 115px;
    color: #fff;
    border-radius: 2px;
    margin-top: 7px;
    :hover {
        background: #05985a;
    }
`

const Progress =  styled.div`
    position: relative;
    height: 4px;
    display: block;
    width: 100%;
    background-color: #1976D2;
    border-radius: 0;
    margin: -4px 0 0;
`;


const Indeterminate = styled.div`
 background-color: #fff;
 `;

 const MyMap =  styled.div`
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

  const [activeField, setActiveField] =  useState();
    return (
      <Zoom>
        <Section id="contact">
          <Container>
            <SectionTitle>
              <h4
                css={css`
                  ${text_uppercase} ${text_center}
                `}
              >
                <img src="images/icons/envelope.png" alt="demo" />
                Contact
              </h4>
            </SectionTitle>
            <Row>
              <Col xs={12} sm={12} md={5} id="contact-card">
                <Card>
                  <CardContent>
                    <form id="contact-form" name="c-form">
                      <InputFieldWrapper
                        fieldKey="first_name"
                        activeField={activeField}
                      >
                        <input
                          id="first_name"
                          type="text"
                          name="first_name"
                          onFocus={() => setActiveField("first_name")}
                          required
                        />
                        <label for="first_name">Name</label>
                      </InputFieldWrapper>
                      <InputFieldWrapper
                        fieldKey="subject"
                        activeField={activeField}
                      >
                        <input
                          id="sub"
                          type="text"
                          name="sub"
                          onFocus={() => setActiveField("subject")}
                        />
                        <label for="sub">Subject</label>
                      </InputFieldWrapper>
                      <InputFieldWrapper
                        fieldKey="email"
                        activeField={activeField}
                      >
                        <input
                          id="email"
                          type="email"
                          name="email"
                          onFocus={() => setActiveField("email")}
                          required
                        />
                        <label for="email">Email</label>
                      </InputFieldWrapper>
                      <InputFieldWrapper
                        fieldKey="message"
                        activeField={activeField}
                      >
                        <TextArea
                          id="textarea1"
                          className="materialize-textarea"
                          name="message"
                          onFocus={() => setActiveField("message")}
                          required
                        />
                        <label for="textarea1">Message</label>
                      </InputFieldWrapper>
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
                    </form>
                  </CardContent>
                  <Progress id="form-loader" className="progress is-hidden">
                    <Indeterminate className="indeterminate" />
                  </Progress>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={7}>
                <Card id="map-card">
                  <MyMap id="myMap">
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyAOrMsWj_JlLLaSh4VOOMPTQxqr43KSMjY"
                      }}
                      defaultCenter={{ lat: 10.8949464, lng: 75.9260695 }}
                      defaultZoom={11}
                    >
                      <Marker>
                        NT
                      </Marker>
                    </GoogleMapReact>
                  </MyMap>
                </Card>
              </Col>
            </Row>
          </Container>
        </Section>
      </Zoom>
    );
}