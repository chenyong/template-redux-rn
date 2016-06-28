
import {combineReducers} from 'redux';

function demo(state, action) {
  if (state == undefined) {
    return {};
  }
  return state;
}

export default combineReducers({
  demo,
})
