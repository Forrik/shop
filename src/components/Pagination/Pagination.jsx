import React from "react";
import style from "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
