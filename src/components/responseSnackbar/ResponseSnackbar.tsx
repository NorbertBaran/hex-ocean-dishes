import {Alert, Snackbar} from "@mui/material";

export const ResponseSnackbar = ({status, responseStatus, setResponseStatus}) => {
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