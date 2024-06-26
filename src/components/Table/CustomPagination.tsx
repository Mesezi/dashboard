import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Table.module.scss";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useClickOutside from "@/hooks/useClickOutside";

interface CustomPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalRecords: number;
  pageCount: number;
  handlePageChange: Dispatch<SetStateAction<number>>;
  pageSize: number;
  totalPages: number;
  setPageSize: Dispatch<SetStateAction<number>>;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  currentPage,
  totalRecords,
  totalPages,
  pageCount,
  setCurrentPage,
  handlePageChange,
  pageSize,
  setPageSize,
}) => {
  const generatePageNumbers = (
    pages: number,
    currentPage: number,
    totalVisiblePages: number
  ): any[] => {
    const pageNumbers: any[] = [];

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const addEllipsis = (prevPage: number, nextPage: number) => {
        if (prevPage + 1 < nextPage) pageNumbers.push("...");
      };

      pageNumbers.push(1);

      const startPage = Math.max(
        2,
        currentPage - Math.floor(totalVisiblePages / 2)
      );
      const endPage = Math.min(pages - 1, startPage + totalVisiblePages - 2);

      addEllipsis(1, startPage);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      addEllipsis(endPage, pages);

      pageNumbers.push(pages);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers(totalPages, currentPage, 5);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setOpenDropdown(false));
  const options = [10, 25, 50, 100];

  if(totalRecords === 0)
    return <></>

  return (
    <section className={styles.pagination}>
      <div className={styles.view}>
        <p>Showing</p>

        <div className={styles.selectContainer} ref={dropdownRef}>
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            disabled={pageCount === currentPage &&  (totalRecords % pageSize) < 10
                ? true : false}
          >
            {pageCount === currentPage &&  (totalRecords % pageSize) < 10
             ? (totalRecords % pageSize) : pageSize}{" "}
            <FaChevronDown className={styles.customCaret} />
          </button>
          {openDropdown && (
            <ul className="options" >
              {options.map(
                (size) =>
                  // Only show options less than or equal to maxOption
                  size <= totalRecords && (
                    <li
                      key={size}
                      onClick={() => {
                        setPageSize(size);
                        setCurrentPage(1)
                        setOpenDropdown(false);
                      }}
                      value={size}
                    >
                      {size}
                    </li>
                  )
              )}
            </ul>
          )}
        </div>

        <p>out of {totalRecords}</p>
      </div>

      <div className={styles.numbering}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn"
        >
          <FaChevronLeft size={14} />
        </button>

        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className="number-pill"
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === currentPage || page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="btn"
          disabled={currentPage === totalPages}
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default CustomPagination;
