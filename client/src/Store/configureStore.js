import { createStore, action, persist } from 'easy-peasy';

const defaultState = {
    notesArray: [],
    userInfo: {}
};

const store = createStore(
    persist({
        ...defaultState,

        updateUserInfo: action((state, payload) => {
            state.userInfo = payload
        }),

        setNotesArray: action((state, payload) => {
            state.notesArray = [...payload]
        }),

        addNotesArray: action((state, payload) => {
            state.notesArray = [...state.notesArray, payload]
        }),

        editNotesArray: action((state, payload) => {
            console.log(payload);
        }),

    }));

export default store;