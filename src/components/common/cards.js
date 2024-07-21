/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

/*-------------------------------------------------------------------------------
#CARDS
-------------------------------------------------------------------------------*/
export const Card = ({ className, children }) => (
  <div
    className={className}
    css={css`
      position: relative;
      background-color: #fff;
      transition: box-shadow 0.25s;
      border-radius: 0 !important;
      margin: 8px 0;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    `}
  >
    {children}
  </div>
);
styled.div`
    
}
`;

export const CardContent = ({ className, children }) => (
  <div
    className={className}
    css={css`
      padding: 40px;
      border-radius: 0 0 2px 2px;
      p {
        color: inherit;
        text-align: center;
      }
    `}
  >
    {children}
  </div>
);
