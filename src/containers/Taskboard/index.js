import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid'


class TaskBoard extends Component {


    renderBoard(){
        let result = ""
        result = (<Grid container spacing={2}>
            <Grid item sm={4} xs={12}>                  
                Ready
            </Grid>
            <Grid item sm={4} xs={12}>
                On Going
            </Grid>
            <Grid item sm={4} xs={12}>
                Done
            </Grid>
          </Grid>)
          return result
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button}>
                  <AddIcon /> Thêm Công việc
                </Button>
                {this.renderBoard()}
            </div>
        );
    }
}
export default withStyles(styles)(TaskBoard)