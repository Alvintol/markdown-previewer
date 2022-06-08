import { combineReducers } from 'redux';

const editorReducer = (state = '', action) => {
  switch (action.type) {
    case 'input':
      return state + action.payload;
    default:
      return state;
  }
};

const previewReducer = (state = '', action) => {
  switch (action.type) {
    case 'preview':
      return state + action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  editor: editorReducer,
  preview: previewReducer,
});

export default reducers;