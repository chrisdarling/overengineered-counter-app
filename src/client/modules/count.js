import { createAction, handleActions } from 'redux-actions';
import { DarkThemeType, LightThemeType, DEFAULT_THEME_TYPE } from '../appStyles'

const INITIAL_STATE = {
    counters: [],
    themeType: DEFAULT_THEME_TYPE,
}

export const getModuleState = state => state.count
export const countersSelector = state => state.count.counters
export const themeTypeSelector = state => state.count.themeType

const updateCounters = createAction('UPDATE_COUNTER')

export const addCounter = createAction('ADD_COUNTER')
export const toggleThemeType = createAction('TOGGLE_THEME_TYPE')

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

    [toggleThemeType]: (state, { payload }) => ({
        ...state,
        themeType: payload ? DarkThemeType : LightThemeType,
    }),

    [updateCounters]: (state, { payload }) => ({
        ...state,
        counters: payload,
    })
}, INITIAL_STATE)