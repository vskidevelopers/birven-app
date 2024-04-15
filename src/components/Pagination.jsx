import ReactPaginate from "react-paginate";

export default function Pagination({
  items,
  itemsPerPage,
  pageCount,
  setItemOffset,
}) {
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="»"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="«"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      className="pagination flex justify-center md:justify-end"
      pageClassName="page-item"
      nextClassName="page-item"
      previousClassName="page-item"
      pageLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      activeLinkClassName="active"
    />
  );
}
