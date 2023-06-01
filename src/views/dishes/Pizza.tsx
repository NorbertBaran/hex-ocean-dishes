import {validateFloatMaxTwoPintPositions, validateInt} from "../../validators/validators";
import {TextField} from "@mui/material";
import {FC} from "react";

export interface IPizza {
    values: any
    setValues: (values: any) => void
}

export const Pizza: FC<IPizza> = ({values, setValues}) => {
    const setNoOfSlicesValue = (event: any) => validateInt(event.target.value) ? setValues({...values, noOfSlices: event.target.value}) : ''
    const setDiameterValue = (event: any) => validateFloatMaxTwoPintPositions(event.target.value) ? setValues({...values, diameter: event.target.value}) : ''

    return <>
        <TextField variant="standard" placeholder="No. of slices" value={values.noOfSlices} onChange={setNoOfSlicesValue} required/>
        <TextField variant="standard" placeholder="Diameter" value={values.diameter} onChange={setDiameterValue} required/>
    </>
}