import React, { useState } from 'react';
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DecisionTreeTable from './DecisionTreeTable';

const Index = ({ nodes, auth }) => {
    // Define columns for react-table
    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Question',
                accessor: 'question',
                Cell: ({ row }) => (
                    <span>
                        {row.original.question.length > 20
                            ? `${row.original.question.slice(0, 20)}...`
                            : row.original.question}
                    </span>
                ),
            },
            {
                Header: 'Stage',
                accessor: 'stage',
                Cell: ({ row }) => (
                    <span>
                        {row.original.stage.length > 20
                            ? `${row.original.stage.slice(0, 20)}...`
                            : row.original.stage}
                    </span>
                ),
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div className="flex space-x-2">
                        <Link
                            href={`/decision-tree/${row.original.id}/edit`}
                            className="text-blue-600 hover:text-blue-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Edit
                        </Link>
                        <Link
                            href={`/decision-tree/${row.original.id}`}
                            method="delete"
                            className="text-red-600 hover:text-red-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Delete
                        </Link>
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Decision Tree" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold mb-6">Decision Tree</h1>
                            <Link
                                href="/decision-tree/create"
                                className="btn btn-primary mb-4 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Add Node
                            </Link>
                            <DecisionTreeTable columns={columns} data={nodes} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
