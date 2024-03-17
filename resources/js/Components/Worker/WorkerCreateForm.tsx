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

export default function WorkerCreateForm(){
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
        image: null
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('workers.store'), {
            onSuccess: (res) => {
                console.log(`form submit request done`)
                console.log(res)
            }
        });
    };

    return (
        <form onSubmit={submit} className={`flex flex-col gap-4`}>
            {/* Branch Name */}
            <div>
                <Label htmlFor="name">Worker Name</Label>

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

            {/* Branch Email */}
            <div>
                <Label htmlFor="email">Worker Email</Label>

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

            {/* Branch Name */}
            <div>
                <Label htmlFor="phone">Worker Phone</Label>

                <TextInput
                    id="phone"
                    name="phone"
                    type={"number"}
                    value={data.phone}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('phone', e.target.value)}
                    required
                />

                <InputError message={errors.phone} className="mt-2"/>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="image">Worker Image</Label>
                <Input
                    id="image"
                    name={"image"}
                    type="file"
                    accept={`image/png, image/gif, image/jpeg`}
                    onChange={(e: any) => setData('image', e.target.files[0])}
                />

                <InputError message={errors.image} className="mt-2"/>
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
                    Add new Worker
                </Button>
            </div>
        </form>
    )
}
