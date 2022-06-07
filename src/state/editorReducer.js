export const editorReducer = (state = '', action) => {
  switch (action.type) {
    case 'input': return state + action.payload;
    default: return state;
  }
} 