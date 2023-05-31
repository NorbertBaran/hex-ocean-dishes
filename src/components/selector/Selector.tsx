import {FormControl, MenuItem, Select, Typography} from "@mui/material";

export const Selector = ({items, placeholder, setValue}) => {
    const renderPlaceholder = selected => selected ? selected : <Typography color="text.disabled">{placeholder}</Typography>
    const setValueField = event => setValue(event.target.value)

    return <>
        <FormControl variant="standard">
            <Select displayEmpty defaultValue="" renderValue={renderPlaceholder} onChange={setValueField} required>
                <MenuItem disabled key="placeholder" value=""><em>{placeholder}</em></MenuItem>
                {items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    </>
}