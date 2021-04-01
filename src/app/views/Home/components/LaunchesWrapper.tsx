import * as React from "react";

import Button from "app/styles/elements/Button";
import P from "app/styles/elements/P";

import { Body } from "../styles";

interface Props {
  hasNext: boolean;
  hasPrev: boolean;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
  currentPage: number;
  totalItems: number;
}
const LaunchesWrapper: React.FC<Props> = (props) => {
  const {
    hasNext,
    hasPrev,
    onPrev,
    onNext,
    currentPage,
    totalPages,
    totalItems,
  } = props;

  const paginationButtons = (
    <div className="pagination">
      <Button disabled={!hasPrev} onClick={onPrev}>
        Previous
      </Button>
      <Button disabled={!hasNext} onClick={onNext}>
        Next
      </Button>
      <P semiBold little>
        Total launches: {totalItems} | Page {currentPage} of {totalPages}
      </P>
    </div>
  );
  return (
    <Body>
      {paginationButtons}
      {props.children}
      {paginationButtons}
    </Body>
  );
};

export default LaunchesWrapper;
