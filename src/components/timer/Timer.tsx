import {Alert, Box, Snackbar, Typography} from "@mui/material";
import {MultiSectionDigitalClock} from "@mui/x-date-pickers";
import {clock, requiredInfo, timer} from "./style";

const TimeTypography = ({color, children}) => {
    const decorateTime = time => time > 9 ? time : "0" + time
    const decorateChild = child => child != "--" ? decorateTime(child) : '--'
    return <Typography display="inline" variant="h3" color={color}>{decorateChild(children)}</Typography>
}

export const Timer = ({label, value, setValue, requiredInfoDisplay = false}) => {
    const setValueField = event => setValue({hours: event.$H, minutes: event.$m, seconds: event.$s})

    return <>
        <Typography>{label}</Typography>
        <Box sx={timer}>
            <Box>
                <MultiSectionDigitalClock
                    autoFocus={false}
                    ampm={false}
                    views={['hours', 'minutes', 'seconds']}
                    timeSteps={{hours: 1, minutes: 1, seconds: 1}}
                    onChange={setValueField}
                />
            </Box>
            <Typography variant="h3" sx={clock}>
                <TimeTypography color="primary">{value.hours}</TimeTypography>:
                <TimeTypography color="secondary">{value.minutes}</TimeTypography>:
                <TimeTypography>{value.seconds}</TimeTypography>
            </Typography>
        </Box>
        {requiredInfoDisplay &&
            <Alert icon={requiredInfoDisplay} sx={requiredInfo}>
                Please fill out this field.
            </Alert>}
    </>
}