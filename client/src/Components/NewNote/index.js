import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const NewNote = () => {
    const history = useNavigate();

    const userInfo = useStoreState(state => state.userInfo);
    // const notesArray = useStoreState(state => state.notesArray);
    const addNotesArray = useStoreActions(action => action.addNotesArray);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                }
            };

            const { data } = await axios.post('/api/notes/create', { title, content, category }, config);
            addNotesArray(data);
            console.log(data);
            history('/notes')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} /><br />
                <input type="text" placeholder='Content' onChange={e => setContent(e.target.value)} /><br />
                <input type="text" placeholder='Category' onChange={e => setCategory(e.target.value)} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewNote
