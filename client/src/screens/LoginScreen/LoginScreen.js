import React, { useState } from 'react'
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import MainScreen from '../../components/MainScreen';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginScreen = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(
            "/api/users/login",
            { email, password },
            config
          );
          localStorage.setItem("userInformation", JSON.stringify(data));
          history('/notes');
          console.log(data);
    }

    return (
        <MainScreen title="LOGIN">
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl>
                        <div>Email</div>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                        />
                        <div>Password</div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                    <div>New Customer ? <Link to='/register'>SignUp</Link></div>
                </Box>
            </div>
        </MainScreen>

    )
}

export default LoginScreen
