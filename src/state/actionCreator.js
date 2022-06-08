export const updateEditor = (input) => {
  return (dispatch) => {
    dispatch({
      type: 'input',
      payload: input
    });
  };
};
