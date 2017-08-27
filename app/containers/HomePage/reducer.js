import { fromJS, List } from 'immutable';
import { LOAD_PONY_SUCCESS } from './constants';

const initialState = fromJS({
  pony: List([]),
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PONY_SUCCESS:
      return state.set('pony', fromJS(action.list));
    default:
      return state;
  }
}

export default formReducer;
