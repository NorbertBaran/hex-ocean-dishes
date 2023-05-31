import {Box, Slider, Typography} from "@mui/material";
import {FC} from "react";

export interface ISoup {
    setValues: (values: any) => void
}

export const Soup: FC<ISoup> = ({setValues}) => {
    const setSpicinessScale = (event: any) => setValues({spicinessScale: event.target.value})

    return <>
        <Box>
            <Typography paddingY="20px">Spiciness scale:</Typography>
            <Slider min={1} max={10} marks valueLabelDisplay="auto" color="secondary" onChange={setSpicinessScale}/>
        </Box>
    </>
}