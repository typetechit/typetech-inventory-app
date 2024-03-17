import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {CategoriesDataTable} from "@/Components/Catalog/Categories/CategoriesDataTable";

export default function CategoriesIndexPage({ auth, categories }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Categories</h2>}
        >
            <Head title="Categories" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <CategoriesDataTable categories={categories} />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
