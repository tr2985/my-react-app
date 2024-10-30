import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import Box from '@mui/material/Box';
import emailjs from 'emailjs-com';



const ContactPage = () => {
    const [contact, setContact] = useState({

        name: '',
        lastname: '',
        email: '',
        message: ''

    });

    const [open, setOpen] = useState(false);
    const handlecliose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        // primer parametro : service ID de emailjs
        // segundo parametro: el template creado en la pagina de emailjs
        //tercer parametro el fomrulario
        // cuarto parametro es la public key de la pagina emailjs
        emailjs.sendForm(
            'service_wo55b5n',
            'First_temp_01',
            e.target,
            'ICKPvkrL10QpJ2Qvd').then((result) => {

                if (result.text === 'OK') {
                    setOpen(true);
                    setContact({

                        name: '',
                        lastname: '',
                        email: '',
                        message: ''

                    });
                }


            }, (error) => {
                console.log(error.text);

            });

        e.preventDefault()

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };


    const handleClose = () => {
        setOpen(false);
    }

    return (

        <Container sx={{ marginTop: '20px' }}>
            <Box sx={{ paddingTop: '64px' }}> {/* Adjust this value if the height of the AppBar changes */}
                {/* Page content goes here */}
            </Box>

            <h4>Complete su información y envíe su consulta</h4>
            <form onSubmit={handleSubmit}>

                <TextField
                    value={contact.name}
                    fullWidth
                    label="Nombre"
                    margin=" normal"
                    name="name"
                    onChange={handleChange}
                    required


                ></TextField>

                <TextField
                    value={contact.lastname}
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Apellido"
                    margin=" normal"
                    name="lastname"
                    onChange={handleChange}
                    required

                ></TextField>

                <TextField
                    value={contact.email}
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Email"
                    margin=" normal"
                    name="email"
                    onChange={handleChange}
                    required

                ></TextField>
                <TextField

                    fullWidth
                    value={contact.message}
                    sx={{ mt: 2 }}
                    label="Mensaje"
                    margin=" normal"
                    name="message"
                    onChange={handleChange}
                    multiline
                    rows={5}


                ></TextField>
                <Button variant='contained' type='submit' sx={{ mt: 2 }}>Enviar</Button>

                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} variant="filled" severity='success' sx={{ width: '100%' }}>
                        Su mensaje ha sido enviado con exito!

                    </Alert>

                </Snackbar>

            </form>

        </Container>
    );
};

export default ContactPage;