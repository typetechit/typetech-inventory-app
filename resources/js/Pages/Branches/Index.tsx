import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {PageProps} from "@/types";
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {BranchesDataTable} from "@/Components/Branch/BranchesDataTable";

export default function BranchesIndexPage({ auth, branches }: PageProps<{branches: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Branches</h2>}
        >
            <Head title="Branches" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <BranchesDataTable branches={branches} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
