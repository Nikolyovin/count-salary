const IS_SHOW_MODAL = "IS_SHOW_MODAL"

const initialState = {
    isModal: false,
    salary: [
        {
            year: '2023',
            month: 'april',
            payments: [
                { 
                    name: 'Змея',
                    date: '04.05.2023',
                    sum: 15000,
                    id: Date.now().toString()
                },
                { 
                    name: 'Пион',
                    date: '06.05.2023',
                    sum: 5000,
                    id: Date.now().toString()
                },
                { 
                    name: 'Котик',
                    date: '10.05.2023',
                    sum: 10000,
                    id: Date.now().toString()
                },
            ]
        }
    ]
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

export const isShowModal = (isModal) => ({ type: IS_SHOW_MODAL, isModal })

export const requestTasks = () => async (dispatch) => {
    try {
        // const response = await TasksService.getTasks()
        // dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}



export default appReducer