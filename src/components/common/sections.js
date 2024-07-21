/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
/*-------------------------------------------------------------------------------
#SECTION
-------------------------------------------------------------------------------*/

export const Section = ({ className, children }) => (
  <section
    className={className}
    css={css`
      position: relative;
      padding-top: 15px;
      padding-bottom: 30px;
    `}
  >
    {children}
  </section>
);

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
