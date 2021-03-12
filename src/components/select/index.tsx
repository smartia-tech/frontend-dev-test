import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const CustomSelect = styled.select`
    border: 1px solid #ebebeb;
    color: #454749;
    outline: none;
    padding: 0.2rem;
`;

interface SelectProps {
    setItemCount: (count: number) => void;
}

const Select = (props: SelectProps) => {
    const { setItemCount } = props;

    return (
        <Wrapper>
            Items per page &nbsp;
            <CustomSelect onChange={(e) => setItemCount(Number(e.target.value))}>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
            </CustomSelect>
        </Wrapper>
    );
};

export default Select;