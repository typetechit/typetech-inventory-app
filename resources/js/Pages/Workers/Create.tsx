import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import WorkerCreateForm from "@/Components/Worker/WorkerCreateForm";

export default function WorkerCreatePage({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Add Worker'} />}
        >
            <Head title="Add Worker" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <WorkerCreateForm />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
