import {Box, Typography, useTheme} from "@mui/material";
import sectionImg from "../assets/section.png"

export const Section = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                height: "84px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                left: 0,
                right: 0,
                '&::after': {
                    content: "' '",
                    position: "absolute",
                    display: "block",
                    borderTop: `2px dotted ${theme.palette.text.disabled}`,
                    height: 20,
                    background: `url(${sectionImg}) bottom right no-repeat`,
                    backgroundSize: "contain",
                    left: 0,
                    right: 0,
                    top: 42,
                    zIndex: 1
                }
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    position: "absolute",
                    fontSize: "28px",
                    background: "#fff",
                    paddingRight: "36px",
                    zIndex: 2
                }}
            >
                Our Dishes
            </Typography>
        </Box>
    )
}