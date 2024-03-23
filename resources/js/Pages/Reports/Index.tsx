import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import MultiSelectInput from "@/Components/ui/MultiSelectInput";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {Loading} from "@/Components/Loading";

export default function ReportsIndexPage({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Reports'} />}
        >
            <Head title="Reports" />

            <div className={`container`}>
                <Card>
                    <CardContent className={`p-4`}>
                        Your Reports Page
                    </CardContent>
                </Card>

            </div>
        </AuthenticatedLayout>
    );
}
