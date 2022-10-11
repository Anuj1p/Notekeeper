/* eslint-disable import/no-anonymous-default-export */
import { action, thunk } from 'easy-peasy';

const defaultState = {
    notesArray: [],
    userInfo: {}
};

export default {
    ...defaultState,

    updateNotesInClientStore: action((state, payload) => ({
        ...state,
        ...payload,
    })),
};