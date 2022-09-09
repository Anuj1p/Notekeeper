/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen';
import axios from 'axios';

const MyNotes = () => {
    const [notes, setNotes] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem("userInformation"));
    // console.log(userInfo.token);

    const fetchNotes = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            }
          };
          const { data } = await axios.get('/api/notes/', config);
          setNotes(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
      
        fetchNotes()
     
    },[])
    
    return (
        <MainScreen title="My Notes">
            
        </MainScreen>
    )
}

export default MyNotes
