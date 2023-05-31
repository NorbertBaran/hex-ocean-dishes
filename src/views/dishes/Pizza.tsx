import {validateFloatMaxTwoPintPositions, validateInt} from "../../validators/validators";
import {TextField} from "@mui/material";

export const Pizza = ({values, setValues}) => {
    const setNoOfSlicesValue = event => validateInt(event.target.value) ? setValues({...values, noOfSlices: event.target.value}) : ''
    const setDiameterValue = event => validateFloatMaxTwoPintPositions(event.target.value) ? setValues({...values, diameter: event.target.value}) : ''

    return <>
        <TextField variant="standard" placeholder="No. of slices" value={values.noOfSlices} onChange={setNoOfSlicesValue} required/>
        <TextField variant="standard" placeholder="Diameter" value={values.diameter} onChange={setDiameterValue} required/>
    </>
}