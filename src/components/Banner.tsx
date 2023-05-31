//Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/photos/HlNcigvUi4Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import meal from "../assets/meal.jpg"
import {Box, Typography} from "@mui/material";

export const Banner = () => {
    return (
        <Box
            sx={{
                width: "100vw",
                height: 375,
                backgroundImage: `url(${meal})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: 0.65,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography
                variant="h4"
                fontWeight="700"
                color="primary.contrastText"
            >
                CUSTOM
            </Typography>
            <Typography
                variant="h1"
                fontWeight="700"
                color="primary.contrastText"
            >
                Dishes
            </Typography>
        </Box>
    )
}