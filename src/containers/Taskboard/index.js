import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import Button from '@material-ui/core/Button';

class TaskBoard extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <h1>ReactJS</h1>
                <h2>AngularJS</h2>

                

            </div>
        );
    }
}
export default withStyles(styles)(TaskBoard)