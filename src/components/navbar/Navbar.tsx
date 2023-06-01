import {AppBar, Container, Toolbar} from "@mui/material";
import HexOcean from "../../assets/HexOcean.png"
import {container, toolbar, logo} from "./style";
import {FC} from "react";

export const Navbar: FC = () => {
    return (
        <>
            <AppBar elevation={0} color="default">
                <Container maxWidth="lg" sx={container}>
                    <Toolbar sx={toolbar}>
                        <img src={HexOcean} style={logo}/>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar sx={toolbar}/>
        </>
    )
}