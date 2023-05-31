import {Container} from "@mui/material";
import {container} from "./style";
import {FC} from "react";

interface IContentLayout {
    children: any
}

export const ContentLayout: FC<IContentLayout> = ({children}) => {
    return (
        <Container maxWidth="lg" sx={container}>
            {children}
        </Container>
    )
}