export default function PMT(principal, interestRate, numberOfPayments) {
    // Handle potential errors
    if (principal <= 0 || interestRate <= 0 || numberOfPayments <= 0) {
        throw new Error("Invalid input: Principal, interest rate, and number of payments must be positive numbers.");
    }

    // Calculate the monthly interest rate
    const monthlyInterestRate = interestRate / 12;

    // Define the QC based on price tiers
    let qc;
    if (principal < 25000) {
        qc = 0.06;
    } else if (principal >= 25000 && principal < 50000) {
        qc = 0.04;
    } else if (principal >= 50000 && principal < 100000) {
        qc = 0.03;
    } else {
        qc = 0.02;
    }

    // Calculate the payment amount
    const payment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Apply the Quick Charge (adjust based on your calculation)
    const totalPayment = payment + (payment * qc);

    return totalPayment;
}

// Example usage
/*
const principal = 100000;
const interestRate = 0.05; // Annual interest rate (replace with monthly if needed)
const numberOfPayments = 60;

try {
    const totalPayment = PMT(principal, interestRate, numberOfPayments);
    console.log("Total payment with Quick Charge:", totalPayment.toFixed(2));
} catch (error) {
    console.error("Error:", error.message);
}*/
