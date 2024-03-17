import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import BranchCreateForm from "@/Components/Branch/BranchCreateForm";

export default function BranchCreatePage({ auth }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Branch</h2>}
        >
            <Head title="Add Branch" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <BranchCreateForm />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
