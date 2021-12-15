import { SIGN_IN_URL } from "../../constants/database";
import { SIGN_UP } from "../actions/auth.actions";
import { SIGN_IN } from "../actions/auth.actions";


const INITIAL_STATE = {
    token: null,
    userId: null,
} ;

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
            };
        case SIGN_IN:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
            };
        default:
            return state;
    }
};

export default AuthReducer;