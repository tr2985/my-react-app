import React, { useState } from 'react';
import { Card, CardContent, CardHeader, IconButton, Typography, CardMedia, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../context/CartContext';

function Feed(props) {
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={style.feed}>
            <Card 
                sx={{ maxWidth: 345, backgroundColor: '#FEFEFF', cursor: 'pointer' }} 
                onClick={handleOpen}
            >
                <CardHeader
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.product.name}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.product.image ? props.product.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhTCQQW5u1r1Oa6SX2-jiAhD18sUPRhw58A&s"}
                    alt={props.product.name}
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.product.description}
                    </Typography>
                    <p><h4>Stock disponible: {props.product.stock}</h4></p>
                    <p>
                        <h3>
                            ${props.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </h3>
                    </p>
                    <p>{props.product.catalog ? props.product.catalog : 'Sin categoria'}</p>

                    <Tooltip title="Agregar al carrito" arrow>
                        <IconButton onClick={(e) => {
                            e.stopPropagation();
                            addToCart(props.product);
                        }} color="primary" aria-label="Agregar al carrito">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                </CardContent>
            </Card>

            {/* Modal */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{props.product.name}</DialogTitle>
                <DialogContent>
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.product.image ? props.product.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhTCQQW5u1r1Oa6SX2-jiAhD18sUPRhw58A&s"}
                        alt={props.product.name}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
                        {props.product.description}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Stock disponible: {props.product.stock}
                    </Typography>
                    <Typography variant="h5" sx={{ marginTop: 2 }}>
                        ${props.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Typography>
                    <Typography variant="body2">
                        {props.product.catalog ? props.product.catalog : 'Sin categoria'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" sx={{ backgroundColor: '#1976D2', color: '#FFFFFF' }}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const style = {
    feed: {}
};

export default Feed;
