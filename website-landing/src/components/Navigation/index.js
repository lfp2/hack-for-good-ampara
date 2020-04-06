import React from 'react';
import {
    Responsive,
} from "responsive-react";
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Typography, Toolbar, IconButton, ButtonGroup, Button } from '@material-ui/core';

function Navigation() {
    return (
        <div className="Navigation">
            <AppBar position="static">
                <Responsive displayIn={["Mobile", "Tablet"]}>
                    <MobileNavigation />
                </Responsive>
                <Responsive displayIn={["Laptop"]}>
                    <LaptopNavigation />
                </Responsive>
            </AppBar>
        </div>
    );
}

function MobileNavigation() {
    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                Ampara
            </Typography>
        </Toolbar>
    );

}

function LaptopNavigation() {
    return (
        <Toolbar>
            <Typography variant="h6">
                Ampara
            </Typography>
            <ButtonGroup variant="text" color="inherit">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Toolbar>
    );

}

export default Navigation;