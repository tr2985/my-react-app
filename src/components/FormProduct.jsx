import { useEffect, useState } from 'react';
import { TextField, Box, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createProduct, updateProduct } from '../api/products.api';

function FormProduct(props) {

    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    });

    useEffect(() => {
        setProduct(props.product || {
            name: '',
            catalog: '',
            image: '',
            description: '',
            price: 0,
            stock: 0
        });
    }, [props.product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (product._id !== undefined) {
            updateProduct(product._id, product).then((response) => {
                if (response.data) {
                    props.handleClose();
                    props.fetchData();
                }
            }).catch((error) => {
                alert(error);
                props.handleClose();
            });
        } else {
            createProduct(product).then((response) => {
                if (response.data) {
                    props.handleClose();
                    props.fetchData();
                }
            }).catch((error) => {
                alert(error);
                props.handleClose();
            });
        }
    };

    // Determina el color de fondo basado en si es un producto nuevo o edición
    const dialogBackgroundColor = product._id ? '#b3e5fc' : '#dcedc8'; // Celeste si es edición, verde claro si es nuevo

    return (
        <Box>
            <Button variant="outlined" onClick={props.handleClickOpen}>
                Nuevo Producto
            </Button>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                PaperProps={{
                    sx: { backgroundColor: dialogBackgroundColor } // Aplica el color de fondo a todo el diálogo
                }}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle>
                        {product._id ? "Editar Producto" : "Crear Nuevo Producto"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Nombre"
                            margin="normal"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Descripción"
                            margin="normal"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Imagen URL"
                            margin="normal"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Precio"
                            margin="normal"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                            type="number"
                        />
                        <TextField
                            fullWidth
                            label="Stock"
                            margin="normal"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            type="number"
                        />
                        <TextField
                            fullWidth
                            label="Catálogo"
                            margin="normal"
                            name="catalog"
                            value={product.catalog}
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose} sx={{ backgroundColor: '#1976D2', color: '#FFFFFF' }}>Cancelar</Button>
                        <Button type="submit" autoFocus sx={{ backgroundColor: '#1976D2', color: '#FFFFFF' }}>
                            Guardar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
}

export default FormProduct;
