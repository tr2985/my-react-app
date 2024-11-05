import { getAllProducts } from '../../api/products.api';
import { useEffect, useState } from 'react';
import { Container, TableRow, Table, Avatar, TableBody, TableCell, TableHead, TableContainer, Paper, Box, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import Loader from '../../components/Loader'
import FormProduct from '../../components/FormProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { removeProduct } from '../../api/products.api';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function HomePagePanel() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [productIdToRemove, setProductIdToRemove] = useState(null);

    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    });

    const handleClickOpen = () => {
        setProduct({
            name: '',
            catalog: '',
            image: '',
            description: '',
            price: 0,
            stock: 0
        });
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchData();
    }, [reload]);

    const handleProductAdded = () => {
        setReload(!reload);
    };

    const fetchData = (param) => {
        setLoad(true);
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false);
        });
    }

    const beforeRemove = (id) => {
        setProductIdToRemove(id);
        setOpenConfirm(true);
    }

    const handleConfirmRemove = () => {
        if (productIdToRemove) {
            handleRemoveItem(productIdToRemove);
        }
        setOpenConfirm(false);
    }

    const handleCancelRemove = () => {
        setOpenConfirm(false);
        setProductIdToRemove(null);
    }

    const handleRemoveItem = (id) => {
        removeProduct(id).then((response) => {
            if (response) {
                handleClose();
                fetchData();
            }
        }).catch((error) => {
            alert("Error is:", error);
        });
    }

    const handleUpdateItem = (item) => {
        setProduct(item);
        setOpen(true);
    }

    return (
        <Container>
            <Box sx={{ paddingTop: '64px' }}>
                {/* Page content goes here */}
            </Box>
            <FormProduct product={product} handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} fetchData={fetchData}></FormProduct>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Imagen</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Catalogo</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell><Avatar alt="Product Image" src={row.image} /></TableCell>
                                <TableCell sx={{ fontWeight: '800' }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">$ {row.price}</TableCell>
                                <TableCell align="right">{row.catalog}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="inherit" aria-label='Editar' onClick={() => handleUpdateItem(row)}>
                                        <UpdateIcon />
                                    </IconButton>

                                    <IconButton color="inherit" aria-label='Eliminar' onClick={() => beforeRemove(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br />
                <br />
                <br />
            </TableContainer>

            {/* Diálogo de confirmación */}
            <Dialog 
                open={openConfirm} 
                onClose={handleCancelRemove} 
                PaperProps={{ sx: { backgroundColor: '#FFFFFF' } }} // Fondo gris
            >
                
                <DialogTitle><h3>Confirmar Eliminación </h3></DialogTitle>
                
                <DialogContent>
                <ReportProblemIcon sx={{color: '#ED1C24', fontSize:'large' }}></ReportProblemIcon> 

                    ¿Estás seguro de que deseas eliminar este producto?
                    Una vez borrado de la base de datos, no es posible recuperarlo. 
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleCancelRemove} 
                        sx={{ backgroundColor: '#1976D2', color: '#FFFFFF' }} // Botón azul con texto blanco
                    >
                        Cancelar
                    </Button>
                    <Button 
                        onClick={handleConfirmRemove} 
                        sx={{ backgroundColor: '#1976D2', color: '#FFFFFF' }} // Botón azul con texto blanco
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default HomePagePanel;
