import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import MultiSelectInput from "@/Components/ui/MultiSelectInput";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {Loading} from "@/Components/Loading";

export default function WarehouseIndex({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageHeader title={'Warehouse'} action={<WarehousePageAction />} />}
        >
            <Head title="Warehouse" />

            <DashboardPageContainer>
                <Card>
                    <CardContent className={`p-4`}>
                        Warehouse Page
                    </CardContent>
                </Card>

            </DashboardPageContainer>
        </AuthenticatedLayout>
    );
}


export function WarehousePageAction () {
    return (
        <div>
            Warehouse Page Action
        </div>
    );
}
