import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles'
import TaskBoard from '../Taskboard'
import theme from '../../common/Theme'
import LayoutGrid from '../material-ui/layout-grid-example'


class index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <LayoutGrid />
            </ThemeProvider>
        );
    }
}

export default index;