import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './profile/components/Form/Form';
import profile from './profile/reducers/profile-reducer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    combineReducers({
      profile,
    }),
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(watcherSaga);
  return store;
};


export default configureStore;
