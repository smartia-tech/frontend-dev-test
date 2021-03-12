import styled from "styled-components";

export const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  width: 50vw;
  height: 1rem;
  padding: 0.6rem;
  border-radius: 0.12rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &: focus {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
