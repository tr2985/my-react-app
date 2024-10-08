import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../api/products.api';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Feed from '../components/Feed';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../components/Loader';

function HomePage() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        searchTerm ? fetchData(searchTerm) : fetchData('');
    };

    const fetchData = (param) => {
        setLoad(true);
        getAllProducts(param)
            .then((response) => {
                setProducts(response.data);
                setLoad(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoad(false);
            });
    };

    return (
        <Container>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={9} sm={10}>
                    <TextField
                        fullWidth
                        placeholder='Escriba su búsqueda...'
                        
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            style: {
                                height: 40, // Altura de 30px para el input
                                padding: '0 14px', // Ajuste de padding
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={3} sm={2}>
                    <Button
                        fullWidth
                        onClick={handleFilter}
                        variant="outlined"
                        startIcon={<SearchIcon />}
                        style={{ height: 40 }}  // Para que el botón ocupe la misma altura
                    >
                        Buscar
                    </Button>
                </Grid>
                
            </Grid>
            <br></br>

            {load && (
                <div style={{ marginTop: 16 }}>
                    <Loader />
                </div>
            )}

            <Grid container spacing={2} style={{ marginTop: load ? 16 : 0 }}>
                {products.length > 0 ? (
                    products.map((product, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                            <Feed product={product} />
                        </Grid>
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </Grid>

            <Divider style={{ marginBottom: 100 }} />
        </Container>
    );
}

export default HomePage;
