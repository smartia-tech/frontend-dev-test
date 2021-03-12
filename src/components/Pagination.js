import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  input {
    width: 60px;
  }
`;

const PaginationWrapper = styled.div`
  .pagination-container {
    display: flex;

    button {
      padding: 10px 20px;
      background-color: #005cb9;
      border: 0;
      color: #fff;
    }

    input {
      padding: 10px 5px;
      margin: 0 10px;
    }
  }
`;

export const PaginationInput = (props) => {
  return (
    <InputWrapper>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </InputWrapper>
  );
};

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [endIndex, setEndIndex] = React.useState(1);

  const gotoPage = (page, onPageChanged) => {
    setCurrentPage(page);
    onPageChanged(page);
  };

  const goToPreviousPage = () => {
    let pageNumber = 1;

    if (currentPage > 1) {
      pageNumber = currentPage - 1;
      return gotoPage(pageNumber, props.onPageChanged);
    }
    return gotoPage(pageNumber, props.onPageChanged);
  };

  const goToAnyPage = (e) => {
    const { value } = e.target;

    let pageNumber = 0;

    const currentPage = Number(value);

    if (currentPage > endIndex) {
      return gotoPage(endIndex, props.onPageChanged);
    } else if ((currentPage !== 0 || currentPage > 0) && !isNaN(currentPage)) {
      pageNumber = Number(value);

      return gotoPage(pageNumber, props.onPageChanged);
    }
    return gotoPage(pageNumber, props.onPageChanged);
  };

  const goToNextPage = () => {
    const pageNumber = currentPage + 1;
    return gotoPage(pageNumber, props.onPageChanged);
  };

  React.useEffect(() => {
    const endIndex = Math.ceil(props.list.length / 12);
    setEndIndex(endIndex);
  }, [props.list]);

  return (
    <PaginationWrapper className={props.className}>
      <div className="pagination-container">
        {currentPage > 1 ? (
          <button onClick={goToPreviousPage}>Prev</button>
        ) : (
          ""
        )}
        <PaginationInput
          id="currentPage"
          type="text"
          onChange={goToAnyPage}
          name="currentPage"
          value={currentPage}
        />
        {endIndex > currentPage ? (
          <button onClick={goToNextPage}>Next</button>
        ) : (
          ""
        )}
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
