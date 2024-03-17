import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Textarea} from "@/Components/ui/textarea";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Button} from "@/Components/ui/button";
import Select from "react-select";

export default function ServiceCreateForm(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: '',
        billing_type: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('services.store'));
    };

    const billingTypes = [
        { value: 'Hourly', label: 'Hourly' },
        { value: 'Daily', label: 'Daily' },
        { value: 'Quarterly', label: 'Quarterly' },
        { value: 'Annually', label: 'Annually' },
        { value: 'Onetime', label: 'Onetime' },
    ];

    return (
        <form onSubmit={submit} className={`flex flex-col gap-4`}>
            {/* Service Name */}
            <div>
                <Label htmlFor="name">Service Name</Label>

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2"/>
            </div>

            {/* Service Description */}
            <div>
                <Label htmlFor="price">About Service</Label>

                <Textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('description', e.target.value)}
                    required
                />

                <InputError message={errors.description} className="mt-2"/>
            </div>

            <div>
                <Label htmlFor="price">Billing Type</Label>

                <Select
                    defaultValue={"Hourly"}
                    onChange={(billingType: any) => setData('billing_type', billingType.value)}
                    options={billingTypes}
                />
            </div>

            {/* Service Price */}
            <div>
                <Label htmlFor="price">Price</Label>

                <Input
                    type={"number"}
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('price', e.target.value)}
                    required
                />

                <InputError message={errors.price} className="mt-2"/>
            </div>

            <div className={`mt-5`}>
                <Button type={`submit`} className="w-full" disabled={processing}>
                    Add new Service
                </Button>
            </div>
        </form>
    )
}
