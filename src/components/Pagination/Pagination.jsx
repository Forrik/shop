import React from "react";
import style from "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
