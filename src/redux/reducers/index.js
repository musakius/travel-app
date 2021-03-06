const initialState = {
  test: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {...state, test: action.payload};
    default:
      return state;
  }
};

export default reducer;
