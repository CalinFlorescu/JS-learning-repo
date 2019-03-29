import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, MenuIcon, Grid} from '@material-ui/core'
import Menu from '../Exerciser/Menu'

export default props =>
    <AppBar position="static" height="20%">
        <Toolbar>
            <Grid container sm={12}>
                <Grid item sm>
                    <Typography variant="headline" color="inherit">
                        WebApp
                    </Typography>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                </Grid>
                <Grid item sm>
                    <Menu />
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>