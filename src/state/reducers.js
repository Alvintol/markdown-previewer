import { combineReducers } from 'redux';

const editorReducer = (state = '', action) => {
  switch (action.type) {
    case 'input':
      return action.payload;
    default:
      return state;
  }
};

const windowSizeReducer = (state = 'even', action) => {
  switch (action.type) {
    case 'editor':
      return state + action.payload;
    case 'preview':
      return state + action.payload;
    default:
      return state;
  }
};



const reducers = combineReducers({
  editor: editorReducer,
  windowSize: windowSizeReducer
});

export default reducers;