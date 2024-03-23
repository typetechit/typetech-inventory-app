import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import BranchCreateForm from "@/Components/Branch/BranchCreateForm";

export default function BranchCreatePage({ auth }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Add Branch'} />}
        >
            <Head title="Add Branch" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <BranchCreateForm />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
