"use client"
import {Fab, Grid, Typography} from "@mui/material";
import Disclaimer from "@/app/components/Disclaimer";
import CalculatorSection from "@/app/components/CalculatorSection";

const PaymentsSection = () => {
    return (
        <>
            <Grid container sx={{
                backgroundColor: "#ffffff",
                px: {md: 9},
                pt: {xs: 2, md: 9},
                pb: 2,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Grid sx={{
                    textAlign: {xs: "center", md: "inherit"},
                    mx: {xs: "auto", md: "inherit"},
                }}
                >
                    <Typography variant="h1" sx={{
                        fontSize: {xs: "1.5rem", md: "2rem"},
                        fontWeight: 700,
                        lineHeight: "40px"
                    }}
                    >
                        Monthly Payments Calculator
                    </Typography>
                    <Typography variant="subtitle" sx={{
                        fontSize: {xs: ".87rem", md: "1rem"},
                        fontWeight: 600,
                        color: "#616161",
                        lineHeight: "20px"
                    }}
                    >
                        Enter a price to see your estimated monthly payment.
                    </Typography>
                </Grid>
                <Grid>
                    <Fab variant="extended" size="large"
                         sx={{color: "#ffffff", display: {xs: "none", md: "block"}, boxShadow: "none"}}>
                        Get prequalified now
                    </Fab>
                </Grid>
                <Grid xs={12} md={12}>
                    <CalculatorSection/>
                    <Disclaimer/>
                </Grid>
            </Grid>
        </>
    );
}
export default PaymentsSection;
