import { createStore, combineReducers } from 'redux';

import PatologiasReducer from './reducers/patologias.reducer';

const RootReducer = combineReducers ({
 patologias: PatologiasReducer,
});

export default createStore(RootReducer);