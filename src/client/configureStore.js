import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

export default function configureStore({ initialState, middleware = []}) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...[thunk].concat(...middleware)))
    )

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducers', () =>
                store.replaceReducer(require('./reducers').default)
            );
        }
    }

    return store
}