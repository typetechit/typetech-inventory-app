import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {ProductsDataTable} from "@/Components/Catalog/Products/ProductsDataTable";

export default function ProductsIndexPage({ auth, products }: PageProps<{products: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Catalog Products'} />}
        >
            <Head title="Dashboard" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <ProductsDataTable products={products} />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
