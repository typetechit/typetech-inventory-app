import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {PageProps} from "@/types";
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {WorkersDataTable} from "@/Components/Worker/WorkersDataTable";

export default function WorkersIndexPage({ auth, workers }: PageProps<{workers: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Workers'} />}
        >
            <Head title="Workers" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <WorkersDataTable workers={workers} />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
