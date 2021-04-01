import styled from "@emotion/styled";

import colors from "app/styles/constants/Colors";
// import media from "app/styles/media";

export const Nav = styled.nav`
  min-height: 80px;
  position: sticky;
  top: 0;
  background-color: ${colors.WHITE};
  box-shadow: 0 4px 13px -3px ${colors.ANTI_FLASH_WHITE};
  border-bottom: 1px solid ${colors.CITY_LIGHTS};
  z-index: 1;

  display: flex;
  align-items: center;
  padding: 0px 20px;

  & > .logo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    margin-right: 40px;

    font-size: 1.2rem;

    & > svg {
      height: 40px;
      width: 40px;
      margin-right: 5px;
    }
  }
`;
