import styled from "@emotion/styled";
import React from "react";
import MaterialIcon from '@material-ui/core/Icon';
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faTwitter, faSkype} from "@fortawesome/free-brands-svg-icons";
import {Container, Row} from "./common";

const CardHolder = styled.div`
    overflow: visible;
    width: 100%;
    height: auto;
    margin-top: -194px;
`;

const Card = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    transition: height 1s, color 1s, margin 1s;
    z-index: 1;
    background: #06A763;
    margin: -33px 3px 0 0;
    @media screen and (max-width: 767px) {
        position: relative;
        width: 100%;
        overflow: visible;
        z-index: 1;
        top: 34px;
    }
`

const CardContent = styled.div`
    padding: 40px;
    border-radius: 0 0 2px 2px;
    @media screen and (max-width: 767px) {
        padding: 10px;
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
};
h6{
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
`

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
`

const ProfileList = styled.ul`
`;

const Title = styled.span`
    display: block;
    float: left;
    color: #fff;
    line-height: 26px;
    i {
        font-size: 23px;
    };
    svg {
        height:  1em;
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
    i {
        font-size: 15px;
        vertical-align: middle;
        padding-bottom: 15px;
    }
    @media screen and (max-width: 400px) {
        margin: 4px;
    }
    @media screen and (max-width: 295px) {
        margin:  1px;
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
    };
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
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        }
    }
`

const Slant = styled.div`
    top: 0;
    z-index: 1;
    position: absolute;
    border-style: solid;
    border-width: 400px 0 0 100px;
    border-color: rgba(223, 50, 50, 0) transparent transparent #06A763;
    @media screen and (max-width: 767px) {
        display: none;
        opacity: 0;
        overflow: hidden;
    }
`;

export default () => {
    return (
      <CardHolder id="v-card-holder">
        <Container>
          <Row>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <Card>
                <Profile>
                  <img
                    alt="profile"
                    className="img-responsive"
                    src="images/profile/profile.png"
                  />
                  <Slant />
                </Profile>

                <CardContent>
                  <Headings>
                    <h4 className="text-uppercase left">Nithin Thampi</h4>
                    <h6 className="text-capitalize left">
                      Software Engineer
                    </h6>
                  </Headings>

                  <Infos className="infos">
                    <ProfileList>
                      <li className="clearfix">
                        <Title>
                          <MaterialIcon>email</MaterialIcon>
                        </Title>
                        <Content className="content">
                          nithin.thampi87@gmail.com
                        </Content>
                      </li>
                      <li className="clearfix">
                        <Title>
                          <MaterialIcon>language</MaterialIcon>
                        </Title>
                        <Content className="content">
                          nithinthampi.me
                        </Content>
                      </li>
                      <li className="clearfix">
                        <Title>
                          <Icon icon={faSkype} aria-hidden="true" />
                        </Title>
                        <Content className="content">
                          yourusername@skype.com
                        </Content>
                      </li>
                      <li className="clearfix">
                        <Title>
                          <MaterialIcon>phone</MaterialIcon>
                        </Title>
                        <Content className="content">
                          +91 7829 387 027
                        </Content>
                      </li>
                      <li className="clearfix">
                        <Title>
                          <MaterialIcon>place</MaterialIcon>
                        </Title>
                        <Content className="content">
                          Bangalore, Karnataka, India
                        </Content>
                      </li>
                    </ProfileList>
                  </Infos>

                  <Links className="links">
                    <Social
                      href="#"
                      id="first_one"
                      className="social btn-floating indigo"
                    >
                      <Icon icon={faFacebookF} />
                    </Social>
                    <Social href="#" className="social  btn-floating blue">
                      <Icon icon={faTwitter} />
                    </Social>
                    <Social href="#" className="social  btn-floating red">
                      <Icon icon="google-plus" />
                    </Social>
                    <Social
                      href="#"
                      className="social  btn-floating blue darken-3"
                    >
                      <Icon icon={faLinkedinIn} />
                    </Social>
                    <Social
                      href="#"
                      className="social  btn-floating orange darken-3"
                    >
                      <Icon icon="fa-rss" />
                    </Social>
                  </Links>
                </CardContent>
              </Card>
            </div>
          </Row>
        </Container>
      </CardHolder>
    );
}