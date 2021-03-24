import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 20px 15px;
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.primary.normal};
    box-shadow: 0 10px 20px 0 rgba(14, 14, 14, 0.15);
    color: #fff;
  `}
`;
