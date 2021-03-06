import React from "react";
import styled from "@emotion/styled";
import GoogleMapReact from "google-map-react";
import resume from "../../../data/resume.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

const MyMap = styled.div`
  width: 100%;
  height: 437px;
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

const Marker = styled.div`
  color: #06a763;
  font-size: 40px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
`;

export default () => {
  return (
    <MyMap id="myMap">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAOrMsWj_JlLLaSh4VOOMPTQxqr43KSMjY"
        }}
        defaultCenter={resume.location}
        defaultZoom={11}
      >
        
        <Marker>
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
        </Marker>
      </GoogleMapReact>
    </MyMap>
  );
};
