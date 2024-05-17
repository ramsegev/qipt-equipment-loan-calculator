import { useCallback, useState } from "react";

export const usePriceState = () => {
    const [price, setPrice] = useState(0);

    const validateNumber = useCallback(
        (value) => {
            const isNumber = value && /^\d+$/.test(value);
            if (isNumber) {
                setPrice(Number(value));
            }else{
                setPrice(0)
            }
            return isNumber;
        },[]);

    const setURL = useCallback(() => {
        if (price) {
            const url = new URL(window.location.href);
            url.searchParams.set("price", price.toString());
            window.history.replaceState({}, "", url.toString());
        }
    }, [price]);

    return { price, setPrice, validateNumber, setURL };
};
