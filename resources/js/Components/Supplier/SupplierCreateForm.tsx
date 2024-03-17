import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Textarea} from "@/Components/ui/textarea";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Button} from "@/Components/ui/button";
import Select from "react-select";
import axios from "axios";

export default function SupplierCreateForm(){
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        progress
    } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        photo: null
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('suppliers.store'), {
            onSuccess: (res) => {
                console.log(`form submit request done`)
                console.log(res)
            }
        });
    };

    return (
        <form onSubmit={submit} className={`flex flex-col gap-4`}>
            {/* Supplier Name */}
            <div>
                <Label htmlFor="name">Supplier Name</Label>

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2"/>
            </div>

            {/* Supplier Name */}
            <div>
                <Label htmlFor="email">Supplier Email</Label>

                <TextInput
                    id="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2"/>
            </div>

            {/* Supplier Phone */}
            <div>
                <Label htmlFor="phone">Supplier Phone</Label>

                <TextInput
                    id="phone"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('phone', e.target.value)}
                    required
                />

                <InputError message={errors.phone} className="mt-2"/>
            </div>

            {/* Supplier Location */}
            <div>
                <Label htmlFor="address">Business Address</Label>

                <Textarea
                    id="address"
                    name="address"
                    value={data.address}
                    className="mt-1 block w-full"
                    onChange={(e: any) => setData('address', e.target.value)}
                    required
                />

                <InputError message={errors.address} className="mt-2"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="photo">Supplier Logo</Label>
                <Input
                    id="photo"
                    name={"photo"}
                    type="file"
                    accept={`image/png, image/gif, image/jpeg`}
                    onChange={(e: any) => setData('photo', e.target.files[0])}
                />

                <InputError message={errors.photo} className="mt-2"/>
            </div>

            {progress && (
                <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                </progress>
            )}

            <div className={`mt-5`}>
                <Button
                    type={`submit`}
                    className="w-full"
                    disabled={processing}
                >
                    Add new Supplier
                </Button>
            </div>
        </form>
    )
}
