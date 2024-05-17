import {Grid, keyframes, Paper} from "@mui/material";
import styled from "@emotion/styled";
import {useContext, useEffect, useState} from "react";
import {PaymentsContext} from "@/app/context/PaymentsContext";
import useAnimationVisibility from "@/app/hooks/useAnimationVisibility";


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    visibility: hidden
  }
  /* Start invisible */
  to {
    opacity: 1;
    visibility: visible
  }`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    visibility: visible
  }
  to {
    opacity: 0;
    visibility: hidden
  }`;
const StyledCell = styled(Paper)(({}) => ({
    width: "calc(20% - 2px)",
    boxSizing: "border-box",
    height: "50px",
    alignContent: "center",
    margin: '1px',
    color: "#000000",
    fontSize: ".8rem",

}));
const StyledColumnHeader = styled(Paper)(({}) => ({
    width: "20%",
    height: "30px",
    alignContent: "center",
    color: "white",
    fontSize: ".8rem",
}));
const StyledRowHeader = styled(Paper)(({}) => ({
    width: "40%",
    height: "50px",
    alignContent: "center",
    color: "white",
    fontSize: ".8rem",
}));
const TableAnimation = styled(Paper)(({}) => ({
    position: "absolute",
    display: "flex",
    visibility: "hidden",
    bottom: "1px",
    right: "1px",
    width: "190px",
    height: "140px",
    backgroundColor: "#ffffff", // Use backgroundColor instead of bgcolor
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "16px",
    fontSize: ".9rem",
    fontWeight: 600,
    opacity: 0,
    animation:  `${fadeOutAnimation} 3s ease`

}));

const PaymentsTable = () => {
    const {payments, isLoading} = useContext(PaymentsContext);
    const formatter = new Intl.NumberFormat('en-US');

    const isAnimationVisible = useAnimationVisibility(isLoading);
    /*   const [isAnimationVisible, setIsAnimationVisible] = useState(false); // Track animation visibility

       useEffect(() => {
           if (isLoading) {
               setIsAnimationVisible(true); // Show animation when loading starts
               const timeoutId = setTimeout(() => setIsAnimationVisible(false), 5000); // Hide animation after 2 seconds
               return () => clearTimeout(timeoutId); // Cleanup on unmount
           } else {
               setIsAnimationVisible(false); // Hide animation when loading ends
           }
       }, [isLoading]);*/
    return (
        <Grid container sx={{maxWidth: "324px", margin: "auto", position: "relative"}}>
            <Grid container item>
                <Paper sx={{width: "40%", visibility: "hidden"}}/>
                <StyledColumnHeader elevation={0} sx={{backgroundColor: "primary.light"}}>36 mo</StyledColumnHeader>
                <StyledColumnHeader elevation={0} sx={{backgroundColor: "primary.main"}}>48 mo</StyledColumnHeader>
                <StyledColumnHeader elevation={0} sx={{
                    backgroundColor: "primary.dark",
                    position: "relative",
                    borderRadius: "4px 4px 0 4px",
                    "&::after": {
                        content: "''",
                        position: "absolute",
                        width: "10%",
                        height: "10%",
                        right: "-10px",
                        bottom: "-10px",
                        border: "10px solid #0000",
                        borderBottom: "0",
                        mask:
                            "10px 10px, radial-gradient(100% 100% at 100% 0, #0000 98%, #000) 100% 100% / 10px 10px,linear-gradient(#000 0 0) padding-box",
                        maskRepeat: "no-repeat",
                        bgcolor: "primary.light",
                        transform: "rotate(180deg)"
                    }
                }}>60 mo</StyledColumnHeader>
            </Grid>
            <Grid container item>
                <StyledRowHeader sx={{
                    backgroundColor: "primary.light",
                    position: "relative",
                    borderRadius: "4px 0 4px 4px",
                    "&::after": {
                        content: "''",
                        position: "absolute",
                        width: "10%",
                        height: "10%",
                        right: "-15px",
                        top: "-4px",
                        border: "10px solid #0000",
                        borderBottom: "0",
                        mask:
                            "10px 10px, radial-gradient(100% 100% at 100% 0, #0000 98%, #000) 100% 100% / 10px 10px,linear-gradient(#000 0 0) padding-box",
                        maskRepeat: "no-repeat",
                        backgroundColor: "primary.light",
                        transform: "rotate(90deg)"
                    }
                }}>Strong Credit</StyledRowHeader>
                <StyledCell
                    elevation={0}>{payments?.StrongCredit?.months_36 && "$" + formatter.format(payments?.StrongCredit?.months_36) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.StrongCredit?.months_48 && "$" + formatter.format(payments?.StrongCredit?.months_48) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.StrongCredit?.months_60 && "$" + formatter.format(payments?.StrongCredit?.months_60) || "-"}</StyledCell>
            </Grid>
            <Grid container item>
                <StyledRowHeader sx={{
                    bgcolor: "primary.main",
                    borderRight: 'none',
                }}>Average Credit</StyledRowHeader>
                <StyledCell
                    elevation={0}>{payments?.AverageCredit?.months_36 && "$" + formatter.format(payments?.AverageCredit?.months_36) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.AverageCredit?.months_48 && "$" + formatter.format(payments?.AverageCredit?.months_48) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.AverageCredit?.months_60 && "$" + formatter.format(payments?.AverageCredit?.months_60) || "-"}</StyledCell>
            </Grid>
            <Grid container item>
                <StyledRowHeader sx={{
                    backgroundColor: "primary.dark",
                    borderRight: 'none',
                    position: "relative",
                    borderRadius: "4px 4px 0 4px",
                    "&::after": {
                        content: "''",
                        position: "absolute",
                        width: "10%",
                        height: "10%",
                        right: "-10px",
                        bottom: "-1px",
                        border: "10px solid #0000",
                        borderBottom: "0",
                        mask:
                            "10px 10px, radial-gradient(100% 100% at 100% 0, #0000 98%, #000) 100% 100% / 10px 10px,linear-gradient(#000 0 0) padding-box",
                        maskRepeat: "no-repeat",
                        backgroundColor: "primary.dark"
                    }
                }}>Weaker Credit</StyledRowHeader>
                <StyledCell
                    elevation={0}>{payments?.WeakerCredit?.months_36 && "$" + formatter.format(payments?.WeakerCredit?.months_36) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.WeakerCredit?.months_48 && "$" + formatter.format(payments?.WeakerCredit?.months_48) || "-"}</StyledCell>
                <StyledCell
                    elevation={0}>{payments?.WeakerCredit?.months_60 && "$" + formatter.format(payments?.WeakerCredit?.months_60) || "-"}</StyledCell>
            </Grid>
            { isAnimationVisible && <TableAnimation >Payments starting from</TableAnimation>}
        </Grid>
    );
}
export default PaymentsTable;