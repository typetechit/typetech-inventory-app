import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Textarea} from "@/Components/ui/textarea";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {RadioGroup, RadioGroupItem} from "@/Components/ui/radio-group";
import {Button} from "@/Components/ui/button";

export default function ClientCreateForm(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('clients.store'));
    };

    return (
        <form onSubmit={submit} className={`flex flex-col gap-4`}>
            {/* Service Name */}
            <div>
                <Label htmlFor="name">Client Name</Label>

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

            {/* Service Description */}
            <div>
                <Label htmlFor="email">Client Email</Label>

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

            {/* Service Phone */}
            <div>
                <Label htmlFor="phone">Phone Number</Label>

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

            <div>
                <Label htmlFor="country">Country Name</Label>

                <TextInput
                    id="country"
                    name="country"
                    value={data.country}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('country', e.target.value)}
                    required
                />

                <InputError message={errors.country} className="mt-2"/>
            </div>

            <div>
                <Label htmlFor="address">Billing Address</Label>

                <Textarea
                    id="address"
                    name="address"
                    value={data.address}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('address', e.target.value)}
                    required
                />

                <InputError message={errors.address} className="mt-2"/>
            </div>

            <div className={`mt-5`}>
                <Button type={`submit`} className="w-full" disabled={processing}>
                    Add new Client
                </Button>
            </div>
        </form>
    )
}
