import {FormControl, MenuItem, Select, Typography} from "@mui/material";
import {FC} from "react";

interface ISelector {
    items: string[]
    placeholder: string
    setValue: (value: string) => void
}

export const Selector: FC<ISelector> = ({items, placeholder, setValue}) => {
    const renderPlaceholder = (selected: string) => selected ? selected : <Typography color="text.disabled">{placeholder}</Typography>
    const setValueField = (event: any) => setValue(event.target.value)

    return <>
        <FormControl variant="standard">
            <Select displayEmpty defaultValue="" renderValue={renderPlaceholder} onChange={setValueField} required>
                <MenuItem disabled key="placeholder" value=""><em>{placeholder}</em></MenuItem>
                {items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    </>
}