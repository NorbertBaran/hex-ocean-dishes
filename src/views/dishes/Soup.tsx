import {Box, Slider, Typography} from "@mui/material";

export const Soup = ({values, setValues}) => {
    const setSpicinessScale = event => setValues({spicinessScale: event.target.value})

    return <>
        <Box>
            <Typography paddingY="20px">Spiciness scale:</Typography>
            <Slider min={1} max={10} marks valueLabelDisplay="auto" color="secondary" onChange={setSpicinessScale}/>
        </Box>
    </>
}