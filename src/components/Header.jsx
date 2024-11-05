import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box } from "@mui/material";
import Cart from '../components/Cart';
import { useAuth } from '../context/AuthContext';

function Header(props) {
    const { isUserLogged, logout, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            login(isAuthenticated);
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CompraExpress OnLine 
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Home
                            </Button>
                        </Link>
                        <Link to='/terms' style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                FAQs
                            </Button>
                        </Link>
                        <Link to='/contact' style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Contacto
                            </Button>
                        </Link>
                        <Link hidden={!isUserLogged} to='/panel' style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Panel Admin.
                            </Button>
                        </Link>
                        <span style={{ marginTop: 15 }}>
                            <Cart />
                        </span>
                    </Box>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            {!isUserLogged ?
                                <Link to='/panel' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Acceso Admin
                                </Link>
                                :
                                <Link onClick={handleLogout} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Cerrar Sesión
                                </Link>
                            }
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Header;
