import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy';

const LoginScreen = () => {
    const history = useNavigate();

    const updateUserInfo = useStoreActions(actions => actions.updateUserInfo);
    const userInfo = useStoreState(state => state.userInfo);

    // console.log(userInfo);

    useEffect(() => {
        // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
        if (userInfo) {
            history("/notes");
        }
    }, [history]);
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async(e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.post('/api/users/login',
            { email, password },
            config
        );
        // localStorage.setItem("userInformation", JSON.stringify(data));
        updateUserInfo(data)
        history('/notes');
    }

    return (
        <div>
            <div>Login Screen</div>
            <form onSubmit={submitForm}>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginScreen
