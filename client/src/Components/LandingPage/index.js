import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const LandingPage = () => {
    const history = useNavigate();
    const userInfo = useStoreState(state => state.userInfo);

    useEffect(() => {
        // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
        console.log(userInfo);
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
                <button variant="contained" onClick={loginHandler}>LOGIN</button>
                <button variant="outlined" onClick={signupHandler}>SIGNUP</button>
            </div>
        </div>
    )
}

export default LandingPage
