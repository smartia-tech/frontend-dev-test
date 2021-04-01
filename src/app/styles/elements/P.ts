import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  tiny?: boolean;
  little?: boolean;
  small?: boolean;
  medium?: boolean;
  semiBold?: boolean;
}

const P = styled.p<Props>`
  font-weight: normal;
  font-size: 1rem;

  ${(props) =>
    props.tiny &&
    css`
      /* 12px */
      font-size: 0.6rem;
    `};
  ${(props) =>
    props.little &&
    css`
      /* 14px */
      font-size: 0.7rem;
    `};
  ${(props) =>
    props.small &&
    css`
      /* 16px */
      font-size: 0.8rem;
    `};
  ${(props) =>
    props.medium &&
    css`
      /* 18px */
      font-size: 0.9rem;
    `};
  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 500;
    `};
`;

export default P;
