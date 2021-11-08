import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = [...loginData];
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item style={{ marginTop: '250px' }} sx={{ mt: '8' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '1', m: '1' }}
                            id="standard-basic"
                            label="your email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '1', m: '1' }}
                            id="standard-basic"
                            label="your password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button type='submit' style={{ marginTop: '15px' }} sx={{ width: '1', m: '1' }} variant="contained">Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;