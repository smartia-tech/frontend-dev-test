import styled from "@emotion/styled";

import Colors from "app/styles/constants/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderBox = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  &.overlay {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  .error-message {
    margin: 24px 0px 42px;
    color: ${Colors.TOMATO};
    width: 360px;
    text-align: center;
    max-width: 100%;
  }
`;
