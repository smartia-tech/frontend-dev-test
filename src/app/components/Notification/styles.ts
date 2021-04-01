import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface NotificationProps {
  variant?: "info" | "success" | "error";
}
export const NotificationContainer = styled.div<NotificationProps>`
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  /* width: 100%; */
  min-width: 166px;
  /* width: 100%; */
  max-width: 500px;
  ${(props) => {
    switch (props.variant) {
      case "info":
        return css`
          background: #1f2933;
        `;
      case "success":
        return css`
          background: #18981d;
        `;
      case "error":
        return css`
          background: #e12d39;
        `;
    }
  }};

  & > button {
    border: none;
    margin-left: 20px;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
