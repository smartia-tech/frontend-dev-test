import React from "react";
import styled, { css } from "styled-components";

interface StyledProps {
    readonly isActive?: boolean;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    padding-bottom: 2rem;
`;

const UnOrderList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
`;

const ListItem = styled.li`
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    &:hover {
        cursor: pointer;
        background-color: #ebebeb;
    }
    ${(props: StyledProps) => props.isActive && css`
        background-color: #ebebeb;
    `}
`;

const PageText = styled.div`
    color: #2aa7ff;
`;

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    currentPage: number;
    paginate: (page: number) => void;
}

const Paginate = (props: PaginationProps) => {
    const { postsPerPage, totalPosts, paginate } = props;
    let { currentPage } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Wrapper>
            <UnOrderList>
                {currentPage > 1 &&
                    <ListItem onClick={() => paginate(--currentPage)}>
                        <PageText>Prev</PageText>
                    </ListItem>}

                {pageNumbers.map((number, idx) => {
                    return <ListItem
                        onClick={() => paginate(number)}
                        key={`page-${idx}`}
                        isActive={currentPage === Number(idx) + 1}
                    >
                        <PageText> {number} </PageText>
                    </ListItem>
                })}
                
                {currentPage < pageNumbers.length &&
                    <ListItem onClick={() => paginate(++currentPage)}>
                        <PageText>Next</PageText>
                    </ListItem>}
            </UnOrderList>
        </Wrapper>);
};

export default Paginate;