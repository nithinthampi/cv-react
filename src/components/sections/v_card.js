/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Col from "react-bootstrap/lib/Col";
import MaterialIcon from "@material-ui/core/Icon";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import ProfileImg from "../../images/profile/profile.png"
import resume from "../../data/resume.json";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row } from "../common/containers";
import { Card, CardContent } from "../common/cards";
import {
  text_uppercase,
  text_capitalize,
  left,
  clearfix,
  img_responsive,
  indigo,
  blue,
  red,
  dark_blue,
  orange
} from "../common/overrides";

const CardHolder = styled.div`
  overflow: visible;
  width: 100%;
  height: auto;
  margin-top: -194px;
`;

const ProfileCard = styled(Card)`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  transition: height 1s, color 1s, margin 1s;
  z-index: 1;
  background: #06a763;
  margin: -33px 3px 0 0;
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    overflow: visible;
    z-index: 1;
    top: 34px;
  }
`;

const Headings = styled.div`
  max-width: 514px;
  @media screen and (max-width: 990px) {
    max-width: 270px;
  }
  h4 {
    display: block;
    width: 100%;
    font-weight: 900;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
  h6 {
    display: block;
    width: 100%;
    font-weight: 300;
    margin-top: -10px;
    margin-bottom: 30px;
    font-size: 1.2em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    text-align: center;
    margin-top: 38px;
    h6 {
      margin-bottom: 20px;
    }
  }
`;

const Infos = styled.div`
  max-width: 515px;
  margin-top: 99px;
  @media screen and (max-width: 990px) {
    max-width: 278px;
  }
  @media screen and (max-width: 767px) {
    display: table;
    margin: 0 auto;
    max-width: 100%;
    padding: 0;
  }
`;

const ProfileList = styled.ul``;

const Title = styled.span`
  display: block;
  float: left;
  color: #fff;
  line-height: 26px;
  i {
    font-size: 23px;
  }
  svg {
    height: 1em;
    width: 1em;
    font-size: 1.5em;
  }
`;

const Content = styled.span`
  display: block;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`;

const Links = styled.div`
  max-width: 500px;
  margin-left: -12px;
  margin-top: 12px;
  height: 100%;
  @media screen and (max-width: 990px) {
    max-width: 325px;
  }
  @media screen and (max-width: 767px) {
    display: table;
    max-width: 100%;
    padding: 0;
    margin: 0 auto 9px;
  }
`;

const Social = styled.a`
  margin-left: 12px;
  margin-bottom: 4px;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 37px;
  height: 37px;
  padding: 0;
  border-radius: 50%;
  transition: 0.3s;
  display: inline-block;
  line-height: 37px;
  color: #fff;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  i {
    font-size: 15px;
    vertical-align: middle;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 400px) {
    margin: 4px;
  }
  @media screen and (max-width: 295px) {
    margin: 1px;
  }
  @media screen and (max-width: 767px) {
    top: 0;
    margin-left: 5px;
    margin-bottom: 4px;
  }
`;

const Profile = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  img {
    width: 400px;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 85%;
    left: 0;
    width: 150px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;
    background-color: transparent;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }
  }
`;

const Slant = styled.div`
  top: 0;
  z-index: 1;
  position: absolute;
  border-style: solid;
  border-width: 400px 0 0 100px;
  border-color: rgba(223, 50, 50, 0) transparent transparent #06a763;
  @media screen and (max-width: 767px) {
    display: none;
    opacity: 0;
    overflow: hidden;
  }
`;

export default () => {
  return (
    <Zoom>
      <CardHolder id="v-card-holder">
        <Container>
          <Row>
            <Col xs={12}>
              <ProfileCard>
                <Profile>
                  <img alt="profile" src={ProfileImg} css={img_responsive} />
                  <Slant />
                </Profile>

                <CardContent>
                  <Headings>
                    <h4 css={css`${text_uppercase}${left}`}>{resume.name}</h4>
                    <h6 css={css`${text_capitalize}${left}`}>
                      {resume.basic.title}
                    </h6>
                  </Headings>

                  <Infos>
                    <ProfileList>
                      <li css={clearfix}>
                        <Title>
                          <MaterialIcon>email</MaterialIcon>
                        </Title>
                        <Content>{resume.basic.email}</Content>
                      </li>
                      <li css={clearfix}>
                        <Title>
                          <MaterialIcon>language</MaterialIcon>
                        </Title>
                        <Content>{resume.basic.website}</Content>
                      </li>
                      <li css={clearfix}>
                        <Title>
                          <Icon icon={faSkype} aria-hidden="true" />
                        </Title>
                        <Content>{resume.basic.skype}</Content>
                      </li>
                      <li css={clearfix}>
                        <Title>
                          <MaterialIcon>phone</MaterialIcon>
                        </Title>
                        <Content>{resume.basic.phone}</Content>
                      </li>
                      <li css={clearfix}>
                        <Title>
                          <MaterialIcon>place</MaterialIcon>
                        </Title>
                        <Content>{resume.basic.address}</Content>
                      </li>
                    </ProfileList>
                  </Infos>

                  <Links>
                    <Social href="#" id="first_one" css={indigo}>
                      <Icon icon={faFacebookF} />
                    </Social>
                    <Social href="#" css={blue}>
                      <Icon icon={faTwitter} />
                    </Social>
                    <Social href="#" css={red}>
                      <Icon icon="google-plus" />
                    </Social>
                    <Social href="#" css={dark_blue}>
                      <Icon icon={faLinkedinIn} />
                    </Social>
                    <Social href="#" css={orange}>
                      <Icon icon="fa-rss" />
                    </Social>
                  </Links>
                </CardContent>
              </ProfileCard>
            </Col>
          </Row>
        </Container>
      </CardHolder>
    </Zoom>
  );
};
