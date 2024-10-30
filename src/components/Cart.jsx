import React, { useState } from 'react';
import { IconButton, Badge, Popover, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Alert, Snackbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';
import emailjs from 'emailjs-com';


const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { cart, removeFromCart, resetCart } = useCart();
    const total = calculateTotalPrice(cart).toLocaleString('en-US', { minimumFractionDigits: 2 });
    const [openAlert, setOpenAlert] = useState(false);


    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const handleCartClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setAnchorEl(null);
    };

    const handleRemoveItem = (item) => {
        removeFromCart(item);
    };

    const handleCheckout = () => {
        //alert('Checkout successful!');
        let str = "";
        cart.map((item) => {
            str += `${item.product.name}, cantidad: ${item.quantity ? item.quantity : 1}, precio unitario:$ ${item.product.price}\n `;
        });

        str += `\nTotal del carrito: $${total}\n`;

        let template = {
            to_email: 'tr2985@hotmail.com',
            subject: 'Nuevo Pedido e-commerce',
            str: str
        }

        emailjs.send(
            'service_wo55b5n',
            'email_pedido_carrito',
            template,
            'ICKPvkrL10QpJ2Qvd').then((result) => {

                if (result.text === 'OK') {
                    setOpenAlert(true);
                    resetCart();
                    handleCartClose();


                }

            }, (error) => {
                console.log(error.text);

            });

        handleCartClose();
    };

    function calculateTotalPrice(cart) {
        let total = 0;
        for (const item of cart) {
            total += item.product.price * item.quantity;
        }
        return total;
    }

    return (
        <div>
            <Badge
                badgeContent={cart.length}
                color="secondary"
                sx={{ marginTop: '20px' }}  // Agregamos margen superior al Badge
            >
                <IconButton
                    color="inherit"
                    aria-label="Shopping Cart"
                    onClick={handleCartClick}
                    sx={{ marginTop: '1px' }}  // Agregamos margen superior al IconButton
                >
                    <ShoppingCartIcon />
                </IconButton>
            </Badge>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleCartClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Mi Carrito de compras
                    </Typography>
                    {cart.length > 0 ? (
                        <>
                            <List>
                                {cart.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Product Image" src={item.product.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${item.product.name} (Cant.: ${item.quantity})`}
                                            secondary={item.product.price ? `$${item.product.price.toFixed(2)}` : ''}
                                        />
                                        <IconButton
                                            color="error"
                                            aria-label="Delete"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="h6" sx={{ textAlign: 'right' }}>
                                Total Carrito: ${total}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Typography variant="body2">Su carrito está vacío.</Typography>
                    )}
                </Paper>
            </Popover>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}  // Cambiado a handleCloseAlert
            >
                <Alert onClose={handleCloseAlert} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Su pedido ha sido enviado con éxito!
                </Alert>
            </Snackbar>



        </div>
    );
};

export default Cart;
