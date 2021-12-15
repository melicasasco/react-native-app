import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth.reducer';
import PatologiasReducer from './reducers/patologias.reducer';

const RootReducer = combineReducers ({
 patologias: PatologiasReducer,
 auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));