import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
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
      const updatedIngredientAdd = {
        [action.ingredientType]: state.ingredients[action.ingredientType] + 1,
      };
      const updatedIngredientsAdd = updateObject(
        state.ingredients,
        updatedIngredientAdd
      );
      const updatedStateAdd = {
        totalPrice:
          state.totalPrice + INGREDIENTS_PRICES[action.ingredientType],
        ingredients: updatedIngredientsAdd,
      };
      return updateObject(state, updatedStateAdd);

    case actionTypes.REMOVE_INGREDIENT:
      const updatedIngredientRem = {
        [action.ingredientType]: state.ingredients[action.ingredientType] - 1,
      };
      const updatedIngredientsRem = updateObject(
        state.ingredients,
        updatedIngredientRem
      );
      const updatedStateRem = {
        totalPrice:
          state.totalPrice + INGREDIENTS_PRICES[action.ingredientType],
        ingredients: updatedIngredientsRem,
      };
      return updateObject(state, updatedStateRem);

    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4,
        error: false,
      });

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
