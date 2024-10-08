import React from 'react';
import { Paper } from "@mui/material";
import Social from './Social'

function Footer(props) {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            position: 'fixed',
            bottom: 0,
            padding: 2,
            width: '100%',
            textAlign:'center'
        }} square variant="outlined">
           <Social></Social>
        </Paper>
    );
}

export default Footer;