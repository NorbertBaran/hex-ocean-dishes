export const postDish = async (body, setValue) => {
    const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.status == 200)
            return response.json()
        else if (response.status == 400)
            return {error: "Bad Request. Make sure all fields are filled"}
        else if (response.status == 404)
            return {error: "Not found"}
        else if (response.status == 500)
            return {error: "Internal server error"}
    }).then(data => {
        setValue(data)
        //console.log(data)
    })
}