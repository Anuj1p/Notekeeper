import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const history = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInformation"));

        if (userInfo) {
            history("/notes");
        }
    }, [history]);
    const loginHandler = () => {
        history('/login');
    }

    const signupHandler = () => {
        history('/register');
    }

    return (
        <div>
            <div>
                <div>Welcome to Note Zipper</div>
                <div>One Safe place for all your notes.</div>
            </div>
            <div>
                <Button variant="contained" onClick={loginHandler}>LOGIN</Button>
                <Button variant="outlined" onClick={signupHandler}>SIGNUP</Button>
            </div>
        </div>
    )
}

export default LandingPage
