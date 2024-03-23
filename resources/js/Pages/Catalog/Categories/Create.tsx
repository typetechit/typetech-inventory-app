import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import CategoryCreateForm from "@/Components/Catalog/Categories/CategoryCreateForm";

export default function CategoryCreatePage({ auth }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Add Catalog Category'} />}
        >
            <Head title="Add Catalog Category" />

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
