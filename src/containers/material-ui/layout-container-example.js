import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Typography } from '@material-ui/core';

class LayoutContainer extends Component {
    render() {
        return (
            [
                <Container maxWidth="md" key={1}>
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh' }} />
                </Container>,
                <Container fixed>
                    <Typography component="div" style={{ backgroundColor: '#ccffff', height: '20vh' }} />
                </Container>
            ]
        );
    }
}

export default LayoutContainer;