import { ADD_PATOLOGIA, REMOVE_PATOLOGIA, CONFIRM_REMOVE_PATOLOGIA } from "../actions/patologias.action";

const initialState = {
    list: [],
    selected: {},
}

const PatologiasReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PATOLOGIA:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case REMOVE_PATOLOGIA:
            return {
                ...state,
                selected: state.list.find(item => item.id === action.payload),
            };
        case CONFIRM_REMOVE_PATOLOGIA:
            return {
                ...state,
                selected: {},
                list: state.list.filter(item => item.id !== state.selected.id)
            }
        default:
            return state;
    }
};



export default PatologiasReducer;