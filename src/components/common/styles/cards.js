import styled from "@emotion/styled";

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
