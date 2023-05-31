import {useState} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Navbar} from "./components/Navbar";
import {Banner} from "./components/Banner";
import {ContentLayout} from "./components/ContentLayout";
import {Form} from "./components/form/Form";
import {Footer} from "./components/Footer";

function App() {
    const [textField, setTextField] = useState("")
    return (
        <ThemeProvider
            theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
            >
                <Navbar/>
                <Banner/>
                <ContentLayout>
                    <Form/>
                </ContentLayout>
                <Footer/>
            </LocalizationProvider>
        </ThemeProvider>
    )
}

export default App
