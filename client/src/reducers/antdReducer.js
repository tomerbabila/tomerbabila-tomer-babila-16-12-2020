const initialState = {
    currentTab: 'list'
  };
  
  function antdReducer(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TAB':
        return { ...state, currentTab: action.payload };
      default:
        return state;
    }
  }
  
  export default antdReducer;
  