import styled from "@emotion/styled";

import Colors from "../constants/Colors";

const Button = styled.button`
  border: none;
  outline: none;
  color: ${Colors.SATURATED_SKY};
  background-color: ${Colors.ANTI_FLASH_WHITE};
  text-transform: uppercase;
  font-weight: bold;
  font-family: inherit;
  padding: 5px;

  &:disabled {
    opacity: 0.5;
  }

  &.danger {
    color: ${Colors.TOMATO};
  }
  &.clear {
    background-color: ${Colors.WHITE};
  }
`;

export default Button;
