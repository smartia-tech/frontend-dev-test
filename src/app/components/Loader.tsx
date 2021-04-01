import * as React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import colors from "app/styles/constants/Colors";

interface LoaderProps {
  size?: string;
  lineColor?: string;
  strokeWidth?: string;
}

const spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const LoaderBox = styled.div<LoaderProps>`
  width: ${(props) => props.size || "20"}px;
  height: ${(props) => props.size || "20"}px;

  border: ${(props) => props.strokeWidth || "1"}px solid
    ${(props) => props.lineColor || colors.PRESTIGE_BLUE};

  border-bottom-color: transparent;
  border-left-color: transparent;

  border-radius: 50%;

  animation: ${spin} 400ms infinite linear;
`;

type PartialLoaderType = LoaderProps & React.BaseHTMLAttributes<any>;
interface Props extends PartialLoaderType {}

const Loader: React.FC<Props> = (props) => {
  return <LoaderBox {...props} />;
};

export default Loader;
