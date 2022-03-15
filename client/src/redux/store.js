import reducers from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'


export const store = createStore(reducers, compose(applyMiddleware(thunk)))