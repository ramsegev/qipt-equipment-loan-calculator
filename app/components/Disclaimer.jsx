import { Paper, Typography } from "@mui/material";

const Disclaimer = () => {
    return (
        <Paper square elevation={0} sx={{
            mt: 4,
            mx: { xs: 2, md: 0 },
            textAlign: "justify",
        }}>
            <Typography variant="p" sx={{
                color: "#5A6089",
                fontSize: ".8rem",
                letterSpacing: "-0.8px",
            }}>
                {`This is indicative monthly pricing, subject to eligibility check and final approval by our
          Financing Providers. Qipt is not a lender and does not make loans, loan commitments or
          lock-rates. Estimated payment amount does not include taxes or shipping fees. Monthly
          payment
          amounts and financing terms will vary based on the applicant's eligibility and credit
          worthiness
          and are subject to change.`}
            </Typography>
        </Paper>
    );
};

export default Disclaimer;
