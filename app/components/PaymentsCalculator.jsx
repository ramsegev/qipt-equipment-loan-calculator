import { useEffect, useState, useCallback } from "react";
import { Fab, InputAdornment, TextField } from "@mui/material";
import { useFetchPayments } from "@/app/hooks/useFetchPayments";
import { usePriceState } from "@/app/hooks/usePriceState";

const PaymentsCalculator = () => {
    const { price, validateNumber, setURL } = usePriceState();
    const fetchPayments = useFetchPayments();
    const [prevPrice, setPrevPrice] = useState(price);

    useEffect(() => {
        const searchParams = new URLSearchParams(document.location.search);
        const urlPrice = searchParams.get("price");
        validateNumber(urlPrice);
        urlPrice && fetchPayments(urlPrice).then();
    }, [validateNumber]);

    const memoizedValidateNumber = useCallback(validateNumber, []);

    const handleChange = useCallback((event) => {
        validateNumber(event.target.value);
    }, [memoizedValidateNumber]);

    const handleClick = async () => {
        if (price !== prevPrice) {
            setURL();
            setPrevPrice(price);
            try {
                await fetchPayments(price);
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        }
    };

    const handleEnterPress = (event) => {
        if (event.key === "Enter") {
            handleClick().then();
        }
    };

    return (
        <TextField
            placeholder="Expected total price"
            variant="outlined"
            value={price || ""}
            onChange={handleChange}
            onKeyDown={handleEnterPress}
            type="tel"
            sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                maxWidth: "324px",
                mb: 4,
            }}
            InputProps={{
                startAdornment: (
                    !!price && <InputAdornment position="start" sx={{ mr: 0 }}>
                        <span>$</span>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <Fab
                            variant="extended"
                            size="small"
                            sx={{
                                backgroundColor: "primary.lighter",
                                color: "primary.darker",
                                fontWeight: 600,
                                boxShadow: "none",
                            }}
                            onClick={handleClick}
                        >
                            Calculate
                        </Fab>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default PaymentsCalculator;
