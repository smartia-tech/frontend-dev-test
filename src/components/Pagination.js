import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ page, totalPages, onPageChanged }) => {
  if (!totalPages || totalPages === 1) return null;
  return (
    <div className="overflow-x-auto flex justify-center">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          disabled={page === 1}
          onClick={() => onPageChanged(page - 1)}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={index + "_"}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 ${
                pageNumber === page ? "bg-blue-200" : "bg-white"
              }`}
              onClick={() => onPageChanged(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChanged(page + 1)}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>

          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  page: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
