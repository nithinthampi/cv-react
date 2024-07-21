import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUp = styled.div`
  color: #fff;
  height: 45px;
  width: 45px;
  cursor: pointer;
  font-size: 28px;
  background: #1976d2;
  border: 1px solid #1976d2;
  text-align: center;
  position: fixed;
  bottom: 21px;
  right: 18px;
  z-index: 5;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  transition: 0.3s;
`;

const scrollUpFn = () => {
  window.scrollTo(0, 0);
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return visible ? (
    <ScrollUp id="scroll-top" onClick={scrollUpFn}>
      <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
    </ScrollUp>
  ) : null;
};

export default ScrollToTop;
