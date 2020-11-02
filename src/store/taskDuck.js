const initState ={
    loading: false,
    listTask:[],
    task:{},
    edit: false,
    msg:null

}
const  TASK_START ='TASK_START';
const  TASK_SUCCESS ='TASK_SUCCESS';
const  TASK_ERROR ='TASK_ERROR';

const TASKS_SUCCESS =' TASK_SUCCESS';
const TASKS_ERROR = 'TASKS_ERROR';

const TASK_DETAIL_SUCCESS = 'TASK_DETAIL_SUCCESS';
const TASK_DETAIL_ERROR = 'TASK_DETAIL_ERROR';

const EDIT_TASK_BTN = 'EDIT_TASK_BTN';

const EDIT_SUCCES = 'EDIT_SUCCES';
const EDIT_ERROR = 'EDIT_ERROR';

const DELETE_SUCCESS = 'DELETE_SUCCESS';
const DELETE_ERROR = 'DELETE_ERROR';


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
        case TASK_DETAIL_SUCCESS:
            return {...state, loading: false,task: {...payload}}
        case TASK_DETAIL_ERROR:
            return {...state, loading: false}
        case EDIT_TASK_BTN:
            return {...state, edit: !state.edit}
        case EDIT_SUCCES:
            return {...state, msg: payload, loading: false, edit: false}
        case DELETE_SUCCESS:
            return {...state, loading: false, msg: payload}
        case DELETE_ERROR:
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
const tasksSucces = payload =>({
    type: TASKS_SUCCESS,
    payload
})
const tasksError = payload =>({
    type: TASKS_ERROR,
    payload
})
const detailSucces = payload =>({
    type: TASK_DETAIL_SUCCESS,
    payload
})
const detailError = payload =>({
    type: TASK_DETAIL_ERROR
})
export const editBtn = () =>({
    type: EDIT_TASK_BTN
})
const editSuccess = payload =>({
    type: EDIT_SUCCES,
    payload
})
const editError = () =>({
    type: EDIT_ERROR
})
const deleteSuccess = payload =>({
    type: DELETE_SUCCESS,
    payload
})
const deleteError = payload =>({
    type: DELETE_ERROR,
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
        dispatch(tasksSucces(tasks))
    }catch(e){
        dispatch(tasksError(e))
    }
}
export const detailTaskAction = (idTask) => async (dispatch, getState, {axios} )=>{
    dispatch(taskStart())
    try{
        const {data:{task}} = await axios.get(`/task/${idTask}`)
        dispatch(detailSucces(task))
    }catch (e) {
        dispatch(detailError())
    }
}
export const editTaskAction = (objTask) => async (dispatch, getState, {axios})=>{
    dispatch(taskStart())
    const {_id}= getState().task.task;
    try{
        const {data:{msg}} = await axios.put(`/task/${_id}`, objTask)
        dispatch(editSuccess(msg))
    }catch (e) {
        dispatch(editError())
    }
}
export const deleteTaskAction = idTask => async(dispatch, getState, {axios}) =>{
    console.log(idTask);
    dispatch(taskStart())
    try {
        const {data:{msg}} = await axios.put(`/task/deleteTask/${idTask}`)
        console.log(msg)
        dispatch(deleteSuccess(msg))
    }catch (e) {
        dispatch(deleteError(e))
    }
}