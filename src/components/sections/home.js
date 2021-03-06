import React, {useState} from "react";
import styled from "@emotion/styled";
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faAddressCard, faGraduationCap, faSlidersH, faSuitcase, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {withStyles} from "@material-ui/styles";
import BackgroundImg from "../../images/backgrounds/background.jpg";
import resume from "../../data/resume.json";

const CustomIcon = withStyles({
    root: {
        width: "auto",
        height: "auto"
    }
})(Icon)


const Menu = styled.nav`
    position: fixed;
    left: ${({ open }) => (open ? "0px" : "-225px")};
    width: 225px;
    height: 100%;
    top: 0;
    z-index: 10;
    text-align: left;
    background: #06A763;
    transition: .3s;
    a {
        margin-left: 30px;
        margin-right: 30px;
        color: #616161;
        display: block;
        font-size: 12px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: .1em;
        text-transform: uppercase;
        :hover, :active{
            color: #1976D2;
            color: #1976D2;
        };
        span {
          padding: 7px;
          display: inline-block;
          line-height: 1;
        }

    }
`;

const MenuWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #f5f5f5;
    width: 225px;
    height: 100%;
    overflow-y: auto;
    padding-top: 14px;
`;

const LogoFlat = styled.div`
    height: 200px;
    margin-top: -14px;
    background: #06A763;
    padding: 30px 44px 44px 44px;
`

const Logo = styled.div`
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    font-size: 75px;
`;

const MenuToggle =  styled.div`
    position: absolute;
    top: 20px;
    right: -65px;
    z-index: 11;
    display: block;
    text-align: center;
    font-size: 14px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    border: 1px solid rgba(93, 92, 92, 0.52);
    background: rgba(0, 0, 0, 0.06);
    transition: all .5s ease -in -out;
    :hover {
        background: rgba(0, 0, 0, 0.3);
        transition: all .5s ease -in -out;
    }
`;

 const ToggleNormal =  styled.div`
    font-size: 31px;
    span {
        font-size: 31px;
        padding: 4px;
        color: #1976D2;
    }
 `;

const TopBar =  styled(CustomIcon)`
    position: absolute;
    right: 0;
    top: -6px;
    transition: .8s;
    transform: ${({open}) => open? "rotate(45deg)": "none"};
    transform-origin: ${({ open }) => open ? "34% 56%" : "50% 50%"};
}
`;

const MiddleBar = styled(CustomIcon)`
    position: absolute;
    right: 0;
    top: 0;
    opacity: 1;
    transition: .8s;
    opacity: ${({open}) => open ? "0": "1"};
`

const BottomBar =  styled(CustomIcon)`
    position: absolute;
    right: 0;
    top: 6px;
    transition: .8s;
    transform: ${({ open }) => open ? "rotate(-45deg)" : "none"};
    transform-origin: ${({ open }) => open ? "28% 43%" : "50% 50%"};
`

const HeaderBackground = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 370px;
  background: url(${BackgroundImg}) no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

export default () => {
    const [menuOpen, setMenuOpen]  = useState(false);

    return (
      <header id="home">
        <Menu open={menuOpen}>
          <MenuWrap>
            <LogoFlat>
              <Logo>{resume.name.substring(0,1)}</Logo>
            </LogoFlat>
            <br />
            <a href="#home">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Home
            </a>
            <a href="#about">
              <span>
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              About
            </a>
            <a href="#education">
              <span>
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              Education
            </a>
            <a href="#skills">
              <span>
                <FontAwesomeIcon icon={faSlidersH} />
              </span>
              Skills
            </a>
            <a href="#experience">
              <span>
                <FontAwesomeIcon icon={faSuitcase} />
              </span>
              Experience
            </a>
            <a href="#contact">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Contact
            </a>
          </MenuWrap>
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            <ToggleNormal>
              <TopBar open={menuOpen}>remove</TopBar>
              <MiddleBar open={menuOpen}>remove</MiddleBar>
              <BottomBar open={menuOpen}>remove</BottomBar>
            </ToggleNormal>
          </MenuToggle>
        </Menu>
        <HeaderBackground />
      </header>
    );
}