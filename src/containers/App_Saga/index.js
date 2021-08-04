import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles'
import TaskBoard from '../Taskboard'
import theme from '../../common/Theme'
import { withStyles } from '@material-ui/core'
import styles from './styles'

import LayoutGrid from '../material-ui/layout-grid-example'
import LayoutContainer from '../material-ui/layout-container-example'
import ComponentMaterialUI from '../material-ui/basic-component-ui'


  
class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <TaskBoard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);