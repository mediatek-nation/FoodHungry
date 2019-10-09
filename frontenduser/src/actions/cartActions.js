import { ADD_FOODS, SAVE_CART } from './types';

export const addFoods = cartData => dispatch => {
  dispatch({
    type: ADD_FOODS,
    payload: cartData
  });
};

export const saveFoods = cartData => dispatch => {
  dispatch({
    type: SAVE_CART,
    payload: cartData
  });
};
