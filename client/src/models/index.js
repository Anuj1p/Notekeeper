import { reducer } from 'easy-peasy';

import notes from './notes';

const model ={
    notes: reducer(notes)
};

export default model;