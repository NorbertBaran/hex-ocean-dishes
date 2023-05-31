//Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/photos/HlNcigvUi4Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import {Box, Typography} from "@mui/material";
import {banner} from "./style";
import {FC} from "react";

interface IBanner {
    first: string
    second: string
}

export const Banner: FC<IBanner> = ({first, second}) => {
    return (
        <Box sx={banner}>
            <Typography variant="h4" fontWeight="700" color="primary.contrastText">{first}</Typography>
            <Typography variant="h1" fontWeight="700" color="primary.contrastText">{second}</Typography>
        </Box>
    )
}