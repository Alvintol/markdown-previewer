export const updateEditor = (input) => {
  return (dispatch) => {
    dispatch({
      type: 'change',
      payload: input
    });
  };
}