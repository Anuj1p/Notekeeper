import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const history = useNavigate();
    const userInfo = useStoreState(state => state.userInfo);
    const updateUserInfo = useStoreActions(action => action.updateUserInfo);

    const onSignout = () => {
        updateUserInfo(null);
        history('/');
    }

    return (
        <div>
            <div>
                Note- Keeper
            </div>
            <div>{
                userInfo ?
                    <div onClick={onSignout}>SignOut</div>
                    : <div>SignIn</div>}</div>
        </div>

    )
}

export default Header
