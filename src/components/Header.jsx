import React from 'react';
import { Link } from "react-router-dom";

import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box } from "@mui/material";
import Cart from '../components/Cart';

function Header(props) {
    return (
        <div>
            <AppBar position="fixed">
                
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ferreteria OnLine FULLSTACK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Home
                            </Button>
                        </Link>
                        <Link to='/terms'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                FAQs
                            </Button>
                        </Link>
                        <Link to='/contact'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Contacto
                            </Button>
                        </Link>
                        
                       <Cart></Cart>

                        <span style={{ marginTop: 15 }}>
                            
                        </span>
                    </Box>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            <Link to='/panel'>
                                Acceso Admin
                            </Link>
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
}

export default Header;