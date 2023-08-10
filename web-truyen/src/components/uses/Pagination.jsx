import React from "react";
import ReactPaginate from 'react-paginate';

function Pagination({ totalPages, currentPage, pageSetter}) {

  const handlePageChange = (selectedPage) => {
    pageSetter(selectedPage.selected);
  };

  return (
    <ReactPaginate
      pageCount={totalPages ?? 1}
      forcePage={currentPage-1}
      containerClassName={"pagination"}
      activeClassName={'active'}
      breakClassName={'pagination__item pagination__dots'}
      breakLabel={'...'}
      disabledClassName={'disabled'}
      nextClassName={"pagination__item pagination__btn"}
      nextLinkClassName={"pagination__btn-link"}
      pageLinkClassName={"pagination__link"}
      nextLabel={">"}
      pageClassName={'pagination__item pagination-page'}
      previousClassName={"pagination__item pagination__btn"}
      previousLinkClassName={"pagination__btn-link"}
      previousLabel={"<"}
      onPageChange={handlePageChange}
    />
  );
}

export default Pagination;
