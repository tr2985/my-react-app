import React from 'react';
import { Card, CardContent, CardHeader, IconButton, Typography, CardMedia, Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Feed(props) {
    const { addToCart } = useCart();

    return (
        <div style={style.feed}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#FEFEFF' }}>
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
                    <p>{props.product.catalog ? props.product.catalog : 'Sin categoria'} </p>

                    <Tooltip title="Agregar al carrito" arrow>
                        <IconButton onClick={() => addToCart(props.product)} color="primary" aria-label="Agregar al carrito">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                </CardContent>
            </Card>
        </div>
    );
}

const style = {
    feed: {}
};

export default Feed;
