import Patologia from "../../models/Patologia";
import { ADD_PATOLOGIA, REMOVE_PATOLOGIA, CONFIRM_REMOVE_PATOLOGIA, LOAD_PATOLOGIAS } from "../actions/patologias.action";

const initialState = {
    list: [],
    selected: {},
}

const PatologiasReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PATOLOGIA:
            const newPatologia = new Patologia(
                action.payload.id,
                action.payload.patologia,
            );
            return {
                ...state,
                list: [...state.list, newPatologia]
            };
        case REMOVE_PATOLOGIA:
            return {
                ...state,
                selected: state.list.find(item => item.id === action.payload),
            };
        case CONFIRM_REMOVE_PATOLOGIA:
            return {
                ...state,
                list: action.patologias.map(item => new Patologia(
                    item.id,
                    item.patologia,
                )),
                selected: {},
            };
        case LOAD_PATOLOGIAS:
            return {
                ...state,
                list: action.patologias.map(item => new Patologia(
                    item.id,
                    item.patologia,
                ))
            };
        default:
            return state;
    }
};



export default PatologiasReducer;