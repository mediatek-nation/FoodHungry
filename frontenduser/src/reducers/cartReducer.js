import { ADD_FOODS, SAVE_CART } from '../actions/types';

const initialState = {
  open: false,
  foods: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FOODS:
      return {
        ...state,
        open: true,
        foods: state.foods.concat(action.payload.foods)
      };
    case SAVE_CART:
      return {
        open: false,
        foods: action.payload.foods
      };
    default:
      return state;
  }
}
