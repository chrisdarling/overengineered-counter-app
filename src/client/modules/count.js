import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
    counters: [],
}

export const getModuleState = state => state.count
export const countersSelector = state => state.count.counters

const updateCounters = createAction('UPDATE_COUNTER')

export const addCounter = createAction('ADD_COUNTER')

export const incrementCounter = (counterIndex) => (dispatch, getState) => {
    const { counters } = getModuleState(getState())
    
    const newCounters = [...counters]
    newCounters[counterIndex] = {
        count: newCounters[counterIndex].count + 1,
    }

    return dispatch(updateCounters(newCounters))
}

export const decrementCounter = (counterIndex) => (dispatch, getState) => {
    const { counters } = getModuleState(getState())
    
    const newCounters = [...counters]
    newCounters[counterIndex] = {
        count: newCounters[counterIndex].count - 1,
    }

    return dispatch(updateCounters(newCounters))
}

export const resetCounter = (counterIndex) => (dispatch, getState) => {
    const { counters } = getModuleState(getState())

    const newCounters = [...counters]
    newCounters[counterIndex] = {
        count: 0
    }

    return dispatch(updateCounters(newCounters))
}

export default handleActions({
    [addCounter]: state => ({
        ...state,
        counters: [...state.counters, { count: 0 }],
    }),

    [updateCounters]: (state, { payload }) => ({
        ...state,
        counters: payload,
    })
}, INITIAL_STATE)