import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@mui/material";
import {
    Security,
    Info
} from "@mui/icons-material/";

const Footer = () => 
    <>
        <AppBar position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2022</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;