export const ADD_PATOLOGIA = 'ADD_PATOLOGIA';
export const REMOVE_PATOLOGIA = 'REMOVE_PATOLOGIA';
export const CONFIRM_REMOVE_PATOLOGIA = 'CONFIRM_REMOVE_PATOLOGIA';

export const addPatologia = (patologia) => ({
    type: ADD_PATOLOGIA,
    payload: patologia,
})


export const removePatologia = (id) => ({
    type: REMOVE_PATOLOGIA,
    payload: id,
})


export const confirmRemovePatologia = () => ({
    type: CONFIRM_REMOVE_PATOLOGIA,
})