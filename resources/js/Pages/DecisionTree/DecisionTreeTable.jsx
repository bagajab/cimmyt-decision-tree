import React, { useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { Dialog, Transition } from '@headlessui/react';

const DecisionTreeTable = ({ columns, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  const openModal = (row) => {
    setSelectedRow(row.original);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value || undefined)}
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg"
          />
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg"
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => {
                      const { key, ...rest } = column.getHeaderProps();
                      return (
                        <th
                          key={key}
                          {...rest}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column.render('Header')}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => openModal(row)}
                    >
                      {row.cells.map(cell => {
                        const { key, ...rest } = cell.getCellProps();
                        const cellValue = cell.column.id === 'question' || cell.column.id === 'stage'
                            ? (cell.value && cell.value.length > 50 ? `${cell.value.slice(0, 50)}...` : cell.value)
                            : cell.render('Cell');
                        return (
                            <td
                                key={key}
                                {...rest}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                                {cellValue}
                            </td>
                        );
                    })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination flex justify-between mt-4">
              <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="px-2 py-1 border rounded-lg mr-1">
                  {'<<'}
                </button>
                <button onClick={previousPage} disabled={!canPreviousPage} className="px-2 py-1 border rounded-lg mr-1">
                  {'<'}
                </button>
                <button onClick={nextPage} disabled={!canNextPage} className="px-2 py-1 border rounded-lg mr-1">
                  {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="px-2 py-1 border rounded-lg mr-1">
                  {'>>'}
                </button>
              </div>
              <div>
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0;
                      gotoPage(page);
                    }}
                    style={{ width: '50px' }}
                    className="px-2 py-1 border rounded-lg"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Node Details
                </Dialog.Title>
                <div className="mt-2">
                  {selectedRow && (
                    <>
                      <p><strong>Stage:</strong> {selectedRow.stage}</p>
                      <p><strong>Question:</strong> {selectedRow.question}</p>
                      <p><strong>Description:</strong> {selectedRow.description}</p>
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DecisionTreeTable;
