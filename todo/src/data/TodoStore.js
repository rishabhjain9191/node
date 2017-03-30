import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }
  
  getInitialState() {
    return Immitable.OrderedMap();
  }

  reduce(state, action) {
    switch(action.type) {
      case TodoActionTypes.ADD_TODO:
        // Do nothing
        return state;
      default:
        return state;
    }
  }
}

export default new TodoStore();
