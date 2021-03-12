import React from "react";
import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  padding-top: 15px;

  span {
    padding: 15px;
    background-color: #005cb9;
    img {
      width: 30px;
    }
  }
  &&& {
    display: flex;
    justify-content: center;
    .search-conatiner {
      display: flex;
      justify-content: center;
      width: 50%;
      input {
        width: 90%;
        border: 5px solid #005cb9;
        background-color: #e0e0e0;
        padding: 15px;
      }
      input::placeholder {
        color: #32465a;
      }
    }
  }
`;

const SearchInput = (props) => {
  return (
    <SearchInputWrapper>
      <div className="search-conatiner">
        <span className="search-icon">
          <img src="/assets/search.svg" alt="logo" className="searchImage" />
        </span>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          min={props.min}
          max={props.max}
          className={props.className}
          aria-label={props.ariaLabel}
          data-testid={props.dataTestId}
        />
      </div>
    </SearchInputWrapper>
  );
};

export default SearchInput;
