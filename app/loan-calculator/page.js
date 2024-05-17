import { Box, Grid } from "@mui/material";
import Faq from "@/app/components/Faq";
import React, { Suspense, lazy } from "react";

const Calculator = lazy(() => import("@/app/components/Calculator"));

const LoanCalculator = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Suspense fallback={<div>Loading Calculator...</div>}>
                            <Calculator />
                        </Suspense>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Faq />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default LoanCalculator;
