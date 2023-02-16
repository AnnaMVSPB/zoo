import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { animalReducer } from './features/animals/animalsReducer';
import { userReducer } from './features/auth/userReducer';

const store = createStore(combineReducers({ animalState: animalReducer, userState: userReducer }));

export default store;

export type RootState = ReturnType<typeof store.getState>;
