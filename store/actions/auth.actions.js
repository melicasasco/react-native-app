import { SIGN_UP_URL, SIGN_IN_URL } from "../../constants/database";

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (email, password) => {
    return async dispatch => {
        try{
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: 'true'
                })
            });

            const data = await response.json()
            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
            });

        } catch(error){
            console.log(error.message);
        }
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        try{
            const response = await fetch(SIGN_IN_URL, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: 'true'
                })
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                const errorID = errorResponse.error.message;
          
                let message = "Unsuccessful entry";
                if (errorID === "EMAIL_NOT_FOUND")
                  message = "This email is not registered";
          
                throw new error(message);
            }
          
            const data = await response.json();
              
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId,
            });

        } catch(error){
            console.log(error.message);
        }
    }
}