import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import {SuppliersDataTable} from "@/Components/Supplier/SuppliersDataTable";
import SupplierCreateForm from "@/Components/Supplier/SupplierCreateForm";

export default function SupplierCreatePage({ auth }: PageProps<{suppliers: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Add New Supplier'} /> }
        >
            <Head title="Add new Supplier" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-5`}>
                        <SupplierCreateForm />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
