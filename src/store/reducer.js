import * as actionTypes from './actions';

const initState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 4,
};

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      //TODO
      //action.ingredientType
      return {
        ...state,
        totalPrice:
          state.totalPrice + INGREDIENTS_PRICES[action.ingredientType],
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] + 1,
        },
      };
    case actionTypes.REMOVE_INGREDIENT:
      //TODO
      return {
        ...state,
        totalPrice:
          state.totalPrice - INGREDIENTS_PRICES[action.ingredientType],
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
