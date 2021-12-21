import { insertPatologia, fetchPatologias, deletePatologia } from "../../db";

export const ADD_PATOLOGIA = 'ADD_PATOLOGIA';
export const REMOVE_PATOLOGIA = 'REMOVE_PATOLOGIA';
export const CONFIRM_REMOVE_PATOLOGIA = 'CONFIRM_REMOVE_PATOLOGIA';
export const LOAD_PATOLOGIAS = "LOAD_PATOLOGIAS";

export const addPatologia = (patologia) => {
    return  async dispatch => {
        try{
            const result = await insertPatologia(patologia);
            dispatch({
                type: ADD_PATOLOGIA,
                payload: {
                    id: result.insertId,
                    patologia,
                },
            });
        }catch(err) {
            console.log(err.message);
            throw err;
        }
    }
}



export const removePatologia = (id) => ({
    type: REMOVE_PATOLOGIA,
    payload: id,
})


export const confirmRemovePatologia = (id) =>  {
    return  async dispatch => {
        try{
            const result = await deletePatologia(id);
            dispatch({
                type: CONFIRM_REMOVE_PATOLOGIA,
                patologias: result.rows._array,
            });
        }catch(err) {
            console.log(err.message);
            throw err;
        }
    }
}


export const loadPatologias = () => {
    return async dispatch => {
        try {
            const result = await fetchPatologias()
            console.log(result)
            dispatch({
                type: LOAD_PATOLOGIAS,
                patologias: result.rows._array,
            })
        } catch(err) { 
            throw err;
        }
    }
}