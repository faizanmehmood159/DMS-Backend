import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  useTable,
  usePagination,
  useGlobalFilter,
} from "react-table";
import {
  FaEdit,
  FaTrash, 
  FaEye
} from "react-icons/fa";

// Sample data for the table
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    mobileNumber: "123-456-7890",
    maritalStatus: "Single",
    sex: "Male",
    image: "https://via.placeholder.com/50",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    mobileNumber: "987-654-3210",
    maritalStatus: "Married",
    sex: "Female",
    image: "https://via.placeholder.com/50",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    mobileNumber: "555-666-7777",
    maritalStatus: "Single",
    sex: "Female",
    image: "https://via.placeholder.com/50",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    mobileNumber: "111-222-3333",
    maritalStatus: "Married",
    sex: "Male",
    image: "https://via.placeholder.com/50",
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    mobileNumber: "444-555-6666",
    maritalStatus: "Single",
    sex: "Male",
    image: "https://via.placeholder.com/50",
  },
];

// Define columns for the table
const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
    Cell: ({ row, value }) => (
      <div className="flex items-center">
        <img
          src={row.original.image}
          alt={value}
          className="w-8 h-8 rounded-full mr-2"
        />
        {value}
      </div>
    ),
  },
  { Header: "Last Name", accessor: "lastName" },
  { Header: "Mobile Number", accessor: "mobileNumber" },
  { Header: "Marital Status", accessor: "maritalStatus" },
  { Header: "Sex", accessor: "sex" },
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

const AllPatient = () => {
  const [pageSize, setPageSizeInternal] = useState(10);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter },
    // Pagination functions and state
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageIndex,
    pageOptions,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          All Patient
        </h2>
        <Link to="/patient/NewPatient">
          <button className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
            New Patient
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
                    className="p-2 border-b border-gray-300 bg-gray-200"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
        >
          Previous
        </button>
        <div className="flex items-center">
          {pageOptions.map((page) => (
            <button
              key={page}
              onClick={() => gotoPage(page)}
              className={`px-3 py-1 mx-1 rounded-md ${pageIndex === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPatient;
