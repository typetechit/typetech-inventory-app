"use client";

import React, {useRef, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import { Switch } from "@/Components/ui/switch"
import {Label} from "@/Components/ui/label";
import {BsEnvelopeArrowUpFill} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import {Button} from "@/Components/ui/button";
import QRCode from "qrcode.react";
import JsPdf from "jspdf";
import Dump from "@/Components/Dump";

export default function SupplierInfoCard({
    supplier
                                     }: {
    supplier: any
}){
    const [qr, setQr] = useState("");
    const qrCodeRef = useRef<HTMLDivElement>(null);

    const handleActive = (active: any) => {
        alert('Coming Soon')
    };

    const printQRCode = () => {
        const qrCodeURL1 = document.getElementById("qrCode") as HTMLCanvasElement;

        const qrCodeURL = qrCodeURL1
            ?.toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        setQr(qrCodeURL);
        generatePdf(qrCodeURL);
    };

    const generatePdf = (qrCodeURL: string) => {
        try {
            var doc = new JsPdf("landscape", "mm", "a4");
            doc.addImage(qrCodeURL, "JPEG", 145, 35, 110, 110);
            doc.save("qr.pdf");
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogoSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        alert("Coming soon")
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Supplier Info</CardTitle>
                </CardHeader>

                <CardContent className={`p-4`}>

                    <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg shadow md:grid-cols-4 md:divide-x md:divide-y-0">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="mt-1 flex flex-col items-baseline justify-between md:block lg:flex">
                                <span>Supplier Name:</span>
                                <span className="font-bold">{supplier?.name}</span>
                            </div>
                        </div>

                        <div className="px-4 py-5 sm:p-6">
                            <div className="mt-1 flex flex-col items-baseline justify-between md:block lg:flex">
                                <span>Number Items: {0}</span>
                                <span>Category: {"category"}</span>
                            </div>
                        </div>

                        <div className="px-4 py-5 sm:p-6">
                            <div className="mt-1 flex flex-col items-baseline justify-between md:block lg:flex">
                                <span>Previous Batch</span>
                                <span>{"N/A"}</span>
                            </div>
                        </div>

                        <div className="px-4 py-5 sm:p-6">
                            <div className=" mt-1 flex flex-col items-baseline justify-between md:block lg:flex">
                                <span>On going batch</span>
                                <span>{"N/A"}</span>
                            </div>
                        </div>

                    </dl>

                    <div className="mt-5 grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex flex-col justify-center gap-3">
                                <p>
                                    <span className="font-semibold">Location:</span> {"location"} <br/>
                                </p>
                                <p>
                                    <span className="font-semibold">Phone Number:</span> {"phone"}
                                </p>
                                <p>
                                    <span className="font-semibold">Email:</span> {"email"}
                                </p>
                                <div className="flex items-center gap-2 space-x-2">
                                    <Switch
                                        id="active-inactive"
                                        onCheckedChange={(e: any) => handleActive(e)}
                                        disabled={true}
                                        checked={false}
                                    />
                                    <Label htmlFor="active-inactive" className="cursor-pointer">
                                        Active / In Active
                                    </Label>
                                </div>
                                <div className="mt-5 flex flex-wrap justify-between gap-2">
                                    <SupplierQuickActionMenu />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex justify-center gap-10 md:justify-end">
                                <div className="mt-1 flex flex-col gap-3">
                                    <div className="rounded-lg ring-2 ring-slate-100 ring-offset-2">
                                        <img
                                            width={200}
                                            height={200}
                                            className="size-36 rounded-lg object-cover"
                                            src={supplier?.photo}
                                            alt=""
                                        />
                                    </div>

                                    <label
                                        htmlFor="change-photo"
                                        className="inline-flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            hidden
                                            id="change-photo"
                                            onChange={(e) => handleLogoSubmit(e)}
                                        />
                                        Change Photo
                                    </label>

                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="mx-auto overflow-hidden rounded-lg">
                                        {/* qr will show here  */}
                                        <div
                                            className="aspect-square rounded-lg border-2 border-slate-100 p-2"
                                            ref={qrCodeRef}
                                        >
                                            <QRCode value={supplier?.code} id="qrCode" size={130} className=""/>
                                        </div>
                                    </div>
                                    <Button className="w-full" onClick={printQRCode}>
                                        Print QR
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<SupplierDetails*/}
                    {/*    name={name}*/}
                    {/*    item={item}*/}
                    {/*    location={location}*/}
                    {/*    category={category}*/}
                    {/*    prevBatch={prevBatch}*/}
                    {/*    onGoingBatch={onGoingBatch}*/}
                    {/*    email={email}*/}
                    {/*    phone={phone}*/}
                    {/*    logo={logo}*/}
                    {/*    code={code}*/}
                    {/*    id={id}*/}
                    {/*    refresh={refresh}*/}
                    {/*    active={active}*/}
                    {/*/>*/}

                </CardContent>
            </Card>
        </>
    );
};


export function SupplierQuickActionMenu() {
    return (
        <span className="isolate inline-flex rounded-md shadow-sm">
			<button
                type="button"
                className="relative -ml-px inline-flex items-center gap-3 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                title="Send Email"
            >
				<BsEnvelopeArrowUpFill size={30} />{" "}
                <span className="hidden lg:block">Send Email</span>
			</button>
			<button
                type="button"
                className="relative -ml-px inline-flex items-center gap-3 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                title="Send WhatsApp"
            >
				<IoLogoWhatsapp size={30} /> <span className="hidden lg:block">Send Message</span>
			</button>
		</span>
    );
}
