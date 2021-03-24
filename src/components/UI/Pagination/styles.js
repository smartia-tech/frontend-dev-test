import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, color }) => css`
    margin: 40px 0 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${() => {
      theme.pagination = {};
      theme.pagination.color =
        color || theme.colors.primary.normal || "#31217C";
    }}
  `}
`;

export const Icon = styled.i`
  ${({ theme }) => css`
    margin: 0 5px;
    padding: 10px 14px;
    cursor: pointer;
    background: transparent;

    &:hover {
      border-radius: 3px;
      background: ${theme.pagination.color};
      color: #fff;
      transition: background 2s ease-int-out;
    }

    @media screen and (max-width: 350px) {
      padding: 10px;
    }
  `}
`;
