import styles from "./Home.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  handleFirstPage,
  handlePreviousPage,
  handleNextPage,
  handleLastPage,
}) => (
  <div className={styles.pagination}>
    <button onClick={handleFirstPage} disabled={currentPage === 1}>
      First
    </button>
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
    <span>
      {currentPage} of {totalPages}
    </span>
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next
    </button>
    <button onClick={handleLastPage} disabled={currentPage === totalPages}>
      Last
    </button>
  </div>
);

export default Pagination;
