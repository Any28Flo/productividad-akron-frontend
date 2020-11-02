const initState ={
    loading: false,
    listTask:[],
    task:{},
    edit: false

}
const  TASK_START ='TASK_START';
const  TASK_SUCCESS ='TASK_SUCCESS';
const  TASK_ERROR ='TASK_ERROR';

const TASKS_SUCCESS =' TASK_SUCCESS';
const TASKS_ERROR = 'TASKS_ERROR';

const TASK_DETAIL_SUCCESS = 'TASK_DETAIL_SUCCESS';
const TASK_DETAIL_ERROR = 'TASK_DETAIL_ERROR';

const EDIT_TASK_BTN = 'EDIT_TASK_BTN';

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