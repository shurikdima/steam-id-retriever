import { createStore, combineReducers } from 'redux';
import profile from './profile/reducers/profile-reducer';
// import visuals from '../reducers/visuals/visuals';

const configureStore = () => {
  const store = createStore(combineReducers({
    profile,
  }));

  return store;
};

export default configureStore;
