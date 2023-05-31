import {validateInt} from "../../validators/validators";
import {TextField} from "@mui/material";

export const Sandwich = ({values, setValues}) => {
    const setSlicesOfBread = event => validateInt(event.target.value) ? setValues({...values, slicesOfBread: event.target.value}) : ''

    return <>
        <TextField variant="standard" placeholder="Slices of bread" value={values.slicesOfBread} onChange={setSlicesOfBread} required/>
    </>
}