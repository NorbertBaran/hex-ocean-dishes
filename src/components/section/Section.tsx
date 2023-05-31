import {Box, Typography, useTheme} from "@mui/material";
import {header, section} from "./style";

export const Section = ({label}) => {
    return (
        <Box sx={section}>
            <Typography variant="h4" sx={header}>
                {label}
            </Typography>
        </Box>
    )
}