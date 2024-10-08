import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    CardMedia,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
function Feed(props) {
    console.log("Feed recibe esta data", props);

    return ( // Agregamos el return
        <div style={style.feed}>
            

            <Card sx={{ maxWidth: 345 }}>
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
                    alt={props.product.name} // Puedes añadir un texto alternativo
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.product.description}
                        <p><h3>${props.product.price}</h3></p>
                        <p>{props.product.catalog}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

const style = {
    feed: {}
};

export default Feed;
