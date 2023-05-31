import {validateInt} from "../../validators/validators";
import {TextField} from "@mui/material";
import {FC} from "react";

export interface ISandwich {
    values: any
    setValues: (values: any) => void
}

export const Sandwich: FC<ISandwich> = ({values, setValues}) => {
    const setSlicesOfBread = (event: any) => validateInt(event.target.value) ? setValues({...values, slicesOfBread: event.target.value}) : ''

    return <>
        <TextField variant="standard" placeholder="Slices of bread" value={values.slicesOfBread} onChange={setSlicesOfBread} required/>
    </>
}