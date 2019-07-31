import styled from "@emotion/styled";
import { css } from "@emotion/core";

/*-------------------------------------------------------------------------------
#CONTAINER
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

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  :after,
  :before {
    content: "";
    display: table;
    clear: both;
  }
`;

/*-------------------------------------------------------------------------------
#SECTION
-------------------------------------------------------------------------------*/

export const Section = styled.section`
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
`;

export const SectionTitle = styled.div`
  margin-bottom: 18px;
  img {
    width: 66px;
    padding: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    margin: -2px 12px 12px 12px;
  }
`;

export const TitleIcon = styled.i`
  margin-right: 20px;
  color: #06a763;
`;


/*-------------------------------------------------------------------------------
#CARDS
-------------------------------------------------------------------------------*/
export const Card = styled.div`
     position: relative;
        background-color: #fff;
        transition: box-shadow .25s;
        border-radius: 0 !important;
        margin: 8px 0;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
}
`;

export const CardContent = styled.div`
  padding: 40px;
  border-radius: 0 0 2px 2px;
  p {
    color: inherit;
    text-align: center;
  }
`;

/*-------------------------------------------------------------------------------
#MISC
-------------------------------------------------------------------------------*/
export const clearfix = css`
  clear: both;
`;

export const img_responsive = css`
  display: block;
  max-width: 100%;
  height: auto;
`;


export const text_uppercase = css`
  text-transform: uppercase;
`;

export const text_capitalize = css`
  text-transform: capitalize;
`;

export const text_center =  css`
  text-align: center;
`

export const left = css`
  float: left !important ;
`;

export const right = css`
  float: right !important;
`;

/*-------------------------------------------------------------------------------
#COLORS
-------------------------------------------------------------------------------*/

export const blue = css`
  background-color: #2196f3;
`;

export const indigo = css`
  background-color: #3f51b5 !important;
`;

export const red = css`
  background-color: #f44336;
`;

export const orange = css`
  background-color: #ef6c00;
`;

export const dark_blue = css`
  background-color: #1976d2;
`;
