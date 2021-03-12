
import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  height: 2.5rem;
  background: #ffffff;
  border: 0.0625rem solid #ebebeb;
  font-size: 0.85rem;
  outline: none;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  color: #757575;
  width: 100%;
  margin-bottom: 1rem;
`;

interface InputProps {
    placeholder: string;
    value: string;
    filterLaunch: (query: string) => void;
}

const Input = (props: InputProps) => {
    const { placeholder, value, filterLaunch } = props;

    return (
        <InputField
            placeholder={placeholder}
            value={value ? value : ""}
            onChange={(e) => filterLaunch(e.target.value)}
        />
    );
};

export default Input;