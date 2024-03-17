import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {PageProps} from "@/types";
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {WorkersDataTable} from "@/Components/Worker/WorkersDataTable";

export default function WorkersIndexPage({ auth, workers }: PageProps<{workers: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Workers</h2>}
        >
            <Head title="Workers" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <WorkersDataTable workers={workers} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
