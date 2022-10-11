import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios'

const LoginScreen = () => {
    const history = useNavigate();

    const userInfo = useStoreState(state => state.userInfo);
    const updateUserInfo = useStoreActions(action => action.updateUserInfo);

    useEffect(() => {
        // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
        if (userInfo) {
            history("/notes");
        }
    }, [history]);
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async(e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.post('/api/users/',
            { name, email, password },
            config
        );
        updateUserInfo(data);
        // localStorage.setItem("userInformation", JSON.stringify(data));

        history('/notes');
    }

    return (
        <div>
            <div>Login Screen</div>
            <form onSubmit={submitForm}>
                <input type="type" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <br />
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
