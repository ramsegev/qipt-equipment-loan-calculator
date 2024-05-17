import React from 'react';
import {Container, Grid, Paper, Typography} from '@mui/material';
import Nav from "@/app/components/Nav";

const Content = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} style={{ padding: 16 }}>
                        <Typography variant="h6" color="primary">Content Area</Typography>
                        {/* Add your content here */}
                        Left
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} style={{ padding: 16 }}>
                        <Typography variant="h6">Content Area</Typography>
                        {/* Add your content here */}
                        Right
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Content;