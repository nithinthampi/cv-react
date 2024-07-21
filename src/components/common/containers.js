import styled from "@emotion/styled";
import  RowBootstrap from "react-bootstrap/Row"

/*-------------------------------------------------------------------------------
# CONTAINER
-------------------------------------------------------------------------------*/

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
            width: 750px; } 
    }
    @media (min-width: 992px) {
            width: 970px; 
    }
    @media (min-width: 1200px) {
            width: 1000px; 
    }
`;

export const Row = styled(RowBootstrap)`
  margin-right: -15px;
  margin-left: -15px;
  :after,
  :before {
    content: "";
    display: table;
    clear: both;
  }
`;
