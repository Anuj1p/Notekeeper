import React, { useState } from 'react'
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import MainScreen from '../../components/MainScreen';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupScreen = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState(
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [picMessage, setPicMessage] = useState(null);

    // const postDetails = (pics) => {
    //     if (
    //         pics ===
    //         "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    //     ) {
    //         return setPicMessage("Please Select an Image");
    //     }
    //     setPicMessage(null);
    //     if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpeg") {
    //         const data = new FormData();
    //         data.append("file", pics);
    //         data.append("upload_preset", "chat-app");
    //         data.append("cloud_name", "dhhv0rrwy");
    //         fetch("https://api.cloudinary.com/v1_1/dhhv0rrwy/image/upload", {
    //             method: "post",
    //             body: data
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setPic(data.url.toString());
    //                 console.log(pic);
    //             })
    //             .catch((err) => {
    //                 // console.log(err);
    //             })

    //     } else {
    //         return setPicMessage("Please Select an Image");
    //     }
    // };

    const handleSubmit = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post(
            "/api/users/",
            { name, email, password, pic },
            config
        );
        history('/notes');
        console.log(data);
    }

    return (
        <MainScreen title="REGISTER">
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
                        <div>Name</div>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <div>Email</div>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <div>Password</div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>Confirm Password</div>
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <input
                            accept="image/*"
                            // onChange={postDetails}
                            id="contained-button-file"
                            type="file"
                        />
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                    <div>Have an Account ?<Link to='/login'>Login</Link></div>
                </Box>
            </div>
        </MainScreen>
    );
}

export default SignupScreen