import {Alert, Box, Button, FormControl, MenuItem, Select, Slider, TextField, Typography} from "@mui/material";
import {Section} from "../Section";
import {useState} from "react";
import {MultiSectionDigitalClock} from "@mui/x-date-pickers";
import {form} from "./style";

export const Form = () => {
    const [name, setName] = useState("")
    const [preparationTime, setPreparationTime] = useState({hours: 0, minutes: 0, seconds: 0})
    const [type, setType] = useState("")
    const [noOfSlices, setNoOfSlices] = useState("")
    const [diameter, setDiameter] = useState("")
    const [spicinessScale, setSpicinessScale] = useState(3)
    const [slicesOfBread, setSlicesOfBread] = useState("")
    const [response, setResponse] = useState({})

    const postDish = async (dish) =>{
        const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/"
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dish)
        }).then(response => {
            if(response.status == 200)
                return response.json()
            else if(response.status == 400)
                return {error: "Bad request"}
            else if(response.status == 404)
                return {error: "Not found"}
            else if(response.status == 500)
                return {error: "Internal server error"}
        }).then(data => {
            setResponse(data)
            if(!('error' in data))
                window.location.reload()
        })
    }

    const decorateTime = (time) => {
        if(time < 10)
            return "0" + time
        return time
    }

    const submit = (event) => {
        event.preventDefault()
        console.log("Submit")
        return;
        const request = {
            name: name,
            preparation_time: decorateTime(preparationTime.hours) +':'+
                decorateTime(preparationTime.minutes) + ':' +
                decorateTime(preparationTime.seconds),
            type: type,
        }
        if(type == "pizza"){
            request['no_of_slices'] = parseInt(noOfSlices)
            request['diameter'] = parseFloat(diameter)
        } else if(type == "soup")
            request['spiciness_scale'] = spicinessScale
        else if(type == "sandwich")
            request['slices_of_bread'] = parseInt(slicesOfBread)
        console.log(request)
        postDish(request)
    }

    return (
        <>
            <Section/>
            <Box id="form" key="form" component="form" onSubmit={submit} sx={form}>
                <TextField id="name" key="name" variant="standard" placeholder="Name"
                    onChange={event => {
                        event.preventDefault()
                        setName(event.target.value)
                    }}
                    required
                />
                <Typography>Preparation time:</Typography>
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap={{xs: 4, sm: 12}}
                >
                    <Box>
                        <MultiSectionDigitalClock
                            autoFocus={false}
                            key="preparation_time"
                            ampm={false}
                            views={['hours', 'minutes', 'seconds']}
                            timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
                            onChange={event => {
                                setPreparationTime({
                                    hours: event.$H,
                                    minutes: event.$m,
                                    seconds: event.$s
                                })
                            }}
                        />
                    </Box>
                    <Typography variant="h3">
                        <Typography display="inline" variant="h3" color="primary">{decorateTime(preparationTime.hours)}</Typography>:
                        <Typography display="inline" variant="h3" color="secondary">{decorateTime(preparationTime.minutes)}</Typography>:{
                        decorateTime(preparationTime.seconds)
                    }
                    </Typography>
                </Box>
                <FormControl
                    variant="standard"
                    id="type_form"
                    key="type_form"
                >
                    <Select
                        id="type"
                        displayEmpty
                        defaultValue=""
                        renderValue={(selected) => {
                            if (!selected)
                                return <Typography color="text.disabled">Type</Typography>
                            return selected
                        }}
                        onChange={event => {setType(event.target.value)}}
                        required
                    >
                        <MenuItem disabled key="placeholder" value="">
                            <em>Type</em>
                        </MenuItem>
                        <MenuItem key="pizza" value="pizza">Pizza</MenuItem>
                        <MenuItem key="soup" value="soup">Soup</MenuItem>
                        <MenuItem key="sandwich" value="sandwich">Sandwich</MenuItem>
                    </Select>
                </FormControl>
                {type == "pizza" &&
                    <>
                        <TextField
                            id="no_of_slices"
                            key="no_of_slices"
                            placeholder="No. of slices"
                            variant="standard"
                            value={noOfSlices}
                            onChange={event => {
                                event.preventDefault()
                                const newString = event.target.value
                                if(noOfSlices.length > newString.length){
                                    setNoOfSlices(newString)
                                    return;
                                }

                                const newChar = newString.length > 0 ? newString.slice(-1) : ''
                                if(!isNaN(parseInt(newChar)))
                                    setNoOfSlices(event.target.value)
                            }}
                            required
                        />
                        <TextField
                            id="diameter"
                            key="diameter"
                            placeholder="Diameter"
                            variant="standard"
                            value={diameter}
                            onChange={event => {
                                event.preventDefault()
                                const newString = event.target.value
                                if(diameter.length > newString){
                                    setDiameter(newString)
                                    return;
                                }
                                const oldString = newString.length > 0 ? newString.slice(0, -1) : ''
                                const newChar = newString.length > 0 ? newString.slice(-1) : ''

                                const isNewStringEmpty = () => newString == ''
                                const isNewCharInt = () => !isNaN(parseInt(newChar))
                                const hasOldStringDot = () => oldString.indexOf('.') != -1
                                const isNewCharDot = () => newChar == '.'

                                if(isNewStringEmpty() || (isNewCharInt()) || (!hasOldStringDot() && isNewCharDot()))
                                    setDiameter(event.target.value)

                                const isNewStringDot = () => newString == '.'
                                const isOldStringZero = () => oldString == '0'

                                if(isNewStringDot())
                                    setDiameter("0.")
                                if((isOldStringZero()) && isNewCharInt())
                                    setDiameter("0." + newChar)
                            }}
                            required
                        />
                    </>
                }
                {type == "soup" &&
                    <Box>
                        <Typography paddingY="20px">Spiciness scale:</Typography>
                        <Slider
                            id="spiciness_scale"
                            key="spiciness_scale"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            defaultValue={3}
                            aria-label="Spiciness scale"
                            valueLabelDisplay="auto"
                            color="secondary"
                            onChange={event => setSpicinessScale(event.target.value)}
                        />
                    </Box>
                }
                {type == "sandwich" &&
                    <TextField
                        id="slices_of_bread"
                        key="slices_of_bread"
                        placeholder="Slices of bread"
                        variant="standard"
                        value={slicesOfBread}
                        onChange={event => {
                            event.preventDefault()
                            const newString = event.target.value
                            if(slicesOfBread.length > newString.length){
                                setSlicesOfBread(newString)
                                return;
                            }

                            const newChar = newString.length > 0 ? newString.slice(-1) : ''
                            if(!isNaN(parseInt(newChar)))
                                setSlicesOfBread(event.target.value)
                        }}
                        required
                    />
                }
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        width: "100px",
                    }}
                >
                    Send
                </Button>
                {response['error'] &&
                    <Alert
                        severity="error"
                    >
                        {response['error']}
                    </Alert>}
            </Box>
        </>
    )
}