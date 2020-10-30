
const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';


const initState ={
    isLoged : false,
    loading:false,
    message: null,
}

export default function userReducer(state = initState, { type, payload }) {
    switch (type) {
        case LOGIN_START:
            return {...state, loading: true}
        case LOGIN_SUCCESS :
            return {...state, loading: false, ...payload, isLoged: true }
        case LOGIN_ERROR:
            return {...state, loading: false}
        default:
            return state;
    }
}

const loginStart = () =>({
    type: LOGIN_START
})
const loginSuccess = (payload) =>({
    type: LOGIN_SUCCESS,
    payload
})
const loginError = () =>({
    type: LOGIN_ERROR
})

export const loginAction = ({userName,password}) =>async (dispatch, getState, {axios}) =>{
    dispatch(loginStart())
    try{
        const {data: {msg, savedUser}} =  await  axios.post('/user/register', {userName,password})
         dispatch(loginSuccess(savedUser))
    }catch (e) {
        dispatch(loginError())
        throw e;
    }

}