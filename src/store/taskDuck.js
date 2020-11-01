const initState ={
    loading: false,
    listTask:[]

}
const  TASK_START ='TASK_START';
const  TASK_SUCCESS ='TASK_SUCCESS';
const  TASK_ERROR ='TASK_ERROR';

const TASKS_SUCCESS =' TASK_SUCCESS';
const TASKS_ERROR = 'TASKS_ERROR';


export default function taskReducer(state=initState, {type,payload}){
    switch (type) {
        case TASK_START:
            return {...state, loading: true}
        case TASK_SUCCESS:
            return {...state, loading: false, ...payload}
        case TASK_ERROR:
            return {...state, loading: false}
        case TASKS_SUCCESS:
            return { ...state, loading: false, listTask: [...payload]}
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
const tasksSucces = payload =>({
    type: TASKS_SUCCESS,
    payload
})
const tasksError = payload =>({
    type: TASKS_ERROR,
    payload
})
export const createTaskAction = ({taskName,description,status, duration}) => async(dispatch, getState, {axios}) =>{
    dispatch(taskStart());
    const {_id}= getState().user;

    try{
        const {data:{msg}} = await axios.post('/task', {taskName, description, status, duration, user:_id})
        dispatch(taskSuccess({msg: msg}))

    }catch(e){
        dispatch(taskError(e))
    }
}
export const fetchTasksAction = () => async(dispatch, getState, {axios})=>{
    const {_id}= getState().user;
    try{
        const {data:{tasks}} = await axios.get('/task',{headers: { user: _id}})
        dispatch(tasksSucces({tasks}))
    }catch(e){
        console.log(e)
        dispatch(tasksError(e))
    }
}