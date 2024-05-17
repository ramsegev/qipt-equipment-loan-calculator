import {Inter} from "next/font/google";
//import "./globals.css";
import ThemeRegistry from "@/app/components/ThemeRegistry";
import Header from "@/app/components/Header";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Loan PaymentsSection",
    description: "Monthly payment calculator",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeRegistry options={{key: 'mui'}}>
                    <main className="app" >
                        <Header />
                        {children}
                    </main>
                </ThemeRegistry>
            </body>
        </html>
    );
}
