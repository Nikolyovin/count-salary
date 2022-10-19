import { AsyncStorage } from 'react-native'

const IS_SHOW_MODAL = "IS_SHOW_MODAL"
const DELETE_PAYMENT = 'DELETE_PAYMENT'
const ADD_PAYMENT = 'ADD_PAYMENT'
const SELECT_MANTH = 'SELECT_MANTH'
const SET_PAYMENTS = 'SET_PAYMENTS'
const CHOICE_CURRENT_PAYMENT = 'CHOICE_CURRENT_PAYMENT'
const UPDATE_PAYMENT = 'UPDATE_PAYMENT'
const IS_EMPTY_FIELD = 'IS_EMPTY_INPUT'

const initialState = {
    isModal: false,
    activeMonth: '',
    payments: [],
    currentPayment: {},
    isEmptyField: false,
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

        case ADD_PAYMENT: {
            const { selectedDate, name, amount } = action.payload
            return {
                ...state,
                payments: [...state.payments, { id: Date.now().toString(), date: selectedDate, name, sum: +amount }]
            }
        }

        case SELECT_MANTH:
            return {
                ...state,
                activeMonth: action.activeMonth
            }

        case SET_PAYMENTS:
            return {
                ...state,
                payments: action.payments
            }

        case CHOICE_CURRENT_PAYMENT:
            const currentPayment = action.paymentId
                ? state.payments.find(({ id }) => id == action.paymentId)
                : {}
            return {
                ...state,
                currentPayment: currentPayment
            }

        case UPDATE_PAYMENT: {
            const { selectedDate, name, amount, id } = action.payload
            return {
                ...state,
                payments: state.payments.map(payment => payment.id === id ? { ...payment, date: selectedDate, name, sum: +amount } : payment)
            }
        }

        case IS_EMPTY_FIELD:
            return {
                ...state,
                isEmptyField: action.isEmptyField
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
export const choiceCurrentPayment = (paymentId) => ({ type: CHOICE_CURRENT_PAYMENT, paymentId })
export const updatePayment = (payload) => ({ type: UPDATE_PAYMENT, payload })
export const isShowError = (isEmptyField) => ({ type: IS_EMPTY_FIELD, isEmptyField })

export const requestPayments = () => async (dispatch) => {
    try {
        const payments = await AsyncStorage.getItem('payments')
        dispatch(setPayments(JSON.parse(payments)))
    } catch (e) {
        console.log(e)
    }
}

export default appReducer