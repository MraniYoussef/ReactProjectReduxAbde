import reducerBook from './books/reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducerBook, composeWithDevTools(applyMiddleware(thunk)));

export default store;