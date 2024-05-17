import React, {lazy, Suspense} from 'react';
import {Box} from "@mui/material";


//const LazyLogo = lazy(() => import('./Logo.svg')); // Replace with your logo path

const Logo = ({ path, alt = 'Logo', sx={}}) => {
    return (
        /*<Suspense fallback={<div>Loading Logo...</div>}>
            <LogoImage src={path || LazyLogo} alt="Your Logo" />
        </Suspense>*/
        <Box
            sx={sx}
            component="img"
            alt={alt}
            src={path}
        />
    );
};

export default Logo;