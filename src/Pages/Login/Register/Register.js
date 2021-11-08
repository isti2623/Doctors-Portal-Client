import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your pasword didnot match');
            return
        }

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item style={{ marginTop: '250px' }} sx={{ mt: '8' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '1', m: '1' }}
                            id="standard-basic"
                            label="your email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '1', m: '1' }}
                            id="standard-basic"
                            label="ReType password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button type='submit' style={{ marginTop: '15px' }} sx={{ width: '1', m: '1' }} variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/login'><Button type='submit' style={{ marginTop: '15px' }} sx={{ width: '1', m: '1' }} variant="text">Already Register ? Please Login</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;