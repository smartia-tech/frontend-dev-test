import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  p,
  button,
  input,
  textarea {
    border: 0;
    outline: 0;
    font-family: ${theme.font.family};
    line-height: 20px;
  }
`}
  
`;

export const PageContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.navbar.height} 0 ${theme.navbar.height};
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${theme.page.backgroundColor}};
  `}
`;

export const PageTitle = styled.h1`
  margin: 20px auto 10px;
  padding: 0 15px;
  width: 100%;
  color: #333;

  @media (min-width: 480px) {
    max-width: 728px;
    text-align: center;
  }

  @media (min-width: 992px) {
    max-width: 960px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ResponsiveContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContainerTitle = styled.h2`
  margin: 0 0 10px;
  color: #333;

  @media screen and (max-width: 586px) {
    text-align: center;
  }
`;

export const PageOptions = styled(ResponsiveContainer)`
  margin: 30px 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  ${({ width, alignItems, justifyContent }) => css`
    width: ${width || "100%"};
    display: flex;
    flex-wrap: wrap;
    align-items: ${alignItems || "center"};
    justify-content: ${justifyContent || "center"};

    &:after {
      content: "";
      flex: auto;
    }
  `}
`;

export const FlexItem = styled.div`
  ${({ lg, md, sm, xs, mb, margin, padding }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: ${lg ? (100 / 12) * lg : "16.66"}%;

    @media screen and (max-width: 1199px) {
      width: ${md ? (100 / 12) * md : "20"}%;
    }

    @media screen and (max-width: 991px) {
      width: ${sm ? (100 / 12) * sm : "33.33"}%;
    }

    @media screen and (max-width: 768px) {
      width: ${xs ? (100 / 12) * xs : "50"}%;
    }

    @media screen and (max-width: 586px) {
      width: ${mb ? (100 / 12) * mb : "100"}%;
    }

    & > * {
      margin: ${margin || "0"};
      padding: ${padding || "0"};
    }
  `}
`;
