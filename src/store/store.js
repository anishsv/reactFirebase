import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/root_reducer';

const logger = createLogger();

const store = createStore(rootReducer);

export default store;