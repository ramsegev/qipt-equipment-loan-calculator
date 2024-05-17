import {Accordion, AccordionSummary, AccordionDetails, Typography, Paper} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
    {
        "question": "What is Qipt? Is it a lender or a bank?",
        "answer": "Qipt is a technology company and not a lender. We work with multiple equipment finance providers to maximize your chances of getting approved and at the best rate possible."
    },
    {
        "question": "What is required to apply?",
        "answer": "When you fill out the application, you will be asked to provide some basic business and personal details including name, address, business Tax ID Number (TIN/EIN), SSN, time in business, and contact information. Financial statements are not required. The application takes less than 5 minutes to fill out!"
    },
    {
        "question": "What is the application process and how long does it take to get approved?",
        "answer": "Once you fill out the application, it typically takes about 4 business hours to get an approval (or decline if you are currently not eligible for financing). Qipt will get back to you with the details of your financing, including term and monthly payment amount. You will then receive a Docusign to finalize the transaction and that’s it! We will handle the rest."
    },
    {
        "question": "Does applying hurt my credit score?",
        "answer": "Applying does not impact your credit score in most cases. Some of our storied credit lenders may do a hard credit inquiry for applicants with more challenged credit."
    },
    {
        "question": "What if I have poor credit?",
        "answer": "Our network of finance providers includes lenders who can offer financing to borrowers with challenged credit. That being said, if you have an open bankruptcy it is unlikely that you will be approved at this time."
    },
    {
        "question": "What are the financing terms and rates?",
        "answer": "The rate and monthly payment will be a function of the underlying credit of each application. Please reference the rate sheet from your sales rep for indicative monthly payments for your purchase."
    },
    {
        "question": "Who will be my lender?",
        "answer": "We work with a number of lenders to ensure that you get matched with the best fit, lowest cost capital provider in our network. Once you receive your approval, you will be notified of the specific lender that has approved your application."
    },
    {
        "question": "Do I have to finance the entire purchase?",
        "answer": "No. You can choose to make a down payment of any amount and only finance the remainder."
    },
    {
        "question": "How do I make my monthly payments? Can I pay by credit card?",
        "answer": "When you finalize your financing documents, you will be asked to provide your bank account information so that the lender can directly debit your account each month via ACH. You will be given the option to choose the day of the month that this debit is made. Some of our lenders allow for credit card payments though they may charge an additional fee for this payment method."
    },
    {
        "question": "Are there tax benefits of financing?",
        "answer": "Yes! Section 179 allows small and medium-size businesses to capture meaningful tax savings for their equipment purchase even when it’s being financed. Speak to your accountant for more details."
    }
]

const Faq = () => {
    return (
        <Paper square elevation={0} sx={{
            backgroundColor: "transparent",
            px: {md: 5},
            pt: {xs: 2, md: 9},
            pb: 0,
        }}>
            <Typography variant="h2" sx={{fontSize: "1.5rem", mb: 2, pl: 2, fontWeight: 700 }}>
                Basic FAQ for Customers:
            </Typography>
            {faqData.map((item) => (
                <Accordion key={item.question} elevation={0} sx={{
                    backgroundColor: "transparent",
                    '&.MuiPaper-root .Mui-expanded': {
                        minHeight: "10px",
                        m: 0,
                    },
                    "&::before": {bgcolor: "transparent"},

                }}>
                    <AccordionSummary
                        sx={{
                            flexDirection: 'row-reverse',
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                transform: 'rotate(90deg)',
                            },
                            fontWeight: 600,
                            backgroundColor: "transparent"
                        }}
                        expandIcon={<ExpandMoreIcon sx={{
                            transform: 'rotate(270deg)',
                        }}/>}
                        aria-controls={`panel1d-content-${item.question}`}
                        id={`panel1d-header-${item.question}`}
                    >
                        <Typography variant="p">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{pl: 5, pt:1, pb: 1, maxWidth: "560px"}}>
                        <Typography variant="p">{item.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Paper>
    );
};
export default Faq;