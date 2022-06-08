export const updateEditor = (input) => (dispatch) =>
  dispatch({
    type: 'input',
    payload: input,
  });

export const maxEditor = (input) => (dispatch) =>
  dispatch({
    type: 'max',
    payload: input,
  });

export const minEditor = (input) => (dispatch) =>
  dispatch({
    type: 'min',
    payload: input,
  });

export const maxPreview = (input) => (dispatch) =>
  dispatch({
    type: 'max',
    payload: input,
  });

export const minPreview = (input) => (dispatch) =>
  dispatch({
    type: 'min',
    payload: input,
  });

export const evenView = (input) => (dispatch) =>
  dispatch({
    type: 'even',
    payload: input,
  });
