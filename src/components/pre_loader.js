/**@jsx jsx */
import { useEffect } from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { text_center } from "./common/styles/overrides";
import resume from "../data/resume.json";

const loader = keyframes`
    0% {
        transform: rotate(0deg);
        }
    25% {
        transform: rotate(180deg);
    50% {
        transform: rotate(180deg);
    75% {
        transform: rotate(360deg);
    100% {
        transform: rotate(360deg);
`;

const loader_inner = keyframes`
    /*loader-inner animation*/
    0% {
        height: 0;
    }
    25% {
        height: 0;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0;
    }
`;

const Loading = styled.div`
  background-color: #06a763;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5001;
  margin-top: 0;
  top: 0;
`;

const LoadingCenter = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoadingCenterAbsolute = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 200px;
  width: 271px;
  margin-top: -123px;
  margin-left: -136px;
`;

const TextHolder = styled.div`
  width: 100%;
  position: absolute;
  color: #fff;
  top: 62%;
  h2 {
    padding: 0;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
  h6 {
    font-size: 16px;
    padding: 0;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
`;

const BoxHolder = styled.div`
  position: absolute;
  top: 42%;
  left: 45%;
`;

const LoadBox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #fff;
  top: 50%;
  animation: loader 2s infinite ease;
  -webkit-animation: ${loader} 2s infinite ease;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const BoxInner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #1976d2;
  animation: ${loader_inner} 2s infinite ease -in;
`;

export default () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 2000);
  }, []);
  return (
    <Loading id="loading">
      <LoadingCenter>
        <LoadingCenterAbsolute>
          <BoxHolder>
            <LoadBox>
              <BoxInner />
            </LoadBox>
          </BoxHolder>
          <TextHolder>
            <h2
              css={css`
                ${text_center}
              `}
            >
              {resume.name}
            </h2>
            <h6
              css={css`
                ${text_center}
              `}
            >
              {resume.title}
            </h6>
          </TextHolder>
        </LoadingCenterAbsolute>
      </LoadingCenter>
    </Loading>
  );
};
