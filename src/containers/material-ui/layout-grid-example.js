import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core'

class LayoutGrid extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        primary.main
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="secondary.main" p={2} >
                        Secondary Main
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="error.main" p={2} >
                        Error Main
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default LayoutGrid;