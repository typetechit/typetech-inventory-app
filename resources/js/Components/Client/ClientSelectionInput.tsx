import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";

export function ClientSelectionSelectInput({ clients, onSelected }: { clients: any[], onSelected?: (client: any) => void }) {
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
                { clients.map((client: any) => (
                    <SelectItem
                        key={`select-client-${client.id}`}
                        value={JSON.stringify(client)}
                    >{ client.name }</SelectItem>
                )) }
            </SelectContent>
        </Select>
    );
}
