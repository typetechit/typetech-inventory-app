import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent} from "@/Components/ui/card";
import Dump from "@/Components/Dump";
import {CategoriesDataTable} from "@/Components/Catalog/Categories/CategoriesDataTable";

export default function CategoriesIndexPage({ auth, categories }: PageProps<{categories: any}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Catalog Categories'} />}
        >
            <Head title="Catalog Categories" />

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
