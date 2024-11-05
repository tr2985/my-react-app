import React from 'react';
import { Container, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

function FaqPage() {
    return (
        <Container>
            <Box sx={{ paddingTop: '64px' }}> {/* ajuste de fin de pagina para que se vea el primer acordeon */}
                {/* contenido vacio */}
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}><h3>¿Cómo busco un producto?</h3></Typography>
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
                    <Typography sx={{ color: '#1578A2' }}><h3>¿Cómo selecciono el producto que deseo comprar? </h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Para seleccionar el producto que deseas compra has clic en el carrito con un signo “+” que está en la esquina inferior izquierda de cada imagen descriptiva.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}><h3>¿Dónde veo los productos seleccionados?</h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        En la parte superior de la pagina veras el carrito con un circulito de color violeta, donde podras su contenido y el valor total de tu compra.
                        Ten en cuenta que el carrito de compras solo te muestra la cantidad productos diferentes que tu compras.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}><h3>¿Cómo confirmo mi pedido? </h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Cuando este seguro de que los productos seleccionados, son de tu agrado, solo tienes que apretar el botón de “Checkout”. Nosotros recibiremos tu pedido
                        y lo despacharemos en el dia o al dia siguiente si el pedido se hace despues de las 16.00 horas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}><h3>¿Como borro un item del carrito de compras? </h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Si te arrepientes y quieres borrar un ítem del carrito de compras, solo tienes que hacer clic en el tachito rojo que aparece junto al producto que quieres eliminar
                         y automáticamente se borrará. Te en cuenta que cuando eliminas un ítems, se eliminan todos los ítems del mismo tipo. Por ejemplo se tienes 10 unidades de un producto, se borran las 10 unidades.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box sx={{ paddingBottom: '64px' }}> {/* ajuste de fin de pagina para que se vea el ultimo acordeon */}
                {/* contenido vacio */}
            </Box>

        </Container>
    );
}

export default FaqPage;