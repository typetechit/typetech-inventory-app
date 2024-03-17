import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {ProductsDataTable} from "@/Components/Catalog/Products/ProductsDataTable";

export default function ProductsIndexPage({ auth, products }: PageProps<{products: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <ProductsDataTable products={products} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
