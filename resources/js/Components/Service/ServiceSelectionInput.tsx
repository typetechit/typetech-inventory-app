import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import Dump from "@/Components/Dump";

export function ServiceSelectionInput({ services, onSelected }: { services: any[], onSelected?: (client: any) => void }) {
    const [selectedItem, setSelectedItem] = useState<any>("")

    const handleOnValueChange = (value: any) => {
        const selectedItemValue = JSON.parse(value)

        setSelectedItem(selectedItemValue)

        if(onSelected){
            onSelected(selectedItemValue)
        }
    }

    return (
        <Select onValueChange={handleOnValueChange}>
            <SelectTrigger className="">
                <SelectValue placeholder={selectedItem.name}/>
            </SelectTrigger>

            <SelectContent>
                { services?.map((service: any) => (
                    <SelectItem
                        key={`select-client-${service?.id}`}
                        value={JSON.stringify(service)}
                    >{ service.name }</SelectItem>
                )) }
            </SelectContent>
        </Select>
    );
}
