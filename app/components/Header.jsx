import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";

const pages = ['Lease-to-Own'];

const Header = () => {
    return (
        <AppBar position="static" color="white" elevation={0}>
            <Toolbar>
                <Logo path="/embellisha-logo.png" alt="embellisha logo" sx={{ borderRight: "1px solid rgba(53, 122, 248, .1)", mr: "24px", pr: "24px" }} />
                <Nav pages={pages} my={0} />
                <Logo path="/qiptLogo.png" alt="qiptLogo" />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
