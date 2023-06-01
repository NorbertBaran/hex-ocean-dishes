import {Box, Typography} from "@mui/material";
import {header, section} from "./style";
import {FC} from "react";

interface ISection {
    label: string
}

export const Section: FC<ISection> = ({label}) => {
    return (
        <Box sx={section}>
            <Typography variant="h4" sx={header}>
                {label}
            </Typography>
        </Box>
    )
}