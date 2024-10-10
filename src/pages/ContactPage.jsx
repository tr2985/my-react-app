import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';




const ContactPage = () => {
    const [contact, setContact] = useState({

        name: '',
        lastname: '',
        email: '',
        message: ''

    });


    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };


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
                <Button variant='contained' type='submit' sx={{ mt: 2 }}>Submit</Button>

            </form>

        </Container>
    );
};

export default ContactPage;