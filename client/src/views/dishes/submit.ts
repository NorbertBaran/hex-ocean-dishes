import {postDish} from "../../api/api";

export const submit = (event: any, name: string, preparationTime: any, type: string,
                       pizzaValues: any, soupValues: any, sandwichValues: any,
                       setTimerRequiredInfoDisplay: (timeRequiredInfoDisplay: boolean) => void,
                       setResponse: (response: any) => void) => {
    event.preventDefault()
    //Only timer need to be checked. Another fields use MUI required field
    if(preparationTime.hours == "--"){
        setTimerRequiredInfoDisplay(true)
        setTimeout(() => setTimerRequiredInfoDisplay(false), 3000)
        return;
    }

    //Request body building after validation
    const decorateTime = (time: number) => time > 9 ? time : "0" + time
    const request: any = {
        name: name,
        preparation_time: decorateTime(preparationTime.hours) + ':' +
            decorateTime(preparationTime.minutes) + ':' +
            decorateTime(preparationTime.seconds),
        type: type,
    }
    if (type == "pizza") {
        request['no_of_slices'] = parseInt(pizzaValues.noOfSlices)
        request['diameter'] = parseFloat(pizzaValues.diameter)
    } else if (type == "soup")
        request['spiciness_scale'] = soupValues.spicinessScale
    else if (type == "sandwich")
        request['slices_of_bread'] = parseInt(sandwichValues.slicesOfBread)
    console.log(request)
    postDish(request, setResponse)
}