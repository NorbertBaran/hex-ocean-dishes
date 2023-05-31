import {Container} from "@mui/material";
import {container} from "./style";

export const ContentLayout = ({children}) => {
    return (
        <Container maxWidth="lg" sx={container}>
            {children}
        </Container>
    )
}