const IS_SHOW_MODAL = "IS_SHOW_MODAL"
const DELETE_PAYMENT = 'DELETE_PAYMENT'
const ADD_PAYMENT = 'ADD_PAYMENT'
const IS_SHOW_SELECT = 'IS_SHOW_SELECT'
const SELECT_MANTH = 'SELECT_MANTH'

const initialState = {
    isModal: false,
    isSelect: false,
    activeMonth: '',
    payments: [
        {
            name: 'Змея на ноге плюс плёнка',
            date: '20.04.2022',
            sum: 15000,
            id: '1'
        },
        {
            name: 'Пион на руке первый сеанс',
            date: '23.04.2022',
            sum: 5000,
            id: '2'
        },
        {
            name: 'Котик  на рёбрах',
            date: '02.04.2022',
            sum: 10000,
            id: '3'
        },
        {
            name: 'надпись  на руке плюс плёнка',
            date: '02.03.2022',
            sum: 4000,
            id: '4'
        },
        {
            name: 'цветы на ноге второй сеанс',
            date: '01.03.2022',
            sum: 7000,
            id: '5'
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

        case IS_SHOW_SELECT:
            return {
                ...state,
                isSelect: action.isSelect
            }

        case DELETE_PAYMENT:
            return {
                ...state,
                payments: state.payments.filter(({ id }) => id != action.paymentId)
            }

        case ADD_PAYMENT:
            const { selectedDate, name, amount } = action.payload
            return {
                ...state,
                payments: [...state.payments, { id: Date.now().toString(), date: selectedDate, name, sum: amount }]
            }

        case SELECT_MANTH:
            console.warn(action);
            return {
                ...state,
                activeMonth: action.activeMonth
            }

        default:
            return state
    }
}

export const isShowModal = (isModal) => ({ type: IS_SHOW_MODAL, isModal })
export const isShowSelect = (isSelect) => ({ type: IS_SHOW_SELECT, isSelect })
export const removePayment = (paymentId) => ({ type: DELETE_PAYMENT, paymentId })
export const addPayment = (payload) => ({ type: ADD_PAYMENT, payload })
export const choiceActiveMonth = (activeMonth) => ({ type: SELECT_MANTH, activeMonth })

export const requestTasks = () => async (dispatch) => {
    try {
        // const response = await TasksService.getTasks()
        // dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}

export default appReducer