const initialState = {
  currency: 0,
  usingCurrency: {
    sign: 'USD',
    value: 1,
  },
  time: 10000,
};

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENCY':
      return { ...state, currency: action.payload };
    case 'CHANGE_USING_CURRENCY':
      return { ...state, usingCurrency: action.payload };
    case 'CHANGE_TIME':
      return { ...state, time: action.payload };
    default:
      return state;
  }
}

export default currencyReducer;
