import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #f8f8f8;
    height: 4rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Brand = styled.div``;

const BrandText = styled.div`
    margin: 0 1rem;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <Brand>
                <BrandText>Spacex</BrandText>
            </Brand>
        </Wrapper>
    );
};

export default Header;