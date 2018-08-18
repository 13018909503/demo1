var initialState = { counter: 0, counter1: 0, lists: [], carts: [] };
var _ = require('lodash');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, { counter: state.counter + 1 });
      return { ...state, counter: state.counter + 1 };
    case 'DECREASE':
      // return { counter1: state.counter1 - 1 };
      // return Object.assign({}, state, { counter1: state.counter1 - 1 });
      return { ...state, counter1: state.counter1 - 1 };
    case 'GETLISTS':
      return { ...state, lists: action.payload };
    case 'ADDTOCART':
      var pos = _.findIndex(state.carts, function(o) {
        return o.id === action.payload.id;
      });

      if (pos !== -1) {
        state.carts[pos].quantity = state.carts[pos].quantity + 1;
        return state;
      } else {
        action.payload.quantity = 1;
        return { ...state, carts: [...state.carts, action.payload] };
      }

    default:
      return state;
  }
};

export default reducer;
