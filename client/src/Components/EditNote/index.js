import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const EditNote = () => {
  const history = useNavigate();
  const params = useParams();
  const userInfo = useStoreState(state => state.userInfo);
  const notesArray = useStoreState(state => state.notesArray);
  const editNotesArray = useStoreActions(action => action.editNotesArray);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const getData = async () => {
    const { data } = await axios.get(`/api/notes/${params.id}`);
    setTitle(data.title);
    setContent(data.content);
    setCategory(data.category);
  }

  useEffect(() => {
    getData()
  }, [params.id])


  const submitForm = async (e) => {
    e.preventDefault();
    // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        }
      };

      const { data } = await axios.put(`/api/notes/${params.id}`, { title, content, category }, config);
      history('/notes')
    } catch (error) {
      console.log(error);
    }
  }

  const deleteNote = async () => {
    if (window.confirm("Are you sure?")) {
      // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          }
        };

        const { data } = await axios.delete(`/api/notes/${params.id}`, config);
        history('/notes')
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder='Content'
          value={content}
          onChange={e => setContent(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder='Category'
          value={category}
          onChange={e => setCategory(e.target.value)}
        /><br />
        <button>Submit</button>
      </form>
      <button onClick={deleteNote}>Delete</button>
    </div>
  )
}

export default EditNote
