export const updateEditor = (input) => (dispatch) =>
  dispatch({
    type: 'input',
    payload: input,
  });

export const maxEditor = (input) => (dispatch) =>
  dispatch({
    type: 'editor',
    payload: input,
  });

export const maxPreview = (input) => (dispatch) =>
  dispatch({
    type: 'preview',
    payload: input,
  });

export const evenView = (input) => (dispatch) =>
  dispatch({
    type: 'even',
    payload: input,
  });
