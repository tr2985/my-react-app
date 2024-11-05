import * as React from 'react';
import { Card, CardContent, CardHeader, IconButton, Typography, CardMedia, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const EnviosBanner = () => {

    const handleOpen= () =>{

    }
    return (
        <div>
            

            <div>

                <Card
                    sx={{ maxWidth: 1100, maxHeight:250, backgroundColor: '#FEFEFF', cursor: 'pointer' }}
                    onClick={handleOpen}
                >
                    <CardHeader
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title=''
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={"https://http2.mlstatic.com/D_NQ_NP_705655-MLA80410798409_112024-OO.webp"}
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


export default EnviosBanner;