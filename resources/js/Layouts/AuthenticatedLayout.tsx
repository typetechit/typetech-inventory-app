import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, router} from '@inertiajs/react';
import { User } from '@/types';
import { Toaster } from '@/Components/ui/toaster';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import {cn} from "@/lib/utils";
import {Card, CardHeader, CardTitle} from "@/Components/ui/card";
import GoBack from "@/Components/GoBack";
import {FcBusinessman, FcCollaboration, FcDepartment, FcDoughnutChart, FcHome, FcShop} from "react-icons/fc";
import {LuPackageCheck} from "react-icons/lu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/ui/avatar"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"
import {Bars3BottomLeftIcon} from "@heroicons/react/24/solid";
import {Button} from "@/Components/ui/button";
import {ChevronDown} from "lucide-react";

function Navbar({ user }: { user: any }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <div className="container">
                <div className="flex items-center justify-between gap-4 h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo
                                    className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
                            </Link>
                        </div>
                    </div>

                    <div className=" sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">

                            <AuthUserDropDown user={user} />

                        </div>
                    </div>


                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                            {user.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">{user.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}



function AuthUserDropDown({ user }: { user: any }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span className={`inline-flex items-center gap-2`}>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt={`${user?.name}'s Photo`}
                            className={`w-10 h-10`}
                        />
                        <AvatarFallback>{user?.name}</AvatarFallback>
                    </Avatar>

                    <span className={`text-gray-500`}>{user.name}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500`} />
                </span>

            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <DropdownMenuLabel>
                    <Link href={route('profile.edit')}>Profile</Link>
                </DropdownMenuLabel>

                <DropdownMenuSeparator/>

                <DropdownMenuItem>
                    <Link href={route('logout')} method="post" as="button">Log Out</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function Authenticated({
                                          user,
                                          header,
                                          children,
                                          sidebar
                                      }: PropsWithChildren<{
    user: User,
    header?: ReactNode,
    sidebar?: ReactNode,
}>) {

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar user={user}/>

            <main>
                <ModuleNavigationPanel />
                {header || null}

                <div className={`py-10`}>
                    {children}
                </div>

                {sidebar || null}
            </main>

            <Toaster/>
        </div>
    );
}

export function DashboardPageContainer({children}: { children: ReactNode }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}


export function PageHeader({title, action}: { title: any, action?: any }) {
    return (
        <Card className={`border-none shadow-none`}>
            <div className={`container`}>
                <CardHeader className={`px-0`}>
                    <div className={`flex items-center justify-between flex-wrap gap-4`}>
                        <div className={`flex items-center gap-4`}>
                            <GoBack/>

                            <CardTitle>{title}</CardTitle>
                        </div>
                        {action}
                    </div>
                </CardHeader>
            </div>

        </Card>
    )
}



export function ModuleNavigationPanel() {
    const pathName = route().current()

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: FcHome },
        { name: 'Warehouse', href: `/warehouse`, icon: FcDepartment },
        { name: 'Supplier', href: '/suppliers', icon: FcCollaboration },
        { name: 'Branches', href: `/branches`, icon: FcShop },
        { name: 'Workers', href: `/workers`, icon: FcBusinessman },
        { name: 'Reports', href: `/reports`, icon: FcDoughnutChart },
        { name: 'Products', href: `/catalog/products`, icon: LuPackageCheck },
    ];

    return (
        <Card className={`rounded-none border-x-none bg-gray-100 p-4`}>
            <div className={`container`}>
                <Carousel>
                    <CarouselContent>
                        {navigation.map((item) => (
                            <CarouselItem
                                key={item.name}
                                className="basis-1/8"
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        item.href === pathName
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-700 hover:translate-x-1 hover:transform hover:bg-gray-800 hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out",
                                        "group flex min-w-28 gap-x-3 p-2 px-4 text-sm font-bold leading-6"
                                    )}
                                >
                                    <div className={`flex flex-col gay-y-4`}>
                                        <item.icon className="size-8 shrink-0" aria-hidden="true"/>
                                        {item.name}
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </Card>
    );
}
