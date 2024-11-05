import * as React from 'react';
import { Card, CardContent, CardHeader, IconButton, Typography, CardMedia, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SaleOff = () => {

    const handleOpen= () =>{

    }
    return (
        <div>
            

            <div>

                <Card
                    sx={{ maxWidth: 1300, maxHeight:250, backgroundColor: '#FEFEFF', cursor: 'pointer' }}
                    onClick={handleOpen}
                >
                    <CardHeader
                        
                        title=''
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={"https://http2.mlstatic.com/D_NQ_764070-MLA80101881382_102024-OO.jpg"}
                        alt=''
                    />
                    <CardContent>

                        <Typography>

                            <p><h4>Stock disponible: </h4></p>


                        </Typography>


                    </CardContent>
                </Card>

            </div>
        </div>

    );
}


export default SaleOff;