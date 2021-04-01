import styled from "@emotion/styled";

import colors from "app/styles/constants/Colors";

export const InputBox = styled.div`
  flex-grow: 1;
  height: 50px;

  display: flex;
  align-items: center;

  background-color: ${colors.ANTI_FLASH_WHITE};
  border: 1px solid transparent;
  transition: border 300ms ease-in-out, padding 300ms ease-in-out,
    background-color 300ms ease-in-out;

  position: relative;

  &:focus-within,
  &:active {
    border-color: ${colors.PRESTIGE_BLUE};
    background-color: ${colors.WHITE};

    .clear-btn {
      display: block;
    }
  }

  &.padding-left {
    padding-left: 30px;
  }
  &.padding-right {
    padding-right: 30px;
  }
  &.padding-left {
    padding-left: 30px;
  }

  input {
    font-family: inherit;
    flex-grow: 1;
    height: 100%;
    padding: 0px 10px;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
  }

  input,
  button {
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .prefix,
  .clear-btn {
    position: absolute;
    top: 15px;
    width: 20px;
    height: 20px;
  }

  .prefix {
    left: 10px;
  }
  .clear-btn {
    display: none;
    /* border: 1px solid ${colors.PRESTIGE_BLUE}; */
    border: none;
    outline: none;
    font-weight: 500;
    border-radius: 50%;
    right: 10px;
  }
`;
