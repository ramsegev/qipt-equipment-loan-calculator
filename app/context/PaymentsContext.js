import React, { createContext, useState } from "react";

const PaymentsContext = createContext({
    payments: {},
    setPayments: () => {},
    isLoading: false,
    setIsLoading: () => {},
});

const PaymentsProvider = ({ children }) => {
    const [payments, setPayments] = useState({}); // Initialize payments as empty object
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        payments,
        setPayments,
        isLoading,
        setIsLoading,
    };

    return (
        <PaymentsContext.Provider value={value}>
            {children}
        </PaymentsContext.Provider>
    );
};

export { PaymentsContext, PaymentsProvider };
