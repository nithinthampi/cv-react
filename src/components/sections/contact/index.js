/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import { Row, Container } from "../../common/containers";
import { Card, CardContent } from "../../common/cards";
import { Section, SectionTitle } from "../../common/sections";
import { text_uppercase, text_center } from "../../common/overrides";
import ContactForm from "./form";
import Map from "./map";
import EnvelopeImg from "../../../images/icons/envelope.png";

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

export default () => {
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
                <ContactForm />
              </CardContent>
              <Progress id="form-loader" className="progress is-hidden">
                <Indeterminate className="indeterminate" />
              </Progress>
            </Card>
          </Col>
          <Zoom>
            <Col xs={12} sm={12} md={7}>
              <Card id="map-card">
                <Map />
              </Card>
            </Col>
          </Zoom>
        </Row>
      </Container>
    </Section>
  );
};
