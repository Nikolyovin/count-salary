import { AsyncStorage } from 'react-native'

const IS_SHOW_MODAL = "IS_SHOW_MODAL"
const DELETE_PAYMENT = 'DELETE_PAYMENT'
const ADD_PAYMENT = 'ADD_PAYMENT'
const SELECT_MANTH = 'SELECT_MANTH'
const SET_PAYMENTS = 'SET_PAYMENTS'

const initialState = {
    isModal: false,
    activeMonth: '',
    payments: []
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
                payments: state.payments.filter(({ id }) => id != action.paymentId)
            }

        case ADD_PAYMENT:
            const { selectedDate, name, amount } = action.payload
            return {
                ...state,
                payments: [...state.payments, { id: Date.now().toString(), date: selectedDate, name, sum: +amount }]
            }

        case SELECT_MANTH:
            return {
                ...state,
                activeMonth: action.activeMonth
            }

        case SET_PAYMENTS:
            console.log('action.payments', action.payments);
            return {

                ...state,
                payments: action.payments
            }

        default:
            return state
    }
}

export const setPayments = (payments) => ({ type: SET_PAYMENTS, payments })
export const isShowModal = (isModal) => ({ type: IS_SHOW_MODAL, isModal })
export const removePayment = (paymentId) => ({ type: DELETE_PAYMENT, paymentId })
export const addPayment = (payload) => ({ type: ADD_PAYMENT, payload })
export const choiceActiveMonth = (activeMonth) => ({ type: SELECT_MANTH, activeMonth })

export const requestPayments = () => async (dispatch) => {
    try {
        const payments = await AsyncStorage.getItem('payments')
        dispatch(setPayments(JSON.parse(payments)))
    } catch (e) {
        console.log(e)
    }
}

export default appReducer