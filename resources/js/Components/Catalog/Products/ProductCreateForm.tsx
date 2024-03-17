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
import Dump from "@/Components/Dump";

export default function ProductCreateForm({ categories }: { categories: any[] }){
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
        slug: "",
        image: null,
        category_id: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('catalog.products.store'), {
            onSuccess: (res) => {
                console.log(`form submit request done`)
                console.log(res)
            }
        });
    };

    return (
        <form onSubmit={submit} className={`flex flex-col gap-4`}>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="category_id">Select Category</Label>
                <Select
                    id="category_id"
                    name={"category_id"}
                    options={categories}
                    onChange={(category: any) => setData('category_id', category.value)}
                />

                <InputError message={errors.category_id} className="mt-2"/>
            </div>

            {/* Supplier Name */}
            <div>
                <Label htmlFor="name">Category Name</Label>

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
                <Label htmlFor="slug">Slug</Label>

                <TextInput
                    id="slug"
                    name="slug"
                    value={data.slug}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('slug', e.target.value)}
                    required
                />

                <InputError message={errors.slug} className="mt-2"/>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="image">Image</Label>
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
                    Add new Category
                </Button>
            </div>
        </form>
    )
}
