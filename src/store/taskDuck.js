const initState ={
    loading: false,

}
const  TASK_START ='TASK_START';
const  TASK_SUCCESS ='TASK_SUCCESS';
const  TASK_ERROR ='TASK_ERROR';

export default function taskReducer(state=initState, {type,payload}){
    switch (type) {
        case TASK_START:
            return {...state, loading: true}
        case TASK_SUCCESS:
            return {...state, loading: false, ...payload}
        case TASK_ERROR:
            return {...state, loading: false}
        default:
            return state;

    }
}
const taskStart = () =>({
    type: TASK_START
})
const taskSuccess = payload =>({
    type: TASK_SUCCESS,
    payload
})
const taskError  = () =>({
    type: TASK_ERROR
})
export const createTaskAction = ({taskName,description,status, duration}) => async(dispatch, getState, {axios}) =>{
    dispatch(taskStart());
    try{
        const {data:{msg}} = await axios.post('/task', {taskName, description, status, duration})
        dispatch(taskSuccess({msg: msg}))

    }catch(e){
        dispatch(taskError())
    }

}