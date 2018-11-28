import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoSagas from './saga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
    );
const store = createStore(
    reducer,
    enhancer,
    );
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

sagaMiddleware.run(todoSagas)

export default store;