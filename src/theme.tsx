import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#003973',
            contrastText: '#fff',
        },
        secondary: {
            main: "#2BB7E2"
        },
        text: {
            disabled: '#d4d4d4'
        }
    },
    typography: {
        fontFamily: `'Lato', sans-serif`,
        allVariants: {
            color: "#2f2f2f"
        },
        body1: {
            color: "#212529"
        },
        body2: {
            color: "#212529"
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: '#fff'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '1px solid #d4d4d4',
                    },
                    '&.Mui-focused': {
                        borderBottom:
                            'none',
                    },
                    '&.Mui-focused:after': {
                        borderBottom:
                            '1px solid #2BB7E2',
                    },
                    '&.MuiInput-underline:before': {
                        borderBottom:
                            '1px solid #d4d4d4',
                    },
                    '&.MuiInput-underline:after': {
                        borderBottom:
                            '1px solid #2BB7E2',
                    },
                }
            }
        }
    }
})