import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import ProductCreateForm from "@/Components/Catalog/Products/ProductCreateForm";

export default function ProductCreatePage({ auth, categories }: PageProps<{categories: any}>) {
    const categoriesOptions = categories.map((category: any) => ({...category, value: category.id, label: category.name}));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Product</h2>}
        >
            <Head title="Add Product" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <ProductCreateForm categories={categoriesOptions} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
