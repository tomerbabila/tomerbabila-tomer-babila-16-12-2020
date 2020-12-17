const initialState = {
  currency: 0,
  usingCurrency: {
    sign: 'USD',
    value: 1,
  },
};

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENCY':
      return { ...state, currency: action.payload };
    case 'CHANGE_USING_CURRENCY':
      return { ...state, usingCurrency: action.payload };
    default:
      return state;
  }
}

export default currencyReducer;
