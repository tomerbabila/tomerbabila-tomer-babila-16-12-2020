const initialState = {
  currentTab: 'list',
  options: [],
};

function antdReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TAB':
      return { ...state, currentTab: action.payload };
    case 'EDIT_OPTIONS':
      return { ...state, options: action.payload };
    default:
      return state;
  }
}

export default antdReducer;
