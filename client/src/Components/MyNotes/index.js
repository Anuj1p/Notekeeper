import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import axios from 'axios'

const MyNotes = () => {
  const history = useNavigate();
  const userInfo = useStoreState(state => state.userInfo);
  const notesArray = useStoreState(state => state.notesArray);
  const setNotesArray = useStoreActions(action => action.setNotesArray);

  const fetchNotes = async () => {
    try {
      // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        }
      };

      const { data } = await axios.get('/api/notes/', config);
      setNotesArray(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
    if (!userInfo) {
      history("/login");
    }
  }, [history]);

  useEffect(() => {
    fetchNotes()
  }, [history])


  const createNew = () => {
    history('/newNote')
  }

  const editNote = (note) => {
    history(`/editNote/${note}`)
  }

  const onDeleteNote = async (note) => {
    if (window.confirm("Are you sure?")) {
      try {
        // const userInfo = JSON.parse(localStorage.getItem("userInformation"));
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          }
        };

        const { data } = await axios.delete(`/api/notes/${note}`, config);
        const array = [...notesArray];
        const newData = array.filter(item => item._id !== note);
        setNotesArray(newData)
        history('/notes')
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <div>
      <div onClick={createNew}>Create New Note</div>
      {
        notesArray.map(note => {
          return (
            <>
              <div key={note._id}>
                <div>{note.title}</div>
                <div>{note.content}</div>
                <div>{note.category}</div>
                <hr />
                <button onClick={() => editNote(note._id)}>Edit</button>
                <button onClick={() => onDeleteNote(note._id)}>Delete</button>
              </div>
              <br />
            </>
          )
        })
      }
    </div>
  )
}

export default MyNotes
