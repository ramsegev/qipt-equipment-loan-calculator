import React from 'react';
import { Box } from "@mui/material";

const Logo = ({ path, alt = 'Logo', sx = {} }) => {
    return (
        <Box
            sx={sx}
            component="img"
            alt={alt}
            src={path}
        />
    );
};

export default Logo;
