import AuthenticatedLayout, {DashboardPageContainer, PageHeader} from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import { PageProps } from '@/types';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import {Button} from "@/Components/ui/button";
import {ChevronDown} from "lucide-react";


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


function StocksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button type={'button'} variant={'outline'} className={`flex items-center gap-2`}>
                    Stocks
                    <ChevronDown className={`w-4 h-4 text-gray-500`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={'/warehouse/stocks'}>Current Stocks</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/warehouse/stocks/stocks-in'}>Stock In</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/warehouse/stocks/stocks-out'}>Stock In</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function SupplierOrdersDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button type={'button'} variant={'outline'} className={`flex items-center gap-2`}>
                    Supplier Orders
                    <ChevronDown className={`w-4 h-4 text-gray-500`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={'/suppliers/orders'}>All Orders</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/suppliers/orders/find'}>Find Order</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/suppliers/orders/create'}>Create Order</Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function BranchOrdersDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button type={'button'} variant={'outline'} className={`flex items-center gap-2`}>
                    Branch Orders
                    <ChevronDown className={`w-4 h-4 text-gray-500`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={'/branches/orders'}>All Orders</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/branches/orders/find'}>Find Order</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href={'/branches/orders/create'}>Create Order</Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function WarehousePageAction () {
    return (
        <div className={`flex items-center gap-4`}>

            <StocksDropdown />

            <SupplierOrdersDropdown />

            <BranchOrdersDropdown />

        </div>
    );
}
