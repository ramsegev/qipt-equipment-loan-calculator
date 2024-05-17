import { useCallback, useContext } from "react";
import { PaymentsContext } from "@/app/context/PaymentsContext";

export const useFetchPayments = () => {
    const { setPayments, setIsLoading } = useContext(PaymentsContext);

    const fetchPayments = useCallback(async (price) => {
        try {
            setIsLoading(true);
            const url = `/api/calculator?price=${encodeURIComponent(price)}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch payments: ${response.statusText}`);
            }
            const data = await response.json();
            setPayments(data);
        } catch (error) {
            console.error("Error fetching payments:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return fetchPayments;
};
