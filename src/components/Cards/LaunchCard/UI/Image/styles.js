import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 150px;
    height: 100%;
    border-radius: ${theme.border.radius};
  `}
`;

export const SkeletonStyle = styled(Container)`
  margin: 0 auto;
  max-width: 150px;
  border-radius: 4px;
`;
