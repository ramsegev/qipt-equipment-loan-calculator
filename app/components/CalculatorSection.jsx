import {Fab, Grid, Paper, Typography} from "@mui/material";
import PaymentsCalculator from "@/app/components/PaymentsCalculator";
import PaymentsTable from "@/app/components/PaymentsTable";
import {PaymentsProvider} from "@/app/context/PaymentsContext";

const CalculatorSection = () => {
    return (
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
    );
};

export default CalculatorSection;
