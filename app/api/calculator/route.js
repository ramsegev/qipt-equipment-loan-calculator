import PMT from "@/utils/pmtCalculator";

const interestRates = {
    StrongCredit: {
        terms: [
            {
                months: 36,
                rate: 0.08,
            },
            {
                months: 48,
                rate: 0.08,
            },
            {
                months: 60,
                rate: 0.08 ,
            },
        ],
    },
    AverageCredit: {
        terms: [
            {
                months: 36,
                rate: 0.14,
            },
            {
                months: 48,
                rate: 0.14,
            },
            {
                months: 60,
                rate: 0.14,
            },
        ],
    },
    WeakerCredit: {
        terms: [
            {
                months: 36,
                rate: 0.19,
            },
            {
                months: 48,
                rate: 0.19,
            },
            {
                months: 60,
                rate: 0.19,
            },
        ],
    },
};

export const GET = async (req, { params }) => {
    const loansData = {};
    const { searchParams } = new URL(req.url);
    const price = searchParams.get("price");
    try {
        for (const creditTier in interestRates) {
            for (const term of interestRates[creditTier].terms) {
                const payment = PMT(price, term.rate, term.months);
                loansData[creditTier] = loansData[creditTier] || {};
                loansData[creditTier]["months_"+term.months] = Math.round(payment);
            }
        }
        //this delay is for demonstrating the animation when using a remote server
        await new Promise(resolve => setTimeout(resolve, 2000));
        return new Response(JSON.stringify(loansData), { status : 200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", { status: 500})
    }
}