
const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';

const initState ={
    isLogged : false,
    loading:false,
    error: null,
}

export default function userReducer(state = initState, { type, payload }) {
    switch (type) {
        case LOGIN_START:
            return {...state, loading: true}
        case LOGIN_SUCCESS :
            return {...state, loading: false, ...payload, isLogged: true }
        case LOGIN_ERROR:
            return {...state, loading: false}
        case REGISTER_SUCCESS:
            return {...state, loading: false,...payload, isLogged: true}
        case REGISTER_ERROR:
            return {...state, loading: false, error: payload}
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
const registerSuccess = payload =>({
    type: REGISTER_SUCCESS,
    payload
})
const registerError = payload =>({
    type : REGISTER_ERROR,
    payload
})

export const loginAction = (formState) =>async (dispatch, getState, {axios}) =>{
    dispatch(loginStart())
    try{
        const {data: {objUser}} =  await  axios.post('/user/login', formState)
        dispatch(loginSuccess(objUser))
    }catch (e) {
        const { response } = e;
        const { request, ...errorObject } = response;
        const { data } = errorObject;
        dispatch(loginError())
        throw e;
    }
}
export const registerUserAction = ({userName, password}) => async(dispatch, getState, {axios})=>{
    dispatch(loginStart())
    try{
        const {data:{savedUser}} = await axios.post('/user/register', {userName, password})
        dispatch(registerSuccess(savedUser))
    
    }catch (e) {
        const { response } = e;
        const { request, ...errorObject } = response;
        const {data:{msg} } = errorObject;
        dispatch(registerError(msg))
        throw e;

    }
}