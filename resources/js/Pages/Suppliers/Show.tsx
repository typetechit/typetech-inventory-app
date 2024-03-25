import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import {SuppliersDataTable} from "@/Components/Supplier/SuppliersDataTable";
import Dump from "@/Components/Dump";
import SupplierInfoCard from "@/Components/Supplier/SupplierInfoCard";

export default function SupplierShowPage({ auth, supplier }: PageProps<{supplier: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={"View Supplier"} />}
        >
            <Head title="View Supplier" />

            <div className={`container`}>
                <SupplierInfoCard supplier={supplier} />
            </div>
        </AuthenticatedLayout>
    );
}
