import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, MenuIcon} from '@material-ui/core'


export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit">
                Exercise Database
            </Typography>
        </Toolbar>
    </AppBar>