import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  medium?: boolean;
  semiBold?: boolean;
  big?: boolean;
  large?: boolean;
  huge?: boolean;
}

const H2 = styled.h2<Props>`
  font-weight: bold;
  font-size: 1rem;

  ${(props) =>
    props.medium &&
    css`
      /* 24px */
      font-size: 1.2rem;
    `};

  ${(props) =>
    props.big &&
    css`
      /* 32px */
      font-size: 1.6rem;
    `};

  ${(props) =>
    props.large &&
    css`
      /* 48px */
      font-size: 2.4rem;
    `};

  ${(props) =>
    props.huge &&
    css`
      /* 60px */
      font-size: 3rem;
    `};

  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 500;
    `};
`;

export default H2;
