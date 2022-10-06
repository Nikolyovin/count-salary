const IS_SHOW_MODAL = "IS_SHOW_MODAL"

const initialState = {
    isModal: false,
}

const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case IS_SHOW_MODAL:
            return {
                ...state,
                isModal: action.isModal
            }
        
        default:
            return state
    }
}

export const isShowModal = (isModal) => ({ type: SET_TASKS, isModal })

export const requestTasks = () => async (dispatch) => {
    try {
        // const response = await TasksService.getTasks()
        // dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}



export default appReducer