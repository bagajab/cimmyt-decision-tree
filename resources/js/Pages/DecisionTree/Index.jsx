import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Index = ({ nodes, auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Decision Tree" />

            <div className="py-12">
                <h1>Decision Tree</h1>
                <Link href="/decision-tree/create" className="btn btn-primary">
                    Add Node
                </Link>
                <ul>
                    {nodes.map((node) => (
                        <li key={node.id}>
                            <Link href={`/decision-tree/${node.id}`}>
                                {node.question}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
