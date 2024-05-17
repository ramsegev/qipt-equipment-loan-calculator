"use client"
import {Fab, Grid, Paper, Typography} from "@mui/material";
import PaymentsTable from "@/app/components/PaymentsTable";
import PaymentsCalculator from "@/app/components/PaymentsCalculator";
import {PaymentsProvider} from "@/app/context/PaymentsContext";

const  Calculator = () => {
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
                <Grid  xs={12} md={12}>
                    <Paper
                        elevation={0}
                        square
                        sx={{
                            backgroundColor: "primary.lighter",
                            mt: 2,
                            pt: {xs: 2, md: 6},
                            mx: {xs: 2, md: 0},
                            textAlign: "center",
                        }}>
                        <Typography variant="h2" mb={3} sx={{
                            fontSize: {xs: "1.2rem", md: "1.6rem"},
                            lineHeight: 1.5,
                            px:{xs: 6, md: "inherit"}
                        }}>
                            Approximately how much will you pay per month?
                        </Typography>
                        <PaymentsProvider>
                            <PaymentsCalculator />
                            <PaymentsTable/>
                        </PaymentsProvider>

                        <Paper square elevation={0} sx={{
                            mt: 4,
                            backgroundColor: "inherit",
                            width: "324px",
                            margin: "auto",
                            textAlign: "justify",
                            pt: 4,
                            pb: 1,
                        }}>
                            <Typography variant="p" sx={{
                                color: "#616161",
                                fontWeight: 600,
                                fontSize: ".8rem",
                                letterSpacing: "-0.9px",
                            }}>
                                {`The approved monthly payment is a function of various
                                    factors, such as a company's length of time in business, its
                                    borrowing history, and the creditworthiness of the applicant.`}
                            </Typography>
                        </Paper>
                        <Paper square elevation={0} sx={{
                            backgroundColor: "inherit",
                            textAlign: "center",
                            mx: "auto",
                            pb: {xs: 4, md: 6},
                        }}>
                            <Typography variant="p" sx={{
                                color: "#616161",
                                fontWeight: 600,
                                fontSize: ".8rem",
                                letterSpacing: "-0.7px",
                            }}>
                                Most approvals get finalized in only 2-4 business hours.
                            </Typography>
                            <Grid>
                                <Fab variant="extended" size="large"
                                     sx={{
                                         color: "#ffffff",
                                         display: {xs: "block", md: "none"},
                                         mx: "auto",
                                         mt: 3,
                                         boxShadow: "none"}}>
                                    Get prequalified now
                                </Fab>
                            </Grid>
                        </Paper>
                    </Paper>
                    <Paper square elevation={0} sx={{
                        mt: 4,
                        mx: {xs: 2, md: 0},
                        textAlign: "justify",
                    }}>
                        <Typography variant="p" sx={{
                            color: "#5A6089",
                            fontSize: ".8rem",
                            letterSpacing: "-0.8px",
                        }}
                        >
                            {`This is indicative monthly pricing, subject to eligibility check and final approval by our
                                Financing Providers. Qipt is not a lender and does not make loans, loan commitments or
                                lock-rates. Estimated payment amount does not include taxes or shipping fees. Monthly
                                payment
                                amounts and financing terms will vary based on the applicant's eligibility and credit
                                worthiness
                                and are subject to change.`}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
export default Calculator;
