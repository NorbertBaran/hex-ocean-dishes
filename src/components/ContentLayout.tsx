import {Box, Container} from "@mui/material";

export const ContentLayout = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Box sx={{paddingX: {lg: "35px", md: "125px"}, marginY: "40px"}}>
                {children}
            </Box>
        </Container>
    )
}