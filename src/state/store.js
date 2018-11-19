import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancer = applyMiddleware(routerMiddleware(history), thunk);

const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(middlewareEnhancer),
);

export { store, history };
