import AuthenticatedLayout, {DashboardPageContainer} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import CategoryCreateForm from "@/Components/Catalog/Categories/CategoryCreateForm";

export default function CategoryCreatePage({ auth }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Category</h2>}
        >
            <Head title="Add Category" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        <CategoryCreateForm />
                    </CardContent>
                </Card>
            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}
