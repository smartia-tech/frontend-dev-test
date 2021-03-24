import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({
    width,
    margin,
    padding,
    height,
    display,
    childrenPosition,
    color,
    fontSize,
    fontWeight,
    colorOnHover,
  }) => css`
    width: ${width || "auto"};
    & a {
      all: unset;
      margin: ${margin || "0"};
      padding: ${padding || "0"};
      width: ${width || "auto"};
      height: ${height || "auto"};
      display: ${display || "flex"};
      align-items: center;
      justify-content: ${() => {
        switch (childrenPosition) {
          case "left":
            return "flex-start";
          case "right":
            return "flex-end";
          default:
            return "center";
        }
      }};

      color: ${color || "#000"};
      font-size: ${fontSize || "14px"};
      font-weight: ${fontWeight || "500"};
      cursor: pointer;

      &:hover {
        ${colorOnHover && `color: ${colorOnHover}`};
      }
    }
  `}
`;

export const LinkAnchor = styled.a``;

export const Title = styled.p``;
