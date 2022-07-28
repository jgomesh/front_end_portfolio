import { combineReducers } from 'redux';
import user from './example'

const rootReducer = combineReducers({ user });
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves 'user" e "wallet" no seu estado global
export default rootReducer;
