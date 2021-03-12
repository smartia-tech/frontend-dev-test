import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 5vw;
`;

export const Welcome = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  color: white;
  fill: white;
  margin-left: 2.5rem;
`;

export const SearchBar = styled.div`
  text-align: center;
  padding: 0.6rem;
  background-color: #304ffe;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: sticky;
  top: 0;
`;

export const More = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.8rem 2rem;
  border: 2px solid #fff;
  transform-origin: top center;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  outline: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Tag = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  outline: none;

  svg {
    stroke: grey;
  }
  &:hover {
    svg {
      stroke: white;
    }
  }
`;
