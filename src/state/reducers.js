import { combineReducers } from 'redux';

const editorReducer = (state = '', action) => {
  switch (action.type) {
    case 'input':
      return action.payload;
    default:
      return state;
  }
};

const windowSizeReducer = (state = 'EVEN', action) => {
  switch (action.type) {
    case 'change':
      return action.payload;
    default:
      return state;
  }
};


const reducers = combineReducers({
  editor: editorReducer,
  windowSize: windowSizeReducer
});

export default reducers;