import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../reducers";
import { fetchPastLaunches, filterFetchPastLaunches } from "../actions/launches.action";
import { Card, Input, Pagination, Select } from "../components";
import { isLoaded } from "../helpers/store";
import useDebounce from "../helpers/debounce";
import { initialState, reducer } from "./state"

const Wrapper = styled.div`
    padding: 0 6rem;
`;

const FilterSection = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputContainer = styled.div`
    width: 45%;
`;

const SelectContainer = styled.div``;

const CardBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Loading = styled.div`
    text-align: center;
    margin-top: 6rem;
`;

const Home = () => {
    const [state, localDispatch] = useReducer(reducer, initialState);
    const dispatch = useDispatch();
    const launchState = useSelector((state: Store) => state.launches);
    const { data, status } = launchState;
    const { query, currentPage, postsPerPage } = state

    const setValue = (field: string, value: string | number) => {
        localDispatch({
            type: "SET_VALUE",
            field: field,
            value: value,
        });
    };

    const debouncedSearchTerm = useDebounce(query, 500);

    useEffect(() => {
        dispatch(fetchPastLaunches());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(
        () => {
            dispatch(filterFetchPastLaunches(query));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [debouncedSearchTerm]
    );

    const filterLaunch = (filter: string) => {
        setValue("query", filter);
    };

    const paginate = (page: number) => {
        setValue("currentPage", page);
    };

    const setItemCount = (count: number) => {
        setValue("postsPerPage", count);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <Wrapper>
            <FilterSection>
                <InputContainer>
                    <Input placeholder="Search for launches" filterLaunch={filterLaunch} value={query} />
                </InputContainer>
                <SelectContainer>
                    <Select setItemCount={setItemCount}/>
                </SelectContainer>
            </FilterSection>
            {isLoaded(status) ?
                <>
                    <CardBoxContainer>
                        {currentPosts && currentPosts.length > 0 && currentPosts.map((item, idx) => {
                            let data = {
                                image: item.links.patch.small,
                                name: item.name,
                                launchDate: item.formatted_date!,
                                cores: item.cores,
                                upcoming: item.upcoming,
                                webcast: item.links.webcast
                            }
                            return <Card data={data} key={`launch-item-${idx}`} />
                        })}
                    </CardBoxContainer>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={data.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </>
                : <Loading>Loading...</Loading>}
        </Wrapper>
    );
};

export default Home;