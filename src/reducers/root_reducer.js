import { combineReducers } from 'redux';
// import { inviteReducer } from './invite_reducer';
import sessionReducer from './session';
import userReducer from './user';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
});

export default rootReducer;