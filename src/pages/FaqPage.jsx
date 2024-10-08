import React from 'react';
import { Container, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqPage() {
    return (
        <Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}>¿Cómo busco un producto?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el botón BUSCAR que está a la derecha.
                        Puedes ingresar por el nombre del producto, por su descripción o la categoría.......
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Cómo selecciono el producto que deseo comprar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el botón BUSCAR que está a la derecha.
                        Puedes ingresar por el nombre del producto, por su descripción o la categoría.......
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Dónde veo los productos seleccionados?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el botón BUSCAR que está a la derecha.
                        Puedes ingresar por el nombre del producto, por su descripción o la categoría.......
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>Titulo 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>Titulo 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}

export default FaqPage;