import React, { useState } from 'react';
import { IconButton, Badge, Popover, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { cart, removeFromCart } = useCart();
    const total = calculateTotalPrice(cart).toLocaleString('en-US', { minimumFractionDigits: 2 });

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
        alert('Checkout successful!');
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
        </div>
    );
};

export default Cart;
