import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import "./Paginate.css";

const Paginate = props => {
  return (
    <div className="Paginate__pagination--div">
      <ReactPaginate
        previousLabel={"Prev."}
        nextLabel={"Next"}
        initialPage={0}
        breakLabel={<a>...</a>}
        activeClassName="Paginate__pagination--active"
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={page => props.handlePageClick(page)}
        containerClassName={"Paginate__pagination"}
      />
    </div>
  );
};

Paginate.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired
};
export default Paginate;
