import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { SetStateAction, Dispatch, useState, useRef } from "react";
import styles from "./Table.module.scss";
import CustomPagination from "./CustomPagination";
import { FaChevronDown } from "react-icons/fa";
import useClickOutside from "@/hooks/useClickOutside";

interface TableProps {
  data: any;
  columns: any;
  openFilterForm: boolean;
  setOpenFilterForm: Dispatch<SetStateAction<boolean>>;
  filtering?: string;
  setFiltering?: any;
  pageSize?: number;
  filterOptions: {
    key: string;
    type: string;
    label: string;
    options: string[] | null;
  }[];
  isLoading?: boolean;
  emptymessage?: string;
  customFilterFn: any;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const FilterOptionInput = ({ input, filterForm, setFilterForm }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setOpenDropdown(false));

  if (input.type === "select") {
    return (
      <div className={styles.filterFormSelect} ref={dropdownRef}>
        <label htmlFor="">{input.label}</label>
        <button
          data-value={filterForm?.[input.key] ? "true" : "false"}
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          {filterForm?.[input.key] ?? "Select"}
          <FaChevronDown className="caret" />
        </button>

        {openDropdown && (
          <ul className="options">
            {input.options.map((option: any) => (
              <li
                key={option}
                onClick={() => {
                  setFilterForm((prev: any) => ({
                    ...prev,
                    [input.key]: option,
                  }));
                  setOpenDropdown(false);
                }}
                value={option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={styles.filterFormTextInput}>
      <label htmlFor="">{input.label}</label>

      <input
        type={input.type}
        data-has-value={filterForm?.[input.key] ? "true" : "false"}
        onChange={(e) => {
          setFilterForm((prev: any) => ({
            ...prev,
            [input.key]: e.target.value,
          }));
        }}
        placeholder={input.key}
        value={filterForm?.[input.key] ?? ""}
      ></input>
    </div>
  );
};

export function DataTable({
  data,
  columns,
  filtering,
  setFiltering,
  isLoading,
  filterOptions,
  emptymessage,
  openFilterForm,
  setOpenFilterForm,
  customFilterFn,
  setCurrentPage,
  currentPage,
}: TableProps) {
  const [pageSize, setPageSize] = useState(10);
  const [filterForm, setFilterForm] = useState(null);
  const filterFormRef = useRef(null);
  // useClickOutside(filterFormRef, () => setOpenFilterForm(false));

  // console.log(filterForm);

  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filtering,
      //...
      pagination: {
        pageIndex: currentPage - 1,
        pageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    globalFilterFn: customFilterFn,
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
    <>
      <div className={styles.parent}>
        {openFilterForm && (
          <div className={styles.filterForm} ref={filterFormRef}>
            {filterOptions.map((option) => (
              <FilterOptionInput
                input={option}
                setFilterForm={setFilterForm}
                filterForm={filterForm}
              />
            ))}

            <section>
              <button
                type="reset"
                onClick={() => {
                  setFiltering(null);
                  setFilterForm(null);
                  setOpenFilterForm(false);
                }}
              >
                Reset
              </button>
              <button
                type="submit"
                onClick={() => {
                  setFiltering(filterForm);
                  setCurrentPage(1);
                  setOpenFilterForm(false);
                }}
              >
                Filter
              </button>
            </section>
          </div>
        )}
        <div className={styles.tableContainer}>
          {!isLoading && data.length !== 0 && (
            <table className={styles.table}>
              <thead>
                {tableInstance.getHeaderGroups().map((headerEl) => {
                  return (
                    <tr key={headerEl.id}>
                      {headerEl.headers.map((columnEl: any, index: number) => {
                        return (
                          <th key={columnEl.id}>
                            {columnEl.isPlaceholder
                              ? null
                              : flexRender(
                                  columnEl.column.columnDef.header,
                                  columnEl.getContext()
                                )}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                {tableInstance.getRowModel().rows.map((rowEl) => {
                  return (
                    <tr key={rowEl.id}>
                      {rowEl
                        .getVisibleCells()
                        .map((cellEl: any, index: number) => {
                          return (
                            <td key={cellEl.id}>
                              {flexRender(
                                cellEl.column.columnDef.cell,
                                cellEl.getContext()
                              )}
                            </td>
                          );
                        })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* <div >Page Rows ({tableInstance.getRowModel().rows.length})</div> */}
      <CustomPagination
        totalRecords={tableInstance.getFilteredRowModel().rows.length}
        setPageSize={setPageSize}
        totalPages={tableInstance.getPageCount()}
        pageCount={tableInstance.getPageCount()}
        pageSize={pageSize}
        handlePageChange={setCurrentPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
