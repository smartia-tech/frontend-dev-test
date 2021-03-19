import React from 'react'

const Pagination = ({launchPerPage, totalPastLaunch, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPastLaunch / launchPerPage); i++){
        pageNumbers.push(i);
    }
    return (
       
        <ul className="pagination">
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber} className='page'>
                <a onClick={() => {paginate(pageNumber); }} href='!#' className='page-link'>
                  {pageNumber}
                </a>
              </li>
            ))}
        </ul>
    )
}

export default Pagination
