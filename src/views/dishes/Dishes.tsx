import {Box, Button, TextField} from "@mui/material";
import {Section} from "../../components/section/Section";
import {useEffect, useState} from "react";
import {form} from "./style";
import {Timer} from "../../components/timer/Timer";
import {Selector} from "../../components/selector/Selector";
import {Pizza} from "./Pizza";
import {Soup} from "./Soup";
import {Sandwich} from "./Sandwich";
import {submit} from "./submit"
import {ResponseSnackbar} from "../../components/responseSnackbar/ResponseSnackbar";

export const Dishes = () => {
    //Form values
    const [name, setName] = useState<string>("")
    const [preparationTime, setPreparationTime] = useState<{ hours: string, minutes: string, seconds: string }>({
        hours: "--",
        minutes: "--",
        seconds: "--"
    })
    const [type, setType] = useState<string>("")
    const [pizzaValues, setPizzaValues] = useState<{ noOfSlices: string, diameter: string }>({
        noOfSlices: "",
        diameter: ""
    })
    const [soupValues, setSoupValues] = useState<{ spicinessScale: number }>({spicinessScale: 1})
    const [sandwichValues, setSandwichValues] = useState<{ slicesOfBread: string }>({slicesOfBread: ""})

    //Timer requirements validation. Only timer need to be checked. Another fields use MUI required field
    const [timerRequiredInfoDisplay, setTimerRequiredInfoDisplay] = useState<boolean>(false)

    //After form summit
    const [response, setResponse] = useState<any | undefined>(undefined)
    const [responseStatus, setResponseStatus] = useState<"success" | "error" | undefined>(undefined)

    //Show status after submit but before page reload in successful case
    useEffect(() => {
        if (response != undefined && !response["error"]) {
            setResponseStatus("success")
            setTimeout(() => window.location.reload(), 1500)
        } else if (response != undefined && response["error"])
            setResponseStatus("error")
    }, [response])

    //Summit form method
    const submitForm = (event: any) => submit(event, name, preparationTime, type, pizzaValues, soupValues, sandwichValues, setTimerRequiredInfoDisplay, setResponse)

    //Layout
    return <>
        <Section label="Our Dishes"/>
        <Box component="form" onSubmit={submitForm} sx={form}>
            <TextField variant="standard" placeholder="Name" onChange={event => setName(event.target.value)} required/>
            <Timer label="Preparation time:" value={preparationTime} setValue={setPreparationTime}
                   requiredInfoDisplay={timerRequiredInfoDisplay}/>
            <Selector items={["pizza", "soup", "sandwich"]} placeholder="Type" setValue={setType}/>

            {type == "pizza" && <Pizza values={pizzaValues} setValues={setPizzaValues}/>}
            {type == "soup" && <Soup setValues={setSoupValues}/>}
            {type == "sandwich" && <Sandwich values={sandwichValues} setValues={setSandwichValues}/>}

            <Button variant="contained" type="submit" sx={{width: "100px",}}>Send</Button>

            <ResponseSnackbar status="success" responseStatus={responseStatus} setResponseStatus={setResponseStatus}/>
            <ResponseSnackbar status="error" responseStatus={responseStatus} setResponseStatus={setResponseStatus}/>
        </Box>
    </>
}