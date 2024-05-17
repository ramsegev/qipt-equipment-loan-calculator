import {createTheme} from "@mui/material/styles";
import {Roboto} from 'next/font/google';
import localFont from 'next/font/local'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
const ProximaNova = localFont({
    src: [
        {
            path: 'fonts/proxima-nove/ProximaNovaRegular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: 'fonts/proxima-nove/Proxima-Nova-Semibold.woff',
            weight: '600',
            style: 'bold',
        },
        {
            path: 'fonts/proxima-nove/Proxima-Nova-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: 'fonts/proxima-nove/Proxima-Nova-Semibold.woff2',
            weight: '600',
            style: 'bold',
        },
        {
            path: 'fonts/proxima-nove/Proxima_Nova_Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: 'fonts/proxima-nove/Proxima_Nova_Semibold.otf',
            weight: '600',
            style: 'bold',
        },
        {
            path: 'fonts/proxima-nove/Proxima_Nova_Bold.otf',
            weight: '700',
            style: 'bolder',
        },
    ],

})

const colors = {
    darker: "#5D25A9",
    dark: "#7843BF",
    main: "#9F6AE5",
    light: "#B78AF2",
    lighter: "#F5EAFF",
    white: "#FFFFFF"
}
const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                ...colors
            },
            white: {
                main: colors.white,
            },
        },
        typography: {
            h1: {
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "0.05rem",
                color: "#000000",

            },
            h2: {
                fontWeight: 700,
                lineHeight: "40px",
                color: "#000000",

            },
            subtitle: {
                fontWeight: 600,
                color: "#616161",
                lineHeight: "20px",
            },
            p: {
                color: "#000000",
            },
            button: {
                textTransform: "none",
            },
            fontFamily: ProximaNova.style.fontFamily,
        },
        components: {
            /*MuiToolbar: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#B78AF2"
                    }
                }
            },*/
            /*MuiGrid: {
                styleOverrides: {
                    container: {
                        width: "100vw",
                        minHeight: "100vh",
                        backgroundColor: "#FAFAFA"
                    }
                }
            },*/
            MuiFab: {
                styleOverrides: {
                    root: {
                        backgroundColor: colors.main,
                        "&:hover": {
                            backgroundColor: colors.light
                        },
                    },

                }
            },
        },
    })
;

export default theme;