import styled, { css } from "styled-components";

export const Page = styled.div`
  ${({ theme, isActive }) => css`
    margin: 0 2px;
    padding: 9px 15px;
    display: inline-block;
    color: ${isActive ? "#fff" : "#212366"};
    font-size: 15px;
    line-height: inherit;
    background-color: ${isActive ? theme.pagination.color : "transparent"};
    border: 0;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: ${theme.pagination.color};
      opacity: 0.8;
      color: #fff;
      text-shadow: 1px 1px 1px rgb(190, 190, 190);
    }
  `}
`;
