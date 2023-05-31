import {AppBar, Box, Toolbar} from "@mui/material";
import HexOcean from "../assets/HexOcean.png"
import {ContentLayout} from "./ContentLayout";

export const Navbar = () => {
    return (
        <>
            <AppBar
                elevation={0}
                color="default"
            >
                <Box sx={{paddingX: {lg: "35px", md: "125px"}}}>
                    <Toolbar
                        sx={{
                            height: "97px",
                            padding: "0 !important"
                        }}
                    >
                        <img
                            src={HexOcean}
                            width={190}/>
                    </Toolbar>
                </Box>
            </AppBar>
            <Toolbar
                sx={{
                    height: 97
                }}
            />
        </>
    )
}