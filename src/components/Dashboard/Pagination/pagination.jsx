import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  const startPage = Math.max(1, currentPage - 2);

  const pages = Array.from(
    { length: Math.min(4, totalPages - startPage + 1) },
    (_, index) => startPage + index
  );

  return (
    <div className="paginate">
      {totalPosts && (
        <IoMdArrowRoundBack
          className="pagebutton"
          size={30}
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        />
      )}
      {pages.map((page) => (
        <span
          className={`page ${currentPage === page ? "active" : ""}`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
      {totalPosts && (
        <IoMdArrowRoundForward
          className="pagebutton"
          size={30}
          onClick={() => {
            currentPage < totalPages && setCurrentPage(currentPage + 1);
          }}
        />
      )}
    </div>
  );
};

export default Pagination;
