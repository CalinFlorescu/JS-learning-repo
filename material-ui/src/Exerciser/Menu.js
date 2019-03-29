import React from 'react'
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, withStyles } from '@material-ui/core'

class Menu extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };


    render() {
        return(
            <div>
                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                    aria-owns={this.state.open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                        style={{backgroundColor: "yellow"}}
                    >
                        Menu
                    </Button>
                    <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose}>Country</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Names</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Bars</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Pictures</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        )
    }
}

export default Menu;