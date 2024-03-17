import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import {SuppliersDataTable} from "@/Components/Supplier/SuppliersDataTable";
import Dump from "@/Components/Dump";

export default function SupplierShowPage({ auth, supplier }: PageProps<{supplier: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Suppliers</h2>}
        >
            <Head title="Supplier" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-5`}>
                        <Dump data={supplier} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
