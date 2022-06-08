export const updateEditor = (input) => (dispatch) =>
  dispatch({
    type: 'input',
    payload: input,
  });

export const maxWindow = (input) => (dispatch) =>
  dispatch({
    type: 'change',
    payload: input,
  });

