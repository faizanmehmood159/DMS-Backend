import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useTable,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

// Sample data for the table
const data = [
  {
    id: "1",
    patientName: "John Doe",
    date: "2024-08-15",
    content: "Prescription content 1",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    date: "2024-08-14",
    content: "Prescription content 2",
  },
  {
    id: "3",
    patientName: "Alice Johnson",
    date: "2024-08-13",
    content: "Prescription content 3",
  },
  {
    id: "4",
    patientName: "Bob Brown",
    date: "2024-08-12",
    content: "Prescription content 4",
  },
  {
    id: "5",
    patientName: "Charlie Davis",
    date: "2024-08-11",
    content: "Prescription content 5",
  },
];

// Define columns for the table
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Patient Name",
    accessor: "patientName",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Content",
    accessor: "content",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: () => (
      <div className="flex gap-2">
        <FaEdit className="text-blue-500 cursor-pointer" />
        <FaTrash className="text-red-500 cursor-pointer" />
        <FaEye className="text-green-500 cursor-pointer" />
      </div>
    ),
  },
];

const AllPrescription = () => {
  const [pageSize, setPageSizeInternal] = useState(10);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex, globalFilter },
    setGlobalFilter,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Start from page 0, show 10 entries by default
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div>
      <div className="rounded-[10px] p-7 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center pl-6 pr-6 pt-6 pb-6">
          <h2 className="text-title-md2 font-semibold text-black">
            All Prescriptions
          </h2>
          <Link to="/prescription/newprescription">
            <button className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
              New Prescription
            </button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                const size = Number(e.target.value);
                setPageSizeInternal(size);
                setPageSize(size);
              }}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value={10}>Show 10 entries</option>
              <option value={25}>Show 25 entries</option>
              <option value={data.length}>Show all entries</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
       <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full bg-white border border-gray-300"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 border-b border-gray-300 text-left bg-customGray"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 border-b border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
         </div>
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          {/* Showing entries info */}
          <div className="text-sm text-gray-600">
            Showing {page.length} of {rows.length} entries
          </div>

          {/* Page numbers */}
          <div className="flex items-center">
            {pageOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => gotoPage(option)}
                className={`px-2 py-1 mx-1 rounded ${pageIndex === idx ? 'bg-customPurple text-white' : 'bg-gray-200'}`}
              >
                {option + 1}
              </button>
            ))}
          </div>

          {/* Previous and Next buttons */}
          <div className="flex items-center">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className={`px-4 py-2 mx-1 rounded bg-gray-200 ${canPreviousPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={`px-4 py-2 mx-1 rounded bg-gray-200 ${canNextPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPrescription;
