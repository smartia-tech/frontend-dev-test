import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import "./index.scss";
import Ship from "../ship";

const ClassName = "ship-list";


const ShipList = ({ships}) => {
  const [searchText, setSearchText] = useState<string>("");
  const data = ships;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const handleChange = e => setSearchText(e.target.value);
  const updatePage = ({ selected }) => setPageNumber(selected);

  const list = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter(w => w.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
    .map(shipData => <Ship key={JSON.stringify(shipData)} {...shipData} />);

  return (
    <div className={ClassName}>
      <input
        className={`${ClassName}-input`}
        type="text"
        size={40}
        placeholder="Search SpaceShip Name"
        value={searchText}
        onChange={handleChange}
      />

      <div className={`${ClassName}-list`}>{list}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={updatePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default ShipList;
