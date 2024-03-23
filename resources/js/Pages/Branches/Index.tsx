import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {PageProps} from "@/types";
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {BranchesDataTable} from "@/Components/Branch/BranchesDataTable";

export default function BranchesIndexPage({ auth, branches }: PageProps<{branches: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Branches'} />}
        >
            <Head title="Branches" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <BranchesDataTable branches={branches}/>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
