import {useState} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Navbar} from "./components/navbar/Navbar";
import {Banner} from "./components/banner/Banner";
import {ContentLayout} from "./components/contentLayout/ContentLayout";
import {Dishes} from "./views/dishes/Dishes";

function App() {
    return (
        <ThemeProvider
            theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
            >
                <Navbar/>
                <Banner first="CUSTOM" second="Dishes"/>
                <ContentLayout>
                    <Dishes/>
                </ContentLayout>
            </LocalizationProvider>
        </ThemeProvider>
    )
}

export default App
