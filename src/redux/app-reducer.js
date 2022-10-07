const IS_SHOW_MODAL = "IS_SHOW_MODAL"
const DELETE_PAYMENT = 'DELETE_PAYMENT'

const initialState = {
    isModal: false,
    payments: [
        {
            name: 'Змея',
            date: '04.05.2023',
            sum: 15000,
            id: '1'
        },
        {
            name: 'Пион',
            date: '06.05.2023',
            sum: 5000,
            id: '2'
        },
        {
            name: 'Котик',
            date: '10.05.2023',
            sum: 10000,
            id: '3'
        },
    ]
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_SHOW_MODAL:
            return {
                ...state,
                isModal: action.isModal
            }

        case DELETE_PAYMENT:
            return {
                ...state,
                payments: state.payments.filter(({id}) => id != paymentId)
            }

        default:
            return state
    }
}

export const isShowModal = (isModal) => ({ type: IS_SHOW_MODAL, isModal })
export const removePayment = (paymentId) => ({ type: DELETE_PAYMENT, paymentId })

export const requestTasks = () => async (dispatch) => {
    try {
        // const response = await TasksService.getTasks()
        // dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}



export default appReducer