import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { PhotoCamera } from '@material-ui/icons';
import { IconButton, Checkbox, FormControlLabel } from '@material-ui/core';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Box, Grid, FormControl, FormHelperText, FormLabel, RadioGroup, TextField, InputLabel,Select } from '@material-ui/core'
import 'date-fns';


class ComponentMaterialUI extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button variant="contained" color="primary" size="small">
                        Primary 
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" color="default">
                        Error
                    </Button>
                    <Button variant="outlined" color="primary">
                        Outline Button
                    </Button>
                    <Button variant="outlined" color="primary" disableElevation>
                        Disable elevation
                    </Button>
                    <label htmlFor="icon-button-file">
                        <IconButton aria-label="upload" color="primary">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
                <div>
                    <FormControlLabel
                      label="Normal Label"
                      control={
                        <Checkbox
                          value="Check"
                          checked={true}
                          color="primary"
                        />
                      }
                    />

                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                    label="Custom icon"
                    />

                </div>
                <div>
                     <FormControl component="fieldset">
                       <FormLabel component="legend">Nam</FormLabel>
                       <RadioGroup value={1}></RadioGroup>
                     </FormControl> 
                </div>
                
                <div>
                   <FormControl>
                           <InputLabel htmlFor=""></InputLabel>
                           <Select
                             native
                             value={1}>
                             <option aria-label="None" value="0" />
                             <option value={1}>One</option>
                             <option value={2}>Two</option>
                           </Select>
                    </FormControl>
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}
export default ComponentMaterialUI;