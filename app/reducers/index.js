
import {combineReducers} from 'redux';

function list(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function detail(state, action) {
  if (state == undefined) {
    return 0;
  }

  return (state + 2);
}

export default combineReducers({
  list,
  detail,
});
