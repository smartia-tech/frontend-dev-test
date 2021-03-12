import styled from "styled-components";

export const Card = styled.a`
  text-decoration: none;
  color: black;
  outline: none;
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Subtitle = styled.h4`
  margin: 0;
`;

export const Content = styled.p`
  margin: 0;
  color: grey;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: grey;
  white-space: nowrap;
`;
