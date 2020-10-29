const initState ={
    isLoged : false,
    loading:false,
}

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';


export default function userReducer (state=initState, {type,payload}){
    switch (type) {
        default:
            return state;
    }
}

const loginStart = () =>({
    type: LOGIN_START
})
const loginSuccess = () =>({
    type: LOGIN_SUCCESS
})
const loginError = () =>({
    type: LOGIN_ERROR
})

const loginAction = ({user,password}) => async(dispatch, useState, {axios}) =>{
    dispatch(loginStart())
    try{
        const {resultado}= axios.put('/login', {user,password})
        dispatch(loginSuccess())
    }catch(e){
        dispatch(loginError())
    }
}