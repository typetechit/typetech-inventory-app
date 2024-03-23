import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import {SuppliersDataTable} from "@/Components/Supplier/SuppliersDataTable";

export default function SuppliersIndexPage({ auth, suppliers }: PageProps<{suppliers: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Suppliers'} />}
        >
            <Head title="Suppliers" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-5`}>
                        <SuppliersDataTable suppliers={suppliers} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
