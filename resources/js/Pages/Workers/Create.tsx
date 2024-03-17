import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import WorkerCreateForm from "@/Components/Worker/WorkerCreateForm";

export default function WorkerCreatePage({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Worker</h2>}
        >
            <Head title="Add Worker" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <WorkerCreateForm />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
