import styled from "@emotion/styled";
import Colors from "app/styles/constants/Colors";

import colors from "app/styles/constants/Colors";

export const LaunchContainer = styled.div`
  flex-basis: calc(50% - 10px);
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 15px;

  min-height: 100px;
  padding: 10px;

  border: 1px solid ${colors.PEACE};
  border-radius: 2px;

  position: relative;

  img {
    width: 120px;
  }

  .info {
    & > p:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .date {
    color: ${Colors.SATURATED_SKY};
  }

  .status {
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
`;
