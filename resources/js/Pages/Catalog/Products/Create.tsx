import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import ProductCreateForm from "@/Components/Catalog/Products/ProductCreateForm";

export default function ProductCreatePage({ auth, categories }: PageProps<{categories: any}>) {
    const categoriesOptions = categories.map((category: any) => ({...category, value: category.id, label: category.name}));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Add Catalog Product'} />}
        >
            <Head title="Add Catalog Product" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        <ProductCreateForm categories={categoriesOptions} />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
