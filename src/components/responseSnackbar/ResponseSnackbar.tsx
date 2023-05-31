import {Alert, Snackbar} from "@mui/material";
import {FC} from "react";

interface IResponseSnackbar {
    status: "success" | "error" | undefined
    responseStatus: "success" | "error" | undefined
    setResponseStatus: (responseStatus: "success" | "error" | undefined) => void
}

export const ResponseSnackbar: FC<IResponseSnackbar> = ({status, responseStatus, setResponseStatus}) => {
    return <>
        <Snackbar
            open={responseStatus == status}
            autoHideDuration={1500}
            onClose={() => setResponseStatus(undefined)}
            anchorOrigin={{vertical: "bottom", horizontal: "center" }}>
            <Alert onClose={() => setResponseStatus(undefined)} severity={status} sx={{ width: '100%' }}>
                Data sent successfully!
            </Alert>
        </Snackbar>
    </>
}